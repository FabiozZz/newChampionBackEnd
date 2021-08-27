import {notification} from 'antd';
export const notificationPopUp = (type,title,desc='',duration=2.5) => {
    return notification[type]({
        message: title,
        description: desc,
        duration
    });
};
