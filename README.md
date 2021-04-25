## Todos for things-lite project

Styling
[ ] Include Deadline, Tags within each Todo container
[ ] Adjust box-shadow and background-color for Todo container

Frontend Functionality
[x] Click Todo to go to /todo/:tid page
[x] Create /todo/:tid page
[x] Display title, text that all editable
[ ] Clicking the "Save Changes" button should send PUT request to /api/todo/:tid and redirect to /todos
[x] Clicking "Delete Todo" button should send DELETE request to /api/todo/:tid and redirect to /todos

Backend Functionality
[x] Create PUT route for /api/todo/:tid which takes
{title: string, text: string, dueDate: Date} and updates todo in database
[x] Create DELETE route for /api/todo/:tid which takes tid as query parameter and deletes todo from database
