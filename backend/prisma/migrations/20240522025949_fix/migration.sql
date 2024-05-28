/*
  Warnings:

  - The primary key for the `pelapors` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `pelapoId` on the `pelapors` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "laporans" DROP CONSTRAINT "laporans_pelaporId_fkey";

-- AlterTable
ALTER TABLE "pelapors" DROP CONSTRAINT "pelapors_pkey",
DROP COLUMN "pelapoId",
ADD COLUMN     "pelaporId" SERIAL NOT NULL,
ADD CONSTRAINT "pelapors_pkey" PRIMARY KEY ("pelaporId");

-- AddForeignKey
ALTER TABLE "laporans" ADD CONSTRAINT "laporans_pelaporId_fkey" FOREIGN KEY ("pelaporId") REFERENCES "pelapors"("pelaporId") ON DELETE RESTRICT ON UPDATE CASCADE;
