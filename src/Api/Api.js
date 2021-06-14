import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios,{delayResponse:500});

const user = {
    id:3,
    name:'FabiozZz',
    email: 'fabiozzz.dev@gmail.com',
}
const data = [
    {
        //Плиев Станислав Робертович
        id: 1, totalClients: 14,toDay:0, name: 'Бразильское Джиу-Джитсу', coach: 'Константин Константинович Константинопольский', timeTraining: '12.04.2021',
        clients: [
            {
                id: 1, name: 'Константин', middleName: 'Константинович', lastName: 'Константинопольский',
                status: 30, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:true,toDay:false,
            },
            {
                id: 2, name: 'Иван', middleName: 'Беляев', lastName: 'Беляев',
                status: 5, health: false, birthday: true, birthdayDate: '06.10.89', call: false, burnAbonement: false,
                course: 1,freeze:true,toDay:false
            },
            {
                id: 3, name: 'Адам', middleName: '', lastName: 'Соловьев',
                status: 0, health: false, birthday: false, birthdayDate: '06.10.89', call: true, burnAbonement: false,
                course: 1,freeze:false,toDay:false
            },
            {
                id: 4, name: 'Ольга', middleName: '', lastName: 'Васильева',
                status: 13, health: false, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:true,toDay:false
            },
            {
                id: 5, name: 'Ирина', middleName: 'Константинович', lastName: 'Дмитриева',
                status: 30, health: true, birthday: true,birthdayDate: '06.10.89', call: true, burnAbonement: true,
                course: 1,freeze:true,toDay:false
            },
            {
                id: 6, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:false,toDay:false
            },
            {
                id: 25, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:false,toDay:false
            },
            {
                id: 26, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:false,toDay:false
            },
            {
                id: 27, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:false,toDay:false
            },
            {
                id: 28, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:false,toDay:false
            },
            {
                id: 29, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:false,toDay:false
            },
            {
                id: 30, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:false,toDay:false
            },
            {
                id: 31, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:false,toDay:false
            },
            {
                id: 32, name: 'Александра', middleName: 'Константинович', lastName: 'Семенова',
                status: 79, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 1,freeze:false,toDay:false
            },
        ]
    },
    {
        //
        id: 2, totalClients: 6, toDay:0, name: 'Маленькие Самураи', coach: 'Кобялко Владимир Владимирович', timeTraining: '12.04.2021',
        clients: [
            {
                id: 7, name: 'Вера', middleName: 'Константинович', lastName: 'Григорьева',
                status: 11, health: false, birthday: false, birthdayDate: '06.10.89', call: true, burnAbonement: false,
                course: 2,freeze:true,toDay:false
            },
            {
                id: 8, name: 'Варвара', middleName: 'Константинович', lastName: 'Климова',
                status: 5, health: false, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: false,
                course: 2,freeze:false,toDay:false
            },
            {
                id: 9, name: 'Вера', middleName: 'Константинович', lastName: 'Григорьева',
                status: 3, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: false,
                course: 2,freeze:false,toDay:false
            },
            {
                id: 10, name: 'Виктория', middleName: 'Константинович', lastName: 'Латвинова',
                status: 3, health: false, birthday: true,birthdayDate: '06.10.89', call: true, burnAbonement: false,
                course: 2,freeze:false,toDay:false
            },
            {
                id: 11, name: 'Алксандра', middleName: 'Константинович', lastName: 'Кононова',
                status:18, health: false, birthday: false, birthdayDate: '06.10.89', call: true, burnAbonement: false,
                course: 2,freeze:true,toDay:false
            },
            {
                id: 12, name: 'Филлип', middleName: 'Константинович', lastName: 'Зотов',
                status: 0, health: true, birthday: true,birthdayDate: '06.10.89', call: false, burnAbonement: false,
                course: 2,freeze:false,toDay:false
            },
        ]
    },
    {
        id: 3, totalClients: 6, toDay:0, name: 'Самбо/Дзюдо', coach: 'Бураков Анатолий Петрович', timeTraining: '12.04.2021',
        clients: [
            {
                id: 13, name: 'Игорь', middleName: 'Константинович', lastName: 'Дубровин',
                status: 15, health: false, birthday: true,birthdayDate: '06.10.89', call: true, burnAbonement: false,
                course: 3,freeze:false,toDay:false
            },
            {
                id: 14, name: 'Константин', middleName: 'Константинович', lastName: 'Волков',
                status: 20, health: true, birthday: true,birthdayDate: '06.10.89', call: false, burnAbonement:false,
                course: 3,freeze:false,toDay:false
            },
            {
                id: 15, name: 'Владимир', middleName: 'Константинович', lastName: 'Панкратов',
                status: 12, health: false, birthday: true,birthdayDate: '06.10.89', call: true, burnAbonement: true,
                course: 3,freeze:false,toDay:false
            },
            {
                id: 16, name: 'Ева', middleName: 'Константинович', lastName: 'Щербакова',
                status: 2, health: false, birthday: false, birthdayDate: '06.10.89', call: true, burnAbonement: false,
                course: 2,freeze:false,toDay:false
            },
            {
                id: 17, name: 'Екатерина', middleName: 'Константинович', lastName: 'Фадеева',
                status: 10, health: false, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: false,
                course: 3,freeze:false,toDay:false
            },
            {
                id: 18, name: 'Таисия', middleName: 'Константинович', lastName: 'Александрова',
                status: 14, health: false, birthday: false, birthdayDate: '06.10.89', call: true, burnAbonement: false,
                course: 1,freeze:true,toDay:false
            },
        ]
    },
    {
        id: 4, totalClients: 6, toDay:0, name: 'Маленькие воины', coach: 'Корицкая Диана Александровна', timeTraining: '12.04.2021',
        clients: [
            {
                id: 19, name: 'Арсений', middleName: 'Константинович', lastName: 'Горшков',
                status: 0, health: true, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: false,
                course: 4,freeze:false,toDay:false
            },
            {
                id: 20, name: 'Вера', middleName: 'Константинович', lastName: 'Самсонова',
                status: 1, health: false, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 4,freeze:false,toDay:false
            },
            {
                id: 21, name: 'Марк', middleName: 'Константинович', lastName: 'Новиков',
                status: 7, health: false, birthday: false, birthdayDate: '06.10.89', call: false, burnAbonement: false,
                course: 4,freeze:true,toDay:false
            },
            {
                id: 22, name: 'Богдан', middleName: 'Константинович', lastName: 'Федоров',
                status: 0, health: true, birthday: false, birthdayDate: '06.10.89', call: true, burnAbonement: false,
                course: 4,freeze:false,toDay:false
            },
            {
                id: 23, name: 'Владимир', middleName: 'Константинович', lastName: 'Андреев',
                status: 8, health: false, birthday: true,birthdayDate: '06.10.89', call: true, burnAbonement: false,
                course: 4,freeze:false,toDay:false
            },
            {
                id: 24, name: 'Владлен', middleName: 'Константинович', lastName: 'Шаткий',
                status: 9, health: false, birthday: true,birthdayDate: '06.10.89', call: false, burnAbonement: true,
                course: 4,freeze:false,toDay:false
            },
        ]
    }
];
// const dataSelectGroup = [
//     {id: 1, name: 'Бразильское Джиу-Джитсу'},
//     {id: 2, name: 'Маленькие Самураи'},
//     {id: 3, name: 'Самбо/Дзюдо'},
//     {id: 4, name: 'Маленькие воины'},
// ];
const dataSelectAllGroup = [
    {id: 1, name: 'дети 3-7 лет',course:[
            {id:1,name: 'Маленькие Самураи'},
            {id:2,name: 'Маленький Чемпион'},
            {id:3,name: 'Маленькие воины'},
        ]},
    {id: 2, name: 'подростки 8-15 лет',course:[
            {id:4,name: 'Тхэквондо'},
            {id:5,name: 'Бразильское Джиу-Джитсу'},
            {id:6,name: 'Самбо/Дзюдо'},
            {id:7,name: 'Бокс'},
            {id:8,name: 'Тайский бокс'},
        ]},
    {id: 3, name: 'Взрослые 16+ лет',course:[
            {id:9,name: 'Бокс'},
            {id:10,name: 'Тайский бокс'},
            {id:11,name: 'Грэпплинг'},
        ]},
];
const dataSelectChildGroup = [
    {id: 1, name: 'дети 3-7 лет',course:[
            {id:1,name: 'Маленькие Самураи'},
            {id:2,name: 'Маленький Чемпион'},
            {id:3,name: 'Маленькие воины'},
        ]},
    {id: 2, name: 'подростки 8-15 лет',course:[
            {id:4,name: 'Тхэквондо'},
            {id:5,name: 'Бразильское Джиу-Джитсу'},
            {id:6,name: 'Самбо/Дзюдо'},
            {id:7,name: 'Бокс'},
            {id:8,name: 'Тайский бокс'},
        ]},
];
const dataSelectAdultGroup = [
    {id: 3, name: 'Взрослые 16+ лет',course:[
            {id:9,name: 'Бокс'},
            {id:10,name: 'Тайский бокс'},
            {id:11,name: 'Грэпплинг'},
        ]},
];
// const timeGroup = [
//     {id: 1, name: '12:30'},
//     {id: 2, name: '14:00'},
//     {id: 3, name: '17:30'},
//     {id: 4, name: '18:00'},
// ];
const dataSelectCouch = [
    {id:1,name:'Плиев Станислав Робертович'},
    {id:2,name:'Кобялко Владимир Владимирович'},
    {id:3,name:'Бураков Анатолий Петрович'},
    {id:4,name:'Корицкая Диана Александровна'},
];

