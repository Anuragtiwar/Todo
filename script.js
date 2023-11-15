(function CustomMosueCoursor(params) {
  document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('custom-cursor');
  
    document.addEventListener('mousemove', function(e) {
        // Set the cursor position to the mouse coordinates
        cursor.style.left = e.pageX + 'px';
        cursor.style.top = e.pageY + 'px';
        cursor.style.display = "block";
    });
  });
  
})()

  let closebtn = document.querySelector('#closebtn');
  let formContainer = document.querySelector('.formContainer');
  let fixedCard = document.querySelector('#fixedCard');
  let popFormContainer = document.querySelector('.popFormContainer');
  
  closebtn.addEventListener('click', (e) => {
      formContainer.classList.toggle("show");
    })
    
    fixedCard.addEventListener('click', (e) => {
      formContainer.classList.toggle("show");
  })
  
  document.addEventListener("DOMContentLoaded", function() {
    // Load existing cards from local storage
    loadCards();
  
    // Event listener for adding a new card
    document.getElementById("addCardBtn").addEventListener("click", function() {
      addCard();
    });
  });



  function getFormattedDate() {
    // Create a new Date object
    var currentDate = new Date();
  
    // Get the month (0-11)
    var month = currentDate.getMonth();
  
    // Create an array of month names
    var monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
  
    // Get the month name
    var monthName = monthNames[month];
  
    // Get the day of the month (1-31)
    var day = currentDate.getDate();
  
    // Get the year
    var year = currentDate.getFullYear();
  
    // Return an object with the extracted values
    return {
      month: monthName,
      day: day,
      year: year
    };
  }
  


// Function to add a new card
function addCard() {
  // Get task details from user input (you can use a form for this)
  // Get the input element by its id
  let taskName = document.getElementById('taskName');
  var taskdis = document.getElementById('taskdis');

  // Get the value of the input element
  var taskNameValue = taskName.value;
  var taskdisValue = taskdis.value;

    // Call the data and time function to get the date values
    var dateValues = getFormattedDate();

  // Create a new card element
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
    <div class="cardContent">
    <div class="pin">
    <img src="pngegg.png" alt="">
  </div>
      <h1>${taskNameValue}</h1>
      <div class="content">
        <p>${taskdisValue}</p>
        <p>${dateValues.month} ${dateValues.day},${dateValues.year}</p>
      </div>
    </div>
    <div class="btn"><button class="donebtn button" onclick="removeCard(this)"><span>Task Done</span></button></div>
  `;

  // Append the new card to the app container
  document.querySelector(".TaskContainer").appendChild(card);

  // Save the updated cards to local storage
  saveCards();
}

// Function to remove a card
function removeCard(btn) {
  // Find the parent card element and remove it
  const card = btn.closest(".card");
  card.remove();

  // Save the updated cards to local storage
  saveCards();
}

// Function to load existing cards from local storage
function loadCards() {
  const savedCards = JSON.parse(localStorage.getItem("cards")) || [];
  const TaskContainer = document.querySelector(".TaskContainer");

  savedCards.forEach(cardData => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = cardData.html;
    TaskContainer.appendChild(card);
  });
}

// Function to save cards to local storage
function saveCards() {
  const cards = Array.from(document.querySelectorAll(".card"));
  const savedCards = cards.map(card => {
    return { html: card.innerHTML };
  });

  localStorage.setItem("cards", JSON.stringify(savedCards));
}

//resposiveness


var burger=document.querySelector(".hamburger");
let navbar=document.querySelector(".navbar");
burger.addEventListener("click",function(){
  navbar.classList.toggle('swap');
})


function rotate() {
  let line=document.querySelectorAll(".line");
  burger.classList.toggle("pos");
 line[2].classList.toggle("rotateX");
 line[1].classList.toggle("lineHide");
 line[0].classList.toggle("rotateY");
}


