const navigation = document.querySelector('.navigation');
const hamburgerButton = document.querySelector('#menu');

hamburgerButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamburgerButton.classList.toggle('open');
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, SP, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
  },
  {
    templeName: "Dallas Texas",
    location: "Dallas, Texas, United States",
    dedicated: "1984, October, 19-24",
    area: 48100,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, SP, Brazil",
    dedicated: "1978,  30 October – 2 November ",
    area: 59246,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },
];

const ul = document.getElementById("temple-list");

temples.forEach(temple => {
  ul.innerHTML += `<h2>${temple.templeName}</h2> <br> 
  <p>Location: ${temple.location}</p> <br>
  <p>Dedicated: ${temple.dedicated}</p> <br>
  <p>Area: ${temple.area} sq ft</p> <br>
  <img src="${temple.imageUrl}" alt="Image of ${temple.templeName} temple" loading="lazy"> <br><br>`;
});

oldLink.addEventListener("click", () => {
  ul.innerHTML = "";
  temples.forEach(temple => dedicatedBefore1900(temple));
});

newLink.addEventListener("click", () => {
  ul.innerHTML = "";
  temples.forEach(temple => dedicatedAfter2000(temple));
});

largeLink.addEventListener("click", () => {
  ul.innerHTML = "";
  temples.forEach(temple => largeArea(temple));
});

smallLink.addEventListener("click", () => {
  ul.innerHTML = "";
  temples.forEach(temple => smallArea(temple));
});

homeLink.addEventListener("click", () => {
  ul.innerHTML = "";
  temples.forEach(temple => {
    ul.innerHTML += `<h2>${temple.templeName}</h2> <br> 
    <p>Location: ${temple.location}</p> <br>
    <p>Dedicated: ${temple.dedicated}</p> <br>
    <p>Area: ${temple.area} sq ft</p> <br>
    <img src="${temple.imageUrl}" alt="Image of ${temple.templeName} temple" loading="lazy"> <br><br>`;
  });
});

function smallArea(temple) { {
  if (temple.area < 10000) {
    ul.innerHTML += `<h2>${temple.templeName}</h2> <br>
    <p>Location: ${temple.location}</p> <br>
    <p>Dedicated: ${temple.dedicated}</p> <br>
    <p>Area: ${temple.area} sq ft</p> <br>
    <img src="${temple.imageUrl}" alt="Image of ${temple.templeName} temple" loading="lazy"> <br><br>`;
  };
}};

function largeArea(temple) {
  if (temple.area > 90000) {
    ul.innerHTML += `<h2>${temple.templeName}</h2> <br> 
    <p>Location: ${temple.location}</p> <br>
    <p>Dedicated: ${temple.dedicated}</p> <br>
    <p>Area: ${temple.area} sq ft</p> <br>
    <img src="${temple.imageUrl}" alt="Image of ${temple.templeName} temple" loading="lazy"> <br><br>`;
  };
};

function dedicatedAfter2000(temple) {
  if (new Date(temple.dedicated) > new Date("2000-01-01")) {
    ul.innerHTML += `<h2>${temple.templeName}</h2> <br>
    <p>Location: ${temple.location}</p> <br>
    <p>Dedicated: ${temple.dedicated}</p> <br>
    <p>Area: ${temple.area} sq ft</p> <br>
    <img src="${temple.imageUrl}" alt="Image of ${temple.templeName} temple" loading="lazy"> <br><br>`;
  };
};

function dedicatedBefore1900(temple) {
  if (new Date(temple.dedicated) < new Date("1900-01-01")) {
    ul.innerHTML += `<h2>${temple.templeName}</h2> <br> 
    <p>Location: ${temple.location}</p> <br>
    <p>Dedicated: ${temple.dedicated}</p> <br>
    <p>Area: ${temple.area} sq ft</p> <br>
    <img src="${temple.imageUrl}" alt="Image of ${temple.templeName} temple" loading="lazy"> <br><br>`;
  };
};

function setupFooter() {
    const yearSpan = document.getElementById('current-year');
    const modifiedSpan = document.getElementById('last-modified');

    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    if (modifiedSpan) {
        modifiedSpan.textContent = document.lastModified;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    setupFooter();
});