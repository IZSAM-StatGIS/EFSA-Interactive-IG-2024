export function getSymptomTemplate(data, type, descr){ return `
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
        <h2>Symptoms</h2>
        <div class="phases-text-container" style="margin-bottom: 12px; padding: 12px">
          <strong>A few days after the start of an initial phase with nonspecific symptoms, rabies progresses to the acute neurological phase consisting in a furious or encephalitic form and a paralytic form</strong>
        </div>
        ${getSymptomCollectionTemplate(data, type)}
      </div>
    </div>
`}

function getIncubation(data){
    let t = '';
    if (data.incubationPeriod!==''){
        t += `
        <div class="incubation-container">
          <img class="incubation-img" src="images/icons/ic_incubation.svg">
          <div class="incubation-text">
            <span>Incubation period</span><br><h3>${data.incubationPeriod}</h3>
          </div>
        </div>
        `
    }
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


function getSymptomCollectionTemplate(data, type){
  let body = `
    <div>
      <button id="h-init" class="phases-btn active" data-phases="init">Initial symptoms</button>
      <button id="h-furi" class="phases-btn" data-phases="furi">Furious or encephalitic form</button>
      <button id="h-para" class="phases-btn" data-phases="para">Paralytic form</button>
    </div>
    <div id="init" class="symptoms list-container phases-panel">
      ${getIncubation(data)}
      ${getText(data.phases.init.text)}
      ${getPhasesDescr(data.phases.init.phaseDescr)}
      ${getCollection(data.phases.init.collection)}
    </div>

    <div id="furi" class="symptoms list-container phases-panel d-none">
      ${getText(data.phases.furi.text)}
      ${getPhasesDescr(data.phases.furi.phaseDescr)}
      ${getCollection(data.phases.furi.collection)}
    </div>

    <div id="para" class="symptoms list-container phases-panel d-none">
      ${getText(data.phases.para.text)}
      ${getPhasesDescr(data.phases.para.phaseDescr)}
      ${getCollection(data.phases.para.collection)}
    </div>
  `
  return body;
}

function getCollection(collection){
  let t = '';
  t += `<div class="ph-collection-container">`
    collection.forEach((item) => {
      t += `<div>
            <img src="${item.img}">
            <strong>${item.name}</strong>
            <small>${item.abstract}</small>
          </div>`
    });
  t += `</div>`;
  return t;
}

