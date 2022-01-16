import axios, { CancelToken } from 'axios';
import { CANCEL } from 'redux-saga';
import nookies from 'nookies';
import moment from 'moment';
// import MockAdapter from "axios-mock-adapter";
//
// import clientsList from './jsonData/clientsList.json';
// import abonimantList from './jsonData/abonimentList.json';
// import statusList from './jsonData/statusList';
// import couchList from './jsonData/couchList.json';
// import lessonList from './jsonData/lessonList.js';
// import loginData from './jsonData/loginData.json';
// import coursesList from './jsonData/coursesList.json';

// const mock = new MockAdapter(axios, {delayResponse: 500});
//
// let login = loginData;
//
// let lesson = lessonList;
//
// let clients = clientsList;
//
// let aboniments = abonimantList;
//
// let statuses = statusList;
//
// let couches = couchList;
//
// let groups = coursesList;
//
// let conAx = {
//     baseURL: "http://127.0.0.1:8000/api/v1",
// };
//
// /* основные */
// mock
//     .onPost(conAx.baseURL + "/login/").reply(200, {...login})
// mock.onPost(conAx.baseURL + "/auth/register").reply(200, {...login});
//
// // mock
// //   .onPost(conAx.baseURL + "/refresh-token/")
// //   .reply(200, { user, accessToken: "TOKEN_ACC2", refreshToken: "TOKEN_REs2" });
//
// /* для главной */
//
// mock.onGet(conAx.baseURL + "/client/").reply(200, [...clients]);
// mock.onGet(conAx.baseURL + "/schedule/lesson/").reply(200, [...lesson]);
// mock.onGet(conAx.baseURL + "/core/group/").reply(200, [...groups]);
// mock.onGet(conAx.baseURL + "/core/trainer/").reply(200, [...couches]);
// mock.onGet(conAx.baseURL + "/subscription/rate/").reply(200, [...aboniments]);
// mock.onGet(conAx.baseURL + "/subscription/cardLevel/").reply(200, [...statuses]);
// mock.onPut(conAx.baseURL + "/couch_change").reply(200, {success: "ok"});
// mock.onPut(/http:\/\/127\.0\.0\.1:8000\/api\/v1\/schedule\/train\/\d+\//).reply(200);
// mock.onGet(/http:\/\/127\.0\.0\.1:8000\/api\/v1\/client\/\d+\//).reply(200, [...clients]);
// mock.onPut(/http:\/\/127\.0\.0\.1:8000\/api\/v1\/client\/\d+\//).reply(200);
//
// mock.onGet(conAx.baseURL + "/filial_list").reply(200, /*[.../!*filialList*!/]*/);
//
// /* для добавления взрослого клиента */
// mock
//     .onGet(conAx.baseURL + "/group_list_adult")
//     .reply(200, /*{ dataSelectAdultGroup }*/);
//
// /* для добавления ребенка */
//
// mock
//     .onGet(conAx.baseURL + "/group_list_child")
//     .reply(200, /*{ dataSelectChildGroup }*/);
//
// /* для профиля */
//
// mock
//     .onGet(conAx.baseURL + "/get_abonement_list")
//     .reply(200, /*[...typeAboniment]*/);
// mock.onGet(conAx.baseURL + "/get_profile_list").reply(200, [...statusList]);
// mock.onGet(conAx.baseURL + "/get_price").reply(200, /*[...price]*/);

/* для списка клиентов */

// mock.onGet(conAx.baseURL + "/client").reply(200, [...clients]);
// mock.onGet(conAx.baseURL + "/get_types_for_all").reply(200, [...typesLists]);
// mock
//   .onGet(conAx.baseURL + "/get_status_for_all")
//   .reply(200, [...statusListFilter]);
// mock.onGet(conAx.baseURL + "/get_sort_for_all").reply(200, [...sortList]);

// mock.resetHistory();

/**
 * Класс Api содержит все методы для связи с сервером проекта
 */
