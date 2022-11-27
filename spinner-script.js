//Define variables for angle, left/right buttons and description button

let angle = 0;
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');
let infoButton = document.getElementById('spinner-info')

//Add event listeners for all buttons
button1.addEventListener('click', spinContentLeft);
button2.addEventListener('click', spinContentRight);
infoButton.addEventListener('click', spinnerInfo);

//Define function for left button with DOM
function spinContentLeft(){
    spinner = document.querySelector('.spinner');
    angle = angle - 60;

    spinner.setAttribute("style","transform: rotateY("+ angle +"deg);");
}

//Define function for right button with DOM
function spinContentRight(){
    spinner = document.querySelector('.spinner');
    angle = angle + 60;

    spinner.setAttribute("style","transform: rotateY("+ angle +"deg);");
}

//Define function to show text after click on spinner button, and be clickable only once
function spinnerInfo(){
        let descriptionText = document.createElement('div')
        let newText = document.createTextNode("This is a 3d gallery displaying my completed projects for my Founders and Coders application. " + 

        "My first project was focused on building a page dedicated to my hobby of skateboarding. " +
     
        "My second project entailed building a gallery displaying the projects I`ve been working on. " +

        "My third project centered around building a fully functional comment box system. " +

        "For my fourth project I built a user interface using HTML, and populated it with data from a JavaScript object containing data from some of Wes Anderson's films. " +
 
        "For project five I built this website to support my application. " +

        "My sixth and final project was to build a feature to host on my website; the 3d gallery you see above. " +
        
        "Links to the deployed project pages are below!");
        let text = document.getElementsByClassName('info-holder')[0];
        text.appendChild(newText);
        infoButton.removeEventListener('click', spinnerInfo);
}
