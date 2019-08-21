# Lambda App Store - Backend
### Lambda School Labs 14

### Contributors:

|                                                      [Jeff Lapp](https://github.com/lappjeff)                                                       |                                                      [David Clavijo](https://github.com/davichodavid)                                                       |                                                    [Chris Petito](https://github.com/chrispetito)                                                     |                                                    [James Starks](https://github.com/Shadowborn)                                                    |                                                    [Victor Ngyuen](https://github.com/victor082)                                                     |                                                [Joshua Disney](https://github.com/Joshua-Disney)                                                |                                                      [Kayla Crow](https://github.com/blackmacaroon)                                                       
| :--------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| [<img src="https://github.com/lappjeff.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/lappjeff) | [<img src="https://github.com/davichodavid.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/davichodavid) | [<img src="https://github.com/chrispetito.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;"  />](https://github.com/chrispetito) | [<img src="https://github.com/Shadowborn.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/Shadowborn) | [<img src="https://github.com/victor082.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/victor082) | [<img src="https://github.com/Joshua-Disney.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/Joshua-Disney) | [<img src="https://github.com/blackmacaroon.png" width= "100" height="auto" style="object-fit:cover; overflow:hidden;" />](https://github.com/blackmacaroon) |
|                                   [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/lappjeff)                                   |                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/davichodavid)                                 |                                  [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/chrispetito)                                  |                               [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Shadowborn)                                |                               [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/victor082)                               |                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Joshua-Disney)                                |                                [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/blackmacaroon)                                |
|                [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/jeffrey-lapp-622298181/)                 |              [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/david-clavijo-6855a6180/)               |     [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/chris-petito-349499184/)     |      [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/james-starks-2547b392/)       |      [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/victor-nguyen-bb5898177/)       |              [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/joshua-disney-553325176/)              |              [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/kayla-crow/)              

<br>
<br>


# API Documentation

####  Backend delpoyed at lambdaappstore.herokuapp.com

##  Getting started

To get the server running locally:


- Clone this repo
- **npm install** to install all required dependencies
- **npm run server** to start the local server
- **npm run test** to start server using testing environment

### Backend framework goes here

- Node.js
- Express 
- Moment.js

 Why did you choose this framework?

-    Point One
-    Point Two
-    Point Three
-    Point Four

## Endpoints

#### User Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/users` | all users      | Returns the information for all users. |
| GET    | `/api/users/:id` | all users      | Returns the information for an individual user by ID. |
| POST    | `/api/users` | all users         | Creates a new user.             |
| PUT | `/api/users/:id` | all users         | Updates an existing user by ID.                      |
| DELETE | `/api/users/:id` | all users         | Deletes an existing user by ID.                      |

#### App Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/apps` | all users      | Returns all projects that match query strings given for searching and pagination. |
| GET    | `/api/apps/:id` | all users      | Returns the information for an individual app by ID. |
| POST    | `/api/apps` | all users         | Creates a new app.             |
| PUT | `/api/apps/:id` | all users         | Updates an existing app by ID.                      |
| DELETE | `/api/apps/:id` | all users         | Deletes an existing app by ID.                      |

#### Category Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/categories` | all users      | Returns all categories. |
| POST    | `/api/categories` | all users         | Creates a new category.             |
| DELETE | `/api/categories/:id` | all users         | Deletes an existing category by ID.                      |

#### Tag Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/tags` | all users      | Returns all tags. |
| POST    | `/api/tags` | all users         | Creates a new tag.             |
| DELETE | `/api/tags/:id` | all users         | Deletes an existing tag by ID.                      |

#### Comment Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/comments` | all users      | Returns all comments. |
| POST    | `/api/comments` | all users         | Creates a new comment.             |
| DELETE | `/api/comments/:id` | all users         | Deletes an existing comment by ID.                      |

#### App-Tag Routes

| Method | Endpoint                | Access Control | Description                                  |
| ------ | ----------------------- | -------------- | -------------------------------------------- |
| GET    | `/api/appsTags` | all users      | Returns all app-tag objects. |
| POST    | `/api/appsTags` | all users         | Creates a new app-tag object.             |
| DELETE | `/api/appsTags/:id` | all users         | Deletes an existing app-tag object by ID.                      |


# Data Model



####  USERS

---

```
{
  id: INTEGER (auto-increment)
  username: STRING
  email: STRING
  role: STRING
  sub_id: STRING
  first_name: STRING
  last_name: STRING
  pictureURL: STRING
}
```


#### APPS

---

