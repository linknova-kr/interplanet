/*
  Warnings:

  - Added the required column `status` to the `UserSeasonDepartmentGroup` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "UserSeasonDepartmentGroupStatus" AS ENUM ('APPROVAL_PENDING', 'APPROVED', 'REFUND_PENDING', 'REFUNDED');

-- AlterTable
ALTER TABLE "UserSeasonDepartmentGroup" ADD COLUMN     "refundedAt" TIMESTAMP(3),
ADD COLUMN     "status" "UserSeasonDepartmentGroupStatus" NOT NULL;
