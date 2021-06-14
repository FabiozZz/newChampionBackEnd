import React from 'react';
import {NavLink} from "react-router-dom";
import classes from './footer.module.css';

/**
 * статичный компонент, возвращает JSX разметку
 * может принимать в виде пропсов стандартные HTML аттрибуты
 * @returns {JSX.Element}
 * @constructor
 */
export const Footer = (props) => {
    return (
        <div className={'row'}>
            <div className={`col-12 ${classes.footer} ${props.className}`} {...props}>
                {/* кнопка для перехода на главную страницу */}

                <NavLink className={classes.home} to={'/'}>
                    <div className={classes.svg}/>
                </NavLink>

                {/* кнопка для перехода к отчетам*/}

                <NavLink className={classes.item} to={'/reports'}>
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.5452 0H1.88337C0.84488 0 0 0.841125 0 1.875V5H11.2893H13.058C13.1694 4.91134 13.92 5 14.0625 5L21.4286 3.33333V1.875C21.4286 0.841125 20.5837 0 19.5452 0Z" fill="#69707F"/><path d="M11.4615 12.6222L13.6023 10.491V7.4762C12.0552 7.76965 10.8818 9.12557 10.8818 10.7499C10.8818 11.4435 11.096 12.0882 11.4615 12.6222Z" fill="#69707F"/><path d="M14.2303 14.0834C15.8619 14.0834 17.2239 12.9152 17.5186 11.3751H14.4903L12.3496 13.5063C12.8861 13.8702 13.5336 14.0834 14.2303 14.0834Z" fill="#69707F"/><path d="M14.8574 7.4762V10.1249H17.518C17.2619 8.78732 16.201 7.73107 14.8574 7.4762Z" fill="#69707F"/><path d="M11.9017 4.77971C11.7904 4.86838 11.652 4.91667 11.5095 4.91667H0V18.125C0 19.1605 0.843206 20 1.88337 20H19.5452C20.5854 20 21.4286 19.1605 21.4286 18.125V3.25H13.8224L11.9017 4.77971ZM3.76674 16.7917C3.76674 17.1368 3.48566 17.4167 3.13895 17.4167C2.79224 17.4167 2.51116 17.1368 2.51116 16.7917V11.7917C2.51116 11.4465 2.79224 11.1667 3.13895 11.1667C3.48566 11.1667 3.76674 11.4465 3.76674 11.7917V16.7917ZM6.2779 16.7917C6.2779 17.1368 5.99682 17.4167 5.65011 17.4167C5.30341 17.4167 5.02232 17.1368 5.02232 16.7917V10.5417C5.02232 10.1965 5.30341 9.91667 5.65011 9.91667C5.99682 9.91667 6.2779 10.1965 6.2779 10.5417V16.7917ZM6.48717 7.41667H3.13895C2.79224 7.41667 2.51116 7.13684 2.51116 6.79167C2.51116 6.4465 2.79224 6.16667 3.13895 6.16667H6.48717C6.83388 6.16667 7.11496 6.4465 7.11496 6.79167C7.11496 7.13684 6.83388 7.41667 6.48717 7.41667ZM8.78907 16.7917C8.78907 17.1368 8.50798 17.4167 8.16127 17.4167C7.81457 17.4167 7.53348 17.1368 7.53348 16.7917V9.29167C7.53348 8.9465 7.81457 8.66667 8.16127 8.66667C8.50798 8.66667 8.78907 8.9465 8.78907 9.29167V16.7917ZM18.8337 10.75C18.8337 13.2773 16.7684 15.3333 14.2299 15.3333C11.6914 15.3333 9.62612 13.2773 9.62612 10.75C9.62612 8.22275 11.6914 6.16667 14.2299 6.16667C16.7684 6.16667 18.8337 8.22275 18.8337 10.75Z" fill="#69707F"/></svg>
                    <span>отчеты</span>
                </NavLink>

                {/* кнопка для перехода к списку сотрудников*/}

                <NavLink className={classes.item} to={'/staffs'}>
                    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.3328 9.86963C11.5474 9.86963 12.5318 8.90081 12.5318 7.70587C12.5318 6.51086 11.5475 5.54181 10.3328 5.54181C9.1182 5.54181 8.13379 6.51086 8.13379 7.70587C8.13379 8.90081 9.1182 9.86963 10.3328 9.86963Z" fill="#69707F"/><path d="M18.3936 0H12.1118L12.0188 7.48026e-06C11.6653 7.48026e-06 11.8463 0.00010231 11.5188 0.00010231H9.14681C9.29124 0.000108175 8.81933 0.00010231 9.14681 0.00010231L8.55381 5.89354e-05H2.32064C1.03884 5.89354e-05 0 1.02243 0 2.28366V17.7164C0 18.9776 1.03884 20 2.32064 20H18.3936C19.6754 20 20.7143 18.9776 20.7143 17.7164V2.28366C20.7143 1.02238 19.6754 0 18.3936 0ZM8.3818 0.775008H8.55381V0.927157C8.55381 1.24945 8.81933 1.51066 9.14681 1.51066H11.5187C11.8462 1.51066 12.1118 1.24945 12.1118 0.927157V0.775008H12.2837C12.6397 0.775008 12.9281 1.05889 12.9281 1.40905C12.9281 1.75921 12.6397 2.04309 12.2837 2.04309H8.3818C8.02588 2.04309 7.73744 1.75915 7.73744 1.40905C7.73744 1.05889 8.02588 0.775008 8.3818 0.775008ZM3.53082 4.98038H17.1835V12.4092H13.4018L13.5206 10.8898C13.5368 10.6847 13.4651 10.4823 13.323 10.3313C13.181 10.1803 12.9812 10.0946 12.7724 10.0946H7.89339C7.68433 10.0946 7.48478 10.1803 7.34266 10.3313C7.20061 10.4824 7.12898 10.6848 7.14504 10.8898L7.26382 12.4092H3.53089L3.53082 4.98038ZM17.0898 16.7323H3.8888C3.48856 16.7323 3.16397 16.4129 3.16397 16.0189C3.16397 15.625 3.4885 15.3056 3.8888 15.3056H17.0898C17.4899 15.3056 17.8147 15.6249 17.8147 16.0189C17.8146 16.4128 17.49 16.7323 17.0898 16.7323Z" fill="#69707F"/></svg>
                    <span>сотрудники</span>
                </NavLink>

                {/* кнопка для перехода к списку клиентов*/}

                <NavLink className={classes.item} to={'/clients'}>
                    <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.6472 15.596L16.2355 13.8592C15.9137 13.6952 15.7137 13.3658 15.7137 12.9992V11.7698C15.7955 11.668 15.8816 11.552 15.9705 11.424C16.413 10.7876 16.7676 10.0792 17.0255 9.31525C17.5294 9.07997 17.8565 8.5727 17.8565 7.99998V6.54544C17.8565 6.19525 17.728 5.85598 17.4994 5.59089V3.65672C17.5194 3.45672 17.598 2.26618 16.7523 1.284C16.0187 0.431999 14.8284 0 13.2138 0C11.5992 0 10.4088 0.431999 9.67526 1.28363C8.82957 2.26581 8.90814 3.45672 8.92814 3.65635V5.59053C8.69957 5.85562 8.571 6.19489 8.571 6.54507V7.99961C8.571 8.44216 8.7685 8.85488 9.10563 9.13015C9.43277 10.4491 10.1174 11.4429 10.3567 11.7618V12.9651C10.3567 13.3171 10.1681 13.64 9.8649 13.8087L6.6789 15.5781C5.6432 16.1534 5 17.2567 5 18.4581V19.9999H21.4282V18.5298C21.4279 17.2796 20.7454 16.1552 19.6472 15.596Z" fill="#69707F"/><path d="M6.42237 15.1L9.60838 13.3306C9.73945 13.2575 9.82124 13.1175 9.82124 12.9655V11.9422C9.50517 11.4942 8.94768 10.5924 8.62947 9.42951C8.24984 9.05424 8.03556 8.54333 8.03556 8.00006V6.54552C8.03556 6.13679 8.16127 5.73861 8.39269 5.40334V3.68226C8.38055 3.54298 8.36627 3.2208 8.42698 2.81135C7.9352 2.6368 7.38807 2.54553 6.78558 2.54553C3.0753 2.54553 2.85923 5.76552 2.85709 5.81825V7.48334C2.62566 7.74006 2.49995 8.03643 2.49995 8.33061V9.5866C2.49995 9.97896 2.67245 10.3448 2.96816 10.5921C3.26279 11.723 3.98742 12.5775 4.26956 12.8775V13.875C4.26956 14.1611 4.11671 14.4237 3.85135 14.5713L1.47533 16.0888C0.565346 16.5942 0 17.564 0 18.6193V20H4.4642V18.4589C4.4642 17.0579 5.21454 15.7709 6.42237 15.1Z" fill="#69707F"/></svg>
                    <span>клиенты</span>
                </NavLink>

            </div>

        </div>
    );
};