-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `passwordHash` VARCHAR(191) NULL,
    `email_verified_date` DATETIME(3) NULL,
    `email_verification_key` VARCHAR(191) NULL,
    `email_verification_resend_token` VARCHAR(191) NULL,
    `email_verification_resend_date` DATETIME(3) NULL,
    `first_name` VARCHAR(30) NOT NULL,
    `last_name` VARCHAR(30) NOT NULL,
    `is_confirmed` BOOLEAN NOT NULL DEFAULT false,
    `last_logged_in` DATETIME(3) NULL,
    `email_verify_to` DATETIME(3) NULL,
    `restore_password_to` DATETIME(3) NULL,
    `restore_password_key` VARCHAR(191) NULL,
    `roleId` INTEGER NOT NULL,
    `dob` DATETIME(3) NULL,
    `country` VARCHAR(191) NOT NULL DEFAULT '',
    `language` VARCHAR(191) NOT NULL DEFAULT '',
    `timezone` VARCHAR(191) NOT NULL DEFAULT 'UTC',
    `categories` VARCHAR(191) NULL,
    `gender` VARCHAR(191) NOT NULL DEFAULT '',
    `employment_type` VARCHAR(191) NULL,
    `job_title` VARCHAR(191) NULL,
    `company` VARCHAR(191) NULL,
    `experience` VARCHAR(191) NULL,
    `graduation_year` INTEGER NULL,
    `college` VARCHAR(191) NULL,
    `graduated_in` VARCHAR(191) NULL,
    `avatar` VARCHAR(191) NULL,
    `instructor_id` INTEGER NULL,
    `customer_id` VARCHAR(191) NULL,
    `created_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_date` DATETIME(3) NOT NULL,
    `deleted_date` DATETIME(3) NULL,
    `user_type` ENUM('Default', 'Google') NOT NULL DEFAULT 'Default',
    `ctfd_user_id` INTEGER NULL,
    `ctfd_user_token` VARCHAR(191) NULL,
    `number_of_watched_recordings` INTEGER NOT NULL DEFAULT 0,
    `is_banned` BOOLEAN NOT NULL DEFAULT false,
    `is_welcome_email_send` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_instructor_id_key`(`instructor_id`),
    UNIQUE INDEX `User_ctfd_user_id_key`(`ctfd_user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Role` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Instructor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attendee` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserPayments` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Subscription` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_instructor_id_fkey` FOREIGN KEY (`instructor_id`) REFERENCES `Instructor`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Attendee` ADD CONSTRAINT `Attendee_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `UserPayments` ADD CONSTRAINT `UserPayments_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Subscription` ADD CONSTRAINT `Subscription_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
