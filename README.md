# chatterbox.io

## An application for chatting, the good old way. Text only. The benefit? No more crowded storage full of useless pictures, videos and voice notes.

* You can create groups that have a feature called 'Suggestions'. By making a suggestion you open up the ability to favourite a message. This is ideal for the cases where you need a simple confirmation or poll, but easier because it's a simple upvote or downvote.

* Unlike heavy chat applications, this one doesn't use your device's storage, it's a progessive web app, so no local storage is necessary (Excluding the user object for recognition).

## To get started

**Visit our official website [chatterbox.io](https://google.com)**

* The messages are all stored in a secure database far away from your memory, cool. 
* Search users by their name to start a chat, or select a bunch of users that you would like to invite to a group.

**Note: You can always make your profile unavailable to the public and pass your key to a person to invite you**

* Save users to your favourites and check all your recent chats.

> This is an open-source project, developers are urged to clone this repo and submit features or bug-fixes. *Play nice please*


# Setting up (developers)

* Clone this repository
* Cd into the directory
* Run npm install
* Dev = npm run dev
* Build = npm run build

Hosting platform [Firebase](https://firebase.google.com)

* ### This application requires firebase/firestore and you'll need to set it to your personal config for testing.

***
# TODO LIST FOR CLIENT-SIDE DEVELOPMENT
- [x] Install vue pwa
- [x] Create the static assets
	- [x] logo
	- [] dinosaurs
- [x] Install Vuetify
	- [] Create application layout
- [] Build components
	- [] Create user dashboard
		- [] Set name
		- [] Get unique pin
	- [] Create chat template
		- [] Input form
		- [] Message card
			- [] time
	- [] Create recents
	- [] Create favourites
	- [] Create Group chat layout
		- [] Add users
		- [] Enable favouriting
- [] Install socket.io
	- [] Create message instance


**stretch**
	* Add profile image

# TODO LIST FOR SERVER DEVELOPMENT
- [] Set up express server
- [] Install passport.js
- [] Set up socket
- [] Emit messages
	- [] Limit emmisson to chosen user
- [] Install firebase/firestore
	- [] Create the users collection
	- [] Create document for every chat
	- [] Create to: from: and message object
	- [] Create document for every group
	- [] Create users: array and sender:, message:, votes
