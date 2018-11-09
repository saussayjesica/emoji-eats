This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Emoji Eats

- Build a interactive menu for emoji eats
- Learn React basics
- Responsive web design
- Uses SpeechSynthesis

![](https://i.imgur.com/jI7hsWb.png)

## Prerequisites

- [Node/npm](https://nodejs.org/en/)
- Text editor installed such as [VS Code](https://code.visualstudio.com/), Atom or Sublime
- [Chrome](https://www.google.com/chrome)
- [React dev tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
- Have some HTML and CSS knowledge
- Have some experience with the command line

## What is React?

React is a Javascript library for building UI components. Check out the React docs for tutorials and documentation - https://reactjs.org/docs

#### create-react-app?

Installs a bunch of packages which are needed to set up a convenient development environment including a web server, compiler and testing tools - https://github.com/facebook/create-react-app

#### JSX

JSX looks like HTML markup in JavaScript. However, under the hood, JSX is allowing developers to use HTML syntax to compose JavaScript components

#### Props

A React component can be used over and over again so we don't have to keep writing the same code, but we're not always going to render the component with same data. E.g. in the emoji eats menu, the layout for each menu item is exactly the same but the data (name, price, description) is different. We can customise components with different data when they are created using props (properties).

#### State

State is similar to props, but it cannot be accessed or modified outside of the component. It can only be used inside the component. We will add state to the parent component (app.js) and then we'll pass those values in state to some of the children components (Order.jsx and MenuItem.jsx) through props. When state is modified, the changes will automatically trickle down to those components via props. So you only need to write the code to change one thing — the state — and watch as your UI updates.

- Don’t modify state directly e.g. `this.state.order = 'Cheeseburger'`
- Use setState instead e.g `this.setState({ order: 'Cheeseburger' })`

#### Lifecycle Methods

Through lifecycle methods, we can then control what happens when each tiny section of your UI renders, updates, thinks about re-rendering, and then disappears entirely.

http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

## Let's get started!

#### Setup

Go to https://github.com/facebook/create-react-app and run the three command lines shown in 'Quick Overview' (only run one line at a time).

#### Add styling for the app

Once you have your app running, replace the css in src/App.css with this https://gist.github.com/saussayjesica/c1bfd17803560aaddc8fe373a388ddab

#### Add custom font

Go to public/index.html in your repo. Add the following `<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600" rel="stylesheet">` underneath the shortcut icon link element on line 13

#### Add dummy data

Create a folder in your repo called `src` and a folder inside of that called `data`. Make a new file called `menuData.js` and add the following code https://gist.github.com/saussayjesica/50f6801bcb3b689e777c2c6fc017c0db. Make sure you save the file.

## Other

#### Javascript map() method

map() takes each item in an array (an array is like a list of items), it transforms the items one at a time (in the example below it increases the item by 1), and puts the results in a new array

```
const numbers = [1, 2, 3]
const newArray = numbers.map(number => (
  number + 1
))
console.log(newArray)
```

The above will print out newArray which is equal to [2, 3, 4]. In the example above we went through each item in the array "numbers" (in programming we use the phrase "mapped over"). We mapped over each item one at a time in the numbers array and increased the value by 1 then added those results to "newArray".

#### Destructuring

Destructuring improves readability and reduces the amount of code we need to write.

Before

```
const object = { one: 1, two: 2, three: 3 }

const one = object.one;
const two = object.two;
const three = object.three

console.log(one, two, three) // prints 1, 2, 3
```

The example above is long, clunky, and takes way too many lines of code. With destructuring, your code becomes much more clear.

```
const object = { one: 1, two: 2, three: 3 }

const { one, two, three } = object;

console.log(one, two, three) // prints 1, 2, 3
```
