$("#btn-send").click(function(e){
    
    e.preventDefault();

    const contactName = document.getElementById('contact-name').value;
    const contactEmail = document.getElementById('contact-email').value;
    const contactMessage = document.getElementById('contact-message').value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(contactName === '' || contactEmail === '' || contactMessage === ''){
        emptyFields();
        
    } else if(contactEmail.match(pattern)){
        validEmail();
    }

    else{
        invalidEmail();
    }


});



//Subscribe Validation
$("#subscribe").click(function(){

    const email = document.getElementById('email').value;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(email === ''){
        emptyEmail();
    }

    else if(email.match(pattern)){
        validEmail()
    }

    else{
        invalidEmail();
    }


});



function emptyEmail(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Email cannnot be empty',
    })
}

function invalidEmail(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Email is not valid',
      })
}

function validEmail(){
    
    document.getElementById('contact-name').value = "";
    document.getElementById('contact-email').value = "";
    document.getElementById('contact-message').value = "";
    
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Subscription Confirm!',
        text: 'Thank you for subscribing!',
        showConfirmButton: true,
      })
}

function emptyFields(){
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fields cannnot be empty',
      })
}

