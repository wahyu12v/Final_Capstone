-- CreateTable
CREATE TABLE "whatsapps" (
    "waId" SERIAL NOT NULL,
    "waTo" VARCHAR(100) NOT NULL,
    "waType" INTEGER NOT NULL,
    "laporanId" INTEGER,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateSended" TIMESTAMP(3),
    "waStatus" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "whatsapps_pkey" PRIMARY KEY ("waId")
);
