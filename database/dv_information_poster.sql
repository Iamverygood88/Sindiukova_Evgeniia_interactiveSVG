-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Dec 01, 2019 at 06:32 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dv_information_poster`
--

-- --------------------------------------------------------

--
-- Table structure for table `care_info`
--

CREATE TABLE `care_info` (
  `id` int(11) NOT NULL,
  `water` varchar(100) NOT NULL,
  `sun` varchar(100) NOT NULL,
  `temp` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `care_info`
--

INSERT INTO `care_info` (`id`, `water`, `sun`, `temp`) VALUES
(1, 'water.svg', 'sunlight.svg', 'tempt.svg'),
(2, 'water.svg', 'sunlight.svg', 'tempt.svg'),
(3, 'water.svg', 'sunlight.svg', 'tempt.svg');

-- --------------------------------------------------------

--
-- Table structure for table `plants_info`
--

CREATE TABLE `plants_info` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `plants_info`
--

INSERT INTO `plants_info` (`id`, `name`, `text`) VALUES
(1, 'Areca Palm', 'Areca palms filter out harsh chemicals like acetone, xylene and toluene. '),
(2, 'Dracaena', 'The plant removes formaldehyde, benzene, trichloroethylene and carbon dioxide – all.'),
(3, 'Peace Lily', 'improve indoor air quality by up to 60%. The Peace Lily absorbs mould spores.'),
(4, 'Snake Plant', 'absorb harsh chemicals: carbon monoxide, benzene, formaldehyde. '),
(5, 'Boston Fern', 'Natural air filter, also the Boston Fern restores natural moisture to the air. '),
(6, 'English Ivy', 'Stimulate mucus glands contains expectorant properties, which can help people with breathing difficulties. '),
(7, 'Spider plant', 'The Plant is an antioxidant, removes ammonia, benzene, formaldehyde and xylene. '),
(8, 'RUBBER PLANT ', 'improve indoor air. their large surface leaves act as a sponge and absorbs harsh chemicals then break them down. '),
(9, 'Philodendron', 'purifies the air by removing formaldehyde. '),
(10, 'Aloe Vera', 'The gel inside Aloe Vera leaves are a natural anti-bacterial and are packed full of vitamins. ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `care_info`
--
ALTER TABLE `care_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `plants_info`
--
ALTER TABLE `plants_info`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `care_info`
--
ALTER TABLE `care_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `plants_info`
--
ALTER TABLE `plants_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
