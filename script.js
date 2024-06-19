const searchInput = document.getElementById('search');
const searchButton = document.getElementById('search-btn');
const services = document.querySelectorAll('.service');

searchButton.addEventListener('click', (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value.trim();
  if (searchQuery !== '') {
    services.forEach((service) => {
      const serviceName = service.querySelector('h2').textContent;
      if (serviceName.toLowerCase().includes(searchQuery.toLowerCase())) {
        service.style.display = 'block';
      } else {
        service.style.display = 'none';
      }
    });
  } else {
    services.forEach((service) => {
      service.style.display = 'block';
    });
  }
});

searchInput.addEventListener('input', (event) => {
  event.preventDefault();
  const searchQuery = searchInput.value.trim();
  if (searchQuery !== '') {
    services.forEach((service) => {
      const serviceName = service.querySelector('h2').textContent;
      if (serviceName.toLowerCase().includes(searchQuery.toLowerCase())) {
        service.style.display = 'block';
      } else {
        service.style.display = 'none';
      }
    });
  } else {
    services.forEach((service) => {
      service.style.display = 'block';
    });
  }
});