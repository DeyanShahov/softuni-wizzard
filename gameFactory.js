function gameFactory(){
    //let factory = {};
    let { wizzard } = initGameState()();

    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');

    let wizzardElement = createWizzard(wizzard.x, wizzard.y);

    playScreen.appendChild(wizzardElement);

    // Object.defineProperties(factory, {
    //     startScreen: { get: () => startScreen},
    //     playScreen: { get: () => playScreen},
    //     wizzardElement,//: { get: () => wizzardElement},
    // });

    let factory = {
        startScreen,
        playScreen,
        wizzardElement
    };

    return factory;

}

function createWizzard(posX, posY){
    let wizzardElement = document.createElement('div');

    wizzardElement.classList.add('wizzard');
    wizzardElement.style.top = posY + 'px';
    wizzardElement.style.left = posX + 'px';

    return wizzardElement;
}