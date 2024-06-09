import express from "express";
import fileUpload from "express-fileupload";
import { requireLogin, validateData, validateImageUpload } from "../middleware/middleware.js";
import prisma from "../config/db.config.js";
import { createLaporanService, editLaporanService, findLaporanByIdService, findLaporanDbService, findLaporanMasukService, findLaporanNewsService, findLaporansService } from "./laporan.service.js";
import { laporanSchema } from "./laporan.validation.js";
import { deleteLaporan } from "./laporan.repository.js";
import { sendNotification, sendNotificationApprove, sendNotificationCompleted, sendNotificationProcess, sendNotificationReject } from "../helpers/service.helper.js";

const laporan_router = express.Router();

laporan_router.get("/", async (req, res) => {
    try {
        const laporans = await findLaporansService();
        return res.status(200).json({
            status: 200,
            message: "Success get laporans",
            data: laporans
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
});

laporan_router.get('/news', requireLogin, async (req, res) => {
    try {
        const { accessToken } = req.body;
        const page = req.query.page || 1
        const size = req.query.size || 10
        const params = {
            page: parseInt(page),
            size: parseInt(size)
        }
        const laporans = await findLaporanNewsService(params);
        if (accessToken) {
            return res.status(200).json({
                status: 200,
                message: "Success get laporans",
                token: accessToken,
                data: laporans
            });
        }
        return res.status(200).json({
            status: 200,
            message: "Success get laporans",
            data: laporans
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
})

laporan_router.get('/db', requireLogin, async (req, res) => {
    try {
        const { accessToken } = req.body;
        const laporans = await findLaporanDbService();
        if (accessToken) {
            return res.status(200).json({
                status: 200,
                message: "Success get laporans",
                token: accessToken,
                data: laporans
            });
        }
        return res.status(200).json({
            status: 200,
            message: "Success get Db laporans",
            data: laporans
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
})

laporan_router.get('/data-masuk', requireLogin, async (req, res) => {
    try {
        const { accessToken } = req.body;
        const page = req.query.page || 1
        const size = req.query.size || 10
        const params = {
            page: parseInt(page),
            size: parseInt(size)
        }
        const laporans = await findLaporanMasukService(params);
        if (accessToken) {
            return res.status(200).json({
                status: 200,
                message: "Success get laporans",
                token: accessToken,
                data: laporans
            });
        }
        return res.status(200).json({
            status: 200,
            message: "Success get laporans",
            data: laporans
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
})

laporan_router.post("/", fileUpload(), validateData(laporanSchema), validateImageUpload, async (req, res) => {
    try {
        const { emailPelapor, namaPelapor, nomorPelapor, kategoriSampah, deskripsiLaporan, lokasiLaporanLat, lokasiLaporanLng, url } = req.body;
        const gambarLaporan = url
        const checkPelapor = await prisma.pelapor.findFirst({
            where: {
                emailPelapor
            }
        })
        let pelaporId
        if (checkPelapor === null) {
            const pelapor = await prisma.pelapor.create({
                data: {
                    emailPelapor,
                    namaPelapor,
                    nomorPelapor,
                }
            })
            pelaporId = pelapor.pelaporId
        } else {
            pelaporId = checkPelapor.pelaporId
        }

        const laporan = await createLaporanService({
            pelaporId,
            gambarLaporan,
            deskripsiLaporan,
            lokasiLaporanLat,
            lokasiLaporanLng,
            kategoriSampah: parseInt(kategoriSampah)
        });

        const pelaporLaporan = await prisma.pelapor.findUnique({
            include: {
                laporans: true
            },
            where: {
                pelaporId
            }
        })

        await sendNotification({
            mailTo: pelaporLaporan.emailPelapor,
            waTo: pelaporLaporan.nomorPelapor,
            laporanId: laporan.laporanId
        })

        return res.status(200).json({
            status: 200,
            message: "Success create laporan"
        });

    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
});

laporan_router.get("/:laporanId", requireLogin, async (req, res) => {
    try {
        const { accessToken } = req.body;
        const { laporanId } = req.params;
        const laporans = await findLaporanByIdService(parseInt(laporanId));
        if (accessToken) {
            return res.status(200).json({
                status: 200,
                message: "Success get laporans",
                token: accessToken,
                data: laporans
            });
        }
        return res.status(200).json({
            status: 200,
            message: "Success get laporans",
            data: laporans
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
})

laporan_router.delete("/:laporanId", requireLogin, async (req, res) => {
    try {
        const { accessToken } = req.body;
        const { laporanId } = req.params;
        await deleteLaporan(parseInt(laporanId));
        if (accessToken) {
            return res.status(200).json({
                status: 200,
                message: "Success delete laporan",
                token: accessToken
            });
        }
        return res.status(200).json({
            status: 200,
            message: "Success delete laporan"
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
})

laporan_router.patch("/:laporanId", requireLogin, async (req, res) => {
    try {
        const { accessToken } = req.body;
        const { laporanId } = req.params;
        const { username, ...dataUpdate } = req.body;
        const laporan = await editLaporanService(
            parseInt(laporanId),
            {
                ...dataUpdate
            }
        );
        if (laporan) {
            if (dataUpdate.status && dataUpdate.status === 1) {
                await sendNotificationApprove({
                    mailTo: laporan.pelapor.emailPelapor,
                    waTo: laporan.pelapor.nomorPelapor,
                })
            } else if (dataUpdate.status && dataUpdate.status === 2) {
                await sendNotificationProcess({
                    mailTo: laporan.pelapor.emailPelapor,
                    waTo: laporan.pelapor.nomorPelapor,
                })
            } else if (dataUpdate.status && dataUpdate.status === 3) {
                await sendNotificationCompleted({
                    mailTo: laporan.pelapor.emailPelapor,
                    waTo: laporan.pelapor.nomorPelapor,
                })
            } else if (dataUpdate.status && dataUpdate.status === 4) {
                await sendNotificationReject({
                    mailTo: laporan.pelapor.emailPelapor,
                    waTo: laporan.pelapor.nomorPelapor,
                })
            }
        }

        if (accessToken) {
            return res.status(200).json({
                status: 200,
                message: "Success update laporan",
                token: accessToken,
                data: laporan
            });
        }
        return res.status(200).json({
            status: 200,
            message: "Success update laporan",
            data: laporan
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
})

export default laporan_router