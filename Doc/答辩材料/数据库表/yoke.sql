/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     2019/9/1 15:48:35                            */
/*==============================================================*/


drop table if exists admins;

drop table if exists answer;

drop table if exists answer_praise;

drop table if exists answer_report;

drop table if exists class_segments;

drop table if exists course;

drop table if exists course_class;

drop table if exists course_comment;

drop table if exists course_comment_praise;

drop table if exists course_comment_report;

drop table if exists course_evaluate;

drop table if exists course_praise;

drop table if exists course_recommend_data_model;

drop table if exists feedback;

drop table if exists question;

drop table if exists question_praise;

drop table if exists question_report;

drop table if exists system_message;

drop table if exists user;

drop table if exists video;

drop table if exists video_comment;

drop table if exists video_comment_report;

drop table if exists video_praise;

drop table if exists video_report;

/*==============================================================*/
/* Table: admins                                                */
/*==============================================================*/
create table admins
(
   admin_id             int not null auto_increment,
   account              varchar(20),
   password             varchar(20),
   primary key (admin_id)
);

/*==============================================================*/
/* Table: answer                                                */
/*==============================================================*/
create table answer
(
   answer_id            int not null auto_increment,
   ID                   varchar(40),
   question_id          int,
   answer_content       varchar(500),
   answer_time          varchar(30),
   answer_isbanned      bool,
   answer_praise_point  int,
   primary key (answer_id)
);

/*==============================================================*/
/* Table: answer_praise                                         */
/*==============================================================*/
create table answer_praise
(
   answer_praise_id     int not null auto_increment,
   ID                   varchar(40),
   answer_id            int,
   primary key (answer_praise_id)
);

/*==============================================================*/
/* Table: answer_report                                         */
/*==============================================================*/
create table answer_report
(
   answer_report_reason varchar(300),
   answer_report_id     int not null auto_increment,
   ID                   varchar(40),
   answer_id            int,
   answer_report_time   varchar(30),
   answer_report_ishandled bool,
   primary key (answer_report_id)
);

/*==============================================================*/
/* Table: class_segments                                        */
/*==============================================================*/
create table class_segments
(
   classroom            varchar(30),
   begin_sec            int,
   end_sec              int,
   week                 int,
   class_sec_id         int not null auto_increment,
   classname            char(30),
   begin_week           int,
   end_week             int,
   odd_or_even          char(1),
   primary key (class_sec_id)
);

/*==============================================================*/
/* Table: course                                                */
/*==============================================================*/
create table course
(
   course_id            varchar(6) not null,
   course_name          varchar(200),
   course_hours         int,
   course_credits       int,
   general              bool,
   general_type         varchar(20),
   course_deptname      varchar(60),
   course_praise_point  int,
   primary key (course_id)
);

/*==============================================================*/
/* Table: course_class                                          */
/*==============================================================*/
create table course_class
(
   teacher_id           char(20),
   teacher_name         varchar(50),
   teachers             varchar(300),
   classname            char(30) not null,
   course_id            varchar(6),
   course_participants  int,
   class_note           varchar(1000),
   year                 int,
   semester             int,
   primary key (classname)
);

/*==============================================================*/
/* Table: course_comment                                        */
/*==============================================================*/
create table course_comment
(
   course_comment_content varchar(1000),
   course_comment_time  varchar(30),
   course_comment_id    int not null auto_increment,
   course_id            varchar(6),
   ID                   varchar(40),
   course_comment_isbanned bool,
   course_comment_praise_point int,
   primary key (course_comment_id)
);

/*==============================================================*/
/* Table: course_comment_praise                                 */
/*==============================================================*/
create table course_comment_praise
(
   course_comment_praise_id int not null auto_increment,
   ID                   varchar(40),
   course_comment_id    int,
   primary key (course_comment_praise_id)
);

/*==============================================================*/
/* Table: course_comment_report                                 */
/*==============================================================*/
create table course_comment_report
(
   course_comment_report_reason varchar(300),
   course_comment_report_id int not null auto_increment,
   course_comment_id    int,
   ID                   varchar(40),
   course_comment_report_time varchar(30),
   course_comment_report_ishandled bool,
   primary key (course_comment_report_id)
);

