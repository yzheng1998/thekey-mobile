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

### Registration

After navigating away from the landing screen, users may choose to register as new users. This process involves providing basic user information like name, email, and password as well as filling out an application, answering a few short essay questions, and uploading a resumé. After this, the applicant must wait to be reviewed by The Key's membership board. Upon approval by the board, the applicant will be notified via email, at which time they will be able to log in to the app.

### Login

Members of the site are able to log in via facebook, LinkedIn, or email. After logging in, the user is navigated to the main app.

### Navigation

Members of The Key are able to explore the app via the main tab navigtor (located at the bottom of the Screen) and the 'Discover' list. The tab navigator offers you the choice to view the 'Discover' screen, the 'Your Network' screen, and the profile screen. The 'Discover' screen has cards that that navigate Members to list views of other Members, Events, Jobs/Internships, and Reviews. On all list views, tapping on the cards takes the Member to a details view of whatever the card was was displaying. At most points in the app, if one would expect a card or photo to be tappable, it probably is and it will most likely follow this details view navigation pattern. At any point, Members can press the 'back arrow' found in the upper left-hand corner of the screen to go back to the previous screen.

### List Views

List views exist so that Members can discover: fellow Members/Groups (via 'The Society'), Jobs/Internships, Events, and Reivews.

#### 'The Society' (Members/Groups)

The Society is Screen that contains a single card. This card may contain either a Member or a Group. If the Card showcases a Member, it displays the Members: name, location, picture, industry tags, short bio, and mutual connection you have with the Member. If the Card is a Group it displays the exact same information with the added 'Group' tag infront of the location line in order to designate it as a group.

The results in The Society are filtered based on the current information you have provided your account. We match Members/Groups based on education, location, industry interests, and several other factors.

The main functionality of The Society is swipping based. Therefore, we you swipe right on a person, this is equivalent to sending a friendRequest and swiping left will take no action. After swiping right on a Member/Group, you are able chat with them after that Member/Group has accepted your friendRequest.

#### Jobs/Internships

#### Events

#### Reviews

### Friend Requests

From the User Detail View page, the user can also click a button that redirects them to a page that allows them to view the friend requests they have received (and also the friend requests of any other user - we will need to fix this). They can then choose to accept or reject those friend requests.

### Chat

#### Chat Inbox

#### Add Friend / Friend Search

#### Convesation Screen

### Profile

## Designs

The working designs can be found at the following Link: https://github.com/hsadev/thekey-general/tree/master/Designs
