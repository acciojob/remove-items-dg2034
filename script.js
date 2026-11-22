//your JS code here. If required.
const dropDown = document.getElementById("colorSelect");
const removeBtn = document.querySelector('input[type="button"]');
function removeElement() {
	dropDown.remove(dropDown.selectedIndex);
}

removeBtn.addEventListener("click",removeElement);
