// Add event listeners to pet options
const petOptions = document.querySelectorAll('.pet-option');
petOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Remove active class from all options
    petOptions.forEach(o => o.classList.remove('active'));

    // Add active class to clicked option
    option.classList.add('active');
  });
});

// Add event listener to "Volver" button
const volverButton = document.getElementById('volver');
volverButton.addEventListener('click', () => {
  // Go back to previous step
  // (Implement logic for navigation)
});

// Add event listener to "Siguiente" button
const siguienteButton = document.getElementById('siguiente');
siguienteButton.addEventListener('click', () => {
  // Proceed to next step
  // (Implement logic for navigation)
});



// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}


// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");


function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

// Seleccionar todos los elementos con la clase 'color-box'
  const boxes = document.querySelectorAll('.opcion-tratamiento');

  // Añadir un evento de clic a cada elemento
  boxes.forEach(box => {
      box.addEventListener('click', () => {
          box.classList.toggle('clicked');
      });
  });

  