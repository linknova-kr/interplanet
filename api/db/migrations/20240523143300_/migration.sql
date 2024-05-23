/*
  Warnings:

  - A unique constraint covering the columns `[refundRequestId]` on the table `UserSeasonDepartmentGroup` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "UserSeasonDepartmentGroup" ADD COLUMN     "refundRequestId" TEXT;

-- CreateTable
CREATE TABLE "RefundRequest" (
    "id" TEXT NOT NULL,
    "bankAccountNumber" TEXT NOT NULL,
    "bankAccountHolder" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "RefundRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSeasonDepartmentGroup_refundRequestId_key" ON "UserSeasonDepartmentGroup"("refundRequestId");

-- AddForeignKey
ALTER TABLE "UserSeasonDepartmentGroup" ADD CONSTRAINT "UserSeasonDepartmentGroup_refundRequestId_fkey" FOREIGN KEY ("refundRequestId") REFERENCES "RefundRequest"("id") ON DELETE SET NULL ON UPDATE CASCADE;
