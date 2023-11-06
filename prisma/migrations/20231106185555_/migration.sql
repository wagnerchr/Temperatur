/*
  Warnings:

  - Added the required column `temperature` to the `City` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "City" ADD COLUMN     "temperature" TEXT NOT NULL;
