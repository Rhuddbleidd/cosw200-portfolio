const gridItem = document.querySelectorAll('.grid-item');
const gridText = document.querySelectorAll('.lower-grid-item');
const librariesLink = document.querySelector('.libraries-framework');
const itemImage = document.querySelectorAll('.item-img');
const switchButton = document.getElementById('switch'); 
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const externalLinks = document.querySelector('.external-links');

// add event listener to grid elements on page
gridItem.forEach(item => {
    item.addEventListener('mouseover', () => {
            item.querySelector('.lower-grid-item').style.display = 'inline';
            
        });
});

gridItem.forEach(item => {
    item.addEventListener('mouseout', () => {
            item.style.width = '21em';  
            item.style.height = '21em'; 
            item.querySelector('.lower-grid-item').style.display = 'none';
        });
});
// event listener for grid item images
itemImage.forEach(item => {
    item.addEventListener('mouseover', () => {
            item.style.opacity = '0.1';
        })
});

itemImage.forEach(item => {
    item.addEventListener('mouseout', () => {
            item.style.opacity = '1';
        })
});
// event for bottom image
librariesLink.addEventListener('mouseover', () => {
    librariesLink.style.width = '45.5%';
    librariesLink.style.opacity = '.5';
});

librariesLink.addEventListener('mouseout', () => {
    librariesLink.style.width = '45%';
    librariesLink.style.opacity = '.5';
});
// switch to dark mode
switchButton.addEventListener('click', () => {
    main.classList.toggle('light-mode');
    footer.classList.toggle('light-mode');
    externalLinks.classList.toggle('light-mode');
    externalLinks.classList.toggle('light-mode-border');

});

console.log(switchButton);