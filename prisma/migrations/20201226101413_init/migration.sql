-- CreateTable
CREATE TABLE "User" (
    "uid" TEXT NOT NULL,
    "user" TEXT NOT NULL,
    "pass" TEXT NOT NULL,

    PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "Post" (
    "uid" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "detail" TEXT,

    PRIMARY KEY ("uid")
);

-- CreateIndex
CREATE UNIQUE INDEX "User.user_unique" ON "User"("user");

-- AddForeignKey
ALTER TABLE "User" ADD FOREIGN KEY("uid")REFERENCES "Post"("uid") ON DELETE CASCADE ON UPDATE CASCADE;
