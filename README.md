#Task Manager

Task manager is an application where you can add tasks to a list and mark them as complete. You can also delete tasks from the task page as well as edit those from the same task page.
Adding Task is so simple: Click on Add task button at home page, fill the the Task name and description and click on Submit Button.
You can see the list of tasks on the home page.

## Installation

You can locally setup the application by following the below steps:

### Step 1: Clone the repository

```bash
git clone https://github.com/hareeshkr/task-manager.git
```

### Step 2: Setup the Server

First of all you need to setup the server. For that open the server folder inside the task-manager folder. Now create a .env file in the server folder. Copy the content of .env.example file and paste it in the .env file. Now you need to add the database url in the .env file. You can use any database url. I have used mongodb local database. You can use the local database or Mongodb atlas. You can create a free account on mongodb atlas and create a database there. After creating the database you will get the database url. Copy that url and paste it in the .env file towards the 'CONNECTION_STRING' variable. You can change the port number if you want. Or else you can comment out or remove the PORT variable so that the server will run on default PORT: 5000. Now you just need to run the following command

Make sure you are inside the server folder.

```bash
npm start
```

On successful running the above commands you will see the following message in the terminal:

```bash
Server is running on port 5000
Connected to database
Open http://localhost:5000 to view it in the browser.
```
