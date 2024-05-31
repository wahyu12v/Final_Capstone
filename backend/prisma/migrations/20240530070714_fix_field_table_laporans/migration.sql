/*
  Warnings:

  - You are about to drop the column `lokasiLaporan` on the `laporans` table. All the data in the column will be lost.
  - Added the required column `lokasiLaporanLat` to the `laporans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lokasiLaporanLng` to the `laporans` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "laporans" DROP COLUMN "lokasiLaporan",
ADD COLUMN     "kategoriSampah" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "lokasiLaporanLat" VARCHAR(100) NOT NULL,
ADD COLUMN     "lokasiLaporanLng" VARCHAR(100) NOT NULL;
