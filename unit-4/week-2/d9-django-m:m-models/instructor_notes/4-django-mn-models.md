# Django Many-to-Many Relationships

[Django Many-to-Many Relationships Class Repo](https://git.generalassemb.ly/SEIR-2-21-23/course-materials/blob/main/unit-4/week-2/d9-django-m:m-models/9.1-django-many-to-many-models.md)


## Learning Objectives

- Use Django's `ManyToManyField` to Implement a M:M Relationship
- Add an Association in a M:M Relationship
- Remove an Association in a M:M Relationship

## 1. Setup

PRO TIP: Sometimes, it just works in the TERMINAL and won't work in the VSCODE Terminal

PRO TIP: settings.py
This got my system working on my M2 Mac

```python
# settings.py
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'catcollector',
        'HOST': 'localhost',
        'USER': 'postgres',
        'PASSWORD': 'password',
        # 'PORT': 3000 <-- if you desire to use a port other than 8000, you can change that here to any valid port id, some number between 1 and 65535 that isn't in use by some other process on your machine. The reason for this port number range is because of how TCP/IP works, a TCP/IP protocol network(the most widely used protocol used on the web) allocated 16 bits for port numbers. This means that number must be greater than 0 and less than 2^15 -1.
    }
}
```

```shell
python3 manage.py showmigrations

python3 manage.py migrate

python3 manage.py runserver
```

## 2. Review the Starter Code

Let's add some toys to our DB:

- Bouncy Mouse / Blue
- Cat Charmer / Green
- Catnip Banana / Gold
- Whacky Mouse Chaser / Purple

Let's take a look at the Toy-related Django modules in main_app:

- models.py
- urls.py
- views.py
- admin.py

```python
# models.py
class Toy(models.Model):
  name = models.CharField(max_length=50)
  color = models.CharField(max_length=20)

  def __str__(self):
    return self.name

  def get_absolute_url(self):
    return reverse('toys_detail', kwargs={'pk': self.id})
```

The `get_absolute_url()` method of the Toy model is using the `reverse()` function to dynamically generate the URL for the detail view of a specific Toy instance.

The `reverse()` function takes as its argument the name of the view that should handle the URL pattern, in this case `'toys_detail'`, and any keyword arguments that the view function expects.

In this case, the URL pattern for the detail view would need to include a primary key `(pk)` value that uniquely identifies the `Toy` instance to be displayed. The `kwargs` argument passed to `reverse()` specifies this parameter by mapping the keyword `'pk'` to the instance's `id` attribute.

By using `reverse()` in the `get_absolute_url()` method, any code that needs to generate a URL for a specific `Toy` instance can simply call this method on that instance, without needing to know the exact URL pattern or format. This allows the URL pattern to be changed later without affecting the rest of the codebase that relies on it.

**TLDR:** The **`get_absolute_url`** method in the **`Toy`** model returns the URL to view the details of the toy instance by using the **`reverse`** utility function with the name of the view and the primary key of the instance as a keyword argument.

```python
# urls.py
from django.urls import path
from . import views

urlpatterns = [
...
# ToyList: This view is responsible for displaying a list of all the toys available in the system.
# It will most likely use the Toy model to fetch all the objects and display them in a user-friendly format.
  path('toys/', views.ToyList.as_view(), name='toys_index'),
  # ToyDetail: This view is responsible for displaying the details of a single toy.
  # It will probably use the Toy model to fetch a single object based on the provided primary key (pk), and display its details in a user-friendly format.
  path('toys/<int:pk>/', views.ToyDetail.as_view(), name='toys_detail'),
  # ToyCreate: This view is responsible for creating a new toy object.
  # It will most likely use a form to collect the data from the user, validate it, and create a new Toy object with the provided data.
  path('toys/create/', views.ToyCreate.as_view(), name='toys_create'),
  # ToyUpdate: This view is responsible for updating an existing toy object.
  # It will most likely use a form to collect the updated data from the user, validate it, and update the Toy object with the new data.
  path('toys/<int:pk>/update/', views.ToyUpdate.as_view(), name='toys_update'),
  # ToyDelete: This view is responsible for deleting an existing toy object.
  # It will most likely use a confirmation page to ensure that the user intends to delete the object, and then delete the Toy object from the database.
  path('toys/<int:pk>/delete/', views.ToyDelete.as_view(), name='toys_delete'),
]
```

**TLDR;** The .as_view() method is used when you want to use class-based views in Django. It returns a callable that takes a request and returns a response. This is necessary because class-based views are not callable by default. The .as_view() method converts the class-based view to a function-based view that can be called like any other view function in Django.

```python
# views.py
class ToyList(ListView):
  model = Toy

class ToyDetail(DetailView):
  model = Toy

class ToyCreate(CreateView):
  model = Toy
  fields = '__all__'

class ToyUpdate(UpdateView):
  model = Toy
  fields = ['name', 'color']

class ToyDelete(DeleteView):
  model = Toy
  success_url = '/toys'
```

- **ToyList** is a view that inherits from the **ListView** class and lists all the toys from the **Toy** model in the database.

- **ToyDetail** is a view that inherits from the **DetailView** class and displays the details of a single toy from the **Toy** model in the database.

- **ToyCreate** is a view that inherits from the **CreateView** class and provides a form to create a new **Toy** object in the database.

- **ToyUpdate** is a view that inherits from the **UpdateView** class and provides a form to update the **name** and **color** fields of an existing **Toy** object in the database.

- **ToyDelete** is a view that inherits from the **DeleteView** class and deletes a **Toy** object from the database when the delete button is clicked. It also specifies the URL to redirect to after the object is deleted.

```python
# admin.py

from django.contrib import admin
from .models import Cat, Feeding, Toy

# Register your models here.
admin.site.register(Cat)
admin.site.register(Feeding)
admin.site.register(Toy)
```

The **admin.site.register(Toy)** line of code tells Django to include the **Toy** model in the admin interface so that it can be managed through the Django admin site. Once registered, the Toy model can be viewed, edited, and deleted from the admin interface.

## 3. Many-to-Many Relationships in Relational Databases

![DIAGRAM](https://i.imgur.com/imTYIBl.png)

Relational databases use a join table to implement many-to-many relationships, where a row in the join table associates two rows in the related tables using foreign keys for their primary keys, and adding or removing the association involves manipulating the corresponding row in the join table.

```sql
CREATE TABLE cat_toy (
  cat_id INT,
  toy_id INT,
  FOREIGN KEY (cat_id) REFERENCES cat(id),
  FOREIGN KEY (toy_id) REFERENCES toy(id)
);
```

## 4. Many-to-Many Relationship in Django

To implement a many-to-many relationship in the database using Django we:

1. Add a `ManyToManyField` on **one** of the Models
2. Create the migration and migrate it to update the database

Using a `ManyToManyField` causes Django to automatically create a hidden join table used to implement the M:M association.

```python
# Basic example of how to use Django's `ManyToManyField` in code:
from django.db import models

class Cat(models.Model):
    name = models.CharField(max_length=100)
    toys = models.ManyToManyField('Toy')

    def __str__(self):
        return self.name

class Toy(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
```

In this example, we have two models: **Cat** and **Toy**. The **Cat** model has a **ManyToManyField** called **toys**, which allows each cat instance to have multiple toys.

The **ManyToManyField** creates a join table in the database, which allows for the relationship between the **Cat** and **Toy** models to be many-to-many.

### Add a `ManyToManyField` on One Side of the Relationship

```python
# main_app/models.py

class Cat(models.Model):
name = models.CharField(max_length=100)
breed = models.CharField(max_length=100)
description = models.TextField(max_length=250)
age = models.IntegerField()

# Add the M:M relationship
toys = models.ManyToManyField(Toy)
```

To create a many-to-many relationship between two models in Django, we need to add a **ManyToManyField** to one of them, and then Django will automatically add a **related-manager** to the other side of the relationship.

A **related-manager** is an attribute that allows us to access the related objects, such as accessing a cat's toys. In this example, a related-manager named **"toys"** is added to the Cat model to access a cat's toys through the many-to-many relationship with the Toy model.

> 👀 It definitely makes sense to name that attribute plurally because a cat can have many toys.

### Make and Run the Migration

Because we've made a change to a Model that impacts the database's schema, we must make a migration and migrate it to update the database.

```shell
python3 manage.py makemigrations

python3 manage.py migrate
```

### Test Drive the Cat >--< Toy Relationship

Connecting a toy to a cat.

```shell
python3 manage.py shell

>>> from main_app.models import *
```

#### The Related-Manager

`null`

#### Adding Associations Between a `cat` and a `toy`

`null`

#### 👉 You Do - Add an Association (1 min)

`null`

#### Removing Associations

`null`

## 5. Implement the Cat & Toy Association in Cat Collector

#### User Stories

`null`

#### Displaying a List of Associated Toys

Displaying a cat's toys is just a matter of updating **templates/cats/detail.html**:

```html
<!-- templates/cats/detail.html -->

<!-- This is all new markup to be added just above the <script> tag -->
<hr>
<div class="row">
  <div class="col s6">
    <h3>{{ cat.name }}'s Toys</h3>
    {% if cat.toys.count %}
      {% for toy in cat.toys.all %}
        <div class="card">
          <div class="card-content">
            <span class="card-title">
              A <span style="color: {{ toy.color }}">{{ toy.color }}</span> {{ toy.name }}
            </span>
          </div>
        </div>
      {% endfor %}
    {% else %}
      <h5>No Toys 😿</h5>
    {% endif %}
  </div>
  <!-- Available toys will come after this line -->
</div>
```

After saving and viewing the detail page for a cat, you'll see something like this:

![Checkpoint](https://i.imgur.com/6ZYUF9y.png)

#### Displaying a List of Unassociated Toys

Basically, we're going to be dislaying a list of toys that cat does not have.

The next step in a process related to displaying toys, that a cat is not associated with, involves adding an "ADD" button to each toy. 

To be able to display the list of unassociated toys, query for them in the **cats_detail** view function and add them to the data being passed to the template. 

The query to find all toys that a cat doesn't have is complicated, but demonstrates the power of the Django ORM.

In **views.py** update `cats_detail` as follows:
```python
# main_app/views.py

def cats_detail(request, cat_id):
  cat = Cat.objects.get(id=cat_id)
  # Get the toys the cat doesn't have...
  # First, create a list of the toy ids that the cat DOES have
  id_list = cat.toys.all().values_list('id')
  # Now we can query for toys whose ids are not in the list using exclude
  toys_cat_doesnt_have = Toy.objects.exclude(id__in=id_list)
  feeding_form = FeedingForm()
  return render(request, 'cats/detail.html', {
    'cat': cat, 'feeding_form': feeding_form,
    # Add the toys to be displayed
    'toys': toys_cat_doesnt_have
  })
```

The object manager's exclude method is like filter except that it is used to return objects that don't meet the criteria.

The Django Query API enables Field Lookups for every field in the model. id__in is one such field lookup that checks if the model's id is in a list and that list is being created with this code:

```python
id_list = cat.toys.all().values_list('id')
```

Finally, we are passing the toys to the template by adding it to the context dictionary.

Now for more markup to display the toys the cat doesn't have:

```html
<!-- templates/cats/detail.html -->

</div>
<!-- Available toys will come after this line -->
<!-- New Markup Below -->
<div class="col s6">
  <h3>Available Toys</h3>
  {% if toys.count %}
    {% for toy in toys.all %}
      <div class="card">
        <div class="card-content">
          <span class="card-title">
            A <span style="color: {{ toy.color }}">{{ toy.color }}</span> {{ toy.name }}
          </span>
        </div>
        <div class="card-action">
          <form action="" method="POST">
            {% csrf_token %}
            <button type="submit" class="btn">Add</button>
          </form>
        </div>
      </div>
    {% endfor %}
  {% else %}
    <h5>{{cat.name}} Already Has All Toys Available</h5>
  {% endif %}
</div>
```

#### Making the Association

Now we need to handle the form being submitted to associate a toy with the cat.

To do this, the server needs to know the `id` of **both** the cat and the toy being associated.

Let's first add a new routes with a URL pattern that includes both `ids` in **urls.py**:

```python
# main_app/urls.py
path('cats/<int:cat_id>/add_feeding/', views.add_feeding, name='add_feeding'),
# associate a toy with a cat (M:M)
path('cats/<int:cat_id>/assoc_toy/<int:toy_id>/', views.assoc_toy, name='assoc_toy'),
```

```shell
AttributeError: module 'main_app.views' has no attribute 'assoc_toy'
```

#### 👉 You Do - Update the action Attribute (2 mins)

1. Hint: The assoc_toy route has two route parameters defined, thus both the cat's id and the toy's id need to be provided.

The **{% url 'assoc_toy' cat.id toy.id %}** is a template tag that generates a URL based on the named URL pattern **'assoc_toy'** and the arguments **cat.id** and **toy.id**.

It's creating a URL for the **assoc_toy** view function that will handle the form submission when the "Add" button is clicked. The **cat.id and toy.id arguments** are used to pass the IDs of the cat and toy objects that are associated with the form submission, so that the view function can use them to associate the toy with the cat.

This URL pattern provides a way to handle form submissions and pass the relevant information to the associated view function.

 > All that's left is to code the views.assoc_toy view function:

 In **views.py**
 ```python
# main_app/views.py

def assoc_toy(request, cat_id, toy_id):
  # Note that you can pass a toy's id instead of the whole toy object
  Cat.objects.get(id=cat_id).toys.add(toy_id)
  return redirect('detail', cat_id=cat_id)
 ```

Congrats on implementing a many-to-many relationship between cats and toys!

## 6. Refactoring the CatCreate CBV

If you browse to **Add a Cat**, you'll notice that the form has an input for the new cat's "toys".

This extra input will prevent us from being able to add a cat, so let's refactor the `fields` attribute of the `CatCreate` CBV as follows:

```python
# main_app/views.py

class CatCreate(CreateView):
  model = Cat
  # Refactor fields so that 'toys' is not rendered in form
  fields = ['name', 'breed', 'description', 'age']
```

## 7. 💪 Practice Exercise (15 minutes)

1. Inside **main_app/templates/cats/details.html**, take the card-action and paste it under the card-content:

```html
<!-- main_app/templates/cats/details.html -->
    <div class="card">
      <div class="card-content">
        <span class="card-title">
          A <span style="color: {{ toy.color }}">{{ toy.color }}</span> {{ toy.name }}
        </span>
      </div>
      <div class="card-action">
        <form action="{% url 'assoc_toy' cat.id toy.id %}" method="POST">
          {% csrf_token %}
          <button type="submit" class="btn">Add</button>
        </form>
      </div>
    </div>
```

2. Change path. *unassoc_toy** and REMOVE:
```html
<!-- main_app/templates/cats/details.html -->

   <div class="card-action">
     <form action="{% url 'unassoc_toy' cat.id toy.id %}" method="POST">
       {% csrf_token %}
       <button type="submit" class="btn">Remove</button>
     </form>
   </div>
```

Got an error? Failed successfully!

3. See error? Go to **main_app/urls.py**

```python
# main_app/urls.py
    path('cats/<int:cat_id>/assoc_toy/<int:toy_id>/', views.assoc_toy name='assoc_toy'),
    path('cats/<int:cat_id>/unassoc_toy/<int:toy_id>/', views.unassoc_toy, name='unassoc_toy'),
```

See the following error?

```shell
AttributeError: module 'main_app.views' has no attribute 'unassoc_toy'. Did you mean: 'assoc_toy'?
```

4. Into **main_app/views.py**:

```python
# main_app/views.py
def assoc_toy(request, cat_id, toy_id):
    # Note that you can pass a toy's id instead of the whole toy object
    Cat.objects.get(id=cat_id).toys.add(toy_id)
    return redirect('detail', cat_id=cat_id)

def unassoc_toy(request, cat_id, toy_id):
    Cat.objects.get(id=cat_id).toys.remove(toy_id)
    return redirect('detail', cat_id=cat_id)
```
