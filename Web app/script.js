
var tempValue, player1, player2, current,gamestate;
player1 = {
    order: 'left',
    total: 0
};
player2 = {
    order: 'right',
    total: 0
};
current = {
    order: 'left',
    total: 0
};
tempValue = 0;
gamestate =true;

function choosePlayer() {
    if (player1.order == current.order) {
        player1.total += current.total;
        document.querySelector('#total-' + current.order).innerHTML = player1.total;
        current.total = 0;
    }
    else {
        player2.total += current.total;
        document.querySelector('#total-' + current.order).innerHTML = player2.total;
        current.total = 0;
    }
}

function refresh() {
    player1 = {
        order: 'left',
        total: 0
    };
    player2 = {
        order: 'right',
        total: 0
    };
    current = {
        order: 'left',
        total: 0
    };
    tempValue = 0;
    gamestate=true;

    document.querySelector('#running-left').innerHTML = 0;
    document.querySelector('#running-right').innerHTML = 0;
    document.querySelector('#total-left').innerHTML = 0;
    document.querySelector('#total-right').innerHTML = 0;
    document.querySelector('.dice').innerHTML = 0;
    document.querySelector('#player-left').innerHTML = 'ＰＬＡＹＥＲ １';
    document.querySelector('#player-right').innerHTML = 'ＰＬＡＹＥＲ ２';

}

function number() {
    return Math.floor(Math.random() * 6) + 1;
}

function exit() {
    if (tempValue == 1) {
        current.total = 0;
        tempValue = 0;
        document.querySelector('#running-' + current.order).innerHTML = current.total;
        if (player1.order == current.order) { current.order = player2.order; }
        else { current.order = player1.order;}
        choosePlayer();
    }
}



document.querySelector('.new-game').addEventListener('click', function () {
    refresh();
    
})

document.querySelector('.roll').addEventListener('click', function () {
    if(gamestate){
        tempValue = document.querySelector('.dice').innerHTML = number();
        current.total += tempValue;
        document.querySelector('#running-' + current.order).innerHTML = current.total;
        exit();
    }
    
})

document.querySelector('.hold').addEventListener('click', function () {
    if(gamestate){
      choosePlayer();
        
      document.querySelector('#running-' + current.order).innerHTML = 0;
        if (player1.total >= 100 || player2.total >= 100){
            gamestate=false;
            document.querySelector('#player-' + current.order).innerHTML = 'ＷＩＮＮＥＲ!';
        }

        if (player1.order == current.order) { current.order = player2.order; }
        else { current.order = player1.order;}

    }
    
    
})