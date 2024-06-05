export function getFirstLevelTemplate(type){ 
	const descr = (type === 'granulosus' ? 'Echinococcus Granulosus' : 'Echinococcus Multilocularis')
	return `
    <div class="infographics-wrap">
		<div class="modal-close fl-close">
			<img width="24" src="images/icons/ic_arrow_left.svg">
			<div>
				<span>Back</span>
				<small>${descr}</small>
			</div>
		</div>
		<div id="fb1" class="fl-box fb1">
			<img src="images/icons/ic_humans.svg">
			<h2>Humans</h2>
		</div>
		<div id="fb2" class="fl-box fb2">
			<img src="images/backgrounds/ic_animals_${type}.svg">
			<h2>Animals</h2>
		</div>
	</div>
`}
