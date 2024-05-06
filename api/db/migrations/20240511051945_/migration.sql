/*
  Warnings:

  - The values [BOOK_LOUNGING] on the enum `GroupProgramType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "GroupProgramType_new" AS ENUM ('BOOK_FREE', 'BOOK_DESIGNATED', 'ENGLISH');
ALTER TABLE "GroupProgram" ALTER COLUMN "type" TYPE "GroupProgramType_new" USING ("type"::text::"GroupProgramType_new");
ALTER TYPE "GroupProgramType" RENAME TO "GroupProgramType_old";
ALTER TYPE "GroupProgramType_new" RENAME TO "GroupProgramType";
DROP TYPE "GroupProgramType_old";
COMMIT;

-- AlterTable
ALTER TABLE "UserGroupProgram" ADD COLUMN     "type" TEXT NOT NULL DEFAULT '';
