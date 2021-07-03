function initGameState(){
    let state = {
        wizzard: {
            x: 100,
            y: 200
        }
    };

    return function(){
        return state;
    };
}