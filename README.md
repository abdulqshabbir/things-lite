## Todos for things-lite project

Styling
[x] Add loading icon for saving todos
[x] Add spinning icon for deleting todos
[x] Make pretty add todo button

Frontend Functionality
[x] Click Todo to go to /todo/:tid page
[x] Create /todo/:tid page
[x] Display title, text that all editable
[x] Clicking the "Save Changes" button should send PUT request to /api/todo/:tid and redirect to /todos
[x] Clicking "Delete Todo" button should send DELETE request to /api/todo/:tid and redirect to /todos

- REST naming conventions
  [ ] POST requests to add new todos should go to /todos
  [ ] DELETE requests to delete a specific todo should go to /todos/[tid]
  [ ] PUT requests to update a todo should go to /todos/[tid]

Backend Functionality
[x] Create PUT route for /api/todo/:tid which takes
{title: string, text: string, dueDate: Date} and updates todo in database
[x] Create DELETE route for /api/todo/:tid which takes tid as query parameter and deletes todo from database

- REST naming conventions
  [ ] POST requests to add new todos should go to /todos
  [ ] DELETE requests to delete a specific todo should go to /todos/[tid]
  [ ] PUT requests to update a todo should go to /todos/[tid]
