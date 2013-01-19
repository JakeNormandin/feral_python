-- phpMyAdmin SQL Dump
-- version 3.3.9.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 28, 2012 at 05:51 PM
-- Server version: 5.5.9
-- PHP Version: 5.3.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_jqmobile`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_mysnakes`
--

CREATE TABLE `tbl_mysnakes` (
  `mysnakes_id` smallint(2) unsigned NOT NULL AUTO_INCREMENT,
  `mysnakes_name` varchar(150) NOT NULL,
  `mysnakes_type` varchar(150) NOT NULL,
  `mysnakes_photo` varchar(150) NOT NULL,
  `mysnakes_morph` varchar(200) NOT NULL,
  `mysnakes_sex` varchar(50) NOT NULL,
  PRIMARY KEY (`mysnakes_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `tbl_mysnakes`
--

INSERT INTO `tbl_mysnakes` VALUES(1, 'Skitter', 'Corn Snake', 'pied.png', 'Normal', 'Male');
INSERT INTO `tbl_mysnakes` VALUES(2, 'Feral', 'Ball Python', 'pied.png', 'Normal', 'Female');
INSERT INTO `tbl_mysnakes` VALUES(3, 'Bermuda', 'Ball Python', 'pied.png', 'Normal', 'Female');
INSERT INTO `tbl_mysnakes` VALUES(4, 'Demona', 'Ball Python', 'pied.png', 'HET Piebald', 'Female');
INSERT INTO `tbl_mysnakes` VALUES(5, 'Obzen', 'Ball Python', 'pied.png', 'Normal', 'Male');
INSERT INTO `tbl_mysnakes` VALUES(6, 'Peach', 'Ball Python', 'pied.png', 'Pastel', 'Female');
INSERT INTO `tbl_mysnakes` VALUES(7, 'Lucifer', 'Ball Python', 'pied.png', 'Blue Eyed Leusistic', 'Male');
INSERT INTO `tbl_mysnakes` VALUES(8, 'Diablo', 'Ball Python', 'pied.png', 'HET Piebald', 'Male');
INSERT INTO `tbl_mysnakes` VALUES(9, 'Hades', 'Ball Python', 'pied.png', 'Normal', 'Female');
INSERT INTO `tbl_mysnakes` VALUES(10, 'Dread', 'Ball Python', 'pied.png', 'Mojave', 'Female');
INSERT INTO `tbl_mysnakes` VALUES(11, 'Venom', 'Ball Python', 'pied.png', 'Spider', 'Male');
INSERT INTO `tbl_mysnakes` VALUES(12, 'Zeus', 'Ball Python', 'pied.png', 'Bumblebee', 'Male');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_snakes`
--

CREATE TABLE `tbl_snakes` (
  `snakes_id` smallint(2) unsigned NOT NULL AUTO_INCREMENT,
  `snakes_type` varchar(100) NOT NULL,
  `snakes_morph` varchar(150) NOT NULL,
  `snakes_info` varchar(1000) NOT NULL,
  `snakes_photo` varchar(100) NOT NULL,
  PRIMARY KEY (`snakes_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=41 ;

--
-- Dumping data for table `tbl_snakes`
--

INSERT INTO `tbl_snakes` VALUES(1, 'ball', 'Albino', 'What was at first thought to be a myth, the albino has gone on to be accredited as the ball python morph that started the whole ball python revolution. Bob Clark proved this magnificent morph out in 1992 and the industry has never looked back.', 'ball1.png');
INSERT INTO `tbl_snakes` VALUES(2, 'ball', 'Bumblebee', 'The Bumble Bee is without a doubt one of the most exciting combo morphs to come along. Developed in 2001 by NERD it was as a result of crossing a Spider with a Pastel Jungle. The resulting mutation took the positive attributes of both morphs and combined them to make the first ever new designer morph.', 'ball2.png');
INSERT INTO `tbl_snakes` VALUES(3, 'ball', 'Cinnamon', 'The Cinnamon Pastels are a deep chocolate brown with irregular dorsal markings, faded sides, and a solid white underside.Though not as strikingly impressive as some other morphs, the Cinnamons do possess an understated beauty unique unto themselves.', 'ball3.png');
INSERT INTO `tbl_snakes` VALUES(4, 'ball', 'Clown', 'The clown is a beautiful recessive morph that is both a color as well as a pattern mutation. They have a bizarre head pattern, a full irregular dorsal stripe and lightly colored sides that vary from a reduced pattern to totally patternless. Clowns are also distinguished by the fact that their color actually lightens as they as age.', 'ball4.png');
INSERT INTO `tbl_snakes` VALUES(5, 'ball', 'Leusistic', 'The Blue-Eyed Leucistic, a solid white snake with baby blue eyes and black pupils. It doesn`t get any purer than this, absolutely zero pigmentation on these beauties. There are several morphs that when combined can produce this mutation.', 'ball5.png');
INSERT INTO `tbl_snakes` VALUES(6, 'ball', 'Mojave', 'It seems that with each passing year, the Mojave ball increases in popularity as well as importance. The Mojave was proven genetic in 2000 by the Sutherlands. Its hard to fully appreciate their beauty without seeing one in person.', 'ball6.png');
INSERT INTO `tbl_snakes` VALUES(7, 'ball', 'Pastel', 'Pastels burst into the ball python world in 1997. They are characterized by vivid black and yellow coloring, faded saddles and pale eyes. This impressive looking ball is a co-dominant morph. Prices on pastels have been more than stable over the last few years. ', 'ball7.png');
INSERT INTO `tbl_snakes` VALUES(8, 'ball', 'Pinstripe', 'The pinstripe is a spectacular looking and highly coveted ball python. The most distinguishable feature of this morph is a series pinstripes decorating the snake both dorsally as well as laterally. Pinstripes also have a very light overall coloration to them and a solid white belly.', 'ball8.png');
INSERT INTO `tbl_snakes` VALUES(9, 'ball', 'Piebald', 'Proven genetic by Peter Kahl in 1997, the piebald ball python is among the most impressive looking balls ever produced. They are characterized by varying amounts of solid porcelein white. Whether a high-white or a low-white, every piebald is both beautiful and unique.', 'ball9.png');
INSERT INTO `tbl_snakes` VALUES(10, 'ball', 'Spider', 'The spider is about as perfect a ball python mutation as you can imagine. A beautifully intricate spider-webbed pattern, pied-white sides, crazy head markings and pale green eyes make the spider an absolutely beautiful snake. In addition to their great looks, spiders are also known for their ravenous appetites and active libidos.', 'ball10.png');
INSERT INTO `tbl_snakes` VALUES(11, 'corn', 'Caramel', 'Light yellow to light brown body with caramel brown blotches, outlined with black. The original caramel cornsnake was a wild caught animal discovered in a pet shop in 1983 by Rich Zuchowski.', 'corn1.png');
INSERT INTO `tbl_snakes` VALUES(12, 'corn', 'Diamond', 'A combination of Charcoal and Lava.', 'corn2.png');
INSERT INTO `tbl_snakes` VALUES(13, 'corn', 'Ghost', 'A combination of Anerythristic and Hypomelanistic.', 'corn3.png');
INSERT INTO `tbl_snakes` VALUES(14, 'corn', 'Lavendar', 'Often referred to as a form of Anerythrism, but a much paler grey, sometimes almost pink, with lilac blotches and ruby coloured eyes. Males often show more pink/lilac colouring than females.', 'corn4.png');
INSERT INTO `tbl_snakes` VALUES(15, 'corn', 'Motley', 'The oldest pattern morph, discovered in 1977. Motleys can be highly variable sometimes even resembling stripes (these have no influence from the stripe gene), but all have merging blotches and no ventral pattern. Can be combined with any colour morph.', 'corn5.png');
INSERT INTO `tbl_snakes` VALUES(16, 'corn', 'Stargazer', 'Stargazer is a gene that causes the animal to appear to be star gazing. Stargazing is a deviation in the bodys balance, as a result of which the animals makes uncontrolled movements. It is made worse in stressful situations. They move quite normally on a flat surface, but if they raise their heads above the surface or try to follow movement quickly they have very uncontrolled movements. The animals have great difficulty if they are laid on their back, it takes them some time to realise they are upside down before attempting to correct themselves. Also they can take several attempts to seize their prey.', 'corn6.png');
INSERT INTO `tbl_snakes` VALUES(17, 'corn', 'Strawberry', 'Strawberry is a newly proven hypomelanistic gene.', 'corn7.png');
INSERT INTO `tbl_snakes` VALUES(18, 'corn', 'Stripe', 'Instead of a blotched pattern, these animals have two dorsal and two finer lateral stripes, and can be combined with any of the colour morphs.', 'corn8.png');
INSERT INTO `tbl_snakes` VALUES(19, 'corn', 'Sunkissed', 'A genetically independent form of hypomelanism producing very brightly coloured snakes. Sunkissed can also alter the shape of the saddles making them more uniform in size and shape, and also has an effect on the head pattern.', 'corn9.png');
INSERT INTO `tbl_snakes` VALUES(20, 'corn', 'Terrazzo', 'Terrazzo is a morph that has only recently come to light, despite it being discovered in the 90''s. Terrazzo originated in Keys corns and was initially named ''Granite'' before the name was used to describe Diffused Anery. ''Original Granite'' is still used by some to describe Terrazzo corns from pure Keys stock. Terrazzo is a morph that affects the pattern of the snake, looking a little like a striped corn for the first part with granite like speckles further down the body.', 'corn10.png');
INSERT INTO `tbl_snakes` VALUES(21, 'boa', 'American Blood', 'This dwarf boa is relatively rare in collections and was originally imported from El Salvador.  The intense red coloration in these boas is a simple recessive mutation.  You could call them hypererythristic.', 'boa1.png');
INSERT INTO `tbl_snakes` VALUES(22, 'boa', 'Anerytheristic', 'Anerytheristics are sometimes called black albinos because they appear to lack all other pigment besides black.  These boas really lack red pigment called erythrin, thus their name (i.e an- without + erythri- red).  Anerytheristic boas begin their lives grayish-silver in coloration, but turn brownish-yellow as they mature. This recessive mutation is a key ingredient for ghost and snow boas.', 'boa2.png');
INSERT INTO `tbl_snakes` VALUES(23, 'boa', 'Arabesque', 'Originally produced by Steve Hammond, the relatively uncommon arabesque is highly speckled and has abnormally thin saddles connected like rungs in a ladder.  This mutation is codominant. ', 'boa3.png');
INSERT INTO `tbl_snakes` VALUES(24, 'boa', 'Caramel Albino', 'Unlike the t-negative albino boas where melanin remains absent throughout their lives, t-positive boas will produce a reduced amount of melanin as they mature.  T-positive boas have functional tyrosinase enzymes required to synthesize melanin, but they lack a subsequent enzyme required to complete the melanin-synthesis pathway normally.  We have posted two photos of this mutant to illustrate their dramatic metamorphosis; one at 4 months of age and the other as a yearling.  The first t-positive albino was born in 1997 and a few have been imported since.', 'boa4.png');
INSERT INTO `tbl_snakes` VALUES(25, 'boa', 'Hypomelanistic', 'Hypomelanistic boas lack varying degrees of melanin, thus their name (i.e hypo- below + melanin- black pigment).  Hypomelanism is a codominant mutation in boa constrictors and simple recessive in colubrids.  These beautiful boas begin their lives lightly colored with intense red saddles, but tend to muddy up as they mature (become more maroon in color).  The intense red coloration is probably due to the full expression of erythrin, being only masked by a reduced amount of melanin.', 'boa5.png');
INSERT INTO `tbl_snakes` VALUES(26, 'boa', 'Jungle', ' Jungle boas are pattern morphs controlled by a codominant mutant gene.  This mutation causes varying degrees of aberrancies as seen in the animals pictured to the right.  The animals with the most aberrancies are those homozygous for the jungle mutation- these boas received a mutant allele from both parents.', 'boa6.png');
INSERT INTO `tbl_snakes` VALUES(27, 'boa', 'Leopard', 'The leopard boa is a Mexican/Sonoran Desert pattern morph controlled by a simple recessive mutant gene. ', 'boa7.png');
INSERT INTO `tbl_snakes` VALUES(28, 'boa', 'Melanistic', 'A true melanistic boa would also be axanthic.  Axanthic animals have both red and yellow pigments absent from their coloration.  This trait is not yet proven, but there are a few black boas out there.', 'boa8.png');
INSERT INTO `tbl_snakes` VALUES(29, 'boa', 'Pastel', 'The pastel trait is selectively bred and often introduced to clean up other morphs (i.e. flecks, coloration).  Pastels are usually light in coloration, washed-out, and nearly fleckless.  Some bloodlines of pastels have impressive red and pink coloration.  The most desired bloodlines include Ronne, East Bay Vivarium, and Washington. ', 'boa9.png');
INSERT INTO `tbl_snakes` VALUES(30, 'boa', 'Purple', 'During the 2002 breeding season, Jeremy Stone serendipitously produced two patternless boas from a motley litter!  This may be the freakiest boa morph yet.  If this animal makes it to maturity and proves genetic, we will be seeing the likes of these for years to come.  We will keep our fingers crossed!', 'boa10.png');
INSERT INTO `tbl_snakes` VALUES(31, 'carpet', 'Centralian', 'An orange red to brick red background with cream bands makes for a beautiful python.  We have Lazik stock breeders from 2002.  These snakes eat anything and grow at an amazing rate.  They are very docile and even the hungriest adult is as tame as a kitten (once they realize you''re not a rat).  These are one of our favorite pythons.', 'carpet1.png');
INSERT INTO `tbl_snakes` VALUES(32, 'carpet', 'Darwin', 'Darwin carpet pythons are one of the rarest carpet subspecies maintained in the US. We are pleased to be working with the albino gene as well as regular Darwins. With beautiful orange bands separated by black from cream bands, these or one of the  most appealing carpets in terms of appearance. Due to their nice look and rarity, the Darwins will be a nice addition to any collection.', 'carpet2.png');
INSERT INTO `tbl_snakes` VALUES(33, 'carpet', 'Green Tree', 'Green tree pythons are some of the most enigmatic pythons available.  With their amazing ontogenic color change and brilliant green colors, Green trees are one of the most visually appealing animals and make great display animals as they are happy to sit out in the open on a horizontal perch during the day.', 'carpet3.png');
INSERT INTO `tbl_snakes` VALUES(34, 'carpet', 'Inland', 'Inland carpet pythons are a subspecies of spilota that range through much of the eastern interior of Australia.  If you are looking for a calm, easy to keep carpet python, then the inland is the snake for you.  They also stay a modest size, can endure temperature extremes, and have attractive patterns, making them an ideal captive.', 'carpet4.png');
INSERT INTO `tbl_snakes` VALUES(35, 'carpet', 'Irian Jaya/West Paupan', 'Irian Jaya or West Paupan carpet pythons are a smaller carpet species.  We are working with a het for granite male and some very nice females, and should produce some poss hets very soon.', 'carpet5.png');
INSERT INTO `tbl_snakes` VALUES(36, 'carpet', 'Jaguar Coastal', 'Jagurs are one of the coolest carpet python morphs.  There are seemingly endless possibilities of combinations and distinct pattern and color varients with this gene, which makes breeding this morph very exciting.', 'carpet6.png');
INSERT INTO `tbl_snakes` VALUES(37, 'carpet', 'Jungle', 'These pythons are some of the most vividly colored pythons.  We have some beautiful Python Pete and unknown bloodlines that will take your breath away.  They are beautiful and we have both banded and striped jungles.  There will always be room at Australian Addiction Reptiles for jungle carpets.', 'carpet7.png');
INSERT INTO `tbl_snakes` VALUES(38, 'carpet', 'Tiger Coastal', 'Tigers are another coastal carpet morph that are named for their wide stripes and yellow and black coloration.  Don''t mistake these guys for a tri-stripe coastal, a more common and less colorful pattern varient, as these guys are quite different.', 'carpet8.png');
INSERT INTO `tbl_snakes` VALUES(39, 'carpet', 'Zebra Jaguar', 'In 2009, we produced the first US CBB zebra jaguar (others were produced previously in Europe by the originator of the zebra morph, Paul Harris).  The zebra jaguar carpet python is a designer morph of carpet python created by breeding a zebra jungle carpet with a jaguar coastal carpet python.  Mixing the two morphs results in a nice combination with an interesting dark pinstripe pattern on a nice yellow background.  Bred to a normal, the resulting offspring will be zebra jaguars, jaguars, zebras, and normals.', 'carpet9.png');
INSERT INTO `tbl_snakes` VALUES(40, 'carpet', 'Zebra Jungle', 'The zebra is a pattern morph of the jungle carpet python.  This is a co-dominant mutation and breeding two together can make a patternless super zebra.  Zebras are visually appealing and will be a popular morph for many years to come.', 'carpet10.png');
