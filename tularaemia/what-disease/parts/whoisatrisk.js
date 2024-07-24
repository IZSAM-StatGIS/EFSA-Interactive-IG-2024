export function getWhoIsAtRiskTemplate(data, type, descr){ 
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
        ${getWhoIsCollectionTemplate(data, type)}
      </div>
    </div>`
  return t;
  }


  function getText(data){
    let t = '';
    if (data!=undefined && data!==''){
        t += `
        <div class="phases-text-container">
          <span>${data}</span>
        </div>
        `
    }
    return t;
}

function getWhoIsCollectionTemplate(data, type){
  let t = '';
  if (data.phases.length>0) {
    t += `<div class="${type} symptoms list-container">`;
    data.phases.forEach((elem) => {
      t += getText(elem.text);
      t += getPhasesDescr(elem.phaseDescr);
      t += `<div class="ph-collection-container">`
      elem.collection.forEach((item) => {
        t += `<div>
              <img src="${item.img}">
              <strong>${item.name}</strong>
              <small>${item.abstract}</small>
            </div>`
      });
      t += `</div>`
    });
    t += `</div>`
  }
  return t;
}

function getPhasesDescr(data){
  let t = '';
  if (data!=undefined && data!==''){
      t += `
      <div class="phases-descr-container">
        <span>${data}</span>
      </div>
      `
  }
  return t;
}
