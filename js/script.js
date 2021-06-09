//Assigns variables for relevant elements on the page.
const focusOnName = document.querySelector('#name').focus();
const otherJobRole = document.querySelector('#other-job-role');
const selectJobRole = document.querySelector('#title');
const JobRoleOptions = document.querySelectorAll('#title option');
//Hides the other job role text box.
otherJobRole.hidden = true;
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
