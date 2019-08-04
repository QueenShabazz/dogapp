'use strict';

function getImage(userNumber){
    let myURL = `https://dog.ceo/api/breeds/image/random/${userNumber}`
    fetch (myURL)
        .then(response => response.json())
        .then(responseJson =>
            displayResults(responseJson))
        .catch(error => alert ('Something Went Wrong'));
}

//function that displays images
function displayResults(responseJson){
    //replace existing images with new ones
    $('.results-img').empty();
    for (let i=0; i<responseJson.message.length; i++){
        $('.results-img').append(
            //console.log(<img src=${responseJson.message[i]} class="results-img">)
            `<img src=${responseJson.message[i]} class="results-img">`
        )
    }
    $('.results').removeClass('hidden');
}

//submit listener
function manipForm(){
    $('form').submit(event =>{
        event.preventDefault();
        //console.log(input)
        let input =$('input').val();
        getImage(input);
    })
}

$(function(){
    console.log("App Initiatiated");
    manipForm();
});