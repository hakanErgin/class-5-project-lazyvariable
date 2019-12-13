## Installing to Heroku cli (If not already installed on your PC, firstly install the cli)

Here you can find [the link to install the heroku cli](https://devcenter.heroku.com/categories/command-line)

## Running on local node.js server to test

**Firstly configure your '.env' file**

```
$ npm install
$ node server

```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Very Important Check before all (remote check)

Go to /backend folder and then:

```
$ git remote -v

```

This command must give this result:

```
heroku https://git.heroku.com/mighty-reaches-37532.git (fetch)
heroku https://git.heroku.com/mighty-reaches-37532.git (push)
origin git@github.com:HackYourFutureBelgium/class-5-project-lazyvariable.git (fetch)
origin git@github.com:HackYourFutureBelgium/class-5-project-lazyvariable.git (push)

```

Otherwise change [the heroku remote](https://stackoverflow.com/questions/6226846/how-to-change-a-git-remote-on-heroku) (\$ heroku git:remote -a mighty-reaches-37532
) and [origin remote](https://stackoverflow.com/questions/22694294/reconnect-remote-origin)

## Running on heroku local server to test

```
$ heroku local

```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Running on heroku server to see

```
$ heroku open

```

or just write our [heroku app name](https://mighty-reaches-37532.herokuapp.com/) to the browser

## Deploying to Heroku (If you have changed anything on backend related folders)

**NOTE:** While trying to deploy changes to heroku, firstly cli redirects you to browser and requires you to login to heroku with your e-mail. After logging in:

**ONLY IF YOU HAVE CHANGED ANYTHING ON BACKEND FOLDER DO THIS '$ GIT PUSH HEROKU MASTER', OTHERWISE YOU CAN JUST MAKE '$ HEROKU OPEN':**

```
$ git add .
$ git status     //for you to see which changes are added
$ git commit -m "commit message"
$ git push heroku master
$ heroku open
```

NOTE: Here you should see on your cli after long lines of build, this :
"remote: Verifying deploy... done.
To https://git.heroku.com/mighty-reaches-37532.git"
after seeing that you can "\$ heroku open" on your cli

Your app should now be running on server with the name of your app [mighty-reaches-37532](https://mighty-reaches-37532.herokuapp.com/).

or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Committing changes to your branch(not to master) on github

```
$ git add .
$ git commit -m "commit message"
$ git push
```

**And then make a pull request to master, and wait or notify others to check your pull request**

## Documentation

For more information about using Node.js on Heroku, see these Dev Center articles:

- [Getting Started with Node.js on Heroku](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
- [Heroku Node.js Support](https://devcenter.heroku.com/articles/nodejs-support)
- [Node.js on Heroku](https://devcenter.heroku.com/categories/nodejs)
- [Best Practices for Node.js Development](https://devcenter.heroku.com/articles/node-best-practices)
- [Using WebSockets on Heroku with Node.js](https://devcenter.heroku.com/articles/node-websockets)

# class-5-project

## CICD

CICD is set up with CircleCI which uses docker containers to execute each step. The steps for the frontend are the equivalent of

1. Continuous integration (CI)

```
docker run --rm --workdir /app -v (pwd)/frontend:/app --name tmp node yarn install
docker run --rm --workdir /app -v (pwd)/frontend:/app --name tmp node yarn test
docker run --rm --workdir /app -v (pwd)/frontend:/app --name tmp node yarn build
```

What this does is, it executes the three yarn (equivalent to npm) steps in an isolated container environment. What are containers? In short, the future of computing. It's not an overstatement, they are and will be everywhere. Google literally runs _everything_ in containers.

2. Continuous deployment (CD)

I configured the frontend to be deployed to a firebase hosting solution. For this I set up firebase-tools and added a `firebase` script to the `package.json` to avoid global installations. Next I did
`yarn firebase init` and
`yarn firebase login:ci` to get a token. This token is set in CircleCI as an environment variable (because it's a secret) and then used in the deploy step

## Linting

The frontend (and hopefully also soon the backend) should be linted. Use [this article](https://medium.com/@pppped/extend-create-react-app-with-airbnbs-eslint-config-prettier-flow-and-react-testing-library-96627e9a9672) for guidance

### Edit

usage

backend nodemon server

frontend npm start

### Firebase deploy

-firebase login

-npm run build

-firebase deploy

nav component https://portfolio-d9052.firebaseapp.com/nav
