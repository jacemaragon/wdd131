const products = [
    {
        name: "Iphone 15",
        description: "A high-end smartphone with excellent features.",
        price: "$999",
        imageUrl: "images/iphone 15.jpg"
    },
    {
        name: "Ipad Pro",
        description: "A powerful tablet for professionals.",
        price: "$799",
        imageUrl: "images/ipad pro.jpg"
    },
    {
        name: "Apple watch",
        description: "A sleek and modern smartwatch.",
        price: "$199",
        imageUrl: "images/apple watch.jpg"
    },
    {
        name: "Macbook Pro",
        description: "A high-performance laptop for all your needs.",
        price: "$1299",
        imageUrl: "images/macbook pro.jpg"
    }
];

function generateProductCards() {
    const gallery = document.getElementById('productGallery');
    gallery.innerHTML = ''; 

    products.forEach((product) => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}" class="responsive-image" loading="lazy">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.price}</p>
        `;
        gallery.appendChild(card);
    });
}

generateProductCards();

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

document.getElementById('menu-icon').addEventListener('click', function () {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
});