import renderGalleryCard from '../home/render-gallery-card.js';

const test = QUnit.test;

const images = 
    {
        url: 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
        title: 'UniWhal',
        description: 'A unicorn and a narwhal nuzzling their horns',
        keyword: 'narwhal',
        horns: 1
    };

QUnit.module('Render Gallery Card');

test('renders html from data', assert => {
    
    const expected =     
        
"<li class=\"monster-card\"> <h2 class=\"card-title\">UniWhal</h2> <img class=\"card-image\" src=http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg alt=UniWhal> <p class=\"horn-count\">1</p> </li>"

    const html = renderGalleryCard(images);

    assert.htmlEqual(html, expected);

    
}); 