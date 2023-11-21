/*
  Warnings:

  - You are about to drop the column `feelsLike` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `uvIndex` on the `City` table. All the data in the column will be lost.
  - You are about to drop the column `windSpeed` on the `City` table. All the data in the column will be lost.
  - Added the required column `feelslike` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uv_index` to the `City` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wind_speed` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" DROP COLUMN "feelsLike",
DROP COLUMN "uvIndex",
DROP COLUMN "windSpeed",
ADD COLUMN     "feelslike" INTEGER NOT NULL,
ADD COLUMN     "uv_index" INTEGER NOT NULL,
ADD COLUMN     "wind_speed" INTEGER NOT NULL;
