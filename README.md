🚫 Note: All lines that start with 🚫 are instructions and should be deleted before this is posted to your portfolio. This is intended to be a guideline. Feel free to add your own flare to it.

🚫 The numbers 1️⃣ through 3️⃣ next to each item represent the week that part of the docs needs to be comepleted by.  Make sure to delete the numbers by the end of Labs.

🚫 Each student has a required minimum number of meaningful PRs each week per the rubric.  Contributing to docs does NOT count as a PR to meet your weekly requirements.

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

🚫 Why did you choose this framework?

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

## 2️⃣ Actions

🚫 This is an example, replace this with the actions that pertain to your backend

`getOrgs()` -> Returns all organizations

`getOrg(orgId)` -> Returns a single organization by ID

`addOrg(org)` -> Returns the created org

`updateOrg(orgId)` -> Update an organization by ID

`deleteOrg(orgId)` -> Delete an organization by ID
<br>
<br>
<br>
`getUsers(orgId)` -> if no param all users

`getUser(userId)` -> Returns a single user by user ID

`addUser(user object)` --> Creates a new user and returns that user. Also creates 7 availabilities defaulted to hours of operation for their organization.

`updateUser(userId, changes object)` -> Updates a single user by ID.

`deleteUser(userId)` -> deletes everything dependent on the user

## 3️⃣ Environment Variables

In order for the app to function correctly, the user must set up their own environment variables.

create a .env file that includes the following:

🚫 These are just examples, replace them with the specifics for your app
    
    *  STAGING_DB - optional development db for using functionality not available in SQLite
    *  NODE_ENV - set to "development" until ready for "production"
    *  JWT_SECRET - you can generate this by using a python shell and running import random''.join([random.SystemRandom().choice('abcdefghijklmnopqrstuvwxyz0123456789!@#\$%^&amp;*(-*=+)') for i in range(50)])
    *  SENDGRID_API_KEY - this is generated in your Sendgrid account
    *  stripe_secret - this is generated in the Stripe dashboard
    
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

See [Frontend Documentation](🚫link to your frontend readme here) for details on the fronend of our project.
🚫 Add DS iOS and/or Andriod links here if applicable.
