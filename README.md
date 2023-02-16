<img src="https://i.imgur.com/XseXU8J.png" width="900">

# Welcome to General Assembly SEIR-2-21-23

This will be your shared class repo! Guides, in-class labs and code samples, and other resources will live here.

### Contents

- Course Dates and Holidays
- Link to the Class Zoom Room
- Course Curriculum
- Instructional Team / Contact Info
- Links to Sign Up for Instructors' Office Hours
- Link to Recorded Lessons
- Link to Deliverable Schedule
- Class Repository Structure
- Becoming Familiar With the SEI GitHub Workflow
- Daily JavaScript Code Challenges
- Additional Coding Practice Resources
- Immersive Graduation Requirements

### Course Dates and Holidays

- Course Dates: Tuesday, February 21st, 2023 - Monday, May, 15th, 2023
- Holidays:
    - None

### Link to the Class Zoom Room

[Link to join the class Zoom Room](https://generalassembly.zoom.us/j/94436990982?pwd=ZHI1c0thTm5uT20yYStyV2ljajdjQT09)


### Course Curriculum

> The following is an overall schedule and is subject to change.

<table>
  <thead>
    <tr><th>Unit</th><th>Week</th><th>Topics</th><th>Project</th></tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Fundamentals of Front-end Development</td>
      <td align="center">1</td>
      <td>Fundamentals of JavaScript, HTML & CSS<br>DOM Manipulation & Events<br>Structuring a Browser App</td>
      <td rowspan="3">Browser-based Game</td>
    </tr>
    <tr>
      <td align="center">2</td>
      <td>CSS: Flexbox, Grid & Responsive Design<br>JS: Callback functions, Classes, this Keyword, Array Iterator Methods, jQuery, Testing & Playing Audio</td>
    </tr>
    <tr>
      <td align="center">3</td>
      <td>Project Week<br>Project Deployment to GitHub Pages</td>
    </tr>
    <tr>
      <td rowspan="3">Full-stack Development</td>
      <td align="center">4</td>
      <td>Client-Server: HTTP Communications & RESTful Routing<br>NodeJS & ExpressJS Framework<br>MongoDB & MongooseJS ODM<br>Computer Science</td>
      <td rowspan="3">MEN-stack CRUD Application</td>
    </tr>
    <tr>
      <td align="center">5</td>
      <td>Promises<br>Consuming APIs<br>Authentication using OAuth<br>User-Centric CRUD<br>Regular Expressions<br>Computer Science</td>
    </tr>
    <tr>
      <td align="center">6</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to Heroku</td>
    </tr>
    <tr>
      <td rowspan="3">Developing Single-page Apps</td>
      <td align="center">7</td>
      <td>Fundamentals of React<br>MERN-Stack Infrastructure</td>
      <td rowspan="3">MERN-Stack Application</td>
    </tr>
    <tr>
      <td align="center">8</td>
      <td>MERN-Stack Infrastructure (cont.)<br>Token-based Authentication</td>
    </tr>
    <tr>
      <td align="center">9</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to Heroku</td>
    </tr>
    <tr>
      <td rowspan="3">Second Language & Web Framework</td>
      <td align="center">10</td>
      <td>Relational Databases & SQL<br>Fundamentals of Python<br>CS Topics</td>
      <td rowspan="3">Group Project: Full-stack Django Application</td>
    </tr>
    <tr>
      <td align="center">11</td>
      <td>Django Web Framework<br>Uploading Files to Amazon S3<br>Username/Password Authentication</td>
    </tr>
    <tr>
      <td align="center">12</td>
      <td>CS Topics<br>Project Week<br>Project Deployment to Heroku</td>
    </tr>
  </tbody>
</table>

### Instructional Team Contact Information

|          Role           | Name |     Slack      | Email                             |
|:-----------------------:|:------:|:--------------:|:---------------------------------:|
|     Lead Instructor     | Kenneth Chang  | @Kenneth Chang |  kenneth.chang@generalassemb.ly   |
| Sr. Instructional Associate | Matthew Gonczar | @Matthew Gonczar | matthew.gonzcar@generalassemb.ly |
| Instructional Associate | Evan Maloney | @Evan Maloney | evan.maloney@generalassemb.ly |
| Instructional Associate | Payne Fulcher | @Payne Fulcher | payne.fulcher@generalassemb.ly |


### Link to Recorded Lessons

For your convenience, links to the recordings of the lessons will be maintained in this file in the `resources` folder
of the class repo:  
[Links to the Recorded Lessons](./resources/recorded-lessons.md).

### Link to Deliverable Schedule

A Deliverable is an assignment that is required to be submitted. Although not all labs/homework are required to be
submitted as deliverables, they are still to be completed when assigned since they provide the necessary practice for
the lessons taught.

Graduation requires that 80% of deliverables be completed (working) and delivered on time.

In the case of multi-part labs, each part will count as one deliverable, however, all parts will be submitted by a
single due date.

Unless otherwise stated, no deliverable will be accepted past its due date, which is typically 2 - 3 days from when the
deliverable was assigned.

[Schedule](https://docs.google.com/spreadsheets/d/1A6XsYgKkETMXqiQHWzbOsI2p3HjG6U0LJpcn-MJSPNE/)

### Class Repo Structure

```
/SEIR-2-21-23
    /computer-science 
    /resources
    /unit-1
      /week-1
          /d1-dev-environment-and-js-fundamentals
            /01-topic
            /02-topic
            /03-topic
            /04-topic
```

### Becoming Familiar With the SEI GitHub Workflow

#### Forking (copying) the GA Class Repo to Your GitHub Account

You will have read-only access to the GA class repo. However, you most certainly will want to be able to make changes (
e.g., add notes, save code exercises, etc). These changes will be saved to your own personal copy of GA's Student repo -
known as a **fork**. To get this fork do the following:

1. Make sure that you're logged in to your GA **Enterprise** GitHub account. If you have not signed up yet, here's the
   link to do so: [https://git.generalassemb.ly/join?source=header](https://git.generalassemb.ly/join?source=header)
2. In another tab, browse to the GA class
   repo:  [https://git.generalassemb.ly/SEIR-2-21-23/](https://git.generalassemb.ly/SEIR-2-21-23/)
3. In the top-right corner of the page, click the `Fork` button. SEI-CC Now you will have a copy of the repo in **your**
   Enterprise GitHub account!

#### Cloning Your Copy of the Repository Locally

Now that you have a copy of the class repo in your GitHub account, it's time to bring the contents of that repo onto
your computer - this process is known as **cloning** and it only needs to be done once:

1. On your Enterprise GitHub account, browse to your fork of the GitHub class repo and under the repository name
   click `Clone or download`
2. In the `Clone with HTTPS` section, click the clipboard to copy the URL for the repository.
3. Open Terminal and navigate to your `~/code` folder - you may choose a different folder if you wish, however these
   instructions will assume you clone the repo into a folder named `code`.
4. In Terminal, type `git clone ` and follow it by pasting in the copied URL from the clipboard. The command should now
   look something like this:

```
$ git clone git@git.generalassemb.ly:SEIR-2-21-23/course-materials.git
```

#### Adding a git _remote_ for the original GA class repo

A repo on your computer is called a **local repo** ("repo" is short for repository).

Repos on GitHub are called **remote** repos. Think of them as repos in the cloud.

When you cloned your fork of the repo, a "link" to the git **remote** was automatically created. You can check which
remotes exist for a given local repo using this command:

```
$ git remote -v
```

Note that by convention, the remote that points to the GitHub repo it was cloned from is named **origin**.

However, in order to get the updates that the instructors push to the GA class repo, you will need to create another **
remote** that points to GA's class repo that you forked:

```
$ git remote add upstream https://git.generalassemb.ly/SEIR-2-21-23/course-materials.git
```

Note that by convention, the remote that points to the *original* GitHub repo that was forked is named **upstream**.

Entering `$ git remote -v` again will show that you now have two remotes: `origin` (your fork of GA's class repo)
and `upstream` (GA's class repo).

#### Getting Changes Pushed by Your Instructors

Each day (maybe a few times a day), instructional materials may be pushed to the class repo by your instructors. You
will want to "pull" these materials into your local repo (on your computer). Doing so will enable you to access "starter
code", etc.

First, if you've made any changes **within** the repo locally, i.e., you've modified some starter code, you will need
to **commit** those changes first:

```
$ git add -A
$ git commit -m "Add amazing work..."
```

With local changes committed, you can now fetch the updates from the Github class repo and merge them into your **
local** repo (on your computer):

```
$ git pull upstream main
```

From time to time, you will want to "save" the commits you have made locally to your forked GitHub class repo (in the
cloud). Doing so is a good idea to ensure your work is backed up to the cloud in case of computer failure:

```
$ git push origin main
```

The above Git/GitHub workflow is summarized by this diagram:

<img src="https://i.imgur.com/w871ATo.png">

#### Git Merge Conflicts

A **merge conflict** occurs when git merges two commits that have modified the same region of code and can't figure out
whose code to use. Thus, fixing merge conflicts requires that a developer manually update the code to what it should be
and re-commit it to resolve the conflict, which will also finish git's merge process.

Git informs you which files have merge conflicts and will *annotate* your code to show you how your local code differs
from the code being merged from the remote. An example of such annotation is below.

```
<<<<<<< HEAD
// Local code is here 
=======
// Changes you are pulling are here
>>>>>>> 75c37cea922afc56e7d686adba063b986013ca9f
```

Once you have resolved these merge conflicts by editing the code and removing the markers, you can `add` and `commit`
normally.

During group project merge conflicts will likely occur giving you an opportunity to learn more about them then.

#### Important

**"Nested" repos are never permitted**. Therefore, if you have important code, such as your projects, that belongs in
its own repo, **be sure to put that code in folders outside of the class repo**.

### Daily JavaScript Code Challenges

There are 30 required code challenges that will help you get the necessary practice of writing code, as well as teach
you new methods and techniques.

Just as with the class repo, you will fork &
clone [the code challenges repo](https://git.generalassemb.ly/SEI-CC/daily-js-code-challenges).

You should complete one code challenge per day during the first 30 days, excluding project weeks.

### Additional Coding Practice Resources

If/when you find yourself with extra time, and assuming you are caught up with your Daily JavaScript Code Challenges,
look into these external resources:

#### edabit

[edabit](https://edabit.com/challenges/javascript) is a great practice site and has lots of challenges designed for
beginners!

#### codewars

[codewars](https://www.codewars.com/) is an excellent source of coding challenges for numerous programming languages.

It's free, so be sure to create an account so that you can track your progress.

Code challenges (called _Kata_) vary in difficulty from "8kyu" (easiest) to "1kyu".

#### Interview Cake

Designed to prep you technical interviews, [Interview Cake](https://www.interviewcake.com/) comes highly recommended.

It's not free, however, you should take advantage of its free 7-day email crash course and decide to if its worth the
bucks to you.

### GA SEI Graduation Requirements

General Assembly's courses are pass/fail programs. We have certain requirements in order to be considered a graduate of
the SEI program:

- No more than 3 days absent from class over the duration of the course (3 tardies equals 1 absence)
- Successful completion of four assigned projects.
- Successful completion of each project's assessment. Passing the project assessment is a requirement of the project
  itself.
- If you fail any part of a project (the project requirements, or the project assessment), you can resubmit that part **
  once**.
- No violation of GA's zero tolerance plagiarism policy.
- Participating in GA’s mid-course and end-of-course feedback surveys
- Complete 80% of assigned "deliverables"

When you complete our program with passing status, you unlock our alumni perks:

- Support from the Outcomes Team, including participation in the Meet & Greet event (with prospective employers).
- Receive a GA Letter of Completion (via email approximately 1 week after graduation)
- Credits and discounts for other GA courses (check with Student Services for details).
- Access to our Alumni Community

# Welcome!
