-- CreateTable
CREATE TABLE "SpotEvent" (
    "id" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "hostUserId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "address" TEXT NOT NULL DEFAULT '',
    "addressSimple" TEXT NOT NULL DEFAULT '',
    "startsAt" TIMESTAMP(3) NOT NULL,
    "endsAt" TIMESTAMP(3) NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SpotEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSpotEvent" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "spotEventId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cancelledAt" TIMESTAMP(3),

    CONSTRAINT "UserSpotEvent_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SpotEvent" ADD CONSTRAINT "SpotEvent_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SpotEvent" ADD CONSTRAINT "SpotEvent_hostUserId_fkey" FOREIGN KEY ("hostUserId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSpotEvent" ADD CONSTRAINT "UserSpotEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSpotEvent" ADD CONSTRAINT "UserSpotEvent_spotEventId_fkey" FOREIGN KEY ("spotEventId") REFERENCES "SpotEvent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
