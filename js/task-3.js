const userinput = document.querySelector('#name-input');
const username = document.querySelector('#name-output');

userinput.addEventListener('input', () => {
    const name = userinput.value.trim();
    username.textContent = name === '' ? 'Anonymous' : name;
});