/*==============================================================*/
/* Table: course_evaluate                                       */
/*==============================================================*/
create table course_evaluate
(
   course_evaluate_time varchar(30),
   course_evaluate_id   int not null auto_increment,
   ID                   varchar(40),
   course_id            varchar(6),
   course_evaluate_praise_point int,
   course_evaluate_point int,
   primary key (course_evaluate_id)
);

/*==============================================================*/
/* Table: course_praise                                         */
/*==============================================================*/
create table course_praise
(
   course_praise_id     int not null auto_increment,
   ID                   varchar(40),
   course_id            varchar(6),
   primary key (course_praise_id)
);

/*==============================================================*/
/* Table: course_recommend_data_model                           */
/*==============================================================*/
create table course_recommend_data_model
(
   recommend_id         int not null,
   user_id              bigint,
   lcourse_id           bigint,
   evaluate_point       int,
   evaluate_time        bigint,
   primary key (recommend_id)
);

/*==============================================================*/
/* Table: feedback                                              */
/*==============================================================*/
create table feedback
(
   ID                   varchar(40),
   content              varchar(3000),
   time                 varchar(40),
   feedback_id          int not null auto_increment,
   primary key (feedback_id)
);

/*==============================================================*/
/* Table: question                                              */
/*==============================================================*/
create table question
(
   question_id          int not null auto_increment,
   course_id            varchar(6),
   ID                   varchar(40),
   question_content     varchar(200),
   question_time        varchar(30),
   question_isbanned    bool,
   question_praise_point int,
   primary key (question_id)
);

/*==============================================================*/
/* Table: question_praise                                       */
/*==============================================================*/
create table question_praise
(
   question_praise_id   int not null auto_increment,
   ID                   varchar(40),
   question_id          int,
   primary key (question_praise_id)
);

/*==============================================================*/
/* Table: question_report                                       */
/*==============================================================*/
create table question_report
(
   question_report_reason varchar(300),
   question_report_id   int not null auto_increment,
   ID                   varchar(40),
   question_id          int,
   question_report_time varchar(30),
   question_report_ishandled bool,
   primary key (question_report_id)
);

/*==============================================================*/
/* Table: system_message                                        */
/*==============================================================*/
create table system_message
(
   admin_id             int,
   content              varchar(3000),
   image_url            varchar(30),
   time                 varchar(40),
   message_id           int not null auto_increment,
   primary key (message_id)
);

/*==============================================================*/
/* Table: user                                                  */
/*==============================================================*/
create table user
(
   name                 varchar(20),
   major                varchar(40),
   grade                int,
   sex                  char(1),
   department           varchar(40),
   nickname             varchar(20),
   ID                   varchar(40) not null,
   banned               bool,
   avatar_url           varchar(100),
   avator_url           varchar(100),
   primary key (ID)
);

/*==============================================================*/
/* Table: video                                                 */
/*==============================================================*/
create table video
(
   video_id             int not null auto_increment,
   ID                   varchar(40),
   post_time            varchar(40),
   post_text            varchar(300),
   video_url            varchar(100),
   type                 char(1),
   image_url            varchar(30),
   isbanned             bool,
   video_praise_point   int,
   primary key (video_id)
);

/*==============================================================*/
/* Table: video_comment                                         */
/*==============================================================*/
create table video_comment
(
   video_comment_content varchar(300),
   video_comment_time   varchar(30),
   video_comment_id     int not null auto_increment,
   ID                   varchar(40),
   video_id             int,
   isbanned             bool,
   primary key (video_comment_id)
);

/*==============================================================*/
/* Table: video_comment_report                                  */
/*==============================================================*/
create table video_comment_report
(
   video_comment_report_reason varchar(300),
   video_comment_report_id int not null auto_increment,
   ID                   varchar(40),
   video_comment_id     int,
   video_comment_report_time varchar(30),
   video_comment_report_ishandled bool,
   primary key (video_comment_report_id)
);

