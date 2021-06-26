//Assigns variables for relevant elements on the page.
const focusOnName = document.querySelector('#name').focus();
const otherJobRole = document.querySelector('#other-job-role');
const selectJobRole = document.querySelector('#title');
const color = document.querySelector('#color');
//console.log(color);
const design = document.querySelector('#design');
//console.log(design);
const designOption = document.querySelectorAll('#design option');
//console.log(designOption);
const colorOption = document.querySelectorAll('#color option');
//console.log(colorOption);
//Test the selected option by logging the selected option element to the console.
//console.log(designOption[1]);
//console.log(colorOption[2]);
//Hides the other job role text box.
otherJobRole.hidden = true;
//Disables the color dropdown.
color.disabled = true;
// console.log(designOption[1].value);
// const selectedColor = colorOption[2].selected = true;
//console.log(selectedColor);
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
    color.disabled = false;
    // colorOption.hidden = true;
    // console.log(colorOption);
    if (e.target.value == 'js puns') {
        colorOption[1].hidden = false;
        colorOption[2].hidden = false;
        colorOption[3].hidden = false;
        colorOption[4].hidden = true;
        colorOption[5].hidden = true;
        colorOption[6].hidden = true;
    } else if (e.target.value == 'heart js') {
        colorOption[1].hidden = true;
        colorOption[2].hidden = true;
        colorOption[3].hidden = true;
        colorOption[4].hidden = false;
        colorOption[5].hidden = false;
        colorOption[6].hidden = false;
    }
        /* If design option 1 is selected from the design drop down       
                only show color options for selected design and hide the other color options.
            else
                design option 2 is selected from the design drop down
                only show color options for selected design and hide the other color options.
            endif
        */
    
});S

