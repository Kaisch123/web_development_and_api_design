

export  class OpponentOnline{

    // constructor(boardRef){
    //     this.boardRef = boardRef;
    // }

    setSocket(socket){
        this.socket = socket;
    }

    setMatchId(matchId){
        this.matchId = matchId;
    }

    playNext(lastInsertedColumn, boardCmp){

        if(lastInsertedColumn === null || lastInsertedColumn=== undefined){
            //first round, no need to inform server
            return;
        }

        // const boardCmp = this.boardRef.current;
        const boardState = boardCmp.getBoardState();

        this.socket.emit('insertion', {
            counter: boardState.counter,
            position: lastInsertedColumn,
            matchId: this.matchId
        });
    }

}
