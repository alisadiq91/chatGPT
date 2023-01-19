// Get all the links with the class 'scroll'
var links = document.querySelectorAll('.scroll');

// Loop through the links and add an event listener to each one
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(e) {
    e.preventDefault();
    var sectionId = this.getAttribute("href");
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    });
  });
}

var elements = document.querySelectorAll('.hover-effect');

for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener('mouseover', function() {
    this.style.backgroundColor = '#f2f2f2';
  });
  elements[i].addEventListener('mouseout', function() {
    this.style.backgroundColor = '#fff';
  });
}