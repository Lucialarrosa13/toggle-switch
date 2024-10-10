document.addEventListener('DOMContentLoaded', () => {
    const toggleMode = document.getElementById('toggleMode');
    const body = document.body;

    toggleMode.addEventListener('click', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            toggleMode.textContent = 'Cambiar a Modo Claro';
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            toggleMode.textContent = 'Cambiar a Modo Oscuro';
        }
    });
});