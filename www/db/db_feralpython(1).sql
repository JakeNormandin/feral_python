-- phpMyAdmin SQL Dump
-- version 3.5.5
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Apr 25, 2013 at 07:05 PM
-- Server version: 5.1.68-cll
-- PHP Version: 5.3.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `feral120_jqmobile`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_clutches`
--

CREATE TABLE IF NOT EXISTS `tbl_clutches` (
  `clutches_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `clutches_pairingid` smallint(4) unsigned NOT NULL,
  `clutches_date` date NOT NULL,
  `clutches_quantity` smallint(2) NOT NULL,
  `clutches_notes` varchar(1500) NOT NULL,
  `clutches_weight` varchar(150) NOT NULL,
  PRIMARY KEY (`clutches_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=32 ;

--
-- Dumping data for table `tbl_clutches`
--

INSERT INTO `tbl_clutches` (`clutches_id`, `clutches_pairingid`, `clutches_date`, `clutches_quantity`, `clutches_notes`, `clutches_weight`) VALUES
(4, 2, '2013-02-01', 5, '2333', 'new'),
(5, 2, '2013-02-20', 55, 'asdf', 'eeeee'),
(13, 6, '2013-02-20', 3, 'ttttt', '233 grams'),
(14, 5, '2013-02-21', 5, 'breeding', '233'),
(17, 11, '2013-03-15', 4, 'none', '5'),
(18, 12, '2013-03-15', 0, 'e', 'D'),
(20, 14, '2013-03-15', 9, '', 'K'),
(21, 15, '2013-03-15', 0, 'ew', ''),
(26, 3, '2013-03-21', 5, 'New clutch', '90'),
(27, 20, '2013-03-21', 1, 'clutch', '233'),
(31, 22, '2013-04-24', 4, 'Clutches', '555uuu');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_events`
--

CREATE TABLE IF NOT EXISTS `tbl_events` (
  `events_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `events_pairingid` smallint(5) unsigned NOT NULL,
  `events_date` date NOT NULL,
  `events_event` varchar(150) NOT NULL,
  `events_notes` varchar(1500) NOT NULL,
  PRIMARY KEY (`events_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=24 ;

--
-- Dumping data for table `tbl_events`
--

INSERT INTO `tbl_events` (`events_id`, `events_pairingid`, `events_date`, `events_event`, `events_notes`) VALUES
(2, 3, '2013-03-16', 'Ovulation', 'female ovulating new'),
(3, 5, '2013-02-12', 'Temperature Cycling', 'started dropping temps'),
(8, 1, '2013-02-14', 'Temperature Cycling', 'temps'),
(9, 3, '2013-03-16', 'Temperature Cycling', 'introduced'),
(10, 8, '2013-03-07', 'Temperature Cycling', 'eeeee'),
(14, 4, '2013-03-10', 'Temperature Cycling', ''),
(16, 3, '2013-03-16', 'Clutch Laid', 'Clutch laid'),
(17, 3, '2013-03-16', 'Copulation', 'New'),
(18, 19, '2013-03-16', 'Introduction', 'notes'),
(19, 20, '2013-03-21', 'Ovulation', 'ovuat'),
(23, 22, '2013-04-24', 'Copulation', 'Laid jjj');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_feeding`
--

CREATE TABLE IF NOT EXISTS `tbl_feeding` (
  `feeding_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `feeding_snakeid` smallint(4) unsigned NOT NULL,
  `feeding_date` date NOT NULL,
  `feeding_quantity` smallint(4) NOT NULL,
  `feeding_type` varchar(150) NOT NULL,
  `feeding_size` varchar(150) NOT NULL,
  `feeding_refused` varchar(50) NOT NULL,
  `feeding_weight` varchar(150) NOT NULL,
  `feeding_notes` varchar(2000) NOT NULL,
  PRIMARY KEY (`feeding_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=65 ;

--
-- Dumping data for table `tbl_feeding`
--

INSERT INTO `tbl_feeding` (`feeding_id`, `feeding_snakeid`, `feeding_date`, `feeding_quantity`, `feeding_type`, `feeding_size`, `feeding_refused`, `feeding_weight`, `feeding_notes`) VALUES
(5, 0, '1946-06-15', 2, 'Mouse', 'Adult', 'Yes', '244 grams', 'Looked interesting but wouldn''t take it.'),
(8, 0, '1935-03-18', 4, 'Rat', 'Hopper', 'No', '233', 'Great feed'),
(9, 51, '1944-03-16', 2, 'Rat', 'Pinkie', 'No', '444', 'sweeeeeet'),
(10, 56, '2013-02-23', 5, 'Hampster', 'Fuzzy', 'No', 'big', 'new edit'),
(14, 49, '2013-02-02', 3, 'Mouse', 'Fuzzy', 'Yes', '333', 'dddd'),
(15, 57, '1943-03-17', 6, 'Mouse', 'Pinkie', 'No', '45 grams', 'Took er'' good'),
(16, 64, '2013-03-16', 5, 'Hampster', 'Hopper', 'No', '44 Grams', 'Good feeding'),
(23, 70, '2013-03-02', 5, 'Hampster', 'Fuzzy', 'No', '44', 'asdf'),
(24, 81, '2013-03-07', 4, 'Hampster', 'Fuzzy', 'Yes', '222', 'eeeeeeeee'),
(33, 51, '2013-03-10', 1, 'Mouse', 'Pinkie', 'No', '', ''),
(43, 51, '2013-03-27', 2, 'Mouse', 'Pinkie', 'Yes', '233 grams', 'Feeding '),
(46, 87, '2013-03-10', 1, 'Mouse', 'Pinkie', 'Yes', '23 grams', 'Feeding'),
(56, 114, '2013-04-02', 1, 'Rat', 'Pinkie', 'Yes', 'Uuuu', 'Hhh'),
(57, 54, '2013-04-03', 1, 'Mouse', 'Pinkie', 'No', '', ''),
(58, 115, '2013-04-04', 1, 'Mouse', 'Pinkie', 'Yes', '', 'Was in shed'),
(59, 111, '2013-04-07', 1, 'Rat', 'Hopper', 'No', '233 grams', ''),
(62, 50, '2013-04-24', 1, 'Mouse', 'Fuzzy', 'No', '', ''),
(64, 50, '2013-04-18', 1, 'Rat', 'Pinkie', 'No', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_length`
--

CREATE TABLE IF NOT EXISTS `tbl_length` (
  `length_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `length_snakeid` smallint(4) unsigned NOT NULL,
  `length_date` date NOT NULL,
  `length_length` varchar(150) NOT NULL,
  PRIMARY KEY (`length_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=30 ;

--
-- Dumping data for table `tbl_length`
--

INSERT INTO `tbl_length` (`length_id`, `length_snakeid`, `length_date`, `length_length`) VALUES
(2, 0, '2011-03-04', '666 centimeters'),
(3, 0, '1938-04-05', 'Bermuda Length'),
(15, 56, '2013-02-01', 'ohhh yeah'),
(28, 56, '2013-03-11', 'Lllll'),
(29, 50, '2013-03-11', '6688');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mysnakes`
--

CREATE TABLE IF NOT EXISTS `tbl_mysnakes` (
  `mysnakes_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `mysnakes_user` smallint(4) unsigned NOT NULL,
  `mysnakes_name` varchar(150) NOT NULL,
  `mysnakes_photo` varchar(150) NOT NULL DEFAULT 'no_photo.png',
  `mysnakes_qrphoto` varchar(150) NOT NULL DEFAULT 'no_qr.jpg',
  `mysnakes_morph` varchar(200) NOT NULL,
  `mysnakes_sex` varchar(50) NOT NULL,
  `mysnakes_birthdate` date NOT NULL,
  PRIMARY KEY (`mysnakes_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=129 ;

--
-- Dumping data for table `tbl_mysnakes`
--

INSERT INTO `tbl_mysnakes` (`mysnakes_id`, `mysnakes_user`, `mysnakes_name`, `mysnakes_photo`, `mysnakes_qrphoto`, `mysnakes_morph`, `mysnakes_sex`, `mysnakes_birthdate`) VALUES
(49, 29, 'Feral', 'no_photo.png', 'no_qr.jpg', 'Normal', 'Female', '1945-03-18'),
(50, 30, 'Bermuda', 'snake_50.jpg', 'qr_small_50.png', 'Normal', 'Female', '2013-03-18'),
(51, 30, 'Obzen', 'snake_51.jpg', 'qr_small_51.png', 'Normal', 'Male', '1947-05-18'),
(53, 30, 'Zues', 'snake_53.jpg', 'qr_small_53.png', 'Pastel', 'Female', '1944-03-18'),
(54, 30, 'Skitter', 'snake_54.jpg', 'qr_small_54.png', 'Pinstripe', 'Male', '2013-03-18'),
(55, 29, 'Dread', 'no_photo.png', 'no_qr.jpg', 'Mojave', 'Male', '1944-03-16'),
(56, 30, 'Shriek', 'snake_56.jpg', 'qr_small_56.png', 'SoulSucker', 'Male', '1944-05-17'),
(57, 29, 'Fallujah', 'no_photo.png', 'no_qr.jpg', 'Piebald', 'Female', '2006-03-15'),
(74, 29, 'Shriek', 'no_photo.png', 'no_qr.jpg', 'Soulsucker', 'Female', '2012-11-04'),
(76, 0, 'new', 'no_photo.png', 'no_qr.jpg', 'wer', 'Male', '2013-03-04'),
(85, 29, 'Jake', 'no_photo.png', '85_20130312.png', 'Spider', 'Male', '2013-03-10'),
(111, 30, 'Jake', 'snake_111.jpg', 'no_qr.jpg', 'Pastel', 'Male', '2013-04-02'),
(113, 30, 'Jake', 'snake_113.jpg', 'no_qr.jpg', 'None', 'Male', '2013-04-02'),
(114, 30, 'Vicken', 'snake_114.jpg', 'no_qr.jpg', 'Pastel', 'Male', '2013-04-02'),
(115, 30, 'Jake', 'snake_115.jpg', 'qr_small_115.png', 'Soul sucker ', 'Male', '2013-04-04'),
(117, 30, 'Lionel', 'snake_117.jpg', 'qr_small_117.png', 'Pastel', 'Male', '2013-04-24'),
(118, 32, 'Peach', 'snake_118.jpg', 'qr_small_118.png', 'Pastel', 'Female', '2010-07-01'),
(119, 32, 'Venom', 'snake_119.jpg', 'qr_small_119.png', 'Spider', 'Male', '2010-07-01'),
(120, 32, 'Zeus', 'snake_120.jpg', 'qr_small_120.png', 'Bumblebee', 'Male', '2011-09-02'),
(121, 32, 'Dread', 'snake_121.jpg', 'qr_small_121.png', 'Mojave', 'Female', '2010-04-17'),
(122, 32, 'Hades', 'snake_122.jpg', 'qr_small_122.png', 'Normal', 'Female', '2009-10-10'),
(123, 32, 'Bermuda', 'snake_123.jpg', 'qr_small_123.png', 'Normal', 'Female', '2011-02-14'),
(124, 32, 'Feral', 'snake_124.jpg', 'qr_small_124.png', 'Normal', 'Female', '2011-02-14'),
(125, 32, 'Diablo', 'snake_125.jpg', 'qr_small_125.png', 'HET Piebald', 'Male', '2011-06-12'),
(126, 32, 'Obzen', 'snake_126.jpg', 'qr_small_126.png', 'Normal', 'Male', '2010-12-04'),
(127, 32, 'Demona', 'snake_127.jpg', 'qr_small_127.png', 'HET Piebald', 'Female', '2011-07-12'),
(128, 32, 'Lucifer', 'snake_128.jpg', 'qr_small_128.png', 'Blue Eyed Lucy', 'Male', '2011-08-19');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pairings`
--

CREATE TABLE IF NOT EXISTS `tbl_pairings` (
  `pairings_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `pairings_userid` smallint(5) unsigned NOT NULL,
  `pairings_date` date NOT NULL,
  `pairings_male` smallint(4) unsigned NOT NULL,
  `pairings_female` smallint(4) unsigned NOT NULL,
  PRIMARY KEY (`pairings_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=23 ;

--
-- Dumping data for table `tbl_pairings`
--

INSERT INTO `tbl_pairings` (`pairings_id`, `pairings_userid`, `pairings_date`, `pairings_male`, `pairings_female`) VALUES
(1, 30, '2013-02-14', 51, 50),
(5, 30, '2013-02-14', 53, 56),
(7, 30, '2013-03-28', 77, 79),
(8, 30, '2013-03-23', 81, 80),
(19, 30, '2013-03-16', 53, 56),
(22, 30, '2013-04-24', 117, 50);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_shedding`
--

CREATE TABLE IF NOT EXISTS `tbl_shedding` (
  `shedding_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `shedding_snakeid` smallint(4) unsigned NOT NULL,
  `shedding_date` date NOT NULL,
  `shedding_notes` varchar(1500) NOT NULL,
  PRIMARY KEY (`shedding_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=39 ;

--
-- Dumping data for table `tbl_shedding`
--

INSERT INTO `tbl_shedding` (`shedding_id`, `shedding_snakeid`, `shedding_date`, `shedding_notes`) VALUES
(4, 0, '1946-03-04', 'Clean Shed'),
(5, 49, '1974-05-18', 'Very nice how much!'),
(6, 49, '1939-02-15', 'good shed'),
(7, 57, '2013-02-02', 'woooo'),
(8, 64, '2012-03-15', 'Good clean shed.'),
(17, 53, '2013-02-14', 'booooo'),
(24, 56, '2013-02-01', 'today'),
(27, 81, '2013-03-07', 'hhhfffeeeee'),
(29, 51, '2013-03-10', 'fff'),
(30, 51, '2013-03-23', ''),
(38, 50, '2013-04-24', 'shedding');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_snakes`
--

CREATE TABLE IF NOT EXISTS `tbl_snakes` (
  `snakes_id` smallint(2) unsigned NOT NULL AUTO_INCREMENT,
  `snakes_morph` varchar(150) NOT NULL,
  `snakes_yearproven` varchar(100) NOT NULL,
  `snakes_genetics` varchar(250) NOT NULL,
  `snakes_info` varchar(2500) NOT NULL,
  `snakes_photo` varchar(100) NOT NULL,
  `snakes_mainphoto` varchar(100) NOT NULL,
  PRIMARY KEY (`snakes_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=44 ;

--
-- Dumping data for table `tbl_snakes`
--

INSERT INTO `tbl_snakes` (`snakes_id`, `snakes_morph`, `snakes_yearproven`, `snakes_genetics`, `snakes_info`, `snakes_photo`, `snakes_mainphoto`) VALUES
(1, 'Albino', '1992', 'Recessive', 'What was at first thought to be a myth, the albino has gone on to be accredited as the ball python morph that started the whole ball python revolution. Bob Clark proved this magnificent morph out in 1992 and the industry has never looked back.<br /><br />Albinos come in many shades of yellow from pale to a high-contrast bright yellow to orange. There is some debate over whether high-contrast albinos go on to produce the same. Still one of the most popular and sought for morphs today, the Albino lacks all black pigment making it a pure white and yellow snake.<br /><br />The Albino ball python ...a true treasure with everlasting appeal!', 'albino_thumb.jpg', 'albino_main.png'),
(2, 'Bumble Bee', '2001 NERD', 'Pastel Jungle Spider', 'The Bumble Bee is without a doubt one of the most exciting combo morphs to come along. Developed in 2001 by NERD it was as a result of crossing a Spider with a Pastel Jungle. The resulting mutation took the positive attributes of both morphs and combined them to make the first ever new designer morph.<br /><br />Word of its creation traveled fast and no one was left disappointed when they finally got to see one first hand and in person. The cross took the yellow of the pastel jungle and brightened it. It then took the pattern of the Spider and accentuated it. The result was eye-popping and truly one of the most beautiful morphs creations to date.<br /><br />The other added bonus of the Bumble Bee is that it is a Triple Threat morph. Meaning, that when bred to normal females you produce three different morphs - Bumble Bees, Spiders and Pastel Jungles. In addition you also produce normal wild type offspring.', 'bumblebee_thumb.jpg', 'bumblebee_main.png'),
(3, 'Caramel Albino', '1999 NERD', 'Recessive', 'Its rich orange and lavender hues are striking and they are one of the rare morphs that maintain their rich color through adulthood.  First proven out by Kevin McCurley of New England Reptile Distributors (NERD) in 1999, the Caramel Albino has gone on to be one of the most sought after morphs available today.<br /><br />The combination morphs that can be achieved by breeding the Caramel into other mutations are limited. Many are in the works with the Caramel Glow, a cross between a Caramel and Ghost, being created in 2003. ', 'caramel_thumb.jpg', 'caramel_albino_main.png'),
(4, 'Cinnamon', '2002', 'Codominant', 'The cinnamon ball python is typically a very dark snake and features a rich cinnamon color. The announcment of this new morph was not exactly met with accolades. The Cinnamon Pastels subtle color and less than striking appearance left much to be desired by many breeders and the initial $7,500 asking price was not greeted with much enthusiasm. ', 'cinnamon_thumb.jpg', 'cinnamon_main.png'),
(5, 'Hypo Ghost', '1994', 'Recessive', 'Although some breeders refer to them as Hypos although Ghost is more common. When they shed, their shed is clear and void of any pattern. Some people have gone as far as stating that het ghost sheds are clear as well.<br /><br />Ghosts come in many different colors ranging from orange, green, yellow, butterscotch and white, which is refereed to as the Desert Ghost. <br /><br />Different lines of ghost have been proven to be mostly compatible although some lines are not. There have been instances where two ghost have been bred and the resulting clutch produced nothing but normal looking babies.', 'hypo_thumb.jpg', 'ghost_main.png'),
(6, 'Mojave', '2000 The Snake Keeper', 'Codominant', 'The Mojave ball python was first reproduced in captivity in the year 2000. Dan and Colette Sutherland of The Snake Keeper had acquired the original Mojave male in 1999 which originated out of the wilds of Africa. <br /><br />Mojave ball pythons lack the typical shades of black, brown and gold of normally colored ball pythons. The gold is replaced with a clean yellow/yellow green color. The black is replaced with a deep rich brown hue. They also have shades of light gray found in the side pattern. <br /><br />The Super Mojave was produced in 2004 by Morph King Reptiles and it turned out to be a blue-eyed leusistic similar to those produced when breeding Lesser Platinums together. This added fuel to the debate as to whether Lessers and Mojaves are basically the same snake.<br /><br />Mojaves are co-dominant and seem to getter better with every new generation. Many Mojave crosses have already been created including the Hypo Mojave, Pastel Mojave and Spider Mojave. All are spectacular combinations that are worth their weight in gold. Imagine breeding a Spider Mojave to a normal. You will get a 25% chance of producing, Spiders, Mojaves, Normals and Spider Mojaves! Think of the possibilities when breeding it to other morphs. They are endless.<br /><br />Although a very subtle colored snake they are one of the favorites of snake lovers and non-snake lovers alike.', 'mojave_thumb.jpg', 'mojave_main.png'),
(8, 'Pinstripe', '2000 BHB Enterprises ', 'Dominant', 'The Pinstripe is a morph that was first produce by Brian and Lori Barczyk of BHB Enterprises in 2000. They originated from some Pinstripes that were imported from Africa. At the time they looked to be genetic but there are no guarantees. Luckily for BHB they did prove genetic. <br /><br />When a Pinstripe is bred to a normal ball pythons, 50% of the offspring should be Pinstripes.The Pinstripe has proven to be dominant to date with no homozygous version in a Super form produced. <br /><br />In a way it is very similar to a Spider with its reduced pattern and gold color, but its lines tend to be straighter and more parallel as compared with a Spiders barb-wire or spider-web pattern. The Pinstripe also lacks any head pattern that is common on Spiders.<br /><br />The Pinstripe has opened the door to the potential of many new morphs by crossing it with other mutations. The first was the Spinner which was a Spider/Pinstripe cross. Many were soon to follow including combinations with Pastel Jungles, Hypos, Lesser Platinum''s to name a few. <br /><br />The Pinstripe is an extremely popular morph that demanded a price of $25,000 per animal for a 3 year period! Although prices have dropped since then hatchling are still worth their weight in gold... literally!', 'pinstripe_thumb.jpg', 'pinstripe_main.png'),
(9, 'Piebald', '1997 Pete Kahl Reptiles ', 'Recessive', 'If ever there was a rock star amongst ball pythons, the Piebald would definitely be it. Whenever anyone who lays their eyes on these magnificent snakes, whether they are snake people or not, it is usually followed by an uncontrollable jaw drop. It''s not everyday that you see a snake with such distinct markings.<br /><br />The white is bone china white and the gold is very gold at birth. It does darken with age, but it is still rich. Piebalds, often referred to as Pieds, come in different percentages of white. The more white the higher the grade. The higher the grade, the more expensive the Pied.<br /><br />Piebalds were first produced by Pete Kahl in 1997. They demanded high price when they were first made available to the public. They were fetching prices in the mid 40 thousands for a pair. They have come down since then, but steady decline is the norm. They will always be in demand and are probably the favorite of most ball python aficionados.', 'pied_thumb.jpg', 'pied_main.png'),
(10, 'Spider', '1999 NERD', 'Dominant', 'Spider ball pythons are by far one of the coolest morphs in existence today. They come to the table with two positive attributes...in the looks department at least. They are both a color and pattern mutation.<br /><br />In addition, Spiders come with a personality that is unrivaled in ball python morphs. They are eager to be held and don''t display the fussiness towards food that typical ball pythons sometimes do. It shouldnt come as much of a surprise when they are ready and waiting when the dinner bell rings.<br /><br />Spiders have huge potential when it comes to crossing them into other morphs. So far they have crossed well with many mutations and each and every time have produces spectacular designer morphs that are some of the best today.<br /><br />', 'spider_thumb.jpg', 'spider_main.png'),
(41, 'Hypo Pastel', '2002 Mark Bell', 'Codominant/Recessive', 'The Hypo Pastel is a combination snake made up of Pastel Jungle (co dominant) and Orange Hypo (recessive). The Hypo cleans and softens the look as well as brightening it up, removing some of the darkness that is common on adult Pastels.<br /><br />The Hypo Pastel takes all that is good about a Pastel Jungle and combines it with all that is good about a Hypo.', 'hypopastel_thumb.jpg', 'hypo_pastel_main.png'),
(42, 'Killer Bee', '2002 NERD', 'Super Pastel Spider ', 'The Killer Bee is another exciting combo morphs to come along. Developed in 2002 by NERD it was as a result of crossing a Bumble Bee with a Pastel Jungle. The resulting mutation once again took the positive attributes of both morphs and combined them to make a Super Pastel Spider. <br /><br />The cross took the yellow of the Super Pastel Jungle and brightened it even more and the pattern of the Spider was blushed. The result was eye-popping and truly one of the most beautiful morphs creations to date.<br /><br />The yellow on the Killer Bee isnt as rich as it is on some of the nicer Bumble Bees but it appears to be cleaner without the traditional dark backing that is inherited from Pastel Jungles. Its more of a softer look that is very pleasing to the eye.<br /><br />The Killer Bee is a deadly animal to have in your breeding arsenal. When bred to normal females you will produce 50% Bumble Bees and 50% Pastels. When you cross it into other mutations it gets even more exciting. Imagine the possibilities! ', 'killerbee_thumb.jpg', 'killerbee_main.png'),
(43, 'Pewter Pastel', '2003 Graziani Reptiles', 'Double Codominant Pastel Jungle X Cinnamon ', 'The Pewter Pastel is probably one of the biggest surprises to come from a pairing of two co-dominant mutations. In 2003 Greg Graziani bred two of his own proven mutations, the Pastel Jungle and a Cinnamon Pastel (now known as just Cinnamon), and produced what initially looked like a Platinum while in the egg. However upon hatching, it was clear that this was not the case and a whole new designer morph had been created.<br /><br />There were four in total including one male and three females. They were definitely unique with a pale gray coloration and a slight peach hue on the side pattern. Based on its color Greg decided to call them Pewter Pastels.<br /><br />The Pewter Pastel is a triple-threat morph meaning it is capable of producing three co-dominant mutations when bred to a normal ball python. In fact it has way more potential than that. When bred to a Pastel Jungle or a Cinnamon, they have the ability to produce six different ball pythons in a single clutch (based on a 6 egg clutch of course) They are: <br /><br />Bred to Pastel Jungle - Pastel Jungle, Cinnamon, Super Pastel, Pewter, Super Pastel Pewter and Normal <br /><br />Bred to Cinnamon - Cinnamon, Pastel Jungle, Super Cinnamon, Pewter, Super Cinnamon Pewter and Normal ', 'pewter_thumb.jpg', 'pewter_main.png');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_users`
--

CREATE TABLE IF NOT EXISTS `tbl_users` (
  `users_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `users_email` varchar(150) NOT NULL,
  `users_password` varchar(150) NOT NULL,
  PRIMARY KEY (`users_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=33 ;

--
-- Dumping data for table `tbl_users`
--

INSERT INTO `tbl_users` (`users_id`, `users_email`, `users_password`) VALUES
(30, 'jake@feralmedia.ca', 'test2'),
(32, 'jake@feralmedia.ca', 'hahaha');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_weight`
--

CREATE TABLE IF NOT EXISTS `tbl_weight` (
  `weight_id` smallint(4) unsigned NOT NULL AUTO_INCREMENT,
  `weight_snakeid` smallint(5) unsigned NOT NULL,
  `weight_date` date NOT NULL,
  `weight_weight` varchar(150) NOT NULL,
  PRIMARY KEY (`weight_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=29 ;

--
-- Dumping data for table `tbl_weight`
--

INSERT INTO `tbl_weight` (`weight_id`, `weight_snakeid`, `weight_date`, `weight_weight`) VALUES
(1, 0, '1947-02-04', '666 Grams'),
(2, 0, '1944-01-01', 'heavy'),
(3, 0, '1946-06-06', 'ttt'),
(9, 57, '2003-03-05', 'fallujah '),
(12, 56, '2013-03-14', '244ddddddd grams'),
(20, 51, '2013-03-11', '77'),
(21, 51, '2013-03-11', '77'),
(27, 50, '2013-04-24', '99'),
(28, 50, '2013-04-25', '77');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
