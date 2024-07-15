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
  let t = '<div class="whois-animal-container">';
  data.levels.forEach((level) => {
    t += `<div class="zone-container">`;
      t += getText(level);
      if (level.collection.length>0) {
        t += `<div class="${type} risk list-container">`;
        level.collection.forEach((elem) => {
        t += `<div class="w-elem">
                <img src="${elem.img}" style="${elem.customStyle}">
                <strong>${elem.name}</strong>
                <small>${elem.abstract}</small>
              </div>`
        });
        t += `</div>`;
      t += `</div>`;
    }
  });
  t += `</div>`;
  return t;
}

