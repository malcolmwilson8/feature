# Project Feature 

For my project feature, I wanted to create something that would be achievable for me as a relative beginner to coding, but would still push me to cover new ground. With my interests in video games, skateboarding, music and 3d art, I wanted to create something which would be quite eye catching, and after researching a bit into what would be most suitable, I decided on a 3d spinner-type gallery. Not only did this fit my creative capacity, I felt it was also something which I didn't often see on feature-led websites. It would be a great option to house my projects in an interesting way, also accomplishing some of the requirements from the Website project. With this decided on, I proceeded to plan the feature out.

## Planning

For the feature, I want to firstly take a selection of images of my projects and display these within a gallery. This entails creating a container to house the images in, and specific classes to identify this group of images when it comes to writing the scripts to animate them three dimensionally. Usage of a `<section>` and `<div>` element would be good for this; the `<section>` to contain the images with a `<div>` also housing the images and representing the "spinner" element of the gallery. 

The gallery needs two clickable buttons for navigating left and right, and below the gallery I want to house a description of the projects I have completed. For this I will use another button and call a function via an event listener which, after being clicked, will create and display the description inside a `<div>` container.

I will need to include specific styles for the spinner which mean it stays in view whilst giving a good perspective of the images whilst being turned. Within the style sheet I will also specify the angles needed to be turned in the 3d gallery, with each button click helping to complete a full 360' spin.

As mentioned, I will need a function which displays a description of my projects once a button is clicked. The left and right buttons will also need event listeners to ensure they perform a function to move the image gallery along when clicked. In addition, as I am rotating the gallery 360' to display all of my projects, I will need to specify functions which allow the gallery to advance in increments which align centrally to each gallery item.


## Building

### HTML

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

I specify individual sources for each image, housed in my main folder, and give each image a `class="spinner-img"` to standardise them for when I come to my style sheet and scripts. Next are the aforementioned buttons;

```html
<span id="button1" style="float: left;">&lt;</span>
<span id="button2" style="float: right;">&gt;</span>

<div class="spinner-holder">
<button id="spinner-info">Click to Find out More</button>
</div>
```

Giving each `button` a float property with a direction allows them both to sit at the edges of their container, making them more aesthetically pleasing and functional. Finally I create a `<div>` to hold the information I will create in my Javascript file;

```html
<div class="info-holder">
</div>
```

And build a list of project links which will be housed on my website;

```html
<div class="projects-links">
    <li><a href="https://malcolmwilson8.github.io/my-webpage/">Project 1 - Hobby Page</a></li>
    <li><a href="https://malcolmwilson8.github.io/project-gallery/">Project 2 - Project Gallery</a></li>
    <li><a href="https://malcolmwilson8.github.io/comment-box/">Project 3 - Comment Box</a></li>
    <li><a href="https://malcolmwilson8.github.io/movie-data/">Project 4 - Movie Data</a></li>
    <li><a href="https://malcolmwilson8.github.io/my-webpage/">Project 5 - Website</a></li>
    <li><a href="https://malcolmwilson8.github.io/feature//">Project 6 - 3d Gallery</a></li>
</div>
```

### CSS

Moving onto CSS, I need to ensure that the spinner container displays the images it is housing adequately through correct perspective, and also that it offsets direction at the correct x, y, and z locations;

```css
.spinner-container{
    perspective: 900px;
    transform-origin: 50% 50% -500px;
    transition: 1s
}
```

I do the same to the `.spinner` class previously created, while this time applying a `preserve-3d` transform style, to ensure the images of the `.spinner` element exist in 3d space. I also define a set `height` for the element, apply `flex` to it and `justify-content: center`.

```css
.spinner{
    transform-style: preserve-3d;
    height: 500px;
    transform-origin: 50% 50% -500px;
    transition: 1s;
    display: flex;
    justify-content: center;
}
```

Next, I define paramenters for the images themselves, while also giving them the same `transform-origin` parameters;

```css
.spinner-img{
    height: 400px;
    width: 450px;
    margin: 5%;
    position: absolute;
    transform-origin: 50% 50% -500px;
    outline: 2px solid;
}
```

I then define the parameters for the remaining elements of the HTML;

```css
.li{
    list-style: none;
    text-align: center;
    display: block;
}

.info-holder{
    display: flex;
    justify-content: center;
    padding-top: 5%;
    font-size: 20px;
    text-align: center;
}

.projects-links{
    margin-top: 5%;
}

.spinner-holder{
    display: flex;
    justify-content: center;
    padding: 2px 40px;
}
```

