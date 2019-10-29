# Lesson 8 - deployments

## Intro
- recap on server and dedicated
- the cloud
  - 3 leaders (aws, azure, gcp). Enterprise
  - complex and might be overwhelming at first. very valid
  - please do explore those on your free time. Qwiklab credits are awesome
- we're going to deploy the app to Heroku 
  - it has a simplified model to deploy
  - good for hobbist and hard to lose money or make big mistakes on it

## Workshop
- fork my repo if you don't have your own
- Register on heroku heroku.com
- Create an app from https://dashboard.heroku.com/ 
  - select new, europe, give it a name and create
  - connect to github and select the repo
  - manual deploy the last step
- Slides while we wait
  - overview of the journey our code is taking
- Back to deploy
  - open the link, see it fail
  - add the Procfile
  - fix the port to `process.env.PORT || 3000`



## resources
https://devcenter.heroku.com/articles/getting-started-with-nodejs
https://devcenter.heroku.com/articles/preparing-a-codebase-for-heroku-deployment