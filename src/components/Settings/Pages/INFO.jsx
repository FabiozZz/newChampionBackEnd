import React from 'react';

const Info = () => {
    return (
        <div className={'wrapper'}>
            <h1 className={'title'}>Раздел находится в разработке</h1>
            <p className={'text'}>На данный момент есть возможность</p>
            <ul className={'list'}>
                <li>Создать группу</li>
                <li>Создать возрастную категорию (из меню "группы")</li>
                <li>Создать и удалить тариф с ценами</li>
            </ul>
            <style jsx>{`
              .wrapper {
                grid-column: 1/13;
                background: white;
                margin: 0 -32px;
                display: grid;
                grid-template-columns: 1fr;
                grid-auto-rows: min-content;
                grid-gap: 16px 24px;
                padding: 32px 32px;
                box-shadow: var(--box-shadow);
              }
              .title {
                font-family: 'Montserrat',sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 48px;
                line-height: 52px;
                color: #2E384D;
              }
              .text{
                padding: 10px 0;
                font-family: 'Montserrat',sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 1.125px;
                text-transform: uppercase;
                color: #69707F;

              }
              .list{
                list-style-position: inside;
              }
              .list li{
                padding-bottom: 8px;
                font-family: 'Montserrat',sans-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 12px;
                line-height: 16px;
                letter-spacing: 1.125px;
                text-transform: uppercase;
                color: #69707F;
              }
              @media screen and (min-width: 1440px){
                .wrapper{
                  grid-column: 1/12;
                  padding: 32px 32px 32px 88px;
                  margin: 0 -32px 0 -88px;
                }
              }
            `}</style>
        </div>
    );
};

export default Info;