Now, I make use of a pseudo class `:nth-child()` and pair elements from the `.spinner-img` class with corresponding number entries which I will then transform based on their position in the list, until a full spin has been completed;

```css
.spinner img:nth-child(1){transform: rotateY(-0deg)}
.spinner img:nth-child(2){transform: rotateY(-60deg)}
.spinner img:nth-child(3){transform: rotateY(-120deg)}
.spinner img:nth-child(4){transform: rotateY(-180deg)}
.spinner img:nth-child(5){transform: rotateY(-240deg)}
.spinner img:nth-child(6){transform: rotateY(-300deg)}
```

Finally I apply styles to the span buttons;

```css
.spinner-container ~ span{
    text-decoration: none;
    color: black;
    position: relative;
    display: inline-block;
    font-size: 3rem;
    transition: 0.4s;
    margin: 5px
}

.spinner-container ~ span:hover{
    cursor: pointer;
}
```

### Javascript

First, I declare variables for the origin angle which I will rotate from within the spin functions, as well as declare variables for left/right buttons and a info display button with DOM manipulation;

```js
let angle = 0;
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let infoButton = document.getElementById('spinner-info')
```

Following this, I introduce event listeners for each button, listening for a `'click'`, then peforming either a `spinContentLeft()` or `spinContentRight()` function depending on the arrow clicked;

```js
button1.addEventListener('click', spinContentLeft);
button2.addEventListener('click', spinContentRight);
infoButton.addEventListener('click', spinnerInfo);
```

Starting with the `spinContentLeft()` function, I want this to first group the `.spinner` element and contain it within a variable, and I also want to declare an `angle` variable to determine how much to spin the gallery from the origin angle;

```js
function spinContentLeft(){
    spinner = document.querySelector('.spinner');
    angle = angle - 60;

    spinner.setAttribute("style","transform: rotateY("+ angle +"deg);");
}
```

Secondly, I call the `.setAttribute` element method to set the spinner element's style to `transform: rotate Y` by the declared angle variable (`- 60`, moving the gallery left by 60 degrees `+"deg)`). 

I do the same for the right handed button, instead this time, move the angle `+ 60` to make the gallery move right;

```js
function spinContentRight(){
    spinner = document.querySelector('.spinner');
    angle = angle + 60;

    spinner.setAttribute("style","transform: rotateY("+ angle +"deg);");
}
```

Lastly I declare the `spinnerInfo()` function, which firstly uses the DOM `.createTextNode()` method to create a typed description variable `newText` which I will append to a pre-existing `<div>`;

```js
function spinnerInfo(){
        let newText = document.createTextNode("This is a 3d gallery displaying my completed projects for my Founders and Coders application. " + 

        "My first project was focused on building a page dedicated to my hobby of skateboarding. " +
     
        "My second project entailed building a gallery displaying the projects I`ve been working on. " +

        "My third project centered around building a fully functional comment box system. " +

        "For my fourth project I built a user interface using HTML, and populated it with data from a JavaScript object containing info on some of Wes Anderson's               films. " +
 
        "For project five I built this website to support my application. " +

        "My sixth and final project was to build a feature to host on my website; the 3d gallery you see above. " +
        
        "Links to the deployed project pages are below!");
        let text = document.getElementsByClassName('info-holder')[0];
        text.appendChild(newText);
        infoButton.removeEventListener('click', spinnerInfo);
}
```

In the closing part of the function, I create a variable called `text`, which is comprised of the previously created "info-holder" `<div>`. To this, I use the `.appendChild()` method to append the `newText` node to the `<div>`. Finally, I remove the `'click'` event listener from the `spinnerInfo()` function to prevent users from repeatedly displaying the text.

## Debugging

Key challenges were faced on this feature in using the `:nth child()` pseudo class and `transform: rotateY()` function, as I had not used these before. I made use of Stack Overflow to find out what other people had done for similar types of features with image transformation, and had quite a lot of trial and error to find the correct parameters for the `angle` parts of the feature.

Additionally, quite a few challenges were faced in getting the `newText` variable to append correctly to `info-holder`'s `<div>`. Using console.log(text) I managed to debug this, and I decided to treat the `<div>` as an object, using appendChild(newText) to add the new text correctly. 
