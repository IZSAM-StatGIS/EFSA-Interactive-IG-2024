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
        ${getCollectionTemplate(data, type)}
        </div>
      </div>
    </div>
`}

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

function getCollectionTemplate(data, type){
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

