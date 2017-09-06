# fantasyfootballfriend

FantasyFootballFriend is an application designed to help you with your Premier League Fantasy Football selections.
It leverages stats published officially by Premier League Fantasy Football which are used for the basis of providing the selections.
It is a single page web application built using the MERN stack.

**Run the following commands from a Unix shell:**

To build:
Navigate to the top-level project directory
`./node_modules/webpack/bin/webpack.js -d --config webpack.config.js`

To run:
Navigate to the top-level project directory
`npm start`

**Heroku Deployment**

Deploy to Heroku using the Heroku CLI
git push heroku master

Once successfully deployed the 'web' process will start

**Start Clock process**
heroku ps:scale clock=1

**Start Worker process**
heroku ps:scale worker=1
