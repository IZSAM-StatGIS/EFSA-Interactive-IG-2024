import { EnumType } from "../js/type.enum.js";

export function getSymptomTemplate(data, type){ return `
    <div class="modal-close d-close">
      <img width="24" src="images/icons/ic_arrow_left.svg"><span>Back</span>
    </div>
    <div class="detail-modal-body d-slb2">
      <img src="${data.backgroundImage.src}" class="l-img">
      <div class="d-modal-contents">
        <h2>Symptoms</h2>
        ${getIncubation(data)}
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
        ${getSymptomCollectionTemplate(data.collection.definitive, type)}
      </div>

      <div id="int" class="host-panel d-none">
        ${getText(data.text.intermediate)}
        ${getSymptomCollectionTemplate(data.collection.intermediate, type)}
      </div>
    `
  }else{
    body = `
      ${getText(data.text)}
      ${getSymptomCollectionTemplate(data.collection, type)}
    `
  }
  return body;
}

function getIncubation(data){
    let t = '';
    if (data.incubationPeriod!==''){
        t += `
        <div class="incubation-container">
          <img src="images/icons/ic_incubation.svg">
          <div>
            <span>Incubation period</span><br><h3>${data.incubationPeriod}</h3>
          </div>
        </div>
        `
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

function getSymptomCollectionTemplate(collection, type){
    let t = '';
    if (collection.length>0) {
        t += `<div class="${type} symptoms list-container">`;
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
