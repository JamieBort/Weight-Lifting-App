# weight-lifting-app

## What is this?
An app to record my workout each session. 

It needs to replicate the features of https://wger.de/ and/or Jefit. Specifically: 

* have a component that counts down between sets.

* have a component that allows me to choose between the following units
    * distance covered (as in walking lunges)
        * feet

    * weight
        * pounds
        * kg

    * etc.

* add specific exercises to my leg/back/arms/etc. day/routine

* add a leg day/routine

* store my data (where?)

* display my data on my personal dashboard

Created using the `expo init weight-lifting-app` command from [Setting up the development environment](https://reactnative.dev/docs/environment-setup) documentation.

## Progress

See the Progress.md file for `Next Steps` and `Status` of this repo.

## Running This App

To run this locally, 

1. in Terminal navigate to `~/Documents/DevFiles/personal_projects/weight-lifting-app`
2. run `yarn start`
3. in the browser navigate to `http://localhost:19002/`

## Branch Structure

    main (the production branch)
        |
        |- dev (the dev branch)
            |
            |- countdown timer branch
            |
            |- units branch - component to select units for each exercise
            |
            |- removeButton branch
            |
            |- feature 3
            |
            |- feature 4

## How to use the app

See the HowToUseTheApp.md file.

## Associated Links

* https://trello.com/c/1DKwg7RU/1226-weight-lifting-app
