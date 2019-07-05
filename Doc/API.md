# Backend-API

### HTTPS
we now use apidoc to generate API documents.
doc of API doc http://apidocjs.com/
write doc using Javadoc in java codes and use 
> apidoc -i Code\backend\ -o Doc\apidoc 

to update existing apidoc

** fell free to change if you're implementing corresponding work **
** some detail API is described in kanCloud API docs" **
** link: https://www.kancloud.cn/zhaoxuyang13/yoke/1148255 **

1. "/course"
    * value = "/" Method = GET, parameter = courseID 
    * value = "/" Method = POST, content = search Data
    * value = "/update" Method = GET, Parameter = requestURL,Cookie  (Only used by admin)

2. "/user"
    * value = "/" Method = GET, parameter = userID

3. "/schedule"
    * value = "/" Method = GET, parameter = userID
    * value = "/" Method = POST, content = unsheduled data
    
4. "/comment"
    * value = "/" Restful API

5. "/review"
    * value = "/" Restful API

6. "/highlight"
    * value = "/" Restful API    