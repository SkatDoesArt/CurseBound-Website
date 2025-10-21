window.addEventListener('resize', function() {
    const menu = document.getElementById('menu').querySelector('ul');
    const items = document.querySelectorAll('.navbar > ul > li:not(#burger)');

    if (window.innerWidth <= 364) {
        items.forEach(item => {
            menu.appendChild(item.cloneNode(true));
            item.style.display = 'none';
        });
    } else {
        const clonedItems = menu.querySelectorAll('li');
        clonedItems.forEach(clonedItem => {
            clonedItem.remove();
        });
        items.forEach(item => {
            item.style.display = 'flex';
        });
    }
});

// Initial check on page load
window.dispatchEvent(new Event('resize'));
