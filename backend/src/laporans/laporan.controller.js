import express from "express";
import fileUpload from "express-fileupload";
import { requireLogin, validateData, validateImageUpload } from "../middleware/middleware.js";
import prisma from "../config/db.config.js";
import { createLaporanService, editLaporanService, findLaporansService } from "./laporan.service.js";
import { laporanSchema } from "./laporan.validation.js";
import { deleteLaporan } from "./laporan.repository.js";
import { sendMail, sendMailToAdmin } from "../helpers/service.helper.js";

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

        await sendMail({
            mailTo: pelaporLaporan.emailPelapor,
            mailType: 0,
        })

        await sendMailToAdmin({
            mailType: 1,
            laporanId: laporan.laporanId
        })

        return res.status(200).json({
            status: 200,
            message: "Success create laporan",
            data: pelaporLaporan
        });
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message
        });
    }
});

laporan_router.delete("/:laporanId", requireLogin, async (req, res) => {
    try {
        const { laporanId } = req.params;
        await deleteLaporan(parseInt(laporanId));
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
        const { laporanId } = req.params;
        const { username, ...dataUpdate } = req.body;
        const laporan = await editLaporanService(
            parseInt(laporanId),
            {
                ...dataUpdate
            }
        );
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