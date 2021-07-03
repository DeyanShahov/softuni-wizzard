function gameFactory(){
    //let factory = {};
    let { wizzard, bugStats } = initGameState()();

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
        wizzardElement,
        createBug:  () => {
            let bugElement = document.createElement('div');
        
            bugElement.classList.add('bug');
            bugElement.style.width = bugStats.width + 'px';
            bugElement.style.height = bugStats.height + 'px';

            bugElement.style.left = playScreen.offsetWidth - bugStats.width + 'px';
            bugElement.style.top = ( playScreen.offsetHeight - bugStats.height ) * Math.random() + 'px';

            playScreen.appendChild(bugElement);
        },
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
