let myImage = document.querySelector('img');

myImage.onclick = function(){
    let imagSRC = myImage.getAttribute('src');
    if(imagSRC == 'images/firefox-icon.png'){
        imagSRC = 'images/firefox2.png';
        myImage.setAttribute('src', imagSRC);
    }else{
        imagSRC = 'images/firefox-icon.png';
        myImage.setAttribute('src',imagSRC);
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

var setUserName = function(){
    var myName = prompt('Enter Your Name:');
    if(!myName){
        alert('Please Enter a Proper Name');
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = "Mozilla is cool, " + myName;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = function(){
    setUserName();
}