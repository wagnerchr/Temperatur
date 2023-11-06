/*
  Warnings:

  - The `temperature` column on the `City` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "City" DROP COLUMN "temperature",
ADD COLUMN     "temperature" DOUBLE PRECISION;
