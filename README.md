test remote
```
$ git remote -v

```
```
heroku https://git.heroku.com/mighty-reaches-37532.git (fetch)
heroku https://git.heroku.com/mighty-reaches-37532.git (push)
origin git@github.com:HackYourFutureBelgium/class-5-project-lazyvariable.git (fetch)
origin git@github.com:HackYourFutureBelgium/class-5-project-lazyvariable.git (push)

```

Otherwise change [the heroku remote](https://stackoverflow.com/questions/6226846/how-to-change-a-git-remote-on-heroku) (\$ heroku git:remote -a mighty-reaches-37532
) and [origin remote](https://stackoverflow.com/questions/22694294/reconnect-remote-origin)

[heroku app name](https://mighty-reaches-37532.herokuapp.com/)

```
$ git add .
$ git status     //for you to see which changes are added
$ git commit -m "commit message"
$ git push heroku master
$ heroku open
```
https://git.heroku.com/mighty-reaches-37532.git"

$ git push heroku yourbranch:master


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