/* основные */
mock.onPost('/auth/login').reply(200, {user,accessToken: 'TOKEN_ACC',refreshToken:'TOKEN_REF'});
mock.onPost('/auth/register').reply(200, {success: 'Ok'});

mock.onPost('/auth/refresh').reply(200,{user,accessToken: 'TOKEN_ACC2',refreshToken:'TOKEN_REs2'});

/* для главной */

mock.onGet('/clients').reply(200, {data});
mock.onGet('/group_list').reply(200, {dataSelectAllGroup});
mock.onGet('/couch_list').reply(200, {dataSelectCouch});
mock.onPut('/couch_change').reply(200, {success:'ok'});
mock.onPatch(/\/check_clients\/\d+\/\d+/).reply(200);

/* для добавления взрослого клиента */

mock.onGet('/group_list_adult').reply(200, {dataSelectAdultGroup});

/* для добавления ребенка */

mock.onGet('/group_list_child').reply(200,{dataSelectChildGroup})


mock.resetHistory();

/**
 * response на логин token & refreshToken
 */

class Api {

    constructor(options = {}) {
        this.client = options.client || axios.create();
        this.token = '';
        this.refreshToken = '';

        this.refreshRequest = null;

        this.client.interceptors.request.use(
            config => {
                if (!this.token) {
                    return config;
                }
                const newConfig = {
                    ...config,
                };
                newConfig.headers.Authorization = `Bearer ${this.token}`;
                return newConfig;
            },
            e => Promise.reject(e)
        );

        this.client.interceptors.response.use(
            r => r,
            async error => {
                this.refreshToken = localStorage.getItem('refresh_token')
                if (
                    !this.token ||
                    error.response.status !== 401 ||
                    error.config.retry
                ) {
                    await Promise.reject(error);
                }

                if (!this.refreshRequest) {
                    this.refreshRequest = this.client.post("/auth/refresh", {
                        refreshToken: this.refreshToken,
                    });
                    console.log(this.refreshRequest)
                }
                const { data } = await this.refreshRequest;
                this.token = data.accessToken;
                localStorage.setItem('refresh_token',data.refreshToken)
                this.refreshToken = data.refreshToken;
                const newRequest = {
                    ...error.config,
                    retry: true,
                };

                return this.client(newRequest);
            }
        )
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
    async login({ email, password }) {
        const res = await this.client.post("/auth/login", {
            email,
            password
        }).then(r => r).catch(er => Promise.reject(er));
        console.log('вызван логин ')
        this.setToken(await res.data.accessToken);
        console.log('после логина получен токен', this.getToken());
        localStorage.setItem('refresh_token',await res.data.refreshToken)
        this.refreshToken = localStorage.getItem('refresh_token');
        return res.data
    }

    /**
     * Регистрация пользователя
     * Отправляет данные о пользователе из формы на сервер
     * Получает только статус операции
     * @param data
     * @returns {Promise<AxiosResponse<any>>}
     */
    async register(data={}) {
        return await this.client.post('/auth/register', data)
    }

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
        localStorage.removeItem('refresh_token')
    }

