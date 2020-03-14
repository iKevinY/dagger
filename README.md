# Dagger

Dagger is a template repository for a Heroku-deployable website
built on Flask and React.


## Background

This template was the solution I came to when building [**zeal.gg**](https://zeal.gg)
to solve multiple problems: serving static frontend files from outside of Flask,
spinning up multiple instances of the Flask backend, and running everything
on a single web dyno.

When doing local development, the template leverages the typical Flask and Node
development servers. However, when deploying to Heroku, the React application
is built and served statically. nginx routes requests to `/api/*` to the Flask
backend, and all other requests to the web dyno are treated as frontend requests.

These ideas are discussed more in-depth in a
[blog post](https://kevinyap.ca/2020/03/architecting-zeal-gg/) about
zeal.gg's architecture.


## Installation

Running `make install` will invoke Pipenv and Yarn's installation steps, both
of which are required to use this template.


## Running

`make run` will start up the frontend on port 3000 and backend on port 8000. Locally,
requests to `/api/*` will automatically be proxied to port 8000, simulating how the
app will behave when deployed.

`make run-backend` and `make run-frontend` can be used to start each development server independently.


## Deploy <a href="https://heroku.com/deploy?template=https://github.com/iKevinY/dagger/tree/master"><img align="right" src="https://www.herokucdn.com/deploy/button.svg"/></a>

This template can be deployed to Heroku in one click by pressing the above button. Then, you can use
the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) and run
`heroku git:clone -a <app-name>` to clone down the newly-created Heroku app.

Alternatively, you can do the reverse, working from this template first and _then_ deploying
to Heroku. One thing to note is that this template makes use of [`heroku-buildpack-subdir`](https://github.com/negativetwelve/heroku-buildpack-subdir)
in order to build the API, the React frontend, and nginx all at once. Therefore,
this buildpack must be set manually when creating the app.

```sh
HEROKU_APP=<app-name>
heroku create "$HEROKU_APP" --buildpack https://github.com/negativetwelve/heroku-buildpack-subdir.git
git remote add heroku "https://git.heroku.com/${HEROKU_APP}.git"
git push heroku master
heroku open
```
