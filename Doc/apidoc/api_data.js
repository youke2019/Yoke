define({ "api": [
  {
    "type": "post",
    "url": "/courses/comments/add:",
    "title": "",
    "name": "addComment",
    "description": "<p>添加评论</p>",
    "group": "CourseComment",
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/comments/add"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "    {\n\t\"course_id\":\"SE101\",\n\t\"user_id\":84514,\n\t\"course_comment_content\":\"ics是交大的镇校神课\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseCommentController.java",
    "groupTitle": "CourseComment"
  },
  {
    "type": "get",
    "url": "/courses/comments/ban:",
    "title": "",
    "description": "<p>封禁评论</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Interger",
            "optional": false,
            "field": "comment_id",
            "description": ""
          }
        ]
      }
    },
    "name": "banComment",
    "group": "CourseComment",
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/comments/ban?comment_id=2"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseCommentController.java",
    "groupTitle": "CourseComment"
  },
  {
    "type": "get",
    "url": "/courses/comments/delete:",
    "title": "",
    "description": "<p>删除评论</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Interger",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "name": "deleteComment",
    "group": "CourseComment",
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/comments/delete?comment_id=3"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseCommentController.java",
    "groupTitle": "CourseComment"
  },
  {
    "type": "get",
    "url": "/courses/comments/find:",
    "title": "",
    "name": "getcomment",
    "description": "<p>获得课程评论</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "group": "CourseComment",
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/comments/find"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "[\n    {\n        \"course_comment_id\": 1,\n        \"course_id\": \"41899\",\n        \"course_comment_time\": \"6P467\",\n        \"course_comment_content\": \"H7I2K\",\n        \"user_id\": 79832,\n        \"isbanned\": true,\n        \"course_comment_praise_point\": -1432851621\n    }\n    ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseCommentController.java",
    "groupTitle": "CourseComment"
  },
  {
    "type": "get",
    "url": "/courses/comments/praise:",
    "title": "",
    "description": "<p>点赞评论</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Interger",
            "optional": false,
            "field": "course_comment_id",
            "description": ""
          }
        ]
      }
    },
    "name": "praiseComment",
    "group": "CourseComment",
    "sampleRequest": [
      {
        "url": "example: /course/comments/praise?user_id=1&course_comment_id=2"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseCommentController.java",
    "groupTitle": "CourseComment"
  },
  {
    "type": "post",
    "url": "/courses/comments/reply:",
    "title": "",
    "description": "<p>回复</p>",
    "name": "replyComment",
    "group": "CourseComment",
    "success": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "    {\n\t\"course_comment_id\":1,\n\t\"user_id\":84514,\n\t\"course_comment_reply_content\":\"说的很中肯\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseCommentController.java",
    "groupTitle": "CourseComment"
  },
  {
    "type": "get",
    "url": "/courses/comments/unban:",
    "title": "",
    "description": "<p>解禁评论</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Interger",
            "optional": false,
            "field": "comment_id",
            "description": ""
          }
        ]
      }
    },
    "name": "unbanComment",
    "group": "CourseComment",
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/comments/unban?comment_id=2"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseCommentController.java",
    "groupTitle": "CourseComment"
  },
  {
    "type": "get",
    "url": "/courses/comments/unpraise:",
    "title": "",
    "description": "<p>取消点赞评论</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Interger",
            "optional": false,
            "field": "course_comment_id",
            "description": ""
          }
        ]
      }
    },
    "name": "unpraiseComment",
    "group": "CourseComment",
    "sampleRequest": [
      {
        "url": "example: /course/comments/unpraise?user_id=1&course_comment_id=2"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseCommentController.java",
    "groupTitle": "CourseComment"
  },
  {
    "type": "post",
    "url": "/courses/evaluates/add:",
    "title": "",
    "name": "addEvaluation",
    "description": "<p>添加评测</p>",
    "group": "CourseEvaluate",
    "sampleRequest": [
      {
        "url": "/course/evaluates/add"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "    {\n\t\"course_id\":\"SE101\",  //必填\n\t\"user_id\":\"01231\",   //必填\n\t\"evaluate_point\":5,   //必填\n\t\"给分情况\":\"给分高\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseEvaluateController.java",
    "groupTitle": "CourseEvaluate"
  },
  {
    "type": "get",
    "url": "/courses/evaluates/find",
    "title": "",
    "name": "findEvaluation",
    "description": "<p>获取课程评测</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course_id",
            "description": ""
          }
        ]
      }
    },
    "group": "CourseEvaluate",
    "sampleRequest": [
      {
        "url": "/course/evaluates/find?course_id=SE101"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[{\n        \"evaluate_id\": 4,\n        \"evaluate_time\": \"2019-07-22 14:03:35\",\n        \"user_id\": \"01231\",\n        \"course_id\": \"SE101\",\n        \"evaluate_content\": {\n            \"course_id\": \"SE101\",\n            \"evaluate_id\": 4,\n            \"给分情况\": \"给分高\",\n            \"user_id\": \"01231\",\n            \"evaluate_point\": 5\n        },\n        \"evaluate_praise_point\": 0,\n        \"current_user_praise\": false,\n        \"courseEvaluationPraiseList\": []\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseEvaluateController.java",
    "groupTitle": "CourseEvaluate"
  },
  {
    "type": "get",
    "url": "/courses/evaluates/praise",
    "title": "",
    "group": "CourseEvaluate",
    "name": "praiseEvaluation",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Interger",
            "optional": false,
            "field": "course_evaluate_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "description": "<p>点赞</p>",
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseEvaluateController.java",
    "groupTitle": "CourseEvaluate"
  },
  {
    "type": "get",
    "url": "/courses/evaluates/unpraise",
    "title": "",
    "group": "CourseEvaluate",
    "name": "unpraiseEvaluation",
    "description": "<p>取消点赞</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Interger",
            "optional": false,
            "field": "course_evaluate_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseEvaluateController.java",
    "groupTitle": "CourseEvaluate"
  },
  {
    "type": "get",
    "url": "/courses/moments/find",
    "title": "",
    "group": "CourseMoment",
    "description": "<p>精彩瞬间获取部分序列</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "serialNumber1",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "serialNumber2",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseGreatMomentController.java",
    "groupTitle": "CourseMoment",
    "name": "GetCoursesMomentsFind"
  },
  {
    "name": "commentCourseMoment",
    "group": "CourseMoment",
    "description": "<p>评论课程精彩瞬间</p>",
    "success": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n\"video_id\":5,\n\"user_id\":\"01231\",\n\"video_comment_content\":\"有趣\"\n}",
          "type": "json"
        }
      ]
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseGreatMomentController.java",
    "groupTitle": "CourseMoment"
  },
  {
    "name": "findCourseMoment",
    "description": "<p>查找所有精彩瞬间</p>",
    "group": "CourseMoment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseGreatMomentController.java",
    "groupTitle": "CourseMoment"
  },
  {
    "type": "get",
    "url": "images/",
    "title": "",
    "name": "getFile",
    "description": "<p>获取图片或者视频文件</p>",
    "group": "CourseMoment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": "http://47.103.30.166:8000/images/e88affabfdb142d2b70e13bf9ea086d7.mp4",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseGreatMomentController.java",
    "groupTitle": "CourseMoment"
  },
  {
    "type": "post",
    "url": "courses/moments/post",
    "title": "",
    "name": "postCourseMoment",
    "description": "<p>发布课程精彩瞬间</p>",
    "group": "CourseMoment",
    "success": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n\"user_id\":\"01231\",\n\"post_text\":\"我这门课是木课，嘻嘻\",\n\"video_type\":\"i\",   //i:图片，v:视频，n:无\n\"image_url\":\"ipads.sjtu.edu.cn/se101\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseGreatMomentController.java",
    "groupTitle": "CourseMoment"
  },
  {
    "name": "praiseCourseMoment",
    "description": "<p>对课程精彩瞬间进行点赞</p>",
    "group": "CourseMoment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "video_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseGreatMomentController.java",
    "groupTitle": "CourseMoment"
  },
  {
    "name": "unpraiseCourseMoment",
    "description": "<p>对课程精彩瞬间取消点赞</p>",
    "group": "CourseMoment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "video_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseGreatMomentController.java",
    "groupTitle": "CourseMoment"
  },
  {
    "type": "post",
    "url": "/courses/moments/upload",
    "title": "",
    "name": "uploadFile",
    "description": "<p>上传图片或者视频文件</p>",
    "group": "CourseMoment",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseGreatMomentController.java",
    "groupTitle": "CourseMoment"
  },
  {
    "type": "post",
    "url": "/courses/answers/add",
    "title": "",
    "description": "<p>添加回答</p>",
    "name": "addAnswer",
    "group": "CourseQuestion",
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/answers/add"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "{\n\t\"question_id\":3,\n\t\"user_id\":\"01231\",\n\t\"answer_content\":\"这是一个好问题\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseQuestionController.java",
    "groupTitle": "CourseQuestion"
  },
  {
    "type": "post",
    "url": "/courses/questions/add",
    "title": "",
    "description": "<p>添加提问</p>",
    "name": "addQuestion",
    "group": "CourseQuestion",
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/questions/add"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n\t\"course_id\":\"01190\",\n\t\"user_id\":\"02690\",\n\t\"question_content\":\"上课有趣吗\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseQuestionController.java",
    "groupTitle": "CourseQuestion"
  },
  {
    "type": "get",
    "url": "/courses/questions/find",
    "title": "",
    "description": "<p>查找课程提问</p>",
    "name": "findQuestion",
    "group": "CourseQuestion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/questions/find?course_id=66974&user_id=01231"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "[\n    {\n        \"question_id\": 2,\n        \"user_id\": \"02690\",\n        \"course_id\": \"83374\",\n        \"question_content\": \"N7F06OYB391SU39BJJF\",\n        \"question_time\": \"K2NX15\",\n        \"question_isbanned\": false,\n        \"question_praise_point\": -1118681120,\n        \"courseAnswerList\": [\n            {\n                \"answer_id\": 3,\n                \"question_id\": 2,\n                \"user_id\": \"66089\",\n                \"answer_content\": \"G7C324I5J5G6U4OBNPYGC502XW326NYJOQZE8V0GDZDC0PE7VM6H86O3042C1U44RI913S0PP\",\n                \"answer_time\": \"J55\",\n                \"answer_isbanned\": true,\n                \"answer_praise_point\": -769,\n                \"current_user_praise\": false,\n                \"courseAnswerPraiseList\": []\n            },\n            {\n                \"answer_id\": 5,\n                \"question_id\": 2,\n                \"user_id\": \"66089\",\n                \"answer_content\": \"1830S56S72VU1Z27Y3O71DWP4I3E7OEQ629J29KFMBK80V1R7NSNJ67T5Y8ZBPM3\",\n                \"answer_time\": \"51K\",\n                \"answer_isbanned\": false,\n                \"answer_praise_point\": -2088129467,\n                \"current_user_praise\": false,\n                \"courseAnswerPraiseList\": [\n                    {\n                        \"answer_praise_id\": 9,\n                        \"user_id\": \"85373\",\n                        \"answer_id\": 5\n                    }\n                ]\n            }\n        ],\n        \"courseQuestionPraiseList\": [],\n        \"current_user_praise\": false\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseQuestionController.java",
    "groupTitle": "CourseQuestion"
  },
  {
    "type": "get",
    "url": "/courses/answers/praise",
    "title": "",
    "description": "<p>点赞回答</p>",
    "name": "praiseAnswers",
    "group": "CourseQuestion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "answer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/answers/praise?answer_id=3&user_id=01231"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseQuestionController.java",
    "groupTitle": "CourseQuestion"
  },
  {
    "type": "get",
    "url": "/courses/questions/praise",
    "title": "",
    "description": "<p>对问题点赞</p>",
    "name": "praiseQuestion",
    "group": "CourseQuestion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "question_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/questions/praise?question_id=3&user_id=01231"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseQuestionController.java",
    "groupTitle": "CourseQuestion"
  },
  {
    "type": "get",
    "url": "/courses/answers/unpraise",
    "title": "",
    "description": "<p>取消回答点赞</p>",
    "name": "unpraiseAnswers",
    "group": "CourseQuestion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "answer_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/answers/unpraise?answer_id=3&user_id=01231"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseQuestionController.java",
    "groupTitle": "CourseQuestion"
  },
  {
    "type": "get",
    "url": "/courses/questions/unpraise",
    "title": "",
    "description": "<p>取消问题点赞</p>",
    "name": "unpraiseQuestion",
    "group": "CourseQuestion",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "question_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          }
        ]
      }
    },
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/courses/questions/unpraise?question_id=3&user_id=01231"
      }
    ],
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseMessage/CourseQuestionController.java",
    "groupTitle": "CourseQuestion"
  },
  {
    "type": "get",
    "url": "courses/recommend/find",
    "title": "",
    "description": "<p>获得用户的推荐课程</p>",
    "name": "CoursesRecommend",
    "group": "CourseRecommend",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "size",
            "description": ""
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "[\n    {\n        \"course_id\": \"LA116\",\n        \"course_name\": \"刑法分论\",\n        \"course_hours\": 48,\n        \"course_credits\": 3.0,\n        \"general\": false,\n        \"general_type\": \"\",\n        \"course_deptname\": \"凯原法学院\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseRecommendController.java",
    "groupTitle": "CourseRecommend"
  },
  {
    "type": "get",
    "url": "/courses/recommend/data/generate",
    "title": "",
    "description": "<p>获得机器学习推荐课程所需要的DataModel，适用于开发时期由于数据量不足，生成模拟数据</p>",
    "group": "CourseRecommend",
    "name": "DataGeneration______________",
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseRecommendController.java",
    "groupTitle": "CourseRecommend"
  },
  {
    "type": "get",
    "url": "courses/recommend/data/load",
    "title": "",
    "description": "<p>将评测中的数据导入DataModel</p>",
    "name": "loadEvaluationData",
    "group": "CourseRecommend",
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseRecommendController.java",
    "groupTitle": "CourseRecommend"
  },
  {
    "type": "get",
    "url": "/manager/signin",
    "title": "",
    "name": "ManagerSignIn",
    "group": "Manager",
    "description": "<p>管理员登录功能，检查了账户是否存在与密码是否正确</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n \"error_msg\":\"password incorrect\",\n \"success\":false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Manager/AdminController.java",
    "groupTitle": "Manager"
  },
  {
    "type": "get",
    "url": "/manager/signup",
    "title": "",
    "name": "ManagerSignUp",
    "group": "Manager",
    "description": "<p>管理员注册，检查了账户名是否已经存在</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "account",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n    \"error_msg\":\"account already exists\",\n    \"success\":false\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Manager/AdminController.java",
    "groupTitle": "Manager"
  },
  {
    "type": "post",
    "url": "/courses/search",
    "title": "",
    "description": "<p>根据条件搜索课程,通过post发送请求，请求参数通过json传输，json数据示例如下，所有的数据项均可为空， 即可以只有course_id的信息，所有的参数项中，course_id,course_name,teacher_name,building只能有一个，其他参数可以传递一个或者多个。</p>",
    "name": "SearchCourseInfo",
    "group": "courses",
    "version": "1.0.0",
    "header": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{ \"course_id\": \"SE101\",\n  \"course_name\":\"计算机系统基础（1）\",\n  \"teacher_name\":\"藏斌宇\",\n  \"course_types\":[\"0\"],        // 0:非通识，1：通识\n  \"general_types\":[\"人文学科\"],   //\"社会学科\",\"人文学科\",\"自然学科\",\"工程科学与技术\",\"\",\n  \"weekdays\":[1,2],\n  \"begin_sec\":[1,2,3],\n  \"end_sec\":[3,4,5],\n  \"building\":\"东上院\",\n  \"course_credits\":[2,3,4],\n  \"dept_name\":\"电子信息与电气工程\",\n  \"years\":2018,\n  \"semester\":1          //1:第一学期，2：第二学期，3:夏季学期\n   }",
          "type": "json"
        },
        {
          "title": "Response-Example:",
          "content": "[\n    {\n        \"course_id\": \"SE101\",\n        \"course_name\": \"计算机系统基础（1）\",\n        \"course_hours\": 80,\n        \"course_credits\": 5,\n        \"general\": false,\n        \"general_type\": \"\",\n        \"course_deptname\": \"电子信息与电气工程学院\"\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseController.java",
    "groupTitle": "courses"
  },
  {
    "type": "get",
    "url": "/courses/specific",
    "title": "",
    "description": "<p>获取课程的具体信息</p>",
    "name": "SpecificCourseInfo",
    "group": "courses",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "course_id",
            "description": ""
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n    \"course_id\": \"SE101\",\n    \"course_name\": \"计算机系统基础（1）\",\n    \"course_hours\": 80,\n    \"course_credits\": 5,\n    \"general\": false,\n    \"general_type\": \"\",\n    \"course_deptname\": \"电子信息与电气工程学院\",\n    \"classes\": [\n        {\n            \"classname\": \"2018-2019-1-SE101-392689\",\n            \"course_id\": \"SE101\",\n            \"teacher_id\": \"11145\",\n            \"teacher_name\": \"臧斌宇\",\n            \"teachers\": \"11145/臧斌宇/教授[电子信息与电气工程学院];10886/陈榕/副教授[电子信息与电气工程学院]\",\n            \"course_participants\": 48,\n            \"class_note\": null,\n            \"year\": 2018,\n            \"semester\": 1,\n            \"classSegments\": [\n                {\n                    \"class_sec_id\": 7358,\n                    \"classname\": \"2018-2019-1-SE101-392689\",\n                    \"classroom\": \"东上院102\",\n                    \"begin_week\": 1,\n                    \"end_week\": 16,\n                    \"begin_sec\": 7,\n                    \"end_sec\": 8,\n                    \"week\": 2,\n                    \"odd_or_even\": \"b\"\n                }\n                ]\n                }\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseController.java",
    "groupTitle": "courses"
  },
  {
    "type": "get",
    "url": "courses/hot",
    "title": "",
    "description": "<p>获取热门课程</p>",
    "group": "courses",
    "name": "hotCoursesInfo",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "user_id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "number",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseController.java",
    "groupTitle": "courses"
  },
  {
    "type": "get",
    "url": "/courses/update",
    "title": "",
    "description": "<p>拉取并更新教务处数据</p>",
    "name": "updateCourseInfoFromJWC",
    "group": "courses",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "url",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Cookies",
            "description": ""
          }
        ]
      }
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/Course/CourseController.java",
    "groupTitle": "courses"
  },
  {
    "type": "get",
    "url": "/profile",
    "title": "",
    "description": "<p>用Oauth2的access_token获取用户信息</p>",
    "name": "getProfile",
    "group": "jaccount",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": ""
          }
        ]
      }
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/JaccountController.java",
    "groupTitle": "jaccount"
  },
  {
    "type": "get",
    "url": "/login",
    "title": "",
    "description": "<p>用Oauth2的code进行user登陆</p>",
    "name": "login",
    "group": "jaccount",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": ""
          }
        ]
      }
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/JaccountController.java",
    "groupTitle": "jaccount"
  },
  {
    "type": "post",
    "url": "/report/answer",
    "title": "",
    "description": "<p>举报课程回答</p>",
    "name": "reportAnswer",
    "group": "report",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/report/answer"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "    {\n\n    \"answer_comment_id\":9,\n    \"user_id\"：84514，\n    \"answer_comment_report_reason\":\"污蔑老师\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/ReportController.java",
    "groupTitle": "report"
  },
  {
    "type": "post",
    "url": "/report/comment",
    "title": "",
    "description": "<p>举报课程评论</p>",
    "name": "reportComment",
    "group": "report",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/report/comment"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "    {\n\n    \"course_comment_id\":9,\n    \"user_id\"：84514，\n    \"course_comment_report_reason\":\"污蔑老师\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/ReportController.java",
    "groupTitle": "report"
  },
  {
    "type": "post",
    "url": "/report/question",
    "title": "",
    "description": "<p>举报课程问题</p>",
    "name": "reportQuestion",
    "group": "report",
    "version": "1.0.0",
    "sampleRequest": [
      {
        "url": "47.103.30.166:8000/report/question"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Post-Example:",
          "content": "    {\n\n    \"question_comment_id\":9,\n    \"user_id\"：84514，\n    \"question_comment_report_reason\":\"污蔑老师\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/ReportController.java",
    "groupTitle": "report"
  },
  {
    "type": "post",
    "url": "/users/feedback/add",
    "title": "",
    "name": "addFeedback",
    "description": "<p>添加反馈</p>",
    "group": "users",
    "success": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"user_id\": \"ID001\",\n    \"content\": \"我不要你觉得，我要我觉得\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/UserController.java",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/feedback/all",
    "title": "",
    "name": "allFeedback",
    "description": "<p>查看所有反馈</p>",
    "group": "users",
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/UserController.java",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/ban",
    "title": "",
    "description": "<p>封禁</p>",
    "name": "banUser",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/UserController.java",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/all",
    "title": "",
    "description": "<p>获取所有用户信息</p>",
    "name": "getAllUser",
    "group": "users",
    "version": "1.0.0",
    "header": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "[\n    {\n        \"ID\":\"userID-string\",\n        \"name\":\"刘政委\",\n        \"major\":\"软件工程\",\n        \"admissionYear\":2017,\n        \"sex\": 'M' or 'F',\n        \"department\": \"电子信息与电气工程学院\",\n        \"nickname\": \"昵称\",\n        \"banned\": True or False, //封禁\n    }\n]",
          "type": "json"
        }
      ]
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/UserController.java",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/specific",
    "title": "",
    "description": "<p>根据Id获取用户信息</p>",
    "name": "getUserByID",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "header": {
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n        \"ID\":\"userID-string\",\n        \"name\":\"刘政委\",\n        \"major\":\"软件工程\",\n        \"admissionYear\":2017,\n        \"sex\": 'M' or 'F',\n        \"department\": \"电子信息与电气工程学院\",\n        \"nickname\": \"昵称\",\n        \"banned\": True or False, //封禁\n}",
          "type": "json"
        }
      ]
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/UserController.java",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/users/unban",
    "title": "",
    "description": "<p>解禁</p>",
    "name": "unbanUser",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "filename": "backend/src/main/java/com/yoke/backend/Controller/UserController.java",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/users/avatar/upload",
    "title": "",
    "name": "uploadFile",
    "description": "<p>上传头像</p>",
    "group": "users",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "file",
            "optional": false,
            "field": "file",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "backend/src/main/java/com/yoke/backend/Controller/UserController.java",
    "groupTitle": "users"
  }
] });
