/*
  Warnings:

  - You are about to drop the column `descripion` on the `GroupProgram` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GroupProgram" DROP COLUMN "descripion",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '';
