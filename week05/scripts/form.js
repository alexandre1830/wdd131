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

document.addEventListener('DOMContentLoaded', setupFooter);

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProducts() {
    const select = document.getElementById('productSelect');
    if (!select) return;
    
    Array.from(select.options).forEach(opt => {
        if (opt.value) select.remove(0);
    });
    products.forEach(product => {
        select.add(new Option(product.name, product.id));
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    setupFooter();
    populateProducts();

    let count = parseInt(localStorage.getItem('reviewsCompleted') || '0', 10);
    count += 1;
    localStorage.setItem('reviewsCompleted', count);
    console.log('Total de avaliações concluídas:', count);

    const el = document.getElementById('reviews-count');
    if (el) el.textContent = count;
});