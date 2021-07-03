function gameFactory(){
    //let factory = {};
    let { wizzard, bugStats, fireballStats } = initGameState()();

    let startScreen = document.querySelector('.start-screen');
    let playScreen = document.querySelector('.play-screen');
    let scoreScreen = document.querySelector('.score-screen');

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
        scoreScreen,
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
        createFireball: () => {
            let fireballElement = document.createElement('div');

            fireballElement.classList.add('fireball');
            fireballElement.style.width = fireballStats.width + 'px';
            fireballElement.style.height = fireballStats.height + 'px';

            let target = document.querySelector('.wizzard').getBoundingClientRect();
            fireballElement.style.left = target.x + 'px';
            fireballElement.style.top = target.y + 'px';

            playScreen.appendChild(fireballElement);
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
