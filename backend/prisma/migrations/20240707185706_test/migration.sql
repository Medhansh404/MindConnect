-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" INTEGER[],
    "scheme" INTEGER[],

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Trips" (
    "id" SERIAL NOT NULL,
    "t_id" SERIAL NOT NULL,
    "src" TEXT NOT NULL,
    "dest" TEXT NOT NULL,
    "departureTime" TEXT NOT NULL,
    "arrivalTime" TEXT NOT NULL,
    "scheme" TEXT NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "fare" INTEGER NOT NULL,
    "adminApproval" BOOLEAN NOT NULL DEFAULT false,
    "supApproval" BOOLEAN NOT NULL DEFAULT false,
    "dirApproval" BOOLEAN NOT NULL DEFAULT false,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "Trips_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
