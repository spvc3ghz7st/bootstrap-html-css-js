// Get a reference to the navbar-placeholder element
var navbarPlaceholder = document.getElementById('navigation');

// Create the navigation bar elements
var navBar = document.createElement('nav');
navBar.className = 'navbar navbar-expand-lg navbar-dark bg-dark';

var brandLink = document.createElement('a');
brandLink.className = 'navbar-brand';
brandLink.href = '../../index.html';
brandLink.textContent = 'Project';

var togglerButton = document.createElement('button');
togglerButton.className = 'navbar-toggler';
togglerButton.type = 'button';
togglerButton.setAttribute('data-toggle', 'collapse');
togglerButton.setAttribute('data-target', '#navbarNav');
togglerButton.setAttribute('aria-controls', 'navbarNav');
togglerButton.setAttribute('aria-expanded', 'false');
togglerButton.setAttribute('aria-label', 'Toggle navigation');
togglerButton.innerHTML = '<span class="navbar-toggler-icon"></span>';

var collapseDiv = document.createElement('div');
collapseDiv.className = 'collapse navbar-collapse';
collapseDiv.id = 'navbarNav';

var navList = document.createElement('ul');
navList.className = 'navbar-nav';


// Create the navigation links
var links = [
  { text: 'Information', href: '/html/information.html' },
];

// Loop through the links and create <li> and <a> elements
links.forEach(function(link) {
  var listItem = document.createElement('li');
  listItem.className = 'nav-item';

  var anchor = document.createElement('a');
  anchor.className = 'nav-link';
  anchor.href = link.href;
  anchor.textContent = link.text;

  listItem.appendChild(anchor);
  navList.appendChild(listItem);
});

// Append the elements to the placeholder element
collapseDiv.appendChild(navList);
navBar.appendChild(brandLink);
navBar.appendChild(togglerButton);
navBar.appendChild(collapseDiv);
navbarPlaceholder.appendChild(navBar);