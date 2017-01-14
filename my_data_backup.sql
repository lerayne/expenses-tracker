# ************************************************************
# Sequel Pro SQL dump
# Версия 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Адрес: 127.0.0.1 (MySQL 5.5.42)
# Схема: expenses
# Время создания: 2017-01-14 22:35:37 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Дамп таблицы accounts
# ------------------------------------------------------------

DROP TABLE IF EXISTS `accounts`;

CREATE TABLE `accounts` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Дамп таблицы beneficiars
# ------------------------------------------------------------

DROP TABLE IF EXISTS `beneficiars`;

CREATE TABLE `beneficiars` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Дамп таблицы beneficiars_transactions_map
# ------------------------------------------------------------

DROP TABLE IF EXISTS `beneficiars_transactions_map`;

CREATE TABLE `beneficiars_transactions_map` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Дамп таблицы categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Дамп таблицы subcategories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `subcategories`;

CREATE TABLE `subcategories` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;



# Дамп таблицы transactions
# ------------------------------------------------------------

DROP TABLE IF EXISTS `transactions`;

CREATE TABLE `transactions` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user` int(11) unsigned NOT NULL,
  `created` bigint(13) unsigned NOT NULL,
  `updated` bigint(13) unsigned NOT NULL,
  `official_date` bigint(13) unsigned NOT NULL,
  `name` varchar(255) NOT NULL DEFAULT '',
  `category` smallint(5) DEFAULT NULL,
  `subcategory` smallint(5) unsigned DEFAULT NULL,
  `currency` tinyint(3) unsigned DEFAULT NULL,
  `income` tinyint(1) unsigned NOT NULL DEFAULT '0',
  `value` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `created` (`created`),
  KEY `updated` (`updated`),
  KEY `category` (`category`),
  KEY `subcategory` (`subcategory`),
  KEY `income` (`income`),
  KEY `official_date` (`official_date`),
  KEY `user` (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;

INSERT INTO `transactions` (`id`, `user`, `created`, `updated`, `official_date`, `name`, `category`, `subcategory`, `currency`, `income`, `value`)
VALUES
	(1,1,1483994823166,1483994823166,1483994823166,'Кино Sing',NULL,NULL,NULL,0,-165),
	(2,1,1483994909094,1483994909094,1483994909094,'За корпус',NULL,NULL,NULL,1,1750),
	(3,1,1484424929553,1484424929553,1484424929553,'маме за Аренду',NULL,NULL,NULL,0,-3000),
	(4,1,1484425045791,1484425045791,1484425045791,'маме квартплата',NULL,NULL,NULL,0,-1500),
	(5,1,1484425259203,1484425259203,1484425259203,'Взнос за микроволновку',NULL,NULL,NULL,0,-2000),
	(6,1,1484426944984,1484426944984,1484426944984,'Павлоград газ',NULL,NULL,NULL,0,-3380),
	(7,1,1484427158674,1484427158674,1484427158674,'Психолог',NULL,NULL,NULL,0,-301),
	(8,1,1484427334307,1484427334307,1484427334307,'Такси',NULL,NULL,NULL,0,-63),
	(9,1,1484427460945,1484427460945,1484427460945,'Такси',NULL,NULL,NULL,0,-50),
	(10,1,1484427564652,1484427564652,1484427564652,'Коту анализы',NULL,NULL,NULL,0,-470),
	(11,1,1484427627564,1484427627564,1484427627564,'Юлиной маме добавка',NULL,NULL,NULL,0,-603),
	(12,1,1484427689604,1484427689604,1484427689604,'Игра на Steam',NULL,NULL,NULL,0,-212),
	(13,1,1484427783638,1484427783638,1484427783638,'Коммуналка',NULL,NULL,NULL,0,-1123),
	(14,1,1484427798176,1484427798176,1484427798176,'За операцию Лаки',NULL,NULL,NULL,0,-2010),
	(15,1,1484427848579,1484427848579,1484427848579,'Зоокотам добавка',NULL,NULL,NULL,0,-200),
	(16,1,1484427884288,1484427884288,1484427884288,'Коммуналка',NULL,NULL,NULL,0,-203),
	(17,1,1484427937476,1484427937476,1484427937476,'Первый платеж за принтер',NULL,NULL,NULL,0,-1336),
	(18,1,1484427992650,1484427992650,1484427992650,'Батарейки',NULL,NULL,NULL,0,-394),
	(19,1,1484428005580,1484428005580,1484428005580,'За мой хостинг',NULL,NULL,NULL,0,-368),
	(20,1,1484428039709,1484428039709,1484428039709,'Игра на steam',NULL,NULL,NULL,0,-67),
	(21,1,1484428070073,1484428070073,1484428070073,'Overwatch',NULL,NULL,NULL,0,-705),
	(22,1,1484428129290,1484428129290,1484428129290,'Подарки Юле на НГ',NULL,NULL,NULL,0,-431),
	(23,1,1484428171265,1484428171265,1484428171265,'Касеты для бритвы',NULL,NULL,NULL,0,-429),
	(24,1,1484428187146,1484428187146,1484428187146,'Психолог',NULL,NULL,NULL,0,-603),
	(25,1,1484428218830,1484428218830,1484428218830,'Программа для iPad',NULL,NULL,NULL,0,-138),
	(26,1,1484428260137,1484428260137,1484428260137,'Наушники Aftershokz (костные)',NULL,NULL,NULL,0,-3000),
	(27,1,1484428311658,1484428311658,1484428311658,'Электрика за 2 мес.',NULL,NULL,NULL,0,-891),
	(28,1,1484428558300,1484428558300,1484428558300,'Взнос за часы',NULL,NULL,NULL,0,-1155),
	(29,1,1484428589219,1484428589219,1484428589219,'Зоокотам',NULL,NULL,NULL,0,-1000),
	(30,1,1484428595423,1484428595423,1484428595423,'Папе',NULL,NULL,NULL,0,-1700),
	(31,1,1484428613155,1484428613155,1484428613155,'Юлиной маме стандарт',NULL,NULL,NULL,0,-6030),
	(32,1,1484428646493,1484428646493,1484428646493,'Зарплата за декабрь 16',NULL,NULL,NULL,1,52108),
	(33,1,1484428677182,1484428677182,1484428677182,'остаток от декабря 16',NULL,NULL,NULL,1,1602),
	(34,1,1484431302169,1484431302169,1484431302169,'Аренда борда',NULL,NULL,NULL,0,-150),
	(35,1,1484431372775,1484431372775,1484431372775,'Скипасс на Протасовом',NULL,NULL,NULL,0,-315),
	(36,1,1484431576075,1484431576075,1484431576075,'Оплата office 365',NULL,NULL,NULL,0,-192),
	(37,1,1484431616014,1484431616014,1484431616014,'Лекарства',NULL,NULL,NULL,0,-120),
	(38,1,1484431706593,1484431706593,1484431706593,'Павлоград электрика',NULL,NULL,NULL,0,-113),
	(39,1,1484431825923,1484431825923,1484431825923,'Юле косметика ',NULL,NULL,NULL,0,-350),
	(40,1,1484432159460,1484432159460,1484432159460,'Юле лично',NULL,NULL,NULL,0,-1000);

/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
