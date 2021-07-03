function initGameState(){
    let state = {
        gameOver: false,
        wizzard: {
            x: 100,
            y: 200,
            width: 82,
            height: 100,
            speed: 5,
        },
        keys:{},
        config: {

        }
    };

    return function(){
        return state;
    };
}