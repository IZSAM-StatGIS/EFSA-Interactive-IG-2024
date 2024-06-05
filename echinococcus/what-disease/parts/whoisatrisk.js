import { EnumType } from "../js/type.enum.js";

export function getWhoIsAtRiskTemplate(data, type){ return `
    <div class="modal-close d-close">
      <img width="24" src="images/icons/ic_arrow_left.svg"><span>Back</span>
    </div>
    <div class="detail-modal-body d-slb2">
      <img src="${data.backgroundImage.src}" class="l-img">
      <div class="d-modal-contents">
        <h2>Who is at risk?</h2>
        ${getEchiTemplate(data, type)}
      </div>
    </div>
`}


function getEchiTemplate(data, type){
  let body = '';
  if(type === EnumType.ANIMAL){
    body = `
      <div>
        <button id="h-def" class="host-btn active" data-host="def">Definitive host</button>
        <button id="h-int" class="host-btn" data-host="int">Intermediate host</button>
      </div>
      <div id="def" class="host-panel">
        ${getText(data.text.definitive)}
        ${getCollectionTemplate(data.collection.definitive, type)}
      </div>

      <div id="int" class="host-panel d-none">
        ${getText(data.text.intermediate)}
        ${getCollectionTemplate(data.collection.intermediate, type)}
      </div>
    `
  }else{
    body = `
      ${getText(data.text)}
      ${getCollectionTemplate(data.collection, type)}
    `
  }
  return body;
}


function getText(text){
    let t = '';
    if (text!==''){
        t += `
        <div class="incubation-container">
          <div>
            <span>${text}</span>
          </div>
        </div>
        `
    }
    return t;
}

function getCollectionTemplate(collection, type){
    let t = '';
    if (collection.length>0) {
        t += `<div class="${type} risk list-container">`;
        collection.forEach((elem) => {
        t += (elem.isImportant ? `<div class="w-elem" style="width: 100%">` : `<div class="w-elem">`);
        t += `<img src="${elem.img}" style="${elem.customStyle}">
                <strong>${elem.name}</strong>
                <small>${elem.abstract}</small>
              </div>`
        });
        t += `</div>`
    }
    return t;
}
