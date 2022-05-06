# PetSanctum

##An animal adoption website.

To Run the website u can use nodemon or node and run the index.js file

All the dependencies can be installed using the command
npm install

Inorder to initialize the database have the mongod command running in the backgroud to let node connect to the MongoDB
Then run the command
node Databse/seed.js
This will transfer the entire database from database.db (Sqllite) to Mongodb PetSanctum Database
Now the database is initialized. Now we can run the server
Everytime when you want to reset the database run the node Database/seed.js command for 5 seconds then close the program

The command to run the server
nodemon index.js

With this server starts running

You can enter the homepage by going to the link
http://localhost:3000/

Here are a few Admin profiles using which u can sign in
username: "tejasparse" password:"123456789"
username: "tanishqawasthi" password:"qwertyuiop"
username: "jayanthkorra" password:"Korra@123"
username: "saisreekar.v20" password:"fsd1project"
username: "nitant" password:"Kuchhnahin"

Non Admin Profiles
username: "rahulraj" password:"123456789"
username: "gulshan" password:"123456789"

Github Repository Link:
https://github.com/tanishqawasthi/petSanctum

Youtube Demo Link:
https://youtu.be/dWXAHr2F4Mc
