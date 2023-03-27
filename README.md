![Logo-notBored](/public/logo.png?raw=true "notBored")

# notBored

### Short description of your project
notBored is an application aimed at satisfying the issue finding things to do when the user is bored. In the application it will be possible to create a user account and save favourites, if the user finds an activity they might not have time for right now, but want to do later. There is also activities which includes more people, so the user can bring their friends and family.

### What you have done
- The main skeleton is implemented
- API is implemented [The Bored API](https://www.boredapi.com/)
- It is possible to search for activities
- User accounts
- Favorites
- Add comments
- Rate activities and see average rating

### Set-up

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

For more information about the React set-up, check: [React ReadMe](/README_REACT.md)

### Project file structure
#### Files
- src\index.js
-- Creates an instance of the ActivityModel and links it to the App
- src\App.js
-- The root component of the react application
- src/assets
-- Encapsulates all the assets (loading.gif, firebase file, icons, and a custom font we use) 

#### Presenters
- src\presenters\activityGeneratorPresenter.js
-- Creates the presentation of two views (namely activityGeneratorView and activityGeneratorResultView) to be able to filter and generate random activities.
- src\presenters\favoritesPresenter.js
-- Presents the favorites of the current user (if logged in) through favoritesView
- src\presenters\homePresenter.js
-- Presents the home screen (homeView) where the user can discover the website and generate an activity via a button (navigating to activityGeneratorPresenter)
- src\presenters\infoPresenter.js
-- Presents an about page to explain the purpose of the project (infoView)
- src\presenters\loginPresenter.js
-- Creates the presentation of either the profile of the user (profileView) either a login page (loginView) if the user is logged in or not.
- src\presenters\mainPresenter.js
-- Presents the main screen (mainView) containing the sidebar and the routes to the different presenters.
- src\presenters\profilePresenter.js
-- Presents the profile of the user (profileView)
- src\presenters\sidebarPresenter.js
-- Creates a presentation of a sidebar (sidebarView) which can be closed and contains all the buttons to link to the different presenters.


#### Views
- src\views\activityGeneratorResultView.js
-- Creates the view for when an activity is searched. If an activity is found, data about it will be shown. It contains a picture of the type of activity, various information about the searched activity (title, type, cost, accessibility, ratings, number of participants).
If no activity is found, an error will be displayed with information about no activity matching the search criteria is found.
- src\views\activityGeneratorView.js
-- Creates the view for the data input (filters on type, cost, accesibility, and number of participants) from the user before a search is made.
- src\views\favoritesView.js
-- Displays information (title, type, cost, accessibility, number of participants). of all activites liked by the user thanks to a table.
- src\views\homeView.js
-- Creates the view for the home screen with a little pitch of the website, a button to try out and a animated background.
- src\views\infoView.js
-- Creates the view for information about the application.
- src\views\loginView.js
-- Creates the view for the login page. The user can choose to login or register with an email and a password.
- src\views\mainView.js
-- Creates the main page containing the sidebar and the routes to the different presenters.
- src\views\profileView.js
-- Displays the profile page of the current user with a possibility to log out and to see the personal information (email) 
- src\views\sideBarView.js
-- Creates the view of the sidebar with a side button to close it. It contains different links to go to the home screen, the about screen, the favorites, the activity generator and the about page.
- src\views\userMessageView.js
-- Creates the view to show a user message.


#### redux

##### actions

- src\redux\actions\getActivityAction.js
-- Action to fetch a random activity with the right options via the bored api.
- src\redux\actions\getCommentsAction.js
-- Action to get comments of a specific activity (via its id) stored in Firebase. 
- src\redux\actions\getRatingsAction.js
-- Action to get ratings of a specific activity (via its id) stored in Firebase. 
- src\redux\actions\loginAction.js
-- Actions to log in, sign in, and get the current user in Firebase using Authentification.
- src\redux\actions\setCommentAction.js
-- Action to add a comment in Firebase for a specific activity and user.
- src\redux\actions\setRatingAction.js
-- Action to add a rating in Firebase for a specific activity and user.
- src\redux\reducers\updateFavoritesAction.js
-- Action to update the list of favorites of the current user stored in Firebase.

##### reducers

##### const

- src\redux\const.js
-- Store all the constants used by Redux.

##### store

- src\redux\store.js
-- Handles the state information and the states are changed by dispatching actions

#### styles
These files contains the css style information for all connected views
- src\styles\activityGenerator.css
- src\styles\activityResultGenerator.css
- src\styles\favorites.css
- src\styles\home.css
- src\styles\info.css
- src\styles\login.css
- src\styles\main.css
- src\styles\sideBar.css
- src\styles\userMessage.css


#### Known issues

In the API, we noticed that some activities exist more than once (example: "Learn the Chinese erhu"). 
