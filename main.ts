window.onload = function () {
    const hiddenItems = document.getElementsByClassName("hidden") as HTMLCollectionOf<HTMLElement>;
    for (let i = 0; i < hiddenItems.length; i++) {
        hiddenItems[i].remove();
    }
    const backgrounds = ['src/assets/Assets/bg.jpg', 'src/assets/Assets/bg3.jpg', 'src/assets/Assets/bg4.jpg'];
    const randomBg = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    const backgroundElement = document.querySelector('.background') as HTMLElement | null;
    if (backgroundElement) {
        backgroundElement.style.backgroundImage = `url('${randomBg}')`;
        backgroundElement.style.opacity = "0.8";
    }
};