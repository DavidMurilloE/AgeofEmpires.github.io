const themeSwitchButton = document.getElementById('theme-switch');

themeSwitchButton.addEventListener('click', () => {
    document.documentElement.style.setProperty('--header-bg', '#000');
    document.documentElement.style.setProperty('--header-text', '#fff');
    document.documentElement.style.setProperty('--theme-button-bg', '#fff');
    document.documentElement.style.setProperty('--theme-button-text', '#000');
    document.documentElement.style.setProperty('--footer-bg', '#000');
    document.documentElement.style.setProperty('--footer-text', '#fff');
});
