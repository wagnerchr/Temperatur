/*
  Warnings:

  - You are about to alter the column `temperature` on the `City` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - Added the required column `feelsLike` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `humidity` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pressure` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uvIndex` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `visibility` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `windSpeed` to the `City` table without a default value. This is not possible if the table is not empty.
  - Made the column `temperature` on table `City` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "feelsLike" INTEGER NOT NULL,
ADD COLUMN     "humidity" INTEGER NOT NULL,
ADD COLUMN     "pressure" INTEGER NOT NULL,
ADD COLUMN     "uvIndex" INTEGER NOT NULL,
ADD COLUMN     "visibility" INTEGER NOT NULL,
ADD COLUMN     "windSpeed" INTEGER NOT NULL,
ALTER COLUMN "temperature" SET NOT NULL,
ALTER COLUMN "temperature" SET DATA TYPE INTEGER;
