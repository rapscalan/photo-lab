import images from '../data/images.js';
import htmlToDOM from '../util/html-to-DOM.js';
import renderGalleryCard from './render-gallery-card.js';

const card = document.querySelector('.gallery-cards');
const dropDownFilter = document.querySelector('.horn-select');

dropDownFilter.addEventListener('change', () => {

    const filterString = dropDownFilter.value;
    console.log(filterString);
    let filteredMonsters = null;

    if (filterString === "all") {
        console.log('here');
        filteredMonsters = images;
    }
    else {
        filteredMonsters = images.filter(monster => {
            // should this be in the new array?
            console.log('horns' + monster.horns);
            console.log('int conversion' + parseInt(filterString));
            console.log('cmp '+(monster.horns === parseInt(filterString)));
            if (monster.horns === parseInt(filterString)) {
                return true;
            } else {
                return false;
            }
        });
    }
    
    

    // const coolCats = filteredCats.map(cat => {
    //     return {
    //         appelation: cat.name,
    //         bornOn: cat.year,
    //         website: cat.url,
    //         category: cat.type
    //     };
    // });

    // console.log(coolCats);

    // render(coolCats);
    //console.log(filteredMonsters);
    //images = filteredMonsters;
    //renderGalleryCard(filteredMonsters);
    console.log(filteredMonsters);
    renderAnimals(filteredMonsters);
    
});

function renderAnimals(images){
    while (card.lastElementChild) {
        card.lastElementChild.remove();
    }
    images.forEach(image => {
    const htmlString = renderGalleryCard(image);
    //console.log(image);

    const dom = htmlToDOM(htmlString);
    //console.log(dom);

    card.appendChild(dom);

});
}
renderAnimals(images);