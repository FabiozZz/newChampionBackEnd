import axios from "axios";
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
        this.token = null;
        this.refreshToken = null;

        this.refreshRequest = null;

        this.client.defaults.baseURL = "http://127.0.0.1:8000/api/v1";
        console.log(this.token)
        this.client.interceptors.request.use(
            (config) => {
                if (this.token === null) {
                    return {...config};
                }
                const newConfig = {
                    ...config,
                };
                newConfig.headers.Authorization = `Bearer ${this.token}`;
                return newConfig;
            },
            (e) => {
                return Promise.reject(e);
            }
        );

        this.client.interceptors.response.use(
            (r) => r,
            async (error) => {
                this.refreshToken = localStorage.getItem("refresh_token");
                if (
                    !this.token ||
                    error.message ||
                    error.response.status !== 401 ||
                    error.config.retry
                ) {
                    await Promise.reject(error);
                }

                if (!this.refreshRequest) {
                    this.refreshRequest = this.client.post("/refresh-token/", {
                        refresh: this.refreshToken,
                    });
                    console.log(this.refreshRequest);
                }
                const {data} = await this.refreshRequest;
                this.token = data.access;
                localStorage.setItem("refresh_token", data.refreshToken);
                this.refreshToken = data.refreshToken;
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
    }

    getToken() {
        return this.token;
    }

    /* основные api */

    /**
     * Вход в приложение
     * Отправляет данные пользователя {email,password}
     * Получает пару токенов и пользователя
     * @param login
     * @param password
     * @returns {Promise<*>}
     */
    async login({username, password}) {
        const res = await this.client
            .post("/login/", {
                username: username,
                password: password,
            });
        console.log('вызван логин')
        this.setToken(await res.data.access);
        console.log('после логина получен токен', this.getToken());
        localStorage.setItem('refresh_token', await res.data.refresh)
        this.refreshToken = localStorage.getItem('refresh_token');
        return res.data
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
     * Выход из приложения
     * Удаляются все токены и стирается currentUser из Redux
     */
    logout() {
        this.token = null;
        this.refreshToken = null;
        localStorage.removeItem("refresh_token");
    }

    /* главная страница */

    /**
     * Отметка\снятие отметки о присутствии клиента на занятии
     *
     * @param id {number} id клиента
     * @param set {boolean} состояние был/не был
     */
    async checkClient(id, set) {
        return await this.client.put(`/schedule/train/${id}/`, {is_visited: set});
    }

    async getProfile(id) {
        return await this.client.get(`/client/${id}/`)
        //     .then(r => {
        //     return r.data.find(client => Number(client.id) === Number(id));
        // });
    }

    async editProfile(id, data) {
        return await this.client.put(`/client/${id}/`, {...data});
    }

    async editProfileAbonement(id, data) {
        return await this.client.post(`/subscription/clubCard/${id}/buy/`, {...data});
    }

    /**
     * Временный запрос на получение фиктивных клиентов
     * @returns {Promise}
     * @param {CancelToken} token токен для отмены вызова при уничтожении компонента
     */
    async getClientsTimeTable(token) {
        return await this.client.get("/schedule/lesson/", {cancelToken: token});
    }

    /**
     *
     * @param token
     * @returns {Promise}
     */
    async getGroupList(token) {
        return await this.client.get("/core/group/", {cancelToken: token});
    }

    /**
     *
     * @param token
     * @returns {Promise}
     */
    async getCouchList(token) {
        return await this.client.get("/core/trainer/", {cancelToken: token});
    }

    /**
     * смена тренера у группы
     *
     * @returns {Promise}
     */
    async changeCouch(id, couch) {
        return await this.client.put(`/schedule/lesson/${id}/`, {trainer: {id: couch}})
    }

    /* для страницы добавления взрослого клиента */

    /**
     * Получение списка групп доступных для взрослого клиента
     *
     * @returns {Promise}
     */
    async getGroupForAdult() {
        return await this.client
            .get("/group_list_adult")
            .then((r) => r.data.dataSelectAdultGroup)
            .catch((e) => {
                if (axios.isCancel(e)) {
                    return e.message;
                } else {
                    console.log(e);
                }
            });
    }

    /**
     * Получение списка филиалов для клиента
     *
     * @param token
     * @returns {Promise}
     */
    async getFilialList(token) {
        return await this.client.get("/filial_list", {cancelToken: token});
    }

    /* для добавления ребенка */
    async postAddChild(child) {
        return await this.client.post('/client/createChild/', {...child})
    }

    async postAddAdult(adult) {
        return await this.client.post('/client/createAdult/', {...adult})
    }

    /**
     * Получение списка групп доступных для ребенка
     *
     * @returns {Promise}
     */
    async getGroupForChild() {
        return await this.client
            .get("/group_list_child")
            .then((r) => r.data.dataSelectChildGroup)
            .catch((e) => {
                if (axios.isCancel(e)) {
                    return e.message;
                } else {
                    console.log(e);
                }
            });
    }

    /* для профиля */

    async getAbonimentList(token) {
        return await this.client.get("/subscription/rate/", {cancelToken: token});
    }

    async getPriceList(token, abonement, status) {
        return await this.client.get("/get_price", {cancelToken: token}).then(r => {
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
    async getAllClients() {
        return await this.client.get("/client/");
    }

    async getTypeList(token) {
        return await this.client.get("/get_types_for_all", {cancelToken: token});
    }

    async getStatusListForClients(token) {
        return await this.client.get("/subscription/cardLevel/", {cancelToken: token});
    }

    async getSortListForClients(token) {
        return await this.client.get("/get_sort_for_all", {cancelToken: token});
    }

    /* отмена операциии запроса, не тестил, может не работать */

    /**
     * Отмена операции запроса для axios
     * @returns {void}
     */
    //  abortAxiosCalling(){
    //      this.source.cancel('загрузка отменена');
    // }
    //
    isCancel(some) {
        this.client.isCancel(some);
    }

    /* для страницы профиля */

    async getStatusList(token) {
        return await this.client.get("/subscription/cardLevel/", {  cancelToken: token});
    }
}

export default new Api();
