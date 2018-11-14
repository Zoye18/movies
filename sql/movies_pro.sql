-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2018 at 09:43 PM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `movies_pro`
--

-- --------------------------------------------------------

--
-- Table structure for table `movies`
--

CREATE TABLE `movies` (
  `ID` int(10) NOT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `year` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `rated` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `released` date NOT NULL,
  `runtime` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `genre` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `director` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `writer` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `actors` varchar(1000) COLLATE utf8_unicode_ci NOT NULL,
  `plot` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `language` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `country` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `awards` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `poster` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `raitings_count` int(100) NOT NULL,
  `imbd_rating` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `imbd_votes` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `Imbd_ID` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `movies`
--

INSERT INTO `movies` (`ID`, `title`, `year`, `rated`, `released`, `runtime`, `genre`, `director`, `writer`, `actors`, `plot`, `language`, `country`, `awards`, `poster`, `raitings_count`, `imbd_rating`, `imbd_votes`, `Imbd_ID`) VALUES
(1, 'Test', '2018', '15', '2018-11-01', '136 min', 'Action', 'John Gun', 'John Gun', 'Actor 1', 'Test this out', NULL, NULL, NULL, 'img-path', 65, '7.7', '65', '13'),
(2, 'Movie 2', '2016', '15', '2016-11-01', '119 min', 'Comedy', 'Bryan Smith', 'John Gun', 'Actor 1', 'Test this out', NULL, NULL, NULL, 'img-path', 65, '8.3', '65', '13'),
(3, 'Movie 3', '2013', '25', '2014-11-01', '153min', 'Horor', 'John SMinth', 'John Gun', 'Actor 1', 'Test this out', NULL, NULL, NULL, 'img-path', 65, '7.9', '53', '13'),
(4, 'Movie 4', '2016', '32', '2016-11-01', '153min', 'Action', 'John SMinth', 'John Gun', 'Actor 1', 'Test this out', NULL, NULL, NULL, 'img-path', 65, '7.9', '53', '13'),
(5, 'Movie 5', '2017', '32', '2016-11-01', '153min', 'Action', 'Maja Grey', 'John Gun', 'Actor 1', 'Test this out', NULL, NULL, NULL, 'img-path', 65, '7.9', '53', '13'),
(6, 'Movie 6', '1999', '52', '2016-11-01', '133min', 'Action', 'Mike Grey', 'John Gun', 'Actor 1', 'Test this out', NULL, NULL, NULL, 'img-path', 65, '8.2', '53', '13'),
(7, 'Movie 7', '1995', '23', '1996-11-01', '129 min', 'Action', 'Bryan Smith', 'John Gun', 'Actor 1', 'Test this out', NULL, NULL, NULL, 'img-path', 65, '8.3', '65', '13');

-- --------------------------------------------------------

--
-- Table structure for table `ratings`
--

CREATE TABLE `ratings` (
  `ID` int(11) NOT NULL,
  `movie_id` int(11) NOT NULL,
  `source` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `value` varchar(100) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `movies`
--
ALTER TABLE `movies`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`ID`),
  ADD UNIQUE KEY `ID` (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `movies`
--
ALTER TABLE `movies`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
