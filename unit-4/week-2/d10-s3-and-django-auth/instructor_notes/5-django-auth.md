# Django Authentication:

[VIDEO](https://generalassembly.wistia.com/medias/0vvutcmkzr)

## Learning Objectives:
`null`

## Road Map:

`null`

## 1. Setup

Start from our **Uploading Images to S3 in Django** lesson

`python3 manage.py runserver`

## 2. Intro to Authentication in Django:

- What is *authentication* and what is *authorization*?
- `settings.py` has our build in auth app installed. 
-  *User Model* comes pre-built and pre-defined with `username, password, email, first_name, last_name`
-  Be careful making any changes to the default *User Model* because it can be very tricky

## 3. Creating the User --< Cat Relationship

- Try to implement authentication **VERY EARLY ON**, instead of at the end, to avoid today's *refactoring dance*

#### Update the **Cat** model

```python
# models.py

# Importing the User model
from django.contrib.auth.models import User
```

<details>
<summary>
❓ One of these models has to have a <b>foreign key</b> field. Which one is it and why❓❓❓
</summary>
<hr>

Cat will have a foreign key field becasue Cat belongs to a User

<hr>
</details>

Update models to reflect Cat fields change
```python
# models.py

toys = models.ManyToManyField(Toy)
# add user_id FK column
user = models.ForeignKey(User, on_delete=models.CASCADE)
```

We just added a **foreign key** onto the existing Cat model. How can the db add an **EMPTY** user ID column to the table when there are rows of data that won't have a value in each row? *database violation*

Django's Quick Fix
```shell
python3 manage.py makemigrations

WARNING MESSAGE... FIX: uno or dos?
```

Select 1 - whatever value we provide will be used to fill all existing rows (we'll provide the value of our superuser id *probably the number 1*)

Check our migrations folder for the latest migration for **default=1**

```shell
python3 manage.py migrate
# Next move
python3 manage.py runserver
```

## 4. Adding URLs for Authentication

```python
# catcollector/urls.py
urlpatters = [
  ...,
  # Docs show accounts
  path('accounts/', include('django.contrib.auth.urls'))
]
```

- [x] close `catcollector/urls.py`

- [x] check out `localhost:8000/accounts/login/` Why is it trying to render a template? A view function is already hooked up. What's going on with the `registration/login.html` message? 

- [x] Inside templates folder, create a `registration` folder and create a `login.html` inside the `registration` folder.

- [x] Restart server, go to `localhost:8000/accounts/login/` and see a blank page.

## 5. Logging In:

#### Create the login.html template

- [x] Copy that markup and place it in **login.html**

`LoginView` is built into Django app and passes in a form object we can display in **login.html**

- [x] Write the form inside **login.html** with url template tag and 'login' as the path. `'login'` comes from `accounts/login/ [name='login']` name=... 

- [x] Check out `localhost:8000/accounts/login` and login. We will see it going to `/accounts/profile` with a *404 error*.

#### Specifying the Default Redirect After Logging In:

```python
STATIC_URL = 'static/'

LOGIN_REDIRECT_URL = '/cats/
```

## 6. Updating the Nav Bar Dynamically

If we're not logged in, we wanna see about, sign up, log in. 

If we're logged in... we wanna see all the options.

NO more passing in `req.user` like we did in Express. Autopilot is turned on. Every template now has a `user` variable.

- [x] write code inside `base.html` in our nav bar.

- [x] Clicking logout will work, but it won't look nice.

## 7. Log Out

`null`

Test login and log out

## 8. Update the CatCreate View to Assign a New Cat to the Logged in User

refactor

```python
# views.py

# method override
def form_valid(self, form):
  # self.request.user is the logged in user
  form.instance.user = self.request.user
  # CreateView's form_valid method
  return super().form_valid(form)
```

- [x] Check refactor with `localhost:8000/admin` check if cat has user assigned

## 9. Sign Up New Users

#### Add a URL
`null`

Server is complaining that it doesn't know about `signup`.

```python
# views.py
def signup(request):
  pass
```

#### Code the `signup` View Function

- GET request --> render signup form
- POST request --> create user and redirect

- [x] UserCreationForm import
- [x] login function import

```python
# Creating 'user' form object
form = UserCreationForm(request.POST)
```

#### Add the Sign Up Link to the Nav

`null`

- [x] Test by logging out. 

#### Create the signup.html Template

`null`

- [x] Test by signing up a new user 

## 10. Displaying Only the User's Cats

Signed up a new user and we're seeing everyone else's cats.

`null`

```python
# Both of these work. 
cats = Cat.objects.filter(user=request.user)
cats = request.user.cat_set.all()
```

If we log out and log back in as `superuser`, we'll see ALL cats again.

## 11. Implement Authorization

- [x] Log out. Check out localhost:8000/cats error message
- [x] Need to protect routes that require a logged in user
- [x] Express used middleware for urls.py approach
- [x] Django will handle Auth in views.py (controllers)

> A python decorator is a function that takes in a function (as an argument) and returns a newly enhanced function in its place.
> A way to add additional behavior

- You Do (2 minutes)

#### Class Based Views:

A `mixin` is a class that has general behavior that you want to inherit from

## Summary:

Add polish. Nice portfolio piece with Finch Collector. 

Implement Authentication up from pretty pretty please? 



