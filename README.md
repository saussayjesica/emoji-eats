This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Emoji Eats

- Build a interactive menu for emoji eats
- Learn React basics
- Responsive web design
- Uses SpeechSynthesis

![alt text](https://i.imgur.com/jI7hsWb.png)

## Prerequisites

- Node >= 6 installed on your machine
- Have some HTML and CSS knowledge
- Text editor installed such as VS Code, Atom or Sublime
- Have some experience with the command line

## What is React?

React is a Javascript library for building UI components. Check out the React docs for tutorials and documentation - https://reactjs.org/docs

#### create-react-app?

Installs a bunch of packages which are needed to set up a convenient development environment including a web server, compiler and testing tools - https://github.com/facebook/create-react-app

#### JSX

JSX looks like HTML markup in JavaScript. However, under the hood, JSX is allowing developers to use HTML syntax to compose JavaScript components

#### Props

A React component is a reusable component which can be used over and over again in the UI, but not always we are going to render the same component with same data. We can customise components with different parameters when they are created. These creation parameters are called props (properties).

#### State

State is similar to props, but it cannot be accessed and modified outside the component and can only be used inside the component

- Don’t modify state directly e.g. `this.state.order = 'Cheeseburger'`
- Use setState instead e.g `this.setState({ order: 'Cheeseburger' })`

## Let's get started!

#### Setup

Go to https://github.com/facebook/create-react-app and run the three command lines shown in 'Quick Overview' (only run one line at a time).

#### Add styling for the app

Once you have your app running, replace the css in src/App.css with this https://gist.github.com/saussayjesica/c1bfd17803560aaddc8fe373a388ddab

#### Add custom font

Go to public/index.html in your repo. Add the following `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600" rel="stylesheet">` underneath the shortcut icon link element on line 13
