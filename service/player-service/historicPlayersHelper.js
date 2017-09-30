
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
    filterHistoricPlayers(beforeList, nowList);

    let trendingPlayers = []
    nowList.map((player, index) => {
        let beforePlayer = beforeList[index];
        if (player.fullName === beforePlayer.fullName) {
            const transferFeeStartSeason = player.costNow - player.costChangeStart;
            const transferFeeStartGW = player.costNow - player.costChangeForGW;
            trendingPlayers.push({
                nowDate: player.timestamp,
                beforeDate: beforePlayer.timestamp,
                fullName: player.fullName,
                beforeTransferFee: beforePlayer.costNow,
                transferFeeStartSeason: transferFeeStartSeason,
                transferFeeStartGW: transferFeeStartGW,
                transferFeeChangeStart: player.costChangeStart,
                transferFeeChangeForGW: player.costChangeForGW,
                nowTransferFee: player.costNow,
                beforeTransfersIn: beforePlayer.transfersInForGW,
                beforeTransfersOut: beforePlayer.transfersOutForGW,
                nowTransfersIn: player.transfersInForGW,
                nowTransfersOut: player.transfersOutForGW,
                netTransfersIn: (player.transfersInForGW - beforePlayer.transfersInForGW),
                netTransfersOut: (player.transfersOutForGW - beforePlayer.transfersOutForGW),
                netTransfers: ((player.transfersInForGW - beforePlayer.transfersInForGW) -
                (player.transfersOutForGW - beforePlayer.transfersOutForGW)),
                priceChange: (player.costNow - beforePlayer.costNow)
            })
        }
    });

    return trendingPlayers.sort(compareTransfersIn);
}

/**
 * This function reduces the lists to only include players of trending relevance
 */
function filterHistoricPlayers(beforeList, nowList) {
    beforeList.sort(compareFullName);
    nowList.sort(compareFullName);
}

function compareFullName(a, b) {
    if (a.fullName < b.fullName)
        return -1;
    if (a.fullName > b.fullName)
        return 1;
    return 0;
}

function compareTransfersIn(a, b) {
    if (a.netTransfers > b.netTransfers)
        return -1;
    if (a.netTransfers < b.netTransfers)
        return 1;
    return 0;
}