    /* главная страница */

    /**
     * Отметка\снятие отметки о присутствии клиента на занятии
     *
     * @param id
     * @param course
     */
    async checkClient(id,course) {
        return await this.client.patch(`/check_clients/${course}/${id}`);
    }

    /**
     * Временный запрос на получение фиктивных клиентов
     * @returns {Promise<AxiosResponse<any>>}
     */
    async getClientsTimeTable() {
        return await this.client.get("/clients").then((data) => data.data.data)
    }

    /**
     * получение списка групп для селекта на главной странице
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    async getGroupList() {
        return await this.client.get("/group_list").then((r) => r.data.dataSelectAllGroup)
    }

    /**
     * получение списка тренеров для селекта на главной странице
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    async getCouchList() {
        return await this.client.get("/couch_list").then((data) => data.data.dataSelectCouch)
    }

    /**
     * смена тренера у группы
     *
     * @returns {Promise<AxiosResponse<any>>}
     */
    async getChangeCouch(id,course) {
        return await this.client.put("/couch_change").then((data) => data.success)
    }

    /* для страницы добавления взрослого клиента */

    async getGroupForAdult() {
        return await this.client.get('/group_list_adult').then(r=>r.data.dataSelectAdultGroup)
    }

    /* для добавления ребенка */

    async getGroupForChild() {
        return await this.client.get('/group_list_child').then(r=>r.data.dataSelectChildGroup)
    }

    /* отмена операциии запроса, не тестил, может не работать */

    /**
     * Отмена операции запроса для axios
     * @returns {CancelTokenSource}
     */
    abortAxiosCalling(){
        return this.client.CancelToken.source();
    }

}

export default new Api();
