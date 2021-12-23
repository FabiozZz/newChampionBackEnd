import { notification } from 'antd';

/**
 * Функция создает всплывающее сообщения с параметрами
 *
 * @param type {string} какой тип отображения сообщения
 * @param title {string} заголовок сообщения
 * @param desc {string} тело сообщения
 * @param duration {number} продолжительность сообщения
 * @returns {*}
 */
export const notificationPopUp = (type, title, desc = '', duration = 2.5) => {
	return notification[type]({
		message: title,
		description: desc,
		duration,
	});
};
