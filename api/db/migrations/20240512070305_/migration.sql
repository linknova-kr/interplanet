/*
  Warnings:

  - You are about to drop the `DepartmentSeason` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DepartmentSeason" DROP CONSTRAINT "DepartmentSeason_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "DepartmentSeason" DROP CONSTRAINT "DepartmentSeason_seasonId_fkey";

-- DropTable
DROP TABLE "DepartmentSeason";

-- CreateTable
CREATE TABLE "SeasonDepartment" (
    "id" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "seasonId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SeasonDepartment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SeasonDepartment" ADD CONSTRAINT "SeasonDepartment_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeasonDepartment" ADD CONSTRAINT "SeasonDepartment_seasonId_fkey" FOREIGN KEY ("seasonId") REFERENCES "Season"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
