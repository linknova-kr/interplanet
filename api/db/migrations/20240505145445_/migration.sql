/*
  Warnings:

  - You are about to drop the column `mesaage` on the `UserGroupProgram` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserGroupProgram" DROP COLUMN "mesaage",
ADD COLUMN     "message" TEXT NOT NULL DEFAULT '';