class Api {
	/**
	 * В конструкторе создается axios и сохраняется во внутреннюю переменную {@link this.client}
	 */
	constructor() {
		this.client = axios.create();
		this.token = localStorage.getItem('access_token');
		this.refreshToken = localStorage.getItem('refresh_token');
		this.source = axios.CancelToken.source();
		this.refreshRequest = null;
		this.access = nookies.get().access || null;
		this.refresh = nookies.get().refresh || null;

		/* базовый URL для локальной разработки */
		// this.client.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';

		/* базовый URL для продакшн разработки */
		this.client.defaults.baseURL = 'http://5.63.154.181:8000/api/v1';

		this.client.interceptors.request.use(
			config => {
				if (this.access === null) {
					// if (!token) {
					return { ...config };
					// }
					// this.setToken(token);
					// console.log(token)
				}
				const newConfig = {
					...config,
				};
				newConfig.headers.Authorization = `Bearer ${this.access}`;
				return newConfig;
			},
			e => {
				return Promise.reject(e);
			}
		);

		this.client.interceptors.response.use(
			r => r,
			async error => {
				// this.refreshToken = localStorage.getItem('refresh_token');
				// console.log(this.refreshToken)
				if (
					!this.refresh ||
					// error.message ||
					(error.response.status !== 401 && error.response.status !== 403) ||
					error.config.retry
				) {
					// throw error
					await Promise.reject(error);
				}
				if (!error.response.status) {
					console.log('здесь ошибка');
					// throw error
				}
				// if (!this.refreshRequest) {
				//     this.refreshRequest = this.client.post("/refresh-token/", {
				//         refresh: this.refreshToken,
				//     });
				// }
				// const {data} = await this.refreshRequest;
				// this.token = data.access;
				// localStorage.setItem("refresh_token", data.refreshToken);
				// this.refreshToken = data.refreshToken;
				const newRequest = {
					...error.config,
					retry: true,
				};

				return this.client(newRequest);
			}
		);
	}

	setToken(some) {
		this.token = some;
		this.access = some;
		nookies.set(null, 'access', some);
	}

	getToken() {
		return this.access;
	}
	setRefreshToken(some) {
		this.refreshToken = some;
		this.refresh = some;
		nookies.set(null, 'refresh', some);
	}

	getRefreshToken() {
		return this.refresh;
	}

	/* основные api */

	/**
	 * Вход в приложение
	 * Отправляет данные пользователя {email,password}
	 * Получает пару токенов и пользователя
	 * @returns {Promise<*>}
	 */
	async reLogin() {
		const res = await this.client.post('/refresh-token/', {
			refresh: this.refreshToken,
		});
		console.log('вызван reLogin');
		this.setToken(await res.data.access);
		console.log("после reLogin'a получен токен", this.getToken());
		// localStorage.setItem('access_token', await res.data.access);
		return res;
	}

	/**
	 * Авторизация в приложении
	 *
	 * @param admin {username:string, password:string}
	 * @returns {Promise<any>}
	 */
	async login(admin) {
		const res = await this.client.post('/login/', {
			username: admin.username,
			password: admin.password,
		});
		console.log('вызван логин');
		this.setToken(await res.data.access);
		this.setRefreshToken(await res.data.access);
		console.log('после логина получен токен', this.getToken());
		console.log('после логина получен рефрешь токен', this.getRefreshToken());
		// localStorage.setItem('refresh_token', await res.data.refresh);
		// localStorage.setItem('access_token', await res.data.access);
		return res.data;
	}

	/* для приложения клиента */

	// /**
	//  * Регистрация пользователя
	//  * Отправляет данные о пользователе из формы на сервер
	//  * Получает только статус операции
	//  * @param data
	//  * @returns {Promise<AxiosResponse<any>>}
	//  */
	// async register(data = {}) {
	//   return await this.client
	//     .post("/auth/register", data)
	//     .catch((e) => console.log(e));
	// }