/*==============================================================*/
/* Table: video_praise                                          */
/*==============================================================*/
create table video_praise
(
   video_praise_id      int not null auto_increment,
   ID                   varchar(40),
   video_id             int,
   primary key (video_praise_id)
);

/*==============================================================*/
/* Table: video_report                                          */
/*==============================================================*/
create table video_report
(
   video_report_reason  varchar(300),
   video_report_id      int not null auto_increment,
   ID                   varchar(40),
   video_id             int,
   video_report_time    varchar(30),
   video_report_ishandled bool,
   primary key (video_report_id)
);

alter table answer add constraint FK_Relationship_34 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table answer add constraint FK_Relationship_5 foreign key (question_id)
      references question (question_id) on delete restrict on update restrict;

alter table answer_praise add constraint FK_Relationship_29 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table answer_praise add constraint FK_Relationship_30 foreign key (answer_id)
      references answer (answer_id) on delete restrict on update restrict;

alter table answer_report add constraint FK_Relationship_11 foreign key (answer_id)
      references answer (answer_id) on delete restrict on update restrict;

alter table answer_report add constraint FK_report_answer foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table class_segments add constraint FK_segment foreign key (classname)
      references course_class (classname) on delete restrict on update restrict;

alter table course_class add constraint FK_Relationship_10 foreign key (course_id)
      references course (course_id) on delete restrict on update restrict;

alter table course_comment add constraint FK_Relationship_3 foreign key (course_id)
      references course (course_id) on delete restrict on update restrict;

alter table course_comment add constraint FK_post_course_comment foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table course_comment_praise add constraint FK_Relationship_23 foreign key (course_comment_id)
      references course_comment (course_comment_id) on delete restrict on update restrict;

alter table course_comment_praise add constraint FK_Relationship_24 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table course_comment_report add constraint FK_Relationship_15 foreign key (course_comment_id)
      references course_comment (course_comment_id) on delete restrict on update restrict;

alter table course_comment_report add constraint FK_reprot_course_comment foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table course_evaluate add constraint FK_Relationship_19 foreign key (course_id)
      references course (course_id) on delete restrict on update restrict;

alter table course_evaluate add constraint FK_evaluate_course foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table course_praise add constraint FK_Relationship_25 foreign key (course_id)
      references course (course_id) on delete restrict on update restrict;

alter table course_praise add constraint FK_Relationship_26 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table feedback add constraint FK_Relationship_36 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table question add constraint FK_Relationship_33 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table question add constraint FK_ask foreign key (course_id)
      references course (course_id) on delete restrict on update restrict;

alter table question_praise add constraint FK_Relationship_27 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table question_praise add constraint FK_Relationship_28 foreign key (question_id)
      references question (question_id) on delete restrict on update restrict;

alter table question_report add constraint FK_Relationship_13 foreign key (question_id)
      references question (question_id) on delete restrict on update restrict;

alter table question_report add constraint FK_Relationship_14 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table system_message add constraint FK_Relationship_35 foreign key (admin_id)
      references admins (admin_id) on delete restrict on update restrict;

alter table video add constraint FK_Relationship_22 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table video_comment add constraint FK_Relationship_7 foreign key (video_id)
      references video (video_id) on delete restrict on update restrict;

alter table video_comment add constraint FK_post_video_comment foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table video_comment_report add constraint FK_Relationship_17 foreign key (video_comment_id)
      references video_comment (video_comment_id) on delete restrict on update restrict;

alter table video_comment_report add constraint FK_Relationship_18 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table video_praise add constraint FK_Relationship_31 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

alter table video_praise add constraint FK_Relationship_32 foreign key (video_id)
      references video (video_id) on delete restrict on update restrict;

alter table video_report add constraint FK_Relationship_8 foreign key (video_id)
      references video (video_id) on delete restrict on update restrict;

alter table video_report add constraint FK_Relationship_9 foreign key (ID)
      references user (ID) on delete restrict on update restrict;

