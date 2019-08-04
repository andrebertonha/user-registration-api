# User Registration API

### jwt authentication and authorization nodejs / express and mongodb rest apis

+ Instructions
  + clone this repository
  + run yarn install
  + run yarn start
  
+ You can use Postman or Insomnia to test the follow <b> routes </b>

### Request Create user [POST] [localhost:3333/users]
    + Headers
        Accept: application/json
        Content-Type: application/json
    + Parameters - json object
        + email
        + password        
    + Response 201 (application/json) [Created]

### Request User login [POST] [localhost:3333/users/login]
    + Headers
        Accept: application/json
        Content-Type: application/json
    + Parameters - json object
        + email
        + password
    + Response 200 (application/json) [OK]
    
### Request Get user [GET] [localhost:3333/users/me]
    + Bearer Token
    + Response 200 (application/json) [OK]
    
### Request Logout [POST] [localhost:3333/users/me/logout]
    + Bearer Token
    + Response 200 (application/json) [OK]
    
### Request Logout ALL [POST] [localhost:3333/users/me/logoutall]
    + Bearer Token
    + Response 200 (application/json) [OK]
    

    

    
