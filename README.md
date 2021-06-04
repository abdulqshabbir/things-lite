## Todos for things-lite project

Add ability to Tag todos
[x] Allow a drop-down selection for tagging
[ ] Allow "Today", "Upcoming", "Someday" and "Inbox" as four options
[ ] By default, options tagged null will be in inbox
[ ] Add tag field to database model
[ ] Modify the updateTodoService function to now accept PUT requests to /todos/[tid] to update tags
[ ] When rendering todos on /todos we need to filter and display todos only with null tags
[ ] When rendering todos on /today or /upcoming or /someday render appropiate todos

Refactor some code
[ ]

Implement Google OAuth
[ ] Create Google Sign-in button
[ ] Clicking Gogole Sign-in button should open sign-in dialog
[ ] Have firebase authenticate user
[ ] Store user on my backend
[ ] Link user to his/her todos
[ ] Retrieve user profile based on google account
[ ] Redirect to user profile at /todos

Add deadlines to Todos
