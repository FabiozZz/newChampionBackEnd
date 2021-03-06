import React, {useState} from 'react';
import classes from './searchBox.module.css';

/**
 * компонент для поиска в базе
 * потом появятся запросы к базе
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const SearchBox = ({simpleClass}) => {

    /**
     * локальный стейт для установки значений в <input/>
     */
    const [search, setSearch] = useState('');

    /**
     * тут будут асинхронные запросы к базе
      * @param target
     */
    const handleChangeSearch = ({target}) => {
        setSearch(target.value)
    };

    return (
        <div className={`${classes.searchBox}`}>
            <svg className={classes.img} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M4.41793 3.6411C4.18718 3.41016 3.8128 3.41016 3.58205 3.6411C2.7253 4.49785 2.30421 5.69135 2.42658 6.91579C2.45712 7.22082 2.71409 7.44819 3.01418 7.44819C3.0339 7.44819 3.05377 7.44719 3.07349 7.44522C3.39843 7.41272 3.63546 7.12285 3.60296 6.79813C3.51587 5.92797 3.81302 5.08188 4.41793 4.47694C4.64887 4.24622 4.64887 3.87182 4.41793 3.6411Z" fill="#BFC5D2"/><path d="M6.75863 0C3.03191 0 0 3.03191 0 6.75863C0 10.4853 3.03191 13.5173 6.75863 13.5173C10.4853 13.5173 13.5173 10.4853 13.5173 6.75863C13.5173 3.03191 10.4853 0 6.75863 0ZM6.75863 12.335C3.68375 12.335 1.18228 9.8335 1.18228 6.75863C1.18228 3.68375 3.68375 1.18228 6.75863 1.18228C9.83331 1.18228 12.335 3.68375 12.335 6.75863C12.335 9.8335 9.8335 12.335 6.75863 12.335Z" fill="#BFC5D2"/><path d="M15.8266 14.991L11.531 10.6954C11.3001 10.4645 10.9261 10.4645 10.6952 10.6954C10.4642 10.9262 10.4642 11.3005 10.6952 11.5313L14.9908 15.8269C15.1062 15.9423 15.2574 16.0001 15.4087 16.0001C15.56 16.0001 15.7112 15.9423 15.8266 15.8269C16.0575 15.5961 16.0575 15.2217 15.8266 14.991Z" fill="#BFC5D2"/></g><defs><clipPath id="clip0"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
            <input className={classes.input} placeholder={'Поиск'} type="text" value={search} onChange={handleChangeSearch}/>
        </div>
    );
};