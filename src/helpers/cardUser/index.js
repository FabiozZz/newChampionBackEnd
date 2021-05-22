import moment from "moment";

/**
 *
 * @param date
 * @returns {boolean}
 */
export const isBirthDay = (date='') => {
    let temp = date.split('/');
    let before = moment().subtract(3, 'days');
    let after = moment().add(3, 'days');
    moment([moment().year(),temp[1],temp[2]])

    return moment([moment().year(),temp[1]-1,temp[2]]).isBetween(before,after)
};

/**
 *
 * @param date
 * @returns {boolean}
 */
export const isExpire = (date='') => {
    return moment().subtract(5, 'days').isSameOrBefore(moment(date))
};