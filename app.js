$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})



function showAuthModal(type) {
    document.getElementById("authModal").style.display = "flex";
    document.getElementById("authTitle").textContent = type === "signUp" ? "Sign Up" : "Sign In";
    document.getElementById("authSubmitButton").onclick = type === "signUp" ? signUp : signIn;
  }

  
  function closeAuthModal() {
    document.getElementById("authModal").style.display = "none";
  }

  
  function signUp() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username && password) {
      localStorage.setItem(username, password);
      localStorage.setItem("loggedInUser", username);
      displayWelcome(username);
      closeAuthModal();
    } else {
      alert("Please enter a username and password.");
    }
  }

  
  function signIn() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
      localStorage.setItem("loggedInUser", username);
      displayWelcome(username);
      closeAuthModal();
    } else {
      alert("Invalid username or password.");
    }
  }

  
  function displayWelcome(username) {
    document.getElementById("signUpBtn").style.display = "none";
    document.getElementById("signInBtn").style.display = "none";
    document.getElementById("exitBtn").style.display = "inline-block";
    document.getElementById("welcomeMessage").textContent = `Welcome, ${username}!`;
    document.getElementById("welcomeMessage").style.display = "inline";
  }

  
  function logOut() {
    localStorage.removeItem("loggedInUser");
    document.getElementById("signUpBtn").style.display = "inline-block";
    document.getElementById("signInBtn").style.display = "inline-block";
    document.getElementById("exitBtn").style.display = "none";
    document.getElementById("welcomeMessage").style.display = "none";
  }

  const hamburgerMenu = document.getElementById('hamburger-menu');
const navMenu = document.getElementById('nav-menu');

hamburgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});




 const video = document.getElementById('videoPlayer');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', () => {
  if (video.paused) {
    video.play();
    playPauseBtn.textContent = 'Pause';
  } else {
    video.pause();
    playPauseBtn.textContent = 'Play';
  }
});



const paymentForm = document.getElementById('paymentForm');

paymentForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const cardNumber = document.getElementById('cardNumber').value;
  const expiry = document.getElementById('expiry').value;
  const cvv = document.getElementById('cvv').value;
  const amount = document.getElementById('amount').value;

  if (validateCardNumber(cardNumber) && validateExpiryDate(expiry) && validateCVV(cvv)) {
    alert(`Payment of $${amount} successful for ${name} (${email})!`);
  } else {
    alert('Invalid payment details. Please check your input.');
  }
});

function validateCardNumber(cardNumber) {
  const regex = /^[0-9\s]{16,19}$/; 
  return regex.test(cardNumber);
}

function validateExpiryDate(expiry) {
  const regex = /^(0[1-9]|1[0-2])\/\d{2}$/; 
  return regex.test(expiry);
}

function validateCVV(cvv) {
  const regex = /^[0-9]{3}$/; 
  return regex.test(cvv);
}



function toggleDarkMode() {
  
  document.body.classList.toggle('dark-mode');
  
  
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}


window.addEventListener('load', () => {
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }
});