	/*  еще не реализовал, осталось от клиента
          /!**
           * Восстановление пароля
           * Ввод email для отправки письма
           *
           * @param email
           * @returns {Promise<AxiosResponse<any>>}
           *!/
          async forgetEmail(email) {
              return await  this.client.post('/auth/forget/email',{email})
          }

          /!**
           * Восстановление пароля
           * Ввод code полученновго в email
           * @param code
           * @returns {Promise<AxiosResponse<any>>}
           *!/
          async forgetCode(code) {
              return await  this.client.post('/auth/forget/code',{code})
          }

          /!**
           * Восстановление пароля
           * Ввод пары даанных, "пароль" - "потдверждение пароля"
           * @param data
           * @returns {Promise<AxiosResponse<any>>}
           *!/
          async forgeRefreshPass(data) {
              return await  this.client.post('/auth/forget/refreshPass',data)
          }

          /!**
           * Автовход
           * После обновления страницы удаляется токен из приложения
           * Используя RefreshToken из localStorage восстанавливает утерянный токен
           * Получает новую пару токенов и пользователя
           * @returns {Promise<AxiosResponse<any>>}
           *!/
          async autoLog() {
              const refToken = localStorage.getItem('refresh_token');
              if (refToken) {
                  return await this.client.post('/auth/refresh', {refreshToken: refToken}).then(ref=> {
                      this.setToken(ref.data.accessToken);
                      localStorage.setItem('refresh_token', ref.data.refreshToken);
                      return ref.data.user
                  });
              }
          }
      */

	/**
	 * Проверка токена на валидность
	 *
	 * @returns {Promise}
	 */
	async tokenVerify() {
		const token = this.getToken();
		return await this.client.post('/token-verify/', { token: token });
	}

	/**
	 * Обновление токена
	 *
	 * @returns {Promise}
	 */
	async tokenRefresh() {
		const refresh = this.getRefreshToken();
		return await this.client.post('/refresh-token/', { refresh });
	}

	/**
	 * Выход из приложения
	 * Удаляются все токены и стирается currentUser из Redux
	 */
	logout() {
		localStorage.removeItem('refresh_token');
		localStorage.removeItem('access_token');
		this.access = null;
		this.refresh = null;
		nookies.destroy(null, 'access');
		nookies.destroy(null, 'refresh');
		this.token = null;
		this.refreshToken = null;
	}

	/* главная страница */

	/**
	 * Отметка\снятие отметки о присутствии клиента на занятии
	 *
	 * @param id {number} id клиента
	 * @param set {boolean} состояние был/не был
	 * @returns {Promise}
	 */
	async checkClient(id, set) {
		return await this.client.put(`/schedule/train/${id}/`, { is_visited: set });
	}

	/**
	 * Отметка\снятие отметки о присутствии клиента на занятии
	 *
	 * @param id {number} id клиента
	 * @returns {Promise}
	 */
	async removeClientFromGroup(id) {
		return await this.client.delete(`/schedule/train/${id}/`);
	}

	/**
	 * Получить профиль клиента
	 *
	 * @param id {number} id клиента
	 * @returns {Promise}
	 */
	async getProfile(id) {
		return await this.client.get(`/client/${id}/`);
		//     .then(r => {
		//     return r.data.find(client => Number(client.id) === Number(id));
		// });
	}

	/**
	 * Получить список посещения конкретного клиента
	 *
	 * @param id {number} id клиента
	 * @returns {Promise}
	 */
	async getProfileVisit(id) {
		return await this.client.get(`/client/${id}/trainings/`);
		//     .then(r => {
		//     return r.data.find(client => Number(client.id) === Number(id));
		// });
	}

	/**
	 * Получить список комментариев конкретного клиента
	 *
	 * @param id {number} id клиента
	 * @returns {Promise}
	 */
	async getProfileComments(id) {
		return await this.client.get(`/client/${id}/comments/`);
		//     .then(r => {
		//     return r.data.find(client => Number(client.id) === Number(id));
		// });
	}

	/**
	 * Получить конкретный комментарий
	 *
	 * @param id комментария
	 * @returns {Promise}
	 */
	async getComment(id) {
		return await this.client.get(`/core/comments/${id}`);
		//     .then(r => {
		//     return r.data.find(client => Number(client.id) === Number(id));
		// });
	}

