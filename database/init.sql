-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Mar 09, 2025 at 08:18 AM
-- Server version: 9.2.0
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `meetings`
--
CREATE DATABASE IF NOT EXISTS `meetings` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `meetings`;

-- --------------------------------------------------------

--
-- Table structure for table `developings`
--

CREATE TABLE `developings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `name` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `developings`
--

INSERT INTO `developings` (`id`, `name`, `created_at`, `updated_at`) VALUES
('36adbad3-fcbc-11ef-bc49-a672a9ad5949', 'UI Team', '2025-03-09 07:56:21', '2025-03-09 07:56:21'),
('36adc150-fcbc-11ef-bc49-a672a9ad5949', 'Mobile Team', '2025-03-09 07:56:21', '2025-03-09 07:56:21'),
('36adc97d-fcbc-11ef-bc49-a672a9ad5949', 'React Team', '2025-03-09 07:56:21', '2025-03-09 07:56:21');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `developing_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `meeting_room` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `start_time` datetime NOT NULL,
  `finish_time` datetime NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `developing_id`, `meeting_room`, `description`, `start_time`, `finish_time`, `created_at`, `updated_at`) VALUES
('7cf2c063-fcbc-11ef-bc49-a672a9ad5949', '36adbad3-fcbc-11ef-bc49-a672a9ad5949', 'Blue Room', 'improving the UI of the app', "2025-03-18 09:58:09", "2025-03-18 12:58:09", '2025-03-18 09:58:09', '2025-03-18 12:58:09');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `developings`
--
ALTER TABLE `developings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `developing_id` (`developing_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`developing_id`) REFERENCES `developings` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
