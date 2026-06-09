-- CreateEnum
CREATE TYPE "VerificationStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED');

-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'SUCCESS', 'FAILED');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('PENDING', 'ASSIGNED', 'ACCEPTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('JOB_POSTED', 'JOB_ACCEPTED', 'JOB_IN_PROGRESS', 'JOB_COMPLETED', 'JOB_CANCELED', 'PAYMENT_RECEIVED', 'REVIEW_RECEIVED');

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "name" VARCHAR(200) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(20) NOT NULL,
    "address" TEXT,
    "profile_image" TEXT NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "verificationCode" TEXT,
    "verificationExpiresAt" TIMESTAMP(3),
    "emailVerified" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "clients" (
    "userId" INTEGER NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "service_providers" (
    "provider_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "user_id" INTEGER NOT NULL,
    "document_type" TEXT NOT NULL,
    "document_no" TEXT NOT NULL,
    "document_front" TEXT NOT NULL,
    "document_back" TEXT NOT NULL,
    "photo_with_document" TEXT NOT NULL,
    "training_certificate" TEXT NOT NULL,
    "introduction_video" TEXT,
    "provider_verification_status" "VerificationStatus" NOT NULL DEFAULT 'PENDING',
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "service_providers_pkey" PRIMARY KEY ("provider_id")
);

-- CreateTable
CREATE TABLE "service_category" (
    "category_id" SERIAL NOT NULL,
    "category_name" VARCHAR(200) NOT NULL,
    "category_description" TEXT,

    CONSTRAINT "service_category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "job_requests" (
    "job_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "job_title" VARCHAR(255) NOT NULL,
    "job_description" TEXT NOT NULL,
    "job_image" TEXT,
    "location" TEXT NOT NULL,
    "cost" DECIMAL(10,2),
    "scheduled_date" TIMESTAMP(3) NOT NULL,
    "job_status" "JobStatus" NOT NULL DEFAULT 'PENDING',
    "client_id" INTEGER NOT NULL,
    "provider_id" INTEGER,
    "category_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "job_requests_pkey" PRIMARY KEY ("job_id")
);

-- CreateTable
CREATE TABLE "payment_histories" (
    "payment_id" SERIAL NOT NULL,
    "uuid" UUID NOT NULL,
    "payment_amount" DECIMAL(10,2) NOT NULL,
    "payment_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "payment_status" "PaymentStatus" NOT NULL DEFAULT 'PENDING',
    "payment_method_id" INTEGER NOT NULL,
    "transactionId" TEXT,
    "sender_id" INTEGER NOT NULL,
    "receiver_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "client_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_histories_pkey" PRIMARY KEY ("payment_id")
);

-- CreateTable
CREATE TABLE "reviews" (
    "review_id" SERIAL NOT NULL,
    "reviewer_id" INTEGER NOT NULL,
    "reviewee_id" INTEGER NOT NULL,
    "job_id" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
    "review_text" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "reviews_pkey" PRIMARY KEY ("review_id")
);

-- CreateTable
CREATE TABLE "notifications" (
    "notification_id" SERIAL NOT NULL,
    "type" "NotificationType" NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "body" TEXT NOT NULL,
    "is_read" BOOLEAN NOT NULL DEFAULT false,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "jobRequestJobId" INTEGER,

    CONSTRAINT "notifications_pkey" PRIMARY KEY ("notification_id")
);

-- CreateTable
CREATE TABLE "payment_methods" (
    "method_id" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "code" VARCHAR(50) NOT NULL,
    "description" TEXT,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "payment_methods_pkey" PRIMARY KEY ("method_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_uuid_key" ON "users"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "service_providers_uuid_key" ON "service_providers"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "service_providers_user_id_category_id_key" ON "service_providers"("user_id", "category_id");

-- CreateIndex
CREATE UNIQUE INDEX "service_category_category_name_key" ON "service_category"("category_name");

-- CreateIndex
CREATE UNIQUE INDEX "job_requests_uuid_key" ON "job_requests"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "payment_histories_uuid_key" ON "payment_histories"("uuid");

-- CreateIndex
CREATE UNIQUE INDEX "payment_histories_transactionId_key" ON "payment_histories"("transactionId");

-- CreateIndex
CREATE UNIQUE INDEX "reviews_reviewer_id_job_id_key" ON "reviews"("reviewer_id", "job_id");

-- CreateIndex
CREATE UNIQUE INDEX "payment_methods_name_key" ON "payment_methods"("name");

-- CreateIndex
CREATE UNIQUE INDEX "payment_methods_code_key" ON "payment_methods"("code");

-- AddForeignKey
ALTER TABLE "clients" ADD CONSTRAINT "clients_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_providers" ADD CONSTRAINT "service_providers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_providers" ADD CONSTRAINT "service_providers_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "service_category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_requests" ADD CONSTRAINT "job_requests_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_requests" ADD CONSTRAINT "job_requests_provider_id_fkey" FOREIGN KEY ("provider_id") REFERENCES "service_providers"("provider_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job_requests" ADD CONSTRAINT "job_requests_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "service_category"("category_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_histories" ADD CONSTRAINT "payment_histories_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods"("method_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_histories" ADD CONSTRAINT "payment_histories_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_histories" ADD CONSTRAINT "payment_histories_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_histories" ADD CONSTRAINT "payment_histories_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job_requests"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "payment_histories" ADD CONSTRAINT "payment_histories_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_reviewer_id_fkey" FOREIGN KEY ("reviewer_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_reviewee_id_fkey" FOREIGN KEY ("reviewee_id") REFERENCES "users"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reviews" ADD CONSTRAINT "reviews_job_id_fkey" FOREIGN KEY ("job_id") REFERENCES "job_requests"("job_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notifications" ADD CONSTRAINT "notifications_jobRequestJobId_fkey" FOREIGN KEY ("jobRequestJobId") REFERENCES "job_requests"("job_id") ON DELETE SET NULL ON UPDATE CASCADE;
