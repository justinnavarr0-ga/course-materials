<img src="https://i.imgur.com/QgojyYY.png" width="400">

# Project #4: Your Capstone Project

## Overview

**You’ve come a long way, and it's time to show it.** This will be your most advanced project to date.

**Before you start working** on the planning for your project, be sure to review your idea with an instructor to ensure that it both:

- **Meets the minimum requirements**, and
- **Is reasonably scoped**

## Project Requirements

### Planning Requirements - Due 5/5

As you've discovered, a project consists of more than just code.

This project requires **planning** organized within a **Trello board** with the following **lists**:

☐ **Icebox**: Holds user stories that have yet to be moved to the _Current/MVP_ list. All user stories are originally put into the _Icebox_, including both MVP and wish list stories. 

☐ **Current/MVP**: Holds user stories that must be completed to meet the minimum project requirements (MVP). Once the MVP has been met, additional user stories may be moved to this list from the _Icebox_.

☐ **Completed**: Holds completed user stories. 

> Important: User stories need to be formed properly using this template:<br>`As a <role>, I want <feature> so that <reason>`.<br>The _reason_ is optional if it's patently obvious.

☐ **Wireframes**: Sketches of each screens's user interface for the major functionality of the application.

☐ **Entity-Relationship-Diagram (ERD)**: A diagram of the app's models (one per data entity) and the relationships between them.

> Please reach out to your instructional team if you have questions regarding user stories, the data model, etc.

### Presentation Requirements - 5/15

You will have 10 minutes to present and demonstrate the following:

1. Introduce your project by paraphrasing its README.

2. Click the link in the README to open the deployed app on Heroku.

3. Demonstrate the application's authentication features by signing up a new user, logging out that user, then logging in with your preferred user.

4. Demonstrate your app's main features.

5. Share/discuss the following code:

	- The "main" model
	- Your "favorite" Express controller method/ Model View
	- Your "favorite" React component/ template

6. Share the experience by answering the following:

	- What was your biggest challenge?
	- What are your key learnings/takeaways?

Following your presentation, there may be a brief Q & A period and optional instructor feedback.

### Version Control Requirements

☐ The project's source code must be hosted on a personal **GitHub repository**.

☐ The repo is to contain **frequent commits** dated from the beginning of the project through its completion. **Do not** "start over" by replacing the repository with a different one.

### README Requirements

Don't underestimate the value of a well crafted `README.md`.

The `README.md` introduces your project to prospective employers and forms their first impression of your work!

> Note: Do not include project planning (user stories, wireframes or ERDs) in the `README.md`.

Include the following sections within the **`README.md`**:

☐ **App Title:** Contains a description of what the app does and optional background info.
  
☐ **Screenshot(s):** A screenshot of your app's landing page and any other screenshots of interest.
  
☐ **Technologies Used**: List of the technologies used.
    
☐ **Getting Started**: That Includes:
  	
- A link to the **deployed app** (Heroku)
- A link to the **Trello board** used for the project's planning that includes user stories, wireframes & an ERD.
  
☐ **Next Steps**: Planned future enhancements (icebox items).
  
### Technical Requirements

☐ Be a full-stack **Django** or **MERN** application hosted on Heroku.

☐ Incorporate the technologies of the **MERN-stack**:

- MongoDB/Mongoose
- Express
- React
- Node

OR

☐ Incorporate the technologies of **Django**:
  
  - Connect to and perform data operations on a **PostgreSQL** database (the default SQLLite3 database is not acceptable).

AND

☐ **Have a well-styled interactive front-end**.

☐ Implement **authentication**. Including the ability of a user to sign-up, log in & log out.

☐ Implement **authorization** by restricting CUD data functionality to authenticated users. Also, navigation should respond to the login status of the user.

☐ Have **full-CRUD data operations** across any combination of the app's models (excluding the User model). For example, creating/reading/updating posts and creating/deleting comments qualifies as full-CRUD data operations. 

☐ If consuming an API (OPTIONAL), have at least **one data entity** (Model) in addition to a User model. The related entity can be either a **one-to-many (1:M) or a many-to-many (M:M)** relationship.

☐ If not consuming an API, have at least **two data entities** (Models) in addition to a User model. It is preferable to have at least **one one-to-many (1:M) and one many-to-many (M:M)** relationship between entities/models.  

## Self-sufficiency / Project Assistance

- At this stage of SEI, being able to find the the answers to development issues is of paramount importance. 

- Use all resources available to solve the issue on your own before seeking assistance.

- If you do seek assistance in Slack, use the support channel and explain the issue as clearly and detailed as you can, include screenshots when possible, and be prepared to explain what you've done to solve the issue on your own.

## Suggestions to Get Started

- Don’t get too caught up in too many awesome features – simple is better. Favor fewer features that look/feel impressive over numerous clunky/sloppy features.

- Be sure to prioritize user stories to meet the MVP and ice box the others.

- Implement the "As a visitor, when I browse to the app, I want..." user story first. 

- Read the docs for whatever technologies / frameworks / API’s you use.

## Best Practices

- **Be consistent** with your code style.

- **Clearly name variables and functions** - remember, variables are usually named as **nouns** and functions as **verbs**.

- **Write well-formatted JS & CSS.** Properly formatting your code makes it more readable. Improperly formatted code infers sloppiness.

- **Comment your code where it makes sense to do so**. Most code is self-documenting (don't comment the obvious), however, use comments to explain complicated code.
## Project Feedback + Evaluation

- Your instructors will be using the [Project 4 Code Review](/Unit_4/project-4/project-4-code-review.pdf) form to determine whether or not the project passes all of the minimum requirements.

---
