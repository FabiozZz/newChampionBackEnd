import {notificationPopUp} from "./Error";

const ErrorsGroup = (data) => {
    const uniqueArray = data.filter((thing, index, self) =>
        index === self.findIndex((t) => (
            t.request.status === thing.request.status
        )));
    // const uniqueArray = [...data].filter((thing,index) => {
    //     return index === data.findIndex(obj => {
    //         return JSON.stringify(obj) === JSON.stringify(thing);
    //     });
    // });
    console.log(uniqueArray)
    return data.map(error => {
                if (error?.request?.status === 404) {
                    return notificationPopUp('error','Страница не найдена','Видимо произошла ошибка на сервере, или накосячил фронтендер страница '+error.request.responseURL + ' не найдена');
                }else if (error.request.status === 404) {
                    return notificationPopUp('error','Сбой на сервере','Сервер отказывается обрабатывать этот запрос');
                }else if (error.message === error) {
                    return notificationPopUp('error',error.message,'');
                }else{
                    return null;
                }
            })
};

export default ErrorsGroup;