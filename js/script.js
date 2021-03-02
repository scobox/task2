let element = document.getElementsByClassName('page__content-item');

function activeClassToggle(){
	if(this.classList.contains('active')){
	this.classList.remove('active');}
	else{
		for (let i=0; i<element.length; i++){
			element[i].classList.remove('active');
		}
		this.classList.add('active');
	}
}

for (let i=0; i<element.length; i++){
	element[i].addEventListener("click", activeClassToggle);
}

