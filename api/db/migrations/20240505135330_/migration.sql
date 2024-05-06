-- CreateEnum
CREATE TYPE "GroupProgramType" AS ENUM ('BOOK_FREE', 'BOOK_LOUNGING', 'BOOK_DESIGNATED', 'ENGLISH');

-- CreateEnum
CREATE TYPE "UserGroupProgramStatus" AS ENUM ('NOT_ATTENDED', 'ATTENDED', 'ATTENDED_LATE', 'CANCELLED');

-- CreateTable
CREATE TABLE "GroupProgram" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "type" "GroupProgramType" NOT NULL,
    "groupId" TEXT NOT NULL,
    "hostUserId" INTEGER NOT NULL,
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GroupProgram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserGroupProgram" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "groupProgramId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cancelledAt" TIMESTAMP(3),
    "status" "UserGroupProgramStatus" NOT NULL,

    CONSTRAINT "UserGroupProgram_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "GroupProgram" ADD CONSTRAINT "GroupProgram_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GroupProgram" ADD CONSTRAINT "GroupProgram_hostUserId_fkey" FOREIGN KEY ("hostUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroupProgram" ADD CONSTRAINT "UserGroupProgram_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserGroupProgram" ADD CONSTRAINT "UserGroupProgram_groupProgramId_fkey" FOREIGN KEY ("groupProgramId") REFERENCES "GroupProgram"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
