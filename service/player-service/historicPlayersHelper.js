
export function assembleBeforeAndNowHistoricPlayers(allHistoricPlayers) {
    let beforeDate = null;
    let beforeList = [];
    let nowDate = null;
    let nowList = [];

    //Horrible code, but just getting something working for now...
    allHistoricPlayers.forEach(player => {
        //relying on the data being ordered, which they are as part of the db query
        if (!nowDate) nowDate = player.timestamp["0"];
        if (nowDate.getTime() === player.timestamp["0"].getTime()) {
            nowList.push(player);
        } else {
            if (!beforeDate) beforeDate = player.timestamp["0"];
            if (beforeDate.getTime() === player.timestamp["0"].getTime()) {
                beforeList.push(player)
            } else {
                //Don't do anything we've completed our task
            }
        }
    })
    let beforeAndNow = {
        before: beforeList,
        now: nowList
    }
    return beforeAndNow;
}

/**
 * This function reduces the lists to only include players of trending relevance
 */
function filterHistoricPlayers() {

}