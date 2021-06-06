const focusOnName = document.querySelector('#name').focus();
const hideOtherJobRole = document.querySelector('#other-job-role').hidden = true;
const selectJobRole = document.querySelector('#title');
const JobRoleOptions = document.querySelectorAll('#title option');

//console.log(JobRoleOptions[6]);

selectJobRole.addEventListener('change', e => {
    console.log(e.target.value);
    for(let i = 0; i <= JobRoleOptions.length; i++) {
        const role = JobRoleOptions[i];
        // console.log(role);
            if(role === e.target.value) {
                
            }
     }
 });
