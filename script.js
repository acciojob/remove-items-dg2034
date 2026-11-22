//your JS code here. If required.
const dropDown = document.getElementById("colorSelect");
const removeBtn = document.querySelector('input[type="button"]');
function removeElement() {
	dropDown.removeChild(dropDown.options[dropDown.selectedIndex]);
}

removeBtn.addEventListener("click",removeElement);
