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
export function declOfLessonsNum(n) {
    let text_forms = ['знятие', "занятия", "занятий"];
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
}
export function declOfWeekNum(n) {
    let text_forms = ['неделя', "недели", "недель"];
    n = Math.abs(n) % 100;
    var n1 = n % 10;
    if (n > 10 && n < 20) { return text_forms[2]; }
    if (n1 > 1 && n1 < 5) { return text_forms[1]; }
    if (n1 === 1) { return text_forms[0]; }
    return text_forms[2];
}
