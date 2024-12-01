const months = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
}

async function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function parseDate(dateTimeDesc: String): Promise<Date> {
    try{
        const descWords: String[] = dateTimeDesc.split(" at ");
        var d: Date = new Date();

        switch (descWords[0]) {
            case "Today":
                break;
            case "Yesterday":
                d = new Date(d.getTime() - 24 * 60 * 60 * 1000);
                break;
            default:
                const monthDate = descWords[0].split(" ");
                d.setMonth(months[monthDate[0]], parseInt(monthDate[1]));
                break;
        }
        var s = descWords[1];
        var parts = s.match(/(\d+)\:(\d+) (\w+)/);
        var hours = /am/i.test(parts[3]) ?
            function (am) { return am < 12 ? am : 0 }(parseInt(parts[1], 10)) :
            function (pm) { return pm < 12 ? pm + 12 : 12 }(parseInt(parts[1], 10));
        var minutes = parseInt(parts[2], 10);

        d.setHours(hours);
        d.setMinutes(minutes);

        return d;
    }
    catch (e){
        console.log(e);
        return e;
    }
}

function dateSubtract(d1: Date, d2: Date): number{
    return 7;
}

export { sleep, parseDate }
