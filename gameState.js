function initGameState(){
    let state = {
        gameOver: false,
        wizzard: {
            x: 100,
            y: 200
        }
    };

    return function(){
        return state;
    };
}