/*
SQLyog Enterprise - MySQL GUI v8.05 
MySQL - 5.5.5-10.1.30-MariaDB : Database - db_coding_legend
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`db_coding_legend` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `db_coding_legend`;

/*Table structure for table `ms_equipment` */

DROP TABLE IF EXISTS `ms_equipment`;

CREATE TABLE `ms_equipment` (
  `Pk_Equipment_ID` bigint(20) DEFAULT NULL,
  `Equipment_Name` varchar(50) DEFAULT NULL,
  `Equipment_Type` varchar(50) DEFAULT NULL,
  `Equipment_Price` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `ms_equipment` */

insert  into `ms_equipment`(`Pk_Equipment_ID`,`Equipment_Name`,`Equipment_Type`,`Equipment_Price`) values (1,'Glass Shoes','Speed',1200),(2,'Leather Gloves','Defend',900),(3,'Dragon Sword','Attack',1500),(4,'Iron Hammer','Attack',1300),(5,'Harness','Defend',2000);

/*Table structure for table `ms_hero` */

DROP TABLE IF EXISTS `ms_hero`;

CREATE TABLE `ms_hero` (
  `Pk_Hero_ID` bigint(20) DEFAULT NULL,
  `Hero_Name` varchar(50) DEFAULT NULL,
  `Hero_Type` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `ms_hero` */

insert  into `ms_hero`(`Pk_Hero_ID`,`Hero_Name`,`Hero_Type`) values (1,'Miye','Marksman'),(2,'Franci','Tank'),(3,'Jeniper','Fighter'),(4,'Layli','Marksman'),(5,'Seber','Assasin'),(6,'Siklops','Mage'),(7,'Aurori','Mage');

/*Table structure for table `tr_purchase_detail` */

DROP TABLE IF EXISTS `tr_purchase_detail`;

CREATE TABLE `tr_purchase_detail` (
  `Pk_Purchase_Detail_ID` bigint(20) DEFAULT NULL,
  `Fk_Purchase_Header_ID` bigint(20) DEFAULT NULL,
  `Fk_Equipment_ID` bigint(20) DEFAULT NULL,
  `Amount` int(11) DEFAULT NULL,
  `Sub_Total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tr_purchase_detail` */

insert  into `tr_purchase_detail`(`Pk_Purchase_Detail_ID`,`Fk_Purchase_Header_ID`,`Fk_Equipment_ID`,`Amount`,`Sub_Total`) values (1,1,3,1,1500),(2,2,2,1,900),(3,2,3,1,2000),(4,3,1,1,1200),(5,4,2,2,1800);

/*Table structure for table `tr_purchase_header` */

DROP TABLE IF EXISTS `tr_purchase_header`;

CREATE TABLE `tr_purchase_header` (
  `Pk_Purchase_Header_ID` bigint(20) DEFAULT NULL,
  `Fk_Hero_ID` bigint(20) DEFAULT NULL,
  `Purchase_Date` date DEFAULT NULL,
  `Grand_Total` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `tr_purchase_header` */

insert  into `tr_purchase_header`(`Pk_Purchase_Header_ID`,`Fk_Hero_ID`,`Purchase_Date`,`Grand_Total`) values (1,1,'2019-08-05',1500),(2,2,'2019-08-05',2900),(3,5,'2019-08-05',1200),(4,3,'2019-08-06',1800);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
