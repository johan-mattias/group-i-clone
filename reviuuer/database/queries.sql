CREATE DATABASE reviuuer CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
 
CREATE USER 'student'@'%' IDENTIFIED BY 'student18';

CREATE TABLE reviuuer.user (
    id int NOT NULL AUTO_INCREMENT,
    userName varchar(255),
    pWord varchar(255),
	PRIMARY KEY (ID)
);

CREATE TABLE reviuuer.like (
	id int NOT NULL AUTO_INCREMENT,
	user_id int, 
	review_id int,
  	like_type ENUM('like', 'dislike'),
	comment_id int,
	PRIMARY KEY (ID)
);

CREATE TABLE reviuuer.comments (
	id int NOT NULL AUTO_INCREMENT,
	user_id int,
	review_id int,
	comment_text varchar(255),
	PRIMARY KEY (ID)
);

CREATE TABLE reviuuer.review (
	id int NOT NULL AUTO_INCREMENT,
	course_id int,
	teacher_id int,
	quality ENUM('1','2','3','4','5'),
	difficulty ENUM('1','2','3','4','5'), 
	canRecommend bool,
	worthCredits ENUM('1','2','3','4','5'),
	booksReq bool,
	percentageMand ENUM('1','2','3','4','5'),
	exam bool,
	courseReview varchar(255),
	teacherReview varchar(255),
	PRIMARY KEY (ID)
);

CREATE TABLE reviuuer.report (
	id int NOT NULL AUTO_INCREMENT ,
	user_id int,
	review_id int,
	comment_id int,
	description varchar(255),
	PRIMARY KEY (ID)
);

CREATE TABLE reviuuer.course (
	id int NOT NULL AUTO_INCREMENT,
	c_level ENUM('G1', 'G2', 'A1', 'A2'),
	pace_of_study int,
	teaching_form varchar(255),
	course_language ENUM('English', 'Swedish', 'Other'),
	app_code varchar(255),
	course_online bool,
	PRIMARY KEY (ID)
);

CREATE TABLE reviuuer.period (
	id int NOT NULL AUTO_INCREMENT,
	course_id int,
	credits int,
	period int,
	semester ENUM('VT', 'HT'),
	PRIMARY KEY (ID)
);

CREATE TABLE reviuuer.courseAndTeacher (
	id int NOT NULL AUTO_INCREMENT,
	course_id int,
	teacher_id int,
	PRIMARY KEY (ID)
);

CREATE TABLE reviuuer.teacher (
	id int NOT NULL AUTO_INCREMENT,
	first_name varchar(255),
	last_name varchar(255),
	title varchar(255),
	PRIMARY KEY (ID)
);