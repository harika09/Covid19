

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
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Subscription Confirm!',
        text: 'Thank you for subscribing!',
        showConfirmButton: true,
      })
}

