-- CreateTable
CREATE TABLE "users" (
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "token" VARCHAR(100),
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateUpdated" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("username")
);

-- CreateTable
CREATE TABLE "pelapors" (
    "pelapoId" SERIAL NOT NULL,
    "namaPelapor" VARCHAR(200) NOT NULL,
    "emailPelapor" VARCHAR(100) NOT NULL,
    "nomorPelapor" VARCHAR(100) NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pelapors_pkey" PRIMARY KEY ("pelapoId")
);

-- CreateTable
CREATE TABLE "laporans" (
    "laporanId" SERIAL NOT NULL,
    "pelaporId" INTEGER NOT NULL,
    "gambarLaporan" VARCHAR(200) NOT NULL,
    "deskripsiLaporan" TEXT NOT NULL,
    "lokasiLaporan" VARCHAR(200) NOT NULL,

    CONSTRAINT "laporans_pkey" PRIMARY KEY ("laporanId")
);

-- AddForeignKey
ALTER TABLE "laporans" ADD CONSTRAINT "laporans_pelaporId_fkey" FOREIGN KEY ("pelaporId") REFERENCES "pelapors"("pelapoId") ON DELETE RESTRICT ON UPDATE CASCADE;
