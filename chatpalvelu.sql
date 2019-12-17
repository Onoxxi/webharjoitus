-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: 17.12.2019 klo 14:49
-- Palvelimen versio: 5.6.42
-- PHP Version: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatpalvelu`
--
CREATE DATABASE IF NOT EXISTS `chatpalvelu` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `chatpalvelu`;

-- --------------------------------------------------------

--
-- Rakenne taululle `huoneet`
--

DROP TABLE IF EXISTS `huoneet`;
CREATE TABLE `huoneet` (
  `huoneID` int(11) NOT NULL,
  `huoneNimi` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Vedos taulusta `huoneet`
--

INSERT INTO `huoneet` (`huoneID`, `huoneNimi`) VALUES
(11, 'asf'),
(8, 'Kauppa'),
(3, 'Kissat'),
(4, 'Koirat'),
(7, 'Koulu'),
(5, 'MTG'),
(2, 'Pelit'),
(1, 'Sekalainen'),
(9, 'Testi'),
(10, 'Testi2');

-- --------------------------------------------------------

--
-- Rakenne taululle `kayttajat`
--

DROP TABLE IF EXISTS `kayttajat`;
CREATE TABLE `kayttajat` (
  `kayttajaID` int(11) NOT NULL,
  `nimi` varchar(30) NOT NULL,
  `salasana` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Vedos taulusta `kayttajat`
--

INSERT INTO `kayttajat` (`kayttajaID`, `nimi`, `salasana`) VALUES
(1, 'Testaaja', 'salasana'),
(2, 'Arttu', 'e94d5b445927709a195f3e827e2e6bc8'),
(4, 'testaaja2', 'salasana2'),
(5, 'Maija', 'salis5'),
(15, 'Maija2', 'salis'),
(16, 'Maija22', 'salis22'),
(17, 'Maija25', 'salis'),
(18, 'Matti', '123'),
(19, 'Pekka', '321'),
(23, 'Testiukko3', 's4l4s4n4'),
(24, 'Mies', 'kissa3'),
(25, 'Ukkeli', 'koira123'),
(26, 'Artturi', 'word2'),
(27, 'Testimies', 'salis666');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `huoneet`
--
ALTER TABLE `huoneet`
  ADD PRIMARY KEY (`huoneID`),
  ADD UNIQUE KEY `huoneNimi` (`huoneNimi`);

--
-- Indexes for table `kayttajat`
--
ALTER TABLE `kayttajat`
  ADD PRIMARY KEY (`kayttajaID`),
  ADD UNIQUE KEY `nimi` (`nimi`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `huoneet`
--
ALTER TABLE `huoneet`
  MODIFY `huoneID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `kayttajat`
--
ALTER TABLE `kayttajat`
  MODIFY `kayttajaID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
