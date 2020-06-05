/*
Navicat MySQL Data Transfer

Source Server         : darker
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : commerce

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2020-06-04 18:30:23
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for level
-- ----------------------------
DROP TABLE IF EXISTS `level`;
CREATE TABLE `level` (
  `level_id` int(2) NOT NULL AUTO_INCREMENT COMMENT 'id',
  `level` varchar(25) COLLATE utf8_general_mysql500_ci DEFAULT NULL COMMENT '权限',
  PRIMARY KEY (`level_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- ----------------------------
-- Records of level
-- ----------------------------
INSERT INTO `level` VALUES ('1', '超级管理员');
INSERT INTO `level` VALUES ('2', '管理员');
INSERT INTO `level` VALUES ('3', '用户管理员');
INSERT INTO `level` VALUES ('4', '客户');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `user_id` int(25) NOT NULL COMMENT '用户id',
  `user_name` varchar(255) COLLATE utf8_general_mysql500_ci NOT NULL COMMENT '名字',
  `user_pwd` varchar(255) COLLATE utf8_general_mysql500_ci NOT NULL,
  `user_age` int(25) DEFAULT NULL COMMENT '年龄',
  `user_gender` varchar(2) COLLATE utf8_general_mysql500_ci DEFAULT NULL COMMENT '性别',
  `user_address` varchar(255) COLLATE utf8_general_mysql500_ci DEFAULT NULL COMMENT '地址',
  `user_avatar` varchar(255) COLLATE utf8_general_mysql500_ci DEFAULT NULL COMMENT '头像',
  `level_id` int(2) NOT NULL,
  `creatTime` datetime NOT NULL,
  PRIMARY KEY (`user_id`,`level_id`)
) ENGINE=MyISAM AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_general_mysql500_ci;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('1', 'admin', '123', '26', '男', '珠海', '', '1', '2020-06-04 13:31:48');
INSERT INTO `users` VALUES ('2', 'cc', '1314', '28', '男', '北京', null, '3', '2020-06-04 13:31:43');
INSERT INTO `users` VALUES ('3', 'meny', '1325', '18', '男', '上海', null, '3', '2020-06-04 13:31:38');
INSERT INTO `users` VALUES ('4', 'Suunto', '12367', '20', '女', '江苏', null, '3', '2020-06-04 13:31:32');
INSERT INTO `users` VALUES ('5', 'Acton', 'zhangjianlong', '24', '男', '珠海', '', '3', '2020-06-04 13:31:20');
