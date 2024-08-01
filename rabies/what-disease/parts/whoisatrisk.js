export function getWhoIsAtRiskTemplate(data, type, descr){ 
  console.log(type);
  let t = `
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
        <h2>Who is at risk?</h2>
        ${getText(data)}`

        if(type==='animals'){
          t += getAnimalCollectionTemplate(data, type)
        }else{
          t += getCollectionTemplate(data, type)
        }

      t += `</div>
    </div>`
  return t;
  }


function getText(data){
    let t = '';
    if (data.text!==''){
        t += `
        <div class="incubation-container">
          <div>
            <span>${data.text}</span>
          </div>
        </div>
        `
    }
    return t;
}

function getCollectionTemplate(data, type){
    let t = '';
    if (data.collection.length>0) {
        t += `<div class="${type} risk list-container">`;
        data.collection.forEach((elem) => {
        t += `<div class="w-elem">
                <img src="${elem.img}" style="${elem.customStyle}">
                <strong>${elem.name}</strong>
                <small>${elem.abstract}</small>
              </div>`
        });
        t += `</div>`
    }
    return t;
}



function getAnimalCollectionTemplate(data, type){
  let body = `
  <div class="whois-animal-container">
    <div>
      <button id="h-global" class="phases-btn active" data-phases="global">At the global level</button>
      <button id="h-euro" class="phases-btn" data-phases="euro">At the European level</button>
    </div>
    <div id="global" class="zone-container phases-panel">
      ${getText(data.levels.global)}
      <div class="${type} risk list-container">
        ${getAnimalCollection(data.levels.global.collection)}
      </div>
    </div>

    <div id="euro" class="zone-container phases-panel d-none">
      ${getText(data.levels.euro)}
      <div class="${type} risk list-container">
        ${getAnimalCollection(data.levels.euro.collection)}
      </div>
    </div>
  </div>
  `
  return body;
}

function getAnimalCollection(collection){
  let t = '';
  collection.forEach((elem) => {
    t += `<div class="w-elem">
            <img src="${elem.img}" style="${elem.customStyle}">
            <strong>${elem.name}</strong>
            <small>${elem.abstract}</small>
          </div>`
    });
  return t;
}