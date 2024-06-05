import { EnumType } from "../js/type.enum.js";

export function getComplicationsTemplate(data, type, descr){ return `
    <div class="modal-close d-close">
      <img width="24" src="images/icons/ic_arrow_left.svg">
      <div>
          <span>Back</span>
          <small>${descr}</small>
      </div>
    </div>
    <div class="detail-modal-body d-slb2">
      <img src="${data.backgroundImage.src}" class="l-img">
      <div class="d-modal-contents">
        <h2>Complications</h2>
        ${getEchiTemplate(data, type)}
        </div>
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

function getCollectionTemplate(collection, type){
    let t = '';
    if (collection.length>0) {
        t += `<div class="${type} complications list-container">`;
        collection.forEach((elem) => {
        t += `<div>
                <img src="${elem.img}">
                <strong>${elem.name}</strong>
                <small>${elem.abstract}</small>
              </div>`
        });
        t += `</div>`
    }
    return t;
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

