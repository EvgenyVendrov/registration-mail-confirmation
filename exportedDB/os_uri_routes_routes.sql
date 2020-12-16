-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: os_uri_routes
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `routes`
--

DROP TABLE IF EXISTS `routes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `routes` (
  `mail` varchar(255) NOT NULL,
  `osUri` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `isConfirmed` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `routes`
--

LOCK TABLES `routes` WRITE;
/*!40000 ALTER TABLE `routes` DISABLE KEYS */;
INSERT INTO `routes` VALUES ('evgenyv94@gmail.com','https://dfsdf.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV2Z2VueXY5NEBnbWFpbC5jb20iLCJvc1VyaSI6Imh0dHBzOi8vZGZzZGYuY29tIiwiaWF0IjoxNjA2NTcwMjM4LCJleHAiOjE2MDY2NTY2Mzh9.JkVxUAIbkH7H4vCWTIMCaBoOY5a49izw9BmVdZejjQo',1,'2020-11-28 13:30:38','2020-11-28 13:34:38'),('evgenyv94@gmail.com','https://dfsdf222.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV2Z2VueXY5NEBnbWFpbC5jb20iLCJvc1VyaSI6Imh0dHBzOi8vZGZzZGYyMjIuY29tIiwiaWF0IjoxNjA2NTcwNTAwLCJleHAiOjE2MDY2NTY5MDB9.zyAH7610l4VSwjW66NN6J-8YSiB5GFQauIqctd1aiT8',1,'2020-11-28 13:35:00','2020-11-28 13:35:08'),('evgenyv94@gmail.com','https://dfsdf333.com','eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImV2Z2VueXY5NEBnbWFpbC5jb20iLCJvc1VyaSI6Imh0dHBzOi8vZGZzZGYzMzMuY29tIiwiaWF0IjoxNjA2NTcxMTg1LCJleHAiOjE2MDY2NTc1ODV9.GzJfDcaonZyTNdNmQg9t17-KfmzUzVa-MSQJ_aYMi6I',1,'2020-11-28 13:46:25','2020-11-28 13:46:33');
/*!40000 ALTER TABLE `routes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-11-28 15:47:10
