/*
  Warnings:

  - The migration will change the primary key for the `Post` table. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_uid_fkey";

-- AlterTable
ALTER TABLE "Post" DROP CONSTRAINT "Post_pkey",
ADD COLUMN "id" SERIAL,
ADD PRIMARY KEY ("id", "uid");

-- AddForeignKey
ALTER TABLE "Post" ADD FOREIGN KEY("uid")REFERENCES "User"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
