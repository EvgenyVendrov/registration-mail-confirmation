This is a e2e system which enables a registration of a unique email+url, sends a confirmation mail to the mail, and enadles you to view all confirmed requests.

The Frontend is built with TypeScript, React (class components, Axios) & Material UI.

The Backend is built with TypeScript, NodeJS(Express), MySQL(sequelize), Body-Parser, JWT & CORS.

==HOW IT WORKS==

1. home page is "/create-route" (or just "/") - in which you should fill your wanted EMAIL + URL data:

![filledregitster](https://user-images.githubusercontent.com/44900773/102342692-47fdcf80-3fa2-11eb-8618-2f2da40d80e8.png)

2. if this user is already saved in the database - it wont let you:

![dataerr](https://user-images.githubusercontent.com/44900773/102342923-9b701d80-3fa2-11eb-84ae-acf8a0644d36.png)

3. if the server "is down" - you will get a server error:

![servererr](https://user-images.githubusercontent.com/44900773/102342989-b0e54780-3fa2-11eb-88b8-bdf02a37f8b4.png)

4. if everything works - you will get an email to the selected mail:

![rec_mail](https://user-images.githubusercontent.com/44900773/102343369-205b3700-3fa3-11eb-8b6e-08663513107f.png)

-> by hitting the "confirm" button - you enter a "/confirm-mail/:token" URL - 
this URL is created by using JWT on the email+url data, you CAN NOT confirm a request without entering the mail
if you will try using the confirmation URL with non valid query param - you will get the next message:

![NOTVALID](https://user-images.githubusercontent.com/44900773/102343740-952e7100-3fa3-11eb-91ca-3beab9aac538.png)

-> link which is already been used will show the next message:

![already_used](https://user-images.githubusercontent.com/44900773/102343816-b4c59980-3fa3-11eb-9b9e-eeaa1ef2d524.png)

5. if everything works - you should get this message:

![valid_mail](https://user-images.githubusercontent.com/44900773/102343945-dcb4fd00-3fa3-11eb-9bde-eea7c389bf67.png)

6. now you can see this request in the "/view-all-routes" page (only confirmed request will show):

![allconfirmeddata](https://user-images.githubusercontent.com/44900773/102344189-36b5c280-3fa4-11eb-8495-ed7cd362d46c.png)

-> please notice that this data WONT change with refreshing the page - as its saved in the LocalStorage - for refreshing please hit the "refresh data" button

==HOW TO RUN IT==

1. client:
- set to run on localhost port 3000 (can be changed in \react-client\.env)
- npm i (on \react-client)
- npm start (on \react-client)
- if there is a - "Cannot use JSX unless the '--jsx' flag is provided" error in the client - you should change the TS version to 4.1.2 (from 4.0.3) - its a known VSC bug

2. server:
- set to run on localhost  port 4000 (can be changed in \express-backend\src\Server.ts - but it means you'll have to change all client services accordingly)
- npm i (on \express-backend)
- npm start (on \express-backend)
- the server expects to connect to the DB from the start - if it won't - the client will always show "server error" message 

3. DB:
- is MySQL exported table
- import from "exportedDB" folder 
-the SQL should have the next auth_data:
SCHEMA_NAME = 'email_url_data'
USER_NAME = 'root'
PASSWORD = 'Neska1994'
- the table is exported from my own DB so it should work - if anything happens - you can change this auth_data in "\express-backend\src\services\DB.service.ts"

4. routes in client:
/create-route - "home" route - creation of route page
/view-all-routes - viewing all DB data page
/confirm-mail/:token - mail page

5. enjoy :)


