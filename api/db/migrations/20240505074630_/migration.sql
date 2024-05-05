-- CreateTable
CREATE TABLE "UserSeasonGroup" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "seasonGroupId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UserSeasonGroup_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserSeasonGroup" ADD CONSTRAINT "UserSeasonGroup_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSeasonGroup" ADD CONSTRAINT "UserSeasonGroup_seasonGroupId_fkey" FOREIGN KEY ("seasonGroupId") REFERENCES "SeasonGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
