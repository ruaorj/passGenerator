const array = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', 
    '{', '}', '[', ']', ':', ';', '"', "'", '<', '>', ',', '.', '?', '/'
];

const button = document.querySelector('#button');


button.addEventListener('click', function(){
    let inputFirst = document.querySelector('#input1').value;
    let inputSecond = document.querySelector('#input2').value;

    if(inputFirst <= 0 || inputSecond <= 0){
        alert('Please enter a value greater than 0!');
    }
    else{
        passGenerator(inputFirst, inputSecond);
    }
});



function passGenerator(inputFirst, inputSecond){
    let password = "";


    for(let i=0; i < inputFirst; i++){
        for(let j=0; j < inputSecond; j++){
            randomIndex = Math.floor(Math.random() * array.length);
            password += array[randomIndex];    
        }
        createElement(password);

        password = "";
    }

}


function createElement(password){
    const outputArea = document.querySelector('#outputArea');

    let newP = document.createElement('p');
    newP.innerHTML = password;
    
    outputArea.appendChild(newP);
       

}