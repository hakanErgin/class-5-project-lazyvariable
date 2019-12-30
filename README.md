# Class-5 group project
## GitPro - Generate your portfolio
[Project Link](https://portfolio-d9052.firebaseapp.com/)

[Project page wiki](https://github.com/HackYourFutureBelgium/class-5-project/wiki/lazyvariable)

An tool for HYF students (and others) can use to generate a portfolio and use after graduation.

## run

- backend: ```nodemon server```
- frontend: ```npm start```

### heroku
```
$ git remote -v
```
```
heroku https://git.heroku.com/mighty-reaches-37532.git (fetch)
heroku https://git.heroku.com/mighty-reaches-37532.git (push)
origin git@github.com:HackYourFutureBelgium/class-5-project-lazyvariable.git (fetch)
origin git@github.com:HackYourFutureBelgium/class-5-project-lazyvariable.git (push)
```

change [the heroku remote](https://stackoverflow.com/questions/6226846/how-to-change-a-git-remote-on-heroku) 
```$ heroku git:remote -a mighty-reaches-37532)``` 

[heroku app link](https://mighty-reaches-37532.herokuapp.com/)

```
$ git push heroku master
$ heroku open
```
or
```
$ git push heroku yourbranch:master
```

### Firebase

-```firebase login``` (no need)

-```npm run build```

-```firebase deploy```
