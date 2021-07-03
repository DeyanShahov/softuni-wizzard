function initGameState(){
    let state = {
        gameOver: false,
        score: 0,
        wizzard: {
            x: 100,
            y: 200,
            width: 82,
            height: 100,
            speed: 5,
            gravity: 2,
        },
        keys:{},
        bugStats: {
            width: 50,
            height: 50,
            speed: 3,
            nextBugTimeCreation: 0,
            maxCreationInterval: 1500,
        },
        fireballStats: {
            width: 40,
            height: 40,
            speed: 10,
        }
    };

    return function(){
        return state;
    };
}