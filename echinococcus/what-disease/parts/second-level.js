export function getSecondLevelTemplate(data, type, descr){ return `
    <div class="modal-close sl-close">
        <img width="24" src="images/icons/ic_arrow_left.svg">
        <div>
            <span>Back</span>
            <small>${descr}</small>
        </div>
    </div>
    <div class="sl-box slb1">
        <h1>What<br>disease</h1>
    </div>
    ${getSlCollectionTemplate(data.secondLevelItems, type, descr)}
`}

function getSlCollectionTemplate(secondLevelItems, type, descr){
    let t = '';
    secondLevelItems.forEach((items, i) => {
        t += `<div id="slb${i+2}" class="sl-box slb${i+2} ${type}" data-description="${descr}" data-section="${items.section}">
                <img src="${items.img}">
                <h2>${items.title}</h2>
            </div>`
    });
    return t;
}