	/**
	 * Создание нового комментария для конкретного клиента
	 *
	 * @param data {client_id:number, text:string} текс комментария
	 * @returns {Promise}
	 */
	async createProfileComment(data) {
		return await this.client.post(`/core/comments/`, { ...data });
		//     .then(r => {
		//     return r.data.find(client => Number(client.id) === Number(id));
		// });
	}

	/**
	 * Редактирование комментария
	 *
	 * @param id id конкретного комментария
	 * @param data {client_id:number,text:string}
	 * @returns {Promise}
	 */
	async editProfileComment(id, data) {
		return await this.client.put(`/core/comments/${id}`, { ...data });
		//     .then(r => {
		//     return r.data.find(client => Number(client.id) === Number(id));
		// });
	}

	/**
	 * Получить список оплат конкретного клиента
	 *
	 * @param id id клиента
	 * @returns {Promise}
	 */
	async getProfilePay(id) {
		return await this.client.get(`/payment/client/${id}/`);
		//     .then(r => {
		//     return r.data.find(client => Number(client.id) === Number(id));
		// });
	}

	/**
	 * Редактирование личной информации клиента
	 *
	 * @param id id клиента
	 * @param data - данные для обновления клиента
	 * @returns {Promise}
	 */
	async editProfile(id, data) {
		return await this.client.put(`/client/${id}/`, { ...data });
	}

	/**
	 * Путь для редактирования личных данных родителей клиента
	 *
	 * @param parents - массив родителей клиента
	 * @returns {Promise}
	 */
	async editProfileParents(parents) {
		return await this.client.post(`/client/updateParents/`, { parents });
	}

	/**
	 * Путь на удаление добавленных при регистрации родителей
	 *
	 * @param id id клиента
	 * @param parents массив родителей
	 * @returns {Promise}
	 */
	async removeParents(id, parents) {
		console.log({ parents });
		return await this.client.post(`/client/${id}/deleteParents/`, { parents });
	}

	/**
	 * Создание ранее не созданных родителей
	 *
	 * @param id id клиента
	 * @param parents массив родителей
	 * @returns {Promise}
	 */
	async createParents(id, parents) {
		console.log({ parents });
		return await this.client.post(`/client/${id}/addParents/`, { parents });
	}

	/**
	 * Путь на покупку абонемента
	 *
	 * @param id id клиента
	 * @param data данные об абонементе
	 * @returns {Promise}
	 */
	async buyProfileAbonement(id, data) {
		return await this.client.post(`/subscription/${id}/buy/`, { ...data });
	}

	/**
	 * Путь на покупку абонемента
	 *
	 * @param id id клиента
	 * @param data данные об абонементе
	 * @returns {Promise}
	 */
	async buyProfileAbonement_configure(id, data) {
		return await this.client.post(`/subscription/${id}/configure/`, { ...data });
	}

	// /**
	//  * Временный запрос на получение фиктивных клиентов
	//  * @returns {Promise}
	//  */
	// async getGeneralPageData() {
	// 	return await this.client.get('/schedule/lesson/');
	// 	// return await this.client.get('/schedule/lesson/today/');
	// }

	/**
	 * Путь на получение списка занятий на конкретную дату
	 *
	 * @param date дата проведения занятий
	 * @returns {Promise}
	 */
	async getGeneralPageDataWithDate(date) {
		console.log(moment(date));
		return await this.client.get(`/schedule/lesson/?date=${date}`);
	}

	/**
	 * Получить список существующих групп
	 * @returns {Promise}
	 */
	async getGroupList() {
		return await this.client.get('/core/group/');
	}

	/**
	 * Создание занятия
	 * @param group {name:string}
	 * @returns {Promise}
	 */
	async postNewGroup(group) {
		return await this.client.post('/core/group/', { ...group });
	}

	/**
	 * Получить список возростных групп
	 * @returns {Promise}
	 */
	async getAgesGroupList() {
		return await this.client.get('/core/ageGroup/');
	}

	/**
	 * Создание возростной группы
	 * @param label {label:string}
	 * @returns {Promise}
	 */
	async postAgeGroup(label) {
		return await this.client.post('/core/ageGroup/', { label });
	}

