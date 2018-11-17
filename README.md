# Slab React tips and tricks

In this project you will find a list of tips, tricks, patterns, etc. about React, some of them are well known but others aren't because of that we created this project to guide you and teach you about it.

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm slides](#npm-slides)
- [Sending Feedback](#sending-feedback)

## Folder Structure

After you clone, your project should look like this:

```
slab-react-tips-and-tricks/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    cases/
      1/
        example.js
        exercise.js
        solution.js
      2/
        example.js
        exercise.js
        solution.js
      .
      .
      .
    components/
    theme/
    utils/
    App.js
    index.js
    logo.svg
```

`cases` is where we put all our topic cases, inside of this folder will be number of topic and inside of that we will find `example.js`, `exercise.js` and `solution.js`

`components` this folder contains all components builded for different cases

`utils` this folder contains helpers like create an array of characters.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

You could use yarn too if you prefer `yarn start`


### `npm run slides`

Runs the slides presentation it should open automatically a new tab in your browser if it isn't then open [http://127.0.0.1:8080](http://127.0.0.1:8080) to view.

You could use yarn too if you prefer `yarn slides`

## Sending Feedback

Let us know if there is something that we could improve. Create and issue or PR with change required.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
