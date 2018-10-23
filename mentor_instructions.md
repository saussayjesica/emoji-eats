# Mentor instructions

---

## Setup

1.  Create react app
2.  Delete all unecessary files
3.  Replace app.css with https://gist.github.com/saussayjesica/c1bfd17803560aaddc8fe373a388ddab
4.  Add google font to index.html
5.  Make file in folder src/data/menuData.js and copy code from https://gist.github.com/saussayjesica/50f6801bcb3b689e777c2c6fc017c0db
6.  Run `npm install` if not already
7.  Delete all code in App.js
8.  Create App component from scratch - import react, create class, render, return, export default etc. Explain JSX and mention it should be wrapped in an enclosing tag

## Create Header component

1.  Make class component and later when we go over state we can make it a stateless functional component
2.  Add the Header into App.js

## Create MenuItem component

1.  Create another class component and hardcode the data for one menu item. Don't make the handleClick method yet
2.  Explain how the component isn't reusable if we hardcode the data. To make it reuseable we need to use props
3.  Import the menuData in the App.js file as well as the menuItem component. Add the following props to menuItem - emoji, label, name, description, price
4.  Assign the data for the first item in the menuData to the props eg. name={menuData[0].name}
5.  Explain how we could have a menuItem in App.js for every item on our menu but this isn't very dynamic. So we want to use the map method so we can dynamically render a menuItem for every item in the data. Explanation for map is in the readme. Make sure you uipdate the props

## Adding state

1. Add state to the App.js file. Order will be an empty array and cost will be 0.