	/**
	 * Путь на обновление статуса
	 * @param id id статуса
	 * @param obj {label:string} обновляемые данные
	 * @returns {Promise}
	 */
	async updateStatus(id, obj) {
		return await this.client.patch(`/core/clientLevel/${id}/`, { ...obj });
	}

	/**
	 * Получить список все тренеров
	 * @returns {Promise}
	 */
	async getCouchList() {
		return await this.client.get('/core/trainer/');
	}

	/**
	 * смена тренера у группы
	 * @returns {Promise}
	 */
	/**
	 *
	 * @param id id занятия
	 * @param couch данные тренера
	 * @returns {Promise}
	 */
	async changeCouch(id, couch) {
		return await this.client.put(`/schedule/lesson/${id}/`, { trainer_id: couch });
	}

	/* для страницы добавления взрослого клиента */

	/**
	 * Получение списка групп доступных для взрослого клиента
	 *
	 * @returns {Promise}
	 */
	async getGroupForAdult() {
		return await this.client
			.get('/group_list_adult')
			.then(r => r.data.dataSelectAdultGroup)
			.catch(e => {
				if (axios.isCancel(e)) {
					return e.message;
				} else {
					console.log(e);
				}
			});
	}

	/**
	 * Получение списка филиалов для клиента
	 * TODO пока не используется
	 *
	 * @param token
	 * @returns {Promise}
	 */
	async getFilialList(token) {
		return await this.client.get('/filial_list', { cancelToken: token });
	}

	/* для добавления ребенка */
	async postAddClient(client) {
		return await this.client.post('/client/', { ...client });
	}

	async createTrain(data) {
		return await this.client.post('/schedule/train/', { ...data });
	}

	async createDebtTrain(data) {
		return await this.client.post('/schedule/trainDebtCreate/', { ...data });
	}
	async createOnceTrain(data) {
		return await this.client.post('/schedule/trainOnceCreate/', { ...data });
	}

	// async postAddAdult(adult) {
	//     return await this.client.post('/client/createAdult/', {...adult})
	// }

	/**
	 * Получение списка групп доступных для ребенка
	 *
	 * @returns {Promise}
	 */
	async getGroupForChild() {
		return await this.client
			.get('/group_list_child')
			.then(r => r.data.dataSelectChildGroup)
			.catch(e => {
				if (axios.isCancel(e)) {
					return e.message;
				} else {
					console.log(e);
				}
			});
	}

	/* для настроек списка источников рекламы */

	/**
	 * Получить конкретный источник рекламы
	 *
	 * @param id id источника рекламы
	 * @returns {Promise}
	 */
	async getSource(id) {
		return await this.client.get(`/core/adSource/${id}/`);
	}

	/**
	 * Путь нв радактирование конкретного источника рекламы
	 *
	 * @param source {id:string,name:string} name - название источника рекламы, id - конкретный источник рекламы
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	async editSourceList(source) {
		return await this.client.put(`/core/adSource/${source.id}/`, { name: source.name });
	}

	/**
	 * Путь на создание источника рекламы
	 *
	 * @param obj {name} name - название источника рекламы
	 * @returns {Promise<AxiosResponse<any>>}
	 */
	async createSourceList(obj) {
		return await this.client.post('/core/adSource/', { name: obj.name });
	}

	/**
	 * Получить список всех источников рекламы
	 *
	 * @returns {Promise}
	 */
	async getSourceList() {
		return await this.client.get('/core/adSource/');
	}

	/**
	 * Путь на удаление конкретного источника рекламы
	 *
	 * @param id id удаление конкретного источника рекламы
	 * @returns {Promise}
	 */
	async deleteSourceList(id) {
		return await this.client.delete(`/core/adSource/${id}/`);
	}

	/* для профиля */

	/**
	 * Получить список всех абонементов
	 *
	 * @returns {Promise}
	 */
	async getAbonimentList() {
		return await this.client.get('/subscription/rate/');
	}

