# Project 1 - Portfolio
Personal portfolio with Bootstrap, Javascript, PHP, HTML and CSS

## Table of Contents  
1. [Deployment](#Deployment)  
2. [Testing](#Testing)
3. [Roadmap](#Testing) 
4. [Goals](#Goals)
5. [Improvements](#Improvements)
6. [Credits](#Credits)

## Deployment <a name="Deployment"></a>

This project can be deployed by either following this link: https://jasonstreet.github.io/project-1-portfolio/. This link has been deployed using GitHub pages.
OR
You can download all of the files as a zip and opening as a project in your chosen IDE. (Tested in Brackets, but should work with other IDE's as well).

To deploy this website on Github pages, I entered the settings menu on the Github repository for this project, and then deployed the master branch from the Github pages section

## Testing <a name="Testing"></a>

This website has been tested on the following browsers:
* Vivaldi 
* Google Chrome
* Internet Explorer
* Microsoft Edge. 

I have tested the responsiveness of the website by re-sizing it, and all the elements fit to the screen when shrunk or enlarged. The JavaScript also works on multiple browsers without any noticeable errors. I have also tested this website with mobiles as well, by using the chromium developer console to switch to mobile and tablet views. No noticable issues were discovered following these tests.

I had originally set up a mail server to receive enquiries with the form at the bottom of the page, however due to running costs I had to close it down, which is why the form no longer works, however an error message is given to relay this back to the end user.

## Roadmap <a name="Roadmap"></a>

I originally started out with a very basic template, without any bootstrap. After looking around on the internet, I realised that most modern websites used Bootstrap and Bootstrap templates, so I looked into changing. I had an idea about the elements I wanted to implement, such as animations and certain design elements.

I started out with just writing the text, and I gradually added in more and more elements. I experimented with a lot of different animations from different websites. Some were a bit over the top, and I eventually settled for smooth and minimalistic animations. I knew I wanted my portfolio to be sleek and modern so I think the animations I chose worked well. 

I looked around a lot on the internet for interesting things I could add, and I found some JavaScript on CodePen that allowed to add an animation that typed out pre-selected phrases. I also found SweetJS, which is a plugin that improves the look of JavaScript notifications, which I implemented into my contact form.

The last thing I added was my project modals. The Bootstrap template had the models loaded in, however, I added my own projects to them with descriptions and links to their GitHub pages. I also added information to the timeline as well as animations and images.

### Goals <a name="Goals"></a>

I think the original goal I had in mind was realistic with regards to the specification provided for the module as well as my own skills as a developer. The project showcases my skills in HTML, CSS and Javascript and collates them in an easy to use and view portfolio. Not only does the portfolio act as a gateway to other standalone projects, but acts as a showcase in itself of multiple front-end technologies. I think that this website achieves the aims that I started with, namely to build a nice looking and functional portfolio.

I enjoyed using CodePen and implementing animations, functions and styles that I found. It was a challenge to import the code into my own website, as the code was always incompatible when simply copy and pasted into my own project. I had to repeatedly test and alter the code so that it worked with my own code. Testing was very simple and I was able to use Brackets IDE's inbuilt browser to quickly test my code.

However, there are certain things that I could have done differently, in order to improve the overall design of the project. I looked into implementing a page pre-loader, as the web pages does take between roughly 0.5-1 seconds to load, during which time the images flicker into view. I did look into implementing a landing page, and while it was visually appealing, it ultimately had no effect on the load time of my actual portfolio, as the web page did not load until a user actually went into it. I did look into dedicated tools for pre-loading, however, I struggled to implement them successfully, and ended up leaving the page as is.

I made a lot of changes to this project over time. At one point, I had left a lot of redundant files in the project, such as javascript files for animations and functions that were no longer used. It was pointed out to me that I should remove these files to reduce the clutter/size of the project. I have left some commented code in my project files however, as I consider them to be helpful and provide insight into how some of the more complicated bits of Javascript work.

### Improvements <a name="Improvements"></a>

I developed this project locally using Brackets. One thing I should have started from the very start was deploy more regulary to Github. Instead, I completed most of the work, and gradually uploaded it, so for example, once I had finished all of the CSS, I uploaded only after that point. For a clearer and richer Github repo history, I should have committed my work from day one, even if it wasn't how I envisioned the final product. Working on the other projects has definitely taught me to regulary commit to Github.

I could have also looked into setting up a loading screen for my website, as there is a slight delay between when the user opens the website, to all of the elements loading, such as the animated text on the landing page. After looking into this, I realise it might be possible using Javascript and AJAX.

## Built With <a name="Credits"></a>

* CSS3
* HTML5
* JavaScript
* PHP
* SCSS

## Authors

* **Jason Street** - *For Code Institute*

## Acknowledgments

* CodePen (For some animations and SCSS)
* BootStrap (For website template)
* Google (For some images)
* SweetJS (For improved JavaScript notifications)
