export default function renderGalleryCard(images) {
    const html = /*html*/ `
    
    <li class="monster-card">
        <h2 class="card-title">${images.title}</h2>
        <img class="card-image" src=${images.url} alt=${images.title}>
        <p class="horn-count">${images.horns}</p> 
    </li>

    `;

    return html;

} 
