

export default function filterPlayers(posId, players) {
    //TODO: Massively improve the intelligence of the filtering
    players.sort((a, b) => {
        return b.avgPointsPerGame - a.avgPointsPerGame
    })
    players = players.filter(player => {
        return player.chanceOfPlayingNextRoundPercent === 100
    })
    return players.slice(0,14)
}