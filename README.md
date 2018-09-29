# Bloc Chat

## User stories  
* As a user, I want to see a list of available chat rooms
RoomCtrl provides a list of rooms to the home view, where a list of rooms from the Firebase database is displayed on the left. The Room service makes queries to Firebase.

* As a user, I want to create chat rooms
A modal for adding new rooms to the database provides this functionality.

* As a user, I want to see a list of messages in each chat room
The home view displays a list of messages in the selected chat room. The Message service queries Firebase to determine what messages to display. 

* As a user, I want to set my username to display in chat rooms
Users set their username in usermodal.html, and their username is stored with the help of BlocChatCookies. 

* As a user, I want to send messages associated with my username in a chat room  
The Message service provides functionality for sending messages.

## What I learned  
I learned a lot about using AngularJS as a frontend and communicating with a persistent backend. Looking back at this project today, I remember all the things I didn't like about AngularJS (registering controllers, managing two-way data binding) and realize that I much prefer React.
