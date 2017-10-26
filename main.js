const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
	// console.log(this);

	// inBetween to check whther a check list is between the first and last selected items
	let inBetween = false; 
	// if shift key down and checkbox is being checked
	if(e.shiftKey && this.checked) {
		checkboxes.forEach(checkbox => {
			// console.log(checkbox);

			if(checkbox === this || checkbox === lastChecked){
				inBetween = !inBetween;
			}

			// if its inbetween the checked and the last checked, make it checked
			if(inBetween) {
				checkbox.checked = true;
			}
		});
	}


	lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// Clear All Checkboxes
var btn = document.querySelector("#clearAll");
btn.addEventListener('click', function(){
	checkboxes.forEach(checkbox => {
		if(checkbox.checked){
			checkbox.checked = false;
		}
	});
});