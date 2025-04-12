const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const gallery = document.querySelector("#gallery");

const homeButton = document.querySelector('#home');
const oldButton = document.querySelector('#old');
const newButton = document.querySelector('#new');
const largeButton = document.querySelector('#large');
const smallButton = document.querySelector('#small');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});

homeButton.addEventListener('click', () => {
	addCards(temples);
});

oldButton.addEventListener('click', () => {
	filterOld(temples);
});

newButton.addEventListener('click', () => {
	filterNew(temples);
});

largeButton.addEventListener('click', () => {
	filterLarge(temples);
});

smallButton.addEventListener('click', () => {
	filterSmall(temples);
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
	// Add more temple objects here...
	{
	  templeName: "Melbourne Australia",
	  location: "Melbourne, Australia",
	  dedicated: "2000, June, 16",
	  area: 10700,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/melbourne-australia/400x250/melbourne-austrailia-temple-lds-991373-wallpaper.jpg"
	},
	{
	  templeName: "Quito Ecuador",
	  location: "Cumbayá, Quito, Ecuador",
	  dedicated: "2022, November, 20",
	  area: 36780,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quito-ecuador/400x250/quito_ecuador_temple3.jpg"
	},
	{
	  templeName: "Preston England",
	  location: "Lancashire, England",
	  dedicated: "1998, June, 7",
	  area: 69630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/400x250/preston-temple-765118-wallpaper.jpg"
	}
];

function formatCards(section) {
	return `<div class="card"><h3>${section.templeName}</h3>
        <p><span>Location: </span>${section.location}</p>
        <p><span>Dedicated: </span>${section.dedicated}</p>
        <p><span>Size: </span>${section.area} sq ft</p>
		<img src="${section.imageUrl}" alt="${section.templeName} Temple" loading="lazy">
		</div>`
}

function addCards(sections) {
	const html = sections.map(formatCards);
	gallery.innerHTML = html.join("");
}
function filterOld(sections) {
	const html = sections.filter(section => parseInt(section.dedicated.substring(0,4)) < 1900).map(formatCards);
	gallery.innerHTML = html.join("");
}
function filterNew(sections) {
	const html = sections.filter(section => parseInt(section.dedicated.substring(0,4)) > 2000).map(formatCards);
	gallery.innerHTML = html.join("");
}
function filterLarge(sections) {
	const html = sections.filter(section => section.area > 90000).map(formatCards);
	gallery.innerHTML = html.join("");
}
function filterSmall(sections) {
	const html = sections.filter(section => section.area < 10000).map(formatCards);
	gallery.innerHTML = html.join("");
}

addCards(temples);