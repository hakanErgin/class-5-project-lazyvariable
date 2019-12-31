# Class-5 group project
### GitPro - Generate your portfolio

A tool for HYF students (and others) can use to generate a portfolio and use after graduation.

Summary: _We have worked in randomly assigned groups (of 4 or 5) for six weeks for this project,using MERN stack._

Users are able to:
- Enter related info about themselves (personal - educational - professional details)
- Use their github name while signing up to use their repositories 
- Create viewable profile with these data ("Preview" route)


The application is missing elements/to be fixed include the following:
- Responsive design
- Cleaner DRY, modular code
- Ability to add multiple (educational or professional experiences in profile creation) options 

[Project Link](https://portfolio-d9052.firebaseapp.com/)

[Project page wiki](https://github.com/HackYourFutureBelgium/class-5-project/wiki/lazyvariable)

[Project original repo](https://github.com/HackYourFutureBelgium/class-5-project-lazyvariable)

---

### - run

- backend: ```nodemon server```
- frontend: ```npm start```

---
### - dev
### heroku
_backend is hosted on heroku and is making calls to the database hosted on MongoDB Atlas_
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
-$ git push heroku master
-$ git push heroku yourbranch:master

--

$ heroku open
```

### Firebase
_frontend is hosted on firebase_

-```firebase login``` (no need)

-```npm run build```

-```firebase deploy```
