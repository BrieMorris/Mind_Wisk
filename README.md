# Project Name: MindWisk 

## Duration: Three week sprint

## Description
MindWisk is a distinctive web platform, resembling an e-commerce store, that offers free head massagers as a health and wellness product. It includes an optional donation feature to support the ongoing initiative of the client in spreading happiness and mental wellness. On the MindWisk platform, you can order a MindWisk when funds are available, as indicated by a progress bar on the landing page. You can also contribute to the cause by donating and supporting it via email submissions of photos that capture your enjoyment of the product, thereby continually promoting happiness and wellbeing.

## Design
* Freeform- Application Flowcharting and wireframes
* dbdiagram.io - Used for database relationship diagrams
* Google Docs - Scope documentation

## Features 
About Page: Mission statement/Company story 
Landing Page: Users feed that displays benefits, company mission, donate button, Progress bar
Progress bar: letting you track fund availability 
Donate Button: Primary Call to action to Support the cause. 
Order page with customer info intake and MinWisk order form.  
Donate page: Donate page to support MindWisk's initiative.
Integrated with Stripe- Payment Gateway to ensure secure and efficient user donation handling. 
Gallery page: Displays customer photo submission.  
NavBar: Routes to Home, About, Gallery, Donate, Pages
Footer: 
Contact Info, Admin Button, Disclaimer Page Button, Social Media linked Icons
Disclaimer Page: 
Admin Page:

## Technologies Used
JavaScript 
React 
Node.js 
Stripe 
Passport 
PostgreSQL 
CSS 
Material UI 
Cloudinary 

## Use the Template for This Repository (Don't Clone)

- Don't Fork or Clone. Instead, click the `Use this Template` button, and make a copy to your personal account. Make the project `PUBLIC`!

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)



## Dependencies installed
- run an `npm install`. 

## Create database and table

Create a new database called `mindwisk` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

If you would like to name your database something else, you will need to change `mindwisk` to the name of your new database name in `server/modules/pool.js`

Add the rest of the tables and inputs into the database from the `database.sql` file. 


## Setup and Installation
- Follow the steps for the create database and table section to create a databse using the provided database.sql file. Title the DB 'mindwisk' or change
  database name and update it in pool.js file in modules folder.
- Run the queries in the included database.sql file. 
- Create a .env file at the root of the project and paste this line into the file: SERVER_SESSION_SECRET=superDuperSecret
- Replace superDuperSecret with stronger string for application security. Site that can possibly help with string generation: https://passwordsgenerator.net/. If you don't do this step, create a secret with less than eight characters, or leave it as superDuperSecret, you will get a warning in the server terminal.
- Set up Cloudinary for Image storage for the Gallery. 
- Setting up Stripe:
  - Can Be done later (When ready to start integrating your Stripe Account). Once a Stripe account is created you are going to need to add and paste
    these lines into the .env file that you had already created where the server session secret is already in. *Recommendation* run Stripe test payments and put Stripe in test mode in order, before doing any real transactions. 
  - STRIPE_PUBLIC_KEY= 
  - STRIPE_SECRET_KEY= 
- Start postgres if not running already by using brew services start postgresql. 
- Run `npm install` from the project root directory. 
- Run `npm run server` to run the node server.
- In a separate terminal tab, run `npm run client` to launch the React app. 
- Navigate to localhost:3000

## Debugging

To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. Start the server - `npm run server`
2. Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. Click `Collections` and `Send` the following three calls in order:
   1. `POST /api/user/register` registers a new user, see body to change username/password
   2. `POST /api/user/login` will login a user, see body to change username/password
   3. `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - App/App
  - Footer/Footer
  - Nav/Nav
  - AboutPage/AboutPage
  - InfoPage/InfoPage
  - UserPage/UserPage
  - LoginPage/LoginPage
  - RegisterPage/RegisterPage
  - LogOutButton/LogOutButton
  - ProtectedRoute/ProtectedRoute

## Deployment
1. Create a new Heroku project
2. Link the Heroku project to the project GitHub Repo
3. Create an Heroku Postgres database
4. Connect to the Heroku Postgres database from Postico
5. Create the necessary tables
6. Add an environment variable for SERVER_SESSION_SECRET with a nice random string for security
7. In the deploy section, select manual deploy



## Contact 
Adrian Bryant - GitHub: https://github.com/Bles-t @Bles-t 
LinkedIn: https://www.linkedin.com/in/adrian-bryant-04094ab8/

Brie Morris -  GitHub:https://github.com/BrieMorris @BrieMorris 
LinkedIn: https://www.linkedin.com/in/brie-morris-b99869285/

Rafael Silva -  GitHub: https://github.com/rsilva04   @rsilva04
LinkedIn: https://www.linkedin.com/in/rafael-silva1/

Getachew Hundera - GitHub: https://github.com/getachewhundera @getachewhundera
LinkedIn: https://www.linkedin.com/in/getachewhundera


Gabrielle Lepensky  GitHub: https://github.com/glepensky @ glepensky
LinkedIn: https://www.linkedin.com/in/gabrielle-lepensky/


## Acknowledgement
- MindWisk Client 
- Prime Digital Academy Instructors/Team
- Tourmaline cohort mates

## Wireframes

## Update Documentation

Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2
