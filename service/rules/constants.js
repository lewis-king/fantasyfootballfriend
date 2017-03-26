class Constants {

    static POSITIONS = [
        {elementId:1, abbrev:'GK'},
        {elementId:2, abbrev:'DEF'},
        {elementId:3, abbrev:'MID'},
        {elementId:4, abbrev:'FWD'}
    ]

    static getElementIdByAbbrev = (abbrev) => {
        return Constants.POSITIONS.find((e) => {
            return e.abbrev === abbrev
        })
    }
}

module.exports = Constants;