	/**
	 * Получить конкретного клиента
	 *
	 * @param id id абонемента
	 * @returns {Promise}
	 */
	async getAbonimentWithId(id) {
		return await this.client.get(`/subscription/rate/${id}`);
	}

	/**
	 * Получить конкретный статус
	 *
	 * @param id id статуса
	 * @returns {Promise}
	 */
	async getStatusWithId(id) {
		return await this.client.get(`/core/clientLevel/${id}/`);
	}

	/**
	 * Удалить конкретный абонемент
	 *
	 * @param id id абонемента
	 * @returns {Promise}
	 */
	async removeAbonementWithId(id) {
		return await this.client.delete(`/subscription/rate/${id}`);
	}

	/**
	 * Удалить конкретный статус
	 *
	 * @param id id статуса
	 * @returns {Promise}
	 */
	async removeStatusWithId(id) {
		return await this.client.delete(`/core/clientLevel/${id}/`);
	}

	/**
	 * Путь на создание нового абонемента
	 *
	 * @param data данные нового абонемента
	 * @returns {Promise}
	 */
	async sendNewAbonementWithPrice(data) {
		return await this.client.post('/subscription/rate/', { ...data });
	}

	/**
	 * Путь на создание статуса
	 *
	 * @param name {name:string,color:string} name - имя нового статуса, color - цвет статуса
	 * @returns {Promise}
	 */
	async sendNewStatus(name) {
		console.log(name);
		return await this.client.post('/core/clientLevel/', { name });
	}

	/**
	 * Путь на редактирование абонемента
	 *
	 * @param id id конкретного абонемента
	 * @param data данные для редактирования абонемента
	 * @returns {Promise}
	 */
	async editAbonementWithPrice(id, data) {
		return await this.client.patch(`/subscription/rate/${id}/`, { ...data });
	}

	/**
	 * Получить список цен для конкретного абонемента в зависимости от статуса
	 *
	 * @param abonement абонемент по которому ведется поиск
	 * @param status статус
	 * @returns {Promise}
	 */
	async getPriceList(abonement, status) {
		return await this.client.get('/get_price').then(r => {
			let priceList, result;
			if (abonement <= 4) {
				priceList = r.data.find(item => item.abonement === abonement);
				result = priceList.priceList.find(item => item.id === status);
			} else {
				result = r.data.find(item => item.aboniment === abonement);
			}
			return result.price;
		});
	}

	/* для списка клиентов */
	/**
	 * Получить список всех клиентов
	 *
	 * @returns {Promise}
	 */
	async getAllClients() {
		const source = CancelToken.source();
		const request = await this.client.get('/client/', { cancelToken: source.token });
		// return await this.client.get("/client/", {cancelToken: token});
		request[CANCEL] = () => source.cancel();
		return request;
	}

	/**
	 * TODO пока не используется, не понятно нуден будет или нет
	 * @returns {Promise}
	 */
	async getTypeList() {
		return await this.client.get('/get_types_for_all');
	}

	/**
	 * Получение всех статусов
	 *
	 * @returns {Promise}
	 */
	async getStatusListForClients() {
		return await this.client.get('/core/clientLevel/');
	}

	/**
	 * TODO пока не используется
	 * @param token
	 * @returns {Promise}
	 */
	async getSortListForClients(token) {
		return await this.client.get('/get_sort_for_all', { cancelToken: token });
	}

	/* отмена операциии запроса, не тестил, может не работать */

	/**
	 * Отмена операции запроса для axios
	 *
	 * TODO пока не реализовано
	 *
	 * @returns {void}
	 */
	abortAxiosCalling() {
		this.source.cancel('загрузка отменена');
	}
	//
	// isCancel(some) {
	//     this.client.isCancel(some);
	// }

	/* для страницы профиля */

	/**
	 * Путь на получение списка статусов
	 *
	 * @returns {Promise}
	 */
	async getStatusList(token) {
		return await this.client.get('/core/clientLevel/');
	}

	/**
	 * Путь на получение актуальной даты
	 *
	 * @returns {Promise}
	 */
	async getTimeZone() {
		return axios.get('http://worldtimeapi.org/api/ip');
	}
}

export default new Api();
