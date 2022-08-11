# carbon
For the language barrier project this is the backend

To run this project:

Add these variables in .env file

DB_NAME=""
DB_USERNAME=""
DB_PASSWORD=""
DB_DIALECT=""
DB_HOST=""

POST METHOD

 REQ :

    data: {
        key: value,
        key: value
    }

    This is how it should be sent across the project

 RES :

   {
       sucess: 'SUCCESS MESSAGE' || error: 'ERROR MESSAGE'
   }
   
   
GET METHOD
 
  RES :

    {
        data: {
            key: value
        },
        success : 'SUCCESS MESSAGE' || error : 'ERROR MESSAGE'
    }
