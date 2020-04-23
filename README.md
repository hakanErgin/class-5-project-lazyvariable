# Class-5 Graduation Project

### GitPro - Generate your portfolio

A tool for HYF students (and other developers) can use to easily create a portfolio.

## Description:

The user is able to create their `CV` by filling the fields and their `Portfolio` importing their projects from github. For the moment they can view this information on `Preview`. They should then be able to have this printed out in a nice format.

**Users are able to:**

- Enter related info about themselves (personal - educational - professional details)
- Use their github name while signing up and later accessing their repositories
- View and edit this data

## Project Summary:

Started as a group project. Due to bugs and instabilities with essential functions, I kept working on it and have rebuilt the app.

**Added/Changed:**

- Fixed lots of bugs
- Rebuilt the data sctructure for better results (instead of flat data)
- Removed hard-coded CSS & Added responsive features
- Added ability to edit/update your data
- Refactored 

**To do/WIP:**

- Multiple options for `education` and `experiences`
- Ability export as a nicely formatted document or URL
- Naming conventions
- Error handling when user does not have avatar/name on github

[Project Link](https://portfolio-d9052.firebaseapp.com/)
(_backend needs a moment to wake up when you login/register for first time_)

[Project wiki](https://github.com/HackYourFutureBelgium/class-5-project/wiki/lazyvariable)

[Project original repo](https://github.com/HackYourFutureBelgium/class-5-project-lazyvariable)

---

### - Development - How to use the repo

- clone repo
- npm install on both `root` and `frontend` dirs
- to run server: on root `nodemon server`
- then on /frontend, `npm start` for frontend

---

### - Deployment

### heroku

_server_

```
$ heroku login
$ git remote -v
```

```
heroku https://git.heroku.com/mighty-reaches-37532.git (fetch)
heroku https://git.heroku.com/mighty-reaches-37532.git (push)
origin git@github.com:hakanErgin/class-5-project-lazyvariable.git (fetch)
origin git@github.com:hakanErgin/class-5-project-lazyvariable.git (push)
```

change [the heroku remote](https://stackoverflow.com/questions/6226846/how-to-change-a-git-remote-on-heroku)
`$ heroku git:remote -a mighty-reaches-37532`

[heroku app link](https://mighty-reaches-37532.herokuapp.com/)

```
-$ git push heroku master
-$ git push heroku yourbranch:master

--

$ heroku open
```

### Firebase

_frontend_

-`firebase login` (no need after first time)

-`npm run build`

-`firebase deploy`
