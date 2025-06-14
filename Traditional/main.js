window.onload = function () {
    const hiddenItems = document.getElementsByClassName("hidden");
    for (let i = 0; i < hiddenItems.length; i++) {
        hiddenItems[i].remove();
    }
    const backgrounds = ['Assets/bg.jpg', 'Assets/bg3.jpg', 'Assets/bg4.jpg'];
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    const backgroundElement = document.querySelector('.background');
    if (backgroundElement) {
        backgroundElement.style.backgroundImage = `url('${randomBg}')`;
        backgroundElement.style.opacity = "0.8";
    }
};