const breakfastMenu = ['Pancakes- $12.00', 'Eggs Benedict- $5.50', 'Oatmeal- $5.50', 'Frittata-$8.50'];
const mainCourseMenu = ['Steak- $21.00', 'Pasta- $15.00', 'Burger- $13.50', 'Salmon- $18.99'];
const dessertMenu = ['Cake- $6.00', 'Ice Cream- $8.00', 'Pudding- $7.50', 'Fruit Salad- $6.50'];


const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

