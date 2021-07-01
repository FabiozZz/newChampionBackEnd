import moment from "moment";

export function isEmpty(obj) {
    for (let key in obj) {
        // если тело цикла начнет выполняться - значит в объекте есть свойства
        return false;
    }
    return true;
}

export const ageToString = (birth) => {
    let dateNow = moment();
    let dateBirth = moment(birth.replace(/(\d{2}).(\d{2}).(\d{4})/g,'$3-$2-$1'));
    let mathAge = Math.floor(dateNow.diff(dateBirth,'year'));
    mathAge += (mathAge % 100 < 21 || mathAge % 10 < 1 || (mathAge % 10 > 4 && mathAge % 10 <= 9) || mathAge % 10 === 0) ? ' лет' :
        mathAge % 10 === 1 ? ' год' : ' года';
    return mathAge
};