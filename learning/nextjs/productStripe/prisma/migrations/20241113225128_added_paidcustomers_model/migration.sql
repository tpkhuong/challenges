-- CreateTable
CREATE TABLE "PaidCustomers" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "billingAddress" TEXT NOT NULL,
    "shippingAddress" TEXT NOT NULL,

    CONSTRAINT "PaidCustomers_pkey" PRIMARY KEY ("id")
);
