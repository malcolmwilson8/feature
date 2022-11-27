# Project Feature 

For my project feature, I wanted to create something that would be achievable for me as a relative beginner to coding, but would still push me to accomplish something new. With my interests in video games, skateboarding, music and 3d art, I wanted to create something which would be quite eye catching, and after researching a bit into what would be most suitable, I decided on a 3d spinner-type gallery. Not only did this fit my creative capacity, I felt it was also something which I didn't often see on feature-led websites. It would be a great option to house my projects in an interesting way, also accomplishing some of the requirements from the Website project. With this decided on, I proceeded to plan the feature out.

## Planning

For the feature, I want to firstly take a selection of images of my projects and display these within a gallery. This entails creating a container to house the images and specific classes to identify this group of images when it comes to writing the scripts to animate it three dimensionally. Usage of a `section` and `div` element would be good for this; the section to contain the images with a div also housing the images and representing the "spinner" element of the gallery. 

The gallery needs two clickable `buttons` for navigating left and right, and below the gallery I want to house a description of the projects I have completed. For this I will use another button and call a function via an event listener which, after being clicked, will create and display the description inside a `div` container. This will provide my website with DOM event listeners as well as DOM updates in response to user interaction.

I will need to include specific styles for the spinner which mean it stays in view whilst giving a good perspective of the images whilst being turned. Within the style sheet I will also specify the angles needed to be turned in the 3d gallery with each button click to complete a full 360' spin.

As mentioned, I will need a function which displays a description of my projects once a button is clicked. The left and right buttons will also need event listeners to ensure they perform a function to move the image gallery along when clicked. In addition, as I am rotating the gallery 360' to display all of my projects I will need to specify functions which allow the gallery to advance in increments which align centrally to each gallery item.


## Building

To start with, I will populate the html file with the container element (including container and spinner) and my images;

```html
<section class="spinner-container">
    <div class="spinner">
        <img src="HobbyPage.JPG" class="spinner-img" alt="My Hobby Page" height="550px" width="700px">
        <img src="ProjectGallery.jpg" class="spinner-img" alt="My Project Gallery" height="550px" width="700px">
        <img src="CommentBox.JPG" class="spinner-img" alt="My Comment Box" height="550px" width="700px">
        <img src="MovieData.JPG" class="spinner-img" alt="My Movie Data Page" height="550px" width="700px">
        <img src="Website.jpg" class="spinner-img" alt="My Website" height="550px" width="700px">
        <img src="3dSpinner.jpg" class="spinner-img" alt="My 3d Gallery" height="550px" width="700px">
</section>
```

I specify individual sources for each image, housed in my main folder, and give each image a `class="spinner-img"` and `height="550px" width "700px"` to standardise each for when I come to my style sheet and scripts. Next are the aforementioned buttons;

```html
<span id="button1" style="float: left;">&lt;</span>
<span id="button2" style="float: right;">&gt;</span>

<div class="spinner-holder">
<button id="spinner-info">Click to Find out More</button>
</div>
```

## Debugging
