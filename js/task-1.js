const categories = document.querySelector('#categories');
const categoriesCount = categories.querySelectorAll('li.item').length;
console.log(`Number of categories: ${categoriesCount}`);

const listItems = categories.querySelectorAll('h2')

listItems.forEach (function (currentListItem) {
    const subCategoriesCount = currentListItem.nextElementSibling.querySelectorAll('li').length;
    console.log (`Category: ${currentListItem.textContent}`);
    console.log (`Elements: ${subCategoriesCount}`);
})



   
    
