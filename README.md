# Frontend Developer Exercise


## Introduction

Customer feedback form that allows customers to write a review for a product (name, email, rating 1 to 5 stars and a ‘comment’ section). See all the comments for the product. Furthermore the trends of ratings are shown on a Graph.

Open [App](https://distracted-yalow-96ef3c.netlify.app/) to view it in the browser.
(Hosted on netlify.app)
*Watches build changes on Github repo then builds & depolys 
  
## Available Scripts

In the project directory, you can run:

### npm start

Runs the app in the development mode.

Open [http://localhost:3000](http://localhost:3000/) to view it in the browser.

The page will reload if you make edits.

You will also see any lint errors in the console.

### npm test

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### npm run build

Builds the app for production to the build folder.

It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

Your app is ready to be deployed!

  
  

## Libraries / external packages

-   React - Start building a new [single-page](https://reactjs.org/docs/glossary.html#single-page-application) application in React.
    
-   Bootstrap - Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
https://getbootstrap.com/
    
-   Chart.js- Simple yet flexible JavaScript charting for designers & developers
https://www.chartjs.org/
    

  

# Architecture

![arch](https://github.com/tejpal-sohal/co-reviews/blob/master/screenshots/arch.png)

  
  # How to use

Fill form details and hit *“Submit”* if the data provided is correct it will be added to the Reviews sections below.

 ![enter image description here](https://github.com/tejpal-sohal/co-reviews/blob/master/screenshots/pr1.png)

![enter image description here](https://github.com/tejpal-sohal/co-reviews/blob/master/screenshots/pr2.png)
  
# Techniques used

I wanted to ensure the UI was intuitive, simple and inviting. I built the experience as a true Single Page Application (SPA). I designed it this way as the nature of the user flow is sequential. Everything is sectioned as per the wire frame provided. You have the product review form on the left and the Graph on the right, with the reviews of previous customers below. Every element has been broken down into components which can be re-used or called in whenever required.

Styling the application I used Bootstrap UI framework, the reason being it fit the design provided and is mobile first ready. I could have written my own styles using sass or styled components, however I felt Bootstrap provided everything I needed to have this application designed and running. However going forward developing this for a more unique UI I would implement styled components for maintainability.

For the Graph I used a library called chart.js. It allows javaScript charting for by providing datasets.

# What went well

-   Initially I had three-levels of components as I decided to have a single component which would broker each of the sub-components for the webpage. I rewrote this in the end as I decided that it wasn't the best implementation: it was far cleaner to manage the state in the context rather than to pass the sub-components state to the App component on completion.
    
-   The React Context API within React allowed me to house all functions in one place and provide them to the Application as a wrapper. This is beneficial as the data/core functions are in one place and the code therefore becomes more manageable.

- React hooks that allows you use state and other React features, like lifecycle methods, without writing a class. Hooks let you always use functions instead of having to constantly switch between functions, classes, higher-order components, and render props. Which made the code cleaner
    
-   I wanted to make sure that components were reusable and could be re-used in another parts of the website if a feedback form is required.
    
-   The React plugin for Chrome: I found myself using this a lot to check what the DOM looked like at any one point in time and also the state and props from context.
    

# Final thoughts

I had a lot of fun building this project! Deciding how to implement it and insure it would follow good practices. Things I would do differently if I had more time. 

-Set up an API and fetch the data to the app. Which isn’t difficult however as this was a prototype I wanted to keep things simple. 
-Add more interaction such as deep dive into user comments. 
-More UI feedback on triggers or events

However overall I feel it was a good idea to keep things simple and fulfill all requiments stated. 



