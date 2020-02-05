# Class-5 Graduation Project

### GitPro - Generate your portfolio

A tool for HYF students (and everyone else) can use to generate a portfolio, to use after their graduation.

## Description:

The user is be able to create their `CV` by filling the fields and their `Portfolio` importing their projects from github. And then they can view "Preview" their info. They should then be able to have this printed out in a nice format.

**Users are able to:**

- Enter related info about themselves (personal - educational - professional details)
- Use their github name while signing up, later access their repositories
- View and edit this data

## Project Summary:

It started as a group project. Due to bugs and instability issues with essential functions I decided to keep working on it, which then resulted in rebuilding it.

**Added/Changed:**

- Fixed lots of bugs
- Re-built the data sctructure for better results (instead of flat)
- Removed hard-coded CSS & Added responsive features
- Added ability to edit/update your data

**WIP:**

- Refactor and DRY - most of it is done!
- Working on the `/preview` and format the view

**To do:**

- Multiple options for `education` and `experiences`
- Ability export as a nicely formatted document or URL
- Naming conventions
- Check if user does not have avatar/name on github

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
