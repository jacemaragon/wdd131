const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Salt Lake City Utah",
      location: "Salt Lake City, Utah, United States",
      dedicated: "1893, April, 6",
      area: 58000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-8452.jpg"
    },
    {
      templeName: "London England",
      location: "London, England",
      dedicated: "1958, September, 7",
      area: 12000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-45443.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 17",
      area: 15000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-27491.jpg"
    },
    {
      templeName: "Sydney Australia",
      location: "Sydney, Australia",
      dedicated: "1984, September, 2",
      area: 25000,
      imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-16043.jpg"
    }
  ];
  
  // Function to generate temple cards
  function generateTempleCards() {
      const gallery = document.getElementById('templeGallery');
      gallery.innerHTML = ''; // Clear existing content
  
      temples.forEach((temple) => {
          const card = document.createElement('figure');
          card.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName}" class="responsive-image large-image" loading="lazy">
              <figcaption>${temple.templeName}</figcaption>
              <p>${temple.location}</p>
              <p>Dedicated: ${temple.dedicated}</p>
              <p>Area: ${temple.area} sq ft</p>
          `;
          gallery.appendChild(card);
      });
  }
  
  // Event listener for menu icon
  document.getElementById('menu-icon').addEventListener('click', function () {
      var menu = document.getElementById('menu');
      if (menu.style.display === 'block') {
          menu.style.display = 'none';
      } else {
          menu.style.display = 'block';
      }
  });
  
  // Event listeners for navigation links
  document.getElementById('homeLink').addEventListener('click', function (event) {
      event.preventDefault();
      generateTempleCards();
  });
  
  document.getElementById('oldLink').addEventListener('click', function (event) {
      event.preventDefault();
      const filteredTemples = temples.filter(temple => {const year = parseInt(temple.dedicated.split(', ')[0]);
        return year < 1900;
      });
      displayFilteredTemples(filteredTemples);
  });
  
  document.getElementById('newLink').addEventListener('click', function (event) {
      event.preventDefault();
      const filteredTemples = temples.filter(temple => {const year = parseInt(temple.dedicated.split(', ')[0]);
        return year >=1900;
      });
      displayFilteredTemples(filteredTemples);
  });
  
  document.getElementById('largeLink').addEventListener('click', function (event) {
      event.preventDefault();
      const filteredTemples = temples.filter(temple => temple.area > 90000);
      displayFilteredTemples(filteredTemples);
  });
  
  document.getElementById('smallLink').addEventListener('click', function (event) {
      event.preventDefault();
      const filteredTemples = temples.filter(temple => temple.area < 10000);
      displayFilteredTemples(filteredTemples);
  });
  
  // Function to display filtered temples
  function displayFilteredTemples(filteredTemples) {
      const gallery = document.getElementById('templeGallery');
      gallery.innerHTML = ''; // Clear existing content
  
      filteredTemples.forEach((temple) => {
          const card = document.createElement('figure');
          card.innerHTML = `
              <img src="${temple.imageUrl}" alt="${temple.templeName}" class="responsive-image large-image" loading="lazy">
              <figcaption>${temple.templeName}</figcaption>
              <p>${temple.location}</p>
              <p>Dedicated: ${temple.dedicated}</p>
              <p>Area: ${temple.area} sq ft</p>
          `;
          gallery.appendChild(card);
      });
  }
  
  // Initialize with all temples displayed
  generateTempleCards();
  
  // Footer updates
  document.getElementById('year').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;