define({ "api": [
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
    "filename": "backend/src/main/java/com/yoke/backend/Controller/CourseController.java",
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
    "filename": "backend/src/main/java/com/yoke/backend/Controller/CourseController.java",
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
    "filename": "backend/src/main/java/com/yoke/backend/Controller/CourseController.java",
    "groupTitle": "courses"
  }
] });
