# Flickr Feed App

* [Task](#task)
* [My Approach](#my-approach)
* [Directory Structure](#directory-structure)
* [App Usage and Features](#app-usage-and-features)
* [Download Instructions](#download-instructions)

## Task

The task was to build a **one-page app** that consumed a **JSON** API feed from **Flickr** and to display the resulting data to several annotated **wireframes**. The app also had to be **responsive** so that it could be used on a range of devices.

## My Approach

### Back-End

I decided to build this app using **AngularJS** since it's the most natural choice for building **single-page**, **responsive** apps that don't rely on too much data. The reason why I love using AngularJS so much is because it makes it easy for you to **separate your code** into different components i.e **controllers**, **services**, and **views/directives**. This therefore makes your code more comprehensive and tidy, not to mention easy to test.

I first started by creating an [app.js](https://github.com/hsheikhm/flickr-app/blob/master/app/js/app.js) file which is responsible for creating the app module, listing all the dependencies and configuring the routes and views to be shown. Next, I had created a [factory](https://github.com/hsheikhm/flickr-app/blob/master/app/js/services.js) that is responsible for making a JSON request to the Flickr feed API. I then decided to make two [controllers](https://github.com/hsheikhm/flickr-app/blob/master/app/js/controllers.js), one for the feed list page and the other for the photo detail page.

Lastly, I had created some [filters](https://github.com/hsheikhm/flickr-app/blob/master/app/js/filters.js) in order to achieve the custom format of the published date and author names.

### Front-End / Styling

Once all the logic was complete I then moved onto styling the app. I had used **HTML**, **CSS**, **Sass**, and **Bootstrap** to style the website. I even managed to integrate **Angular's ngAnimate** module to create some nice [animations](https://github.com/hsheikhm/flickr-app/blob/master/app/css/animations.css). I particularly enjoy using [Sass](https://github.com/hsheikhm/flickr-app/tree/master/app/css/sass) as a **CSS extension** because it allows you to separate your styling into different files. Plus you can benefit from using its mixins, variables and nesting features. I had also created a [Grunt file](https://github.com/hsheikhm/flickr-app/blob/master/gruntfile.js) in order to compile the Sass code into CSS.

To make the app **responsive** I had set different css values to different [media screen sizes](https://github.com/hsheikhm/flickr-app/blob/master/app/css/sass/_index.sass).

### Testing

I had completed and passed all [feature / e2e](https://github.com/hsheikhm/flickr-app/blob/master/test/e2e/scenarios.js) tests using **Protractor** and **Selenium**. As for [unit testing](https://github.com/hsheikhm/flickr-app/tree/master/test/unit) I used **Karma-Jasmine**.

## Directory Structure

```
├── app/
│   ├── css/
│   │   └── sass/
│   ├── partials/     
│   ├── js/   
│   │   ├── app.js
│   │   ├── controllers.js
│   │   ├── directives.js
│   │   ├── filters.js
│   │   └── services.js
│   └── index.html
│   
├── dist/
│   ├── flickr-app.js
│   └── flickr-app.min.js
│
├── test/
│   ├── e2e/
│   │   └── scenarios.js
│   ├── unit/  
│   │   ├── controllersSpec.js
│   │   ├── filtersSpec.js
│   │   └── servicesSpec.js
│   ├── karma.conj.js
│   └── protractor-conf.js
│
├── gruntfile.js
├── package.json
├── bower.json
│
```

## App Usage and Features

***User can see list of photos from Flickr, view author's Flickr profile and view photo on Flickr:***

![Feed List Page](https://github.com/hsheikhm/Github-Images/blob/master/flickr-app/feed-list-page.png)

***User can click on the photo to view its content:***

![Photo Detail Page](https://github.com/hsheikhm/Github-Images/blob/master/flickr-app/photo-detail-page.png)

***User can filter photos by tag name:***

![Search by Tag](https://github.com/hsheikhm/Github-Images/blob/master/flickr-app/tag-search.png)

## Download Instructions

Follow the below instructions on your terminal to use the app:

```
$ git clone https://github.com/hsheikhm/flickr-app.git
$ cd flickr-app
$ npm install
$ bower install
$ npm start
(On your browser visit: http://localhost:8000/app/#/feed)
```

#### Author: [Hamza Sheikh](https://github.com/hsheikhm)
