/*
  Warnings:

  - You are about to drop the `UserSeasonGroup` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "UserSeasonGroup" DROP CONSTRAINT "UserSeasonGroup_seasonGroupId_fkey";

-- DropForeignKey
ALTER TABLE "UserSeasonGroup" DROP CONSTRAINT "UserSeasonGroup_userId_fkey";

-- DropTable
DROP TABLE "UserSeasonGroup";

-- CreateTable
CREATE TABLE "UserSeasonDepartmentGroup" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "seasonGroupId" TEXT NOT NULL,
    "seasonDepartmentId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSeasonDepartmentGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserSeasonDepartmentGroup" ADD CONSTRAINT "UserSeasonDepartmentGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSeasonDepartmentGroup" ADD CONSTRAINT "UserSeasonDepartmentGroup_seasonGroupId_fkey" FOREIGN KEY ("seasonGroupId") REFERENCES "SeasonGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSeasonDepartmentGroup" ADD CONSTRAINT "UserSeasonDepartmentGroup_seasonDepartmentId_fkey" FOREIGN KEY ("seasonDepartmentId") REFERENCES "SeasonDepartment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
