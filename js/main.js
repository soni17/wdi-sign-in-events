document.addEventListener("DOMContentLoaded" , function() {

  //select DOM elements
  const signInButton = document.querySelector(".signin");
  const modalWindow = document.querySelector(".modal");
  const closeButton = document.querySelector('.close');
  const inputs = document.querySelectorAll('input');
  const submitButton = document.querySelector('.submit');
  const form = document.querySelector('form');

  signInButton.addEventListener("click",function(){
    modalWindow.style.display = "initial";
  });


  form.addEventListener( "click",function(event){
    
    if (event.target === closeButton){
      modalWindow.style.display = 'none';
    } else if (event.target === inputs[0]){
      inputs[0].className = "";
    } else if (event.target === inputs[1]){
      inputs[1].className = "";
    } else if (event.target === submitButton){
      inputs.forEach( function(input){
        input.className = "error";
      });
    } else if (event.target === form){
      modalWindow.style.display = "none";
    }

  });

});
