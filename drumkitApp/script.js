(function() {
	'use strict';
	const list = document.querySelectorAll(`.item`);

	window.addEventListener('keydown' , playSound );
	list.forEach(item => item.addEventListener('transitionend' , removeTransition) );

	function removeTransition(e) {
		if (e.propertyName !== 'transform') return;
		this.classList.remove('active')
	}

	function playSound(e) {	
		const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
		const item = document.querySelector(`.item[data-key="${e.keyCode}"]`);				
		if (!audio) return 
			else {
				audio.currentTime=0;
				audio.play();
				item.classList.add('active');				
			}
		}



	}())