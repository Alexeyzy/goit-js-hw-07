const userinput = document.querySelector('#name-input'); 
const username = document.querySelector('#name-output');

userinput.addEventListener('input', event =>{
    username.textContent = userinput.value.trim();
})
