//Assigns variables for relevant elements on the page.
const focusOnName = document.querySelector('#name').focus();
const otherJobRole = document.querySelector('#other-job-role');
const selectJobRole = document.querySelector('#title');
const color = document.querySelector('#color');
console.log(color);
const design = document.querySelector('#design');
console.log(design);
const designOption = document.querySelectorAll('#design option');
console.log(designOption);
const colorOption = document.querySelectorAll('#color option');
console.log(colorOption);
//Test the selected option by logging the selected option element to the console.
console.log(designOption[1]);
console.log(colorOption[2]);
//Hides the other job role text box.
otherJobRole.hidden = true;
//Disables the color dropdown.
color.disabled = true;
//set the selected option to true.
const selectedDesign = designOption[1].selected = true;
console.log(selectedDesign);
const selectedColor = colorOption[2].selected = true;
console.log(selectedColor);
//Listens for when the Job Role dropdown box is changed and an option is selected.
selectJobRole.addEventListener('change', e => {
    //Logs out to the console the value of the targeted event.
    console.log(e.target.value);
        //If the chosen option is equal to other then unhide the other job role text box otherwise keep it hidden.
        if(e.target.value === 'other') {
            otherJobRole.hidden = false;
        } else {
            otherJobRole.hidden = true;
        }
 });
//Listens for when the Design dropdown box is changed and an option is selected.
design.addEventListener('change', e => {
    //Logs out to the console the value of the targeted event.
    console.log(e.target.value);
            if (e.target.value === selectedDesign) {
                color.disabled = false;
                colorOption[1, 2, 3].hidden = false;
            } else {
                color.disabled = false;
                colorOption[1, 2, 3].hidden = true;
            }
 });
