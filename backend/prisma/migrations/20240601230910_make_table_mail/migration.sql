-- CreateTable
CREATE TABLE "mails" (
    "mailId" SERIAL NOT NULL,
    "mailTo" VARCHAR(200) NOT NULL,
    "mailType" INTEGER NOT NULL,
    "dateCreated" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dateSended" TIMESTAMP(3),
    "mailStatus" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "mails_pkey" PRIMARY KEY ("mailId")
);
