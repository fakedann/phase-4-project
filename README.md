# Phase-4 Project
## _Restaurant Reviewer_

## Features

- Enable efficient communication between the frontend and backend areas of a large project
- Create and store data in real servers by using tools provided by Rails
- Take advantage of a dynamic backend framework that enables smooth validations and data management
- Showcase the power of Rails to generate a robust auth system

The goal of this project is to demonstrate how the tools provided by frameworks such as React and Rails empower developers across the world to create professional applications. In my preceding projects, I had to rely on different techniques to mimick the behavior or utility of real-life application features'. While this project does not fully reach the professionalism or thoroughness of a real app, it gets fairly close. Rails finally provides the missing pieces to create a full user experience. 

## Setup

The following indications only apply if the user wishes to run the application locally. There is a deployed version of the app in the Render domain that you can [reach with this link.](https://phase-4-project-tl7o.onrender.com)

### Requirements

The project relies on npm and node.js capabilities. [ First install these components ](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) if you have not already. Additionally, React allows users to navigate through the application with the help of [react-router-dom.](https://www.npmjs.com/package/react-router-dom) Please, also install this package.

Additionally, you need to install some features that will manage the backend side of things. Mac users tend to count with built-ins Ruby interpreters, but here's a guide for Microsoft users and outdated versions of Ruby: https://www.ruby-lang.org/en/downloads/. After updating your Ruby interpreter, you must also download Rails web framework:

- Rails: https://guides.rubyonrails.org/v5.1/getting_started.html#installing-rails

Once everything is succesfully set up, open the terminal where you forked/cloned this repository and type in the following command:

```sh
 rails s
```
This will activate the server capabilities offered by Rails. This will in essence work as your connection to the database/backend side of the project. In here, the user can check useful information as to how Rails operates under the hood. If there's any error that the backend wishes to notify the frontend about, they will also appear in detail on this console.

In addition, the user needs to open a new terminal. The user must also locate the same folder that contains this repository, but this time the user must get into the /client folder. Once you have locatated this folder and opened it, type in the following command:

```sh
 npm start
```

Once you have typed this command, this will enable the frontend side of the project. A new tab on your browser will open that will showcase the project and all of its interactive features.


## Usage

**Home page**
Restaurant Reviewer allows multiple users to create a profile and review the available restaurants in their area. The home page will prompt individual users to either log in or create a new profile. If you are creating a new profile, the user will be required to submit a valid*** email address, password, name, phone, and address. Once this operation has been completed, the user can now log into their profile.

After logging in, the user will be shown a small profile window with basic information about the user and a log out button if they wish to stop using this account. Moreover, the user will also be able to see the latest reviews from all of the users that take advantage of this application.

Rails provides incredibly features that allow this swift authentication process. Even if an user tried to access the database to acquire the users' passwords, they would encounter a difficult task ahead of them.

***valid in the context of formatting, not necessarily real.

**New Review**
This feature, along with the Collection feature (more on that later), will only be available if an user is logged in. Otherwise, you will be prompted to go back to the home section and properly log in. Once an user is logged in, they can create their new reviews by selecting the available restaurants in their area. After this, the user must also select the appropiate rate that they wish to grant their visit to the selected restaurant, plus additional comments that can further clarify how was the full experience of going there. The possible rates to select range from 1 to 5 and the comments section cannot be blank or include anything other than only letters or a combination of letters and numbers. If you do not follow these instructions, you will receive an error indicating this problem. On the other hand, if a review is succesfully submitted, this new data will be pushed into the database where it can also be accessed through the Collection feature for additional actions.

**Collection**
In this section, the user can manage all of its reviews. There are buttons that will filter all of the available reviews by different criteria. Show All will display all of the reviews submitted by the user. Show Last Five will display only the last 5 (or less) reviews submitted by the user. Lastly, the user can also filter the available reviews by their rate. The options are Low Rates (displays rates lower than 3), Medium Rates (only displays rates equal to 3), and High Rates (displays rates of 4 or higher). 

After selecting a desired display, the user can manage their own reviews. All reviews can either be changed or deleted. If an user desires to change a review, they will be prompted to fill in a form with the new changes. If the user tries to submit the review again but the data is the same as it was before, an error notification will appear. If a change is succesfully submitted, it can be checked once the user goes back to the displaying area. Moreover, if the user wishes to delete a review, they will be directed to a delete confirmation window. They will be given an opportunity to either confirm the destruction of the review or to cancel the operation.

#### Contributing
Suggestions are welcome in terms of the application's performance or presentation. For direct contact, use the following email address: daniel07escalona@gmail.com. 

#### Authors and Acknowledgment
**Author: Daniel Escalona. Student at [Flatiron School.](https://flatironschool.com/welcome-to-flatiron-school/?utm_source=Google&utm_medium=ppc&utm_campaign=12728169833&utm_content=127574232664&utm_term=flatiron&uqaid=513799628630&CjwKCAiA4KaRBhBdEiwAZi1zzgCEBEdI6285I6gmLUyI5Pw_8YNLXh1P1oRIGf8t0fXozErvGMW5FRoCG1MQAvD_BwE&gclid=CjwKCAiA4KaRBhBdEiwAZi1zzgCEBEdI6285I6gmLUyI5Pw_8YNLXh1P1oRIGf8t0fXozErvGMW5FRoCG1MQAvD_BwE)**
**This project would not have been possible without the following resources:**

https://www.npmjs.com/package/react
https://flatironschool.com/courses/coding-bootcamp/
https://rubyonrails.org/

## License

MIT