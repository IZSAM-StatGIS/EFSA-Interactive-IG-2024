export function getWhoIsAtRiskTemplate(data, type, descr){ return `
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
        ${getText(data)}
        ${getCollectionTemplate(data, type)}
      </div>
    </div>
`}


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
