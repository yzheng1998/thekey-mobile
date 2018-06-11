# thekey-mobile

## Setting up the application

```bash
$ git clone https://github.com/hsadev/thekey-mobile.git && cd thekey-mobile
# then cd into directory
$ npm install
$ react-native link
```

## Running the application

Make sure you have the backend running first in a separate terminal:

```bash
$ cd thekey-api
$ npm run db
$ \i config/script.sql # Type in the postgres config script
$ # open a new terminal tab
$ npm start
```

After the backend is running, in a new terminal window, cd into thekey-mobile and execute

```bash
npm run ios
```

to run the frontend.

## Documentation

Features that have currently been implemented:

### Register

Users are able to make an account for the app using a registration form with text fields. However, the full application process hasn't been implemented yet.

### Login

A temporary login page has been built, but full functionality is still being implemented.

### Navigation

Users are able to choose whether to register an account or login using a basic landing page that appears when they first open the app. After logging in, users are presented a page with three tabs (implemented using a TabNavigator) for three different pages: Discover, Chats, and Profile. They can choose which of the pages they want to visit using the TabNavigator. Once users are on the TabNavigator page, they are unable to return to the landing page. After being logged in, users can use the Discover tab to view other Users, Events, or Jobs, the Chats tab to send messages to other users (still needs to be fully implemented), and view/edit their own Profile (still needs to be implemented).

### Viewing Users

After selecing to view other users, the user is redirected to a page that shows a list of user components, each component shows some information about each user. After the component is clicked, the user is redirected to a User Detail View page that shows more information about that user.

#### Friend Requests

From the User Detail View page, the user can also click a button that redirects them to a page that allows them to view the friend requests they have received (and also the friend requests of any other user - we will need to fix this). They can then choose to accept or reject those friend requests.

#### Other Friends:

From the User Detail View page, one can view the user's other friends in a horizontal scroll view (still needs to be made swipeable). The user can click on the other friends and will be redirected to their detail views.

### Events/Jobs

From the Discover screen, users can also choose to view a list of all jobs (they can click on a job to view more details about that job) or a list of all events posted (they can click on an event to view more details about that event).
