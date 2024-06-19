const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-btn');
const services = document.querySelectorAll('.service');

// Listen for the click event on the search button
searchButton.addEventListener('click', (event) => {
    event.preventDefault();
  
    // Get the search query from the input field and trim any leading/trailing whitespace
    const searchQuery = searchInput.value.trim();
  
    // If the search query is not empty
    if (searchQuery !== '') {
      // Loop through all the service elements
      services.forEach((service) => {
        const serviceName = service.querySelector('h2').textContent;
  
        // Check if the service name contains the search query (case-insensitive)
        if (serviceName.toLowerCase().includes(searchQuery.toLowerCase())) {
          // If it does, make the service element visible
          service.style.display = 'block';
        } else {
          // Otherwise, hide the service element
          service.style.display = 'none';
        }
      });
    } else {
      // If the search query is empty, make all service elements visible
      services.forEach((service) => {
        service.style.display = 'block';
      });
    }
  });
  
  // Listen for the input event on the search input field
  searchInput.addEventListener('input', (event) => {
    // Prevent the default form submission behavior
    event.preventDefault();
  
    // Get the search query from the input field and trim any leading/trailing whitespace
    const searchQuery = searchInput.value.trim();
  
    // If the search query is not empty
    if (searchQuery !== '') {
      // Loop through all the service elements
      services.forEach((service) => {
        // Get the service name from the h2 element
        const serviceName = service.querySelector('h2').textContent;
  
        // Check if the service name contains the search query (case-insensitive)
        if (serviceName.toLowerCase().includes(searchQuery.toLowerCase())) {
          // If it does, make the service element visible
          service.style.display = 'block';
        } else {
          // Otherwise, hide the service element
          service.style.display = 'none';
        }
      });
    } else {
      // If the search query is empty, make all service elements visible
      services.forEach((service) => {
        service.style.display = 'block';
      });
    }
  });