```
{
  id: INTEGER (auto-increment)
  name: STRING
  is_approved: BOOLEAN (defaults to false)
  description: STRING
  hosted_url: STRING 
  frontend_url: STRING
  backend_url: STRING
  submitted_at: STRING
  approved_at: STRING
  display_image: STRING
  in_development: BOOLEAN
  is_live: BOOLEAN
  is_featured: BOOLEAN
  category_id: INTEGER (foreign key: categories)
  tags: ARRAY (connected to tags table)
}
```

#### CATEGORIES

---

```
{
  id: INTEGER (auto-increment)
  category_name: STRING 
}
```

#### TAGS

---

```
{
  id: INTEGER (auto-increment)
  tag_name: STRING 
}
```

#### COMMENTS

---

```
{
  id: INTEGER (auto-increment)
  comment: STRING 
  app_id: INTEGER (foreign key: apps)
}
```

##  Actions

`getUsers()` -> Returns all users

`getUserById(id)` -> Returns a single user by user ID

`addUser(id)` --> Creates a new user

`updateUser(id, user)` -> Updates a single user by ID

`deleteUser(id)` -> Deletes an existing user by ID
<br>
<br>
<br>
`getAllApps()` -> Returns all apps in DB with no filters or pagination

`getAppsCount(searchParameter, approvedFilter)` -> Returns the count of all apps found in DB that match the searchParameter string or approvedFilter boolean

`getAppsPerPage(page, searchParameter, approvedFilter)` -> Returns set amount of apps at a time (currently 12 apps) and uses approvedFilter parameter to change the is_approved DB query

`getAppById(id)` -> Returns app by ID

`getAppTags(id)` -> Returns all tags for a given app

`getAppCategory(id)` -> Returns category for a given app

`getAppComments(id)` -> Returns comments for a given app

`addApp(app)` -> Creates a new app

`updateApp(id, app)` -> Updates an existing app

`deleteApp(id)` -> Deletes an existing app
<br>
<br>
<br>
`getCategories()` -> Returns all categories

`addCategory(category)` -> Creates a new category

`deleteCategory(id)` --> Deletes an existing category by ID
<br>
<br>
<br>
`getTags()` -> Returns all tags

`addTag(tag)` -> Creates a new tag

`deleteTag(id)` --> Deletes an existing tag by ID
<br>
<br>
<br>
`getComments()` -> Returns all comments

`addComments(comment)` -> Creates a new comment

`deleteComment(id)` --> Deletes an existing comment by ID
<br>
<br>
<br>

##  Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

    
    *  REACT_APP_OAUTH_CLIENT_ID = 
    *  REACT_APP_OAUTH_DOMAIN = 
    *  REACT_APP_CLOUDINARY_URL = 
    *  REACT_APP_CLOUDINARY_UPLOAD_PRESET = 
    
## Contributing


When contributing to this repository, please first discuss the change you wish to make via issue, email, or any other method with the owners of this repository before making a change.

Please note we have a [code of conduct](./code_of_conduct.md). Please follow it in all your interactions with the project.

### Issue/Bug Request

 **If you are having an issue with the existing project code, please submit a bug report under the following guidelines:**
 - Check first to see if your issue has already been reported.
 - Check to see if the issue has recently been fixed by attempting to reproduce the issue using the latest master branch in the repository.
 - Create a live example of the problem.
 - Submit a detailed bug report including your environment & browser, steps to reproduce the issue, actual and expected outcomes,  where you believe the issue is originating from, and any potential solutions you have considered.

### Feature Requests

We would love to hear from you about new features which would improve this app and further the aims of our project. Please provide as much detail and information as possible to show us why you think your new feature should be implemented.

### Pull Requests

If you have developed a patch, bug fix, or new feature that would improve this app, please submit a pull request. It is best to communicate your ideas with the developers first before investing a great deal of time into a pull request to ensure that it will mesh smoothly with the project.

Remember that this project is licensed under the MIT license, and by submitting a pull request, you agree that your work will be, too.

#### Pull Request Guidelines

- Ensure any install or build dependencies are removed before the end of the layer when doing a build.
- Update the README.md with details of changes to the interface, including new plist variables, exposed ports, useful file locations and container parameters.
- Ensure that your code conforms to our existing code conventions and test coverage.
- Include the relevant issue number, if applicable.
- You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

### Attribution

These contribution guidelines have been adapted from [this good-Contributing.md-template](https://gist.github.com/PurpleBooth/b24679402957c63ec426).

## Documentation

See [Frontend Documentation](https://github.com/labs14-lambda-app-store/FE2) for details on the fronend of our project.
