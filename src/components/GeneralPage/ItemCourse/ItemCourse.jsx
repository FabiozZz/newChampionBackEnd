import React, {useRef, useState} from 'react';
import classes from './item.module.css';
import {Option} from "./Option/Option";
/* временное решение */
import couchList from '../../../Api/jsonData/couchList.json'
import cn from "classnames";
import {AddClientModal} from "./AddClientModal/AddClientModal";
import {Modal} from "../../../utils/Modal/Modal";
import logo from './djiu.png';

const ItemCourse = () => {
    const [hide, setHide] = useState(true);
    const [modal,setModal] = useState(false);
    const refOption = useRef(null);
    const refAdd = useRef(null);
    const toggleBox = (e) => {
        if (e.target !== refOption.current && !refAdd.current.contains(e.target)) {
            setHide(!hide);
        }
    };
    const handleToggleModalWindow = () => {
        setModal(!modal);
    };
    return (
        <>
            {modal&&
                <Modal size={'lg'} toggle={handleToggleModalWindow}>
                    <AddClientModal name={'Бразильское Джиу-Джитсу'} />
                </Modal>
            }
        <div className={classes.wrapper} onClick={toggleBox}>
            {/*<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0)"><path d="M30.442 21.2152C30.3257 21.099 30.1644 21.0321 30.0001 21.0321C29.8351 21.0321 29.6744 21.099 29.5575 21.2152C29.4412 21.3315 29.375 21.4928 29.375 21.6572C29.375 21.8215 29.4412 21.9829 29.5575 22.0991C29.6744 22.2154 29.8351 22.2822 30.0001 22.2822C30.1644 22.2822 30.3257 22.2154 30.442 22.0991C30.5582 21.9829 30.6251 21.8215 30.6251 21.6572C30.6251 21.4928 30.5582 21.3315 30.442 21.2152Z" fill="#43BF41"/><path d="M31.886 14.7975L29.3543 11.1727C29.3541 11.1723 29.3538 11.1719 29.3535 11.1715C29.3534 11.1714 29.3533 11.1712 29.3532 11.1711C29.353 11.1708 29.3528 11.1706 29.3526 11.1703C29.3487 11.1649 29.3448 11.1594 29.3408 11.1541L27.1366 8.23312C26.0511 6.79468 24.3272 5.93587 22.5251 5.93587H22.2678V4.35231C22.2678 2.88168 21.0714 1.68518 19.6007 1.68518C18.13 1.68518 16.9336 2.88162 16.9336 4.35231V6.56099C16.9336 8.03162 18.13 9.22812 19.6007 9.22812C19.6404 9.22812 19.6798 9.22687 19.7192 9.22512C19.4222 9.91924 19.5335 10.7506 20.0637 11.3454L23.0493 14.6947C23.134 14.7898 23.1807 14.9123 23.1807 15.0396V18.9305V20.1807C23.1807 20.9253 23.617 21.5699 24.2473 21.8724V27.0388C23.5333 27.4857 23.0114 28.2124 22.8377 29.0646H18.0417C17.6964 29.0646 17.4165 29.3444 17.4165 29.6897C17.4165 30.0349 17.6964 30.3148 18.0417 30.3148H30.1332C30.4785 30.3148 30.7583 30.0349 30.7583 29.6897C30.7583 29.3444 30.4785 29.0646 30.1332 29.0646H29.8062C29.8268 28.9636 29.8377 28.859 29.8377 28.752V27.8144H29.9982C30.3435 27.8144 30.6233 27.5345 30.6233 27.1892V23.8762C30.6233 23.531 30.3435 23.2511 29.9982 23.2511C29.653 23.2511 29.3731 23.531 29.3731 23.8762V26.5642H25.4975V22.0029C26.3191 21.8039 26.9313 21.0626 26.9313 20.1806V18.9304V18.6032L29.3732 17.1107V19.0942C29.3732 19.4394 29.653 19.7193 29.9983 19.7193C30.3435 19.7193 30.6234 19.4394 30.6234 19.0942V16.5C30.6234 16.4507 30.6171 16.4029 30.6063 16.3569L31.6995 15.6887C31.8467 15.5988 31.9501 15.4521 31.9854 15.2834C32.0207 15.1146 31.9847 14.9388 31.886 14.7975ZM19.6008 7.97787C18.8195 7.97787 18.1839 7.34224 18.1839 6.56093V4.35231C18.1839 3.57099 18.8195 2.93537 19.6008 2.93537C20.3822 2.93537 21.0178 3.57099 21.0178 4.35231V6.56099C21.0178 7.34224 20.3822 7.97787 19.6008 7.97787ZM25.9004 27.8144H28.5875V28.752C28.5875 28.9243 28.4473 29.0646 28.275 29.0646H24.1322C24.3902 28.3369 25.0854 27.8144 25.9004 27.8144ZM25.6812 20.1807C25.6812 20.5254 25.4008 20.8058 25.0561 20.8058C24.7114 20.8058 24.431 20.5254 24.431 20.1807V19.5556H25.6812V20.1807H25.6812ZM25.6813 18.3053H24.4311V15.0396C24.4311 14.6051 24.2719 14.1871 23.9828 13.8627L20.997 10.5134C20.7334 10.2177 20.7457 9.76599 21.0252 9.48518C21.1755 9.33406 21.3753 9.25543 21.5887 9.26468C21.8017 9.27368 21.9945 9.36849 22.1316 9.53174L24.9792 12.9226C25.4319 13.4616 25.6813 14.1462 25.6813 14.8501V18.3053ZM26.2702 12.5747C26.1696 12.4161 26.0583 12.2636 25.9365 12.1186L23.0889 8.72768C22.7681 8.34574 22.3145 8.09856 21.8239 8.03224C21.9931 7.77737 22.1195 7.49193 22.1932 7.18606H22.5252C23.9373 7.18606 25.2881 7.85906 26.1387 8.98618L27.9535 11.3911L26.2702 12.5747ZM26.9314 17.1381V14.8502C26.9314 14.4736 26.881 14.1011 26.7838 13.7419L28.6885 12.4026L30.4807 14.9686L26.9314 17.1381Z" fill="#43BF41"/><path d="M15.0045 29.2478C14.8883 29.1315 14.7269 29.0646 14.5626 29.0646C14.3982 29.0646 14.2369 29.1315 14.1206 29.2478C14.0044 29.364 13.9375 29.5253 13.9375 29.6897C13.9375 29.8541 14.0044 30.0154 14.1206 30.1316C14.2369 30.2479 14.3982 30.3148 14.5626 30.3148C14.7269 30.3148 14.8883 30.2479 15.0045 30.1316C15.1208 30.0154 15.1876 29.8541 15.1876 29.6897C15.1876 29.5253 15.1208 29.364 15.0045 29.2478Z" fill="#E50E0F"/><path d="M12.3978 1.68518C10.9271 1.68518 9.73069 2.88162 9.73069 4.35231V5.93587H9.47344C7.67138 5.93587 5.94744 6.79462 4.86194 8.23312L2.65769 11.1541C2.65369 11.1594 2.64976 11.1648 2.64594 11.1703C2.64576 11.1706 2.64557 11.1708 2.64538 11.1711C2.64526 11.1712 2.64519 11.1714 2.64507 11.1715C2.64482 11.1719 2.64451 11.1722 2.64426 11.1727L0.112632 14.7975C0.0138823 14.9388 -0.0220552 15.1147 0.0132573 15.2834C0.0485698 15.4522 0.151945 15.5989 0.299132 15.6887L1.39238 16.357C1.38157 16.403 1.37526 16.4507 1.37526 16.5001V27.1893C1.37526 27.5346 1.65513 27.8144 2.00038 27.8144H2.16094V28.7521C2.16094 28.8591 2.17182 28.9636 2.19238 29.0646H1.09819C0.752945 29.0646 0.47307 29.3445 0.47307 29.6897C0.47307 30.035 0.752945 30.3149 1.09819 30.3149H12.1894C12.5347 30.3149 12.8146 30.035 12.8146 29.6897C12.8146 29.3445 12.5347 29.0646 12.1894 29.0646H9.16082C8.98713 28.2124 8.46526 27.4857 7.75119 27.0389V21.8724C8.38151 21.5699 8.81782 20.9254 8.81782 20.1807V18.9306V15.0397C8.81782 14.9124 8.86451 14.7898 8.94919 14.6948L11.9349 11.3454C12.4651 10.7506 12.5764 9.91918 12.2794 9.22518C12.3187 9.22693 12.3581 9.22818 12.3978 9.22818C13.8684 9.22818 15.0649 8.03174 15.0649 6.56106V4.35231C15.0649 2.88168 13.8685 1.68518 12.3978 1.68518ZM5.85988 8.98624C6.71044 7.85906 8.06138 7.18612 9.47344 7.18612H9.80538C9.87913 7.49199 10.0054 7.77743 10.1747 8.03231C9.68407 8.09868 9.23057 8.34581 8.90976 8.72781L6.06213 12.1186C5.94038 12.2636 5.82907 12.4162 5.72851 12.5748L4.04519 11.3911L5.85988 8.98624ZM6.31744 19.5556H7.56763V20.1807C7.56763 20.5254 7.28719 20.8058 6.94251 20.8058C6.59782 20.8058 6.31738 20.5254 6.31738 20.1807V19.5556H6.31744ZM1.51801 14.9686L3.31013 12.4026L5.21488 13.7419C5.11769 14.101 5.06726 14.4736 5.06726 14.8501V17.138L1.51801 14.9686ZM2.62538 17.1107L5.06719 18.6033V18.9305V20.1807C5.06719 21.0626 5.67938 21.8039 6.50107 22.003V26.5642H2.62538V17.1107ZM7.86644 29.0646H3.72363C3.55132 29.0646 3.41107 28.9244 3.41107 28.7521V27.8144H6.09819C6.91319 27.8144 7.60838 28.3369 7.86644 29.0646ZM11.0016 10.5134L8.01595 13.8627C7.72682 14.1871 7.56763 14.6051 7.56763 15.0396V18.3054H6.31744V14.8502C6.31744 14.1462 6.56682 13.4617 7.01951 12.9226L9.86713 9.53181C10.0042 9.36856 10.1971 9.27368 10.4101 9.26468C10.6229 9.25606 10.8231 9.33399 10.9735 9.48518C11.2529 9.76606 11.2652 10.2177 11.0016 10.5134ZM13.8147 6.56093C13.8147 7.34224 13.1791 7.97787 12.3978 7.97787C11.6164 7.97787 10.9808 7.34224 10.9808 6.56093V4.35231H10.9809C10.9809 3.57099 11.6165 2.93537 12.3978 2.93537C13.1791 2.93537 13.8147 3.57099 13.8147 4.35231V6.56093Z" fill="#E50E0F"/></g><defs><clipPath id="clip0"><rect width="32" height="32" fill="white"/></clipPath></defs></svg>*/}
            <img width={32} height={32} src={logo} alt={''}/>
            <div className={classes.info}>
                <span className={classes.time}>9:30 - 10:00</span>
                <h4 className={classes.name}>Бразильское Джиу-Джитсу</h4>
                <div ref={refOption} className={classes.option}>
                    <Option id={1} couch={`${couchList[0].last_name}  ${couchList[0].middle_name}`} couchList={couchList}/>
                </div>
            </div>
            <div className={classes.people}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M16.2577 14.9563C16.1743 14.956 16.0291 14.9666 15.6456 14.996C14.4436 15.0881 13.0506 15.1667 11.7869 15.1667C10.5761 15.1667 9.23039 15.0946 8.0447 15.0076C7.64712 14.9784 7.49613 14.968 7.41105 14.9686C6.27081 14.9773 5.38563 15.7141 5.17012 16.8338C5.15398 16.9177 5.13908 17.0479 5.10063 17.3985C5.06362 17.7359 5.05088 17.8585 5.04894 17.9525C5.02395 19.1619 5.94007 20.184 7.14501 20.291C7.23862 20.2993 7.36184 20.3 7.70135 20.3L15.999 20.3C16.3722 20.3 16.5082 20.2992 16.6085 20.2896C17.8679 20.1695 18.7939 19.0549 18.681 17.7948C18.672 17.6944 18.6479 17.5606 18.5794 17.1937C18.5174 16.8608 18.4938 16.7377 18.472 16.6569C18.1904 15.6136 17.3384 14.9592 16.2577 14.9563ZM15.5865 13.5964C15.907 13.5718 16.1142 13.5559 16.2615 13.5563C17.9735 13.5609 19.3775 14.6393 19.8236 16.2921C19.862 16.4342 19.8962 16.6178 19.9483 16.897L19.9637 16.9797C20.0213 17.2886 20.0597 17.494 20.0754 17.6699C20.257 19.697 18.7674 21.4901 16.7414 21.6833C16.5656 21.7 16.3567 21.7 16.0424 21.7L7.70135 21.7C7.68811 21.7 7.67507 21.7 7.66223 21.7C7.37589 21.7 7.18505 21.7 7.02117 21.6855C5.08279 21.5134 3.60904 19.8691 3.64924 17.9235C3.65264 17.7591 3.67346 17.5693 3.70471 17.2847C3.70611 17.2719 3.70753 17.259 3.70897 17.2458C3.71055 17.2315 3.71209 17.2174 3.71362 17.2035C3.74582 16.9096 3.76694 16.7169 3.79535 16.5692C4.13695 14.7944 5.59297 13.5825 7.40032 13.5686C7.5507 13.5675 7.76508 13.5832 8.09727 13.6077C8.11361 13.6089 8.13024 13.6101 8.14716 13.6113C9.31707 13.6972 10.6248 13.7667 11.7869 13.7667C12.9998 13.7667 14.3531 13.691 15.5386 13.6001L15.5865 13.5964Z" fill="#222628"/><path fillRule="evenodd" clipRule="evenodd" d="M7.30078 6.99999C7.30078 4.40425 9.40504 2.29999 12.0008 2.29999C14.5965 2.29999 16.7008 4.40425 16.7008 6.99999V7.57142C16.7008 9.85156 14.8524 11.7 12.5722 11.7H11.4294C9.1492 11.7 7.30078 9.85156 7.30078 7.57141V6.99999ZM12.0008 3.69999C10.1782 3.69999 8.70078 5.17745 8.70078 6.99999V7.57141C8.70078 9.07836 9.9224 10.3 11.4294 10.3H12.5722C14.0792 10.3 15.3008 9.07836 15.3008 7.57142V6.99999C15.3008 5.17745 13.8233 3.69999 12.0008 3.69999Z" fill="#222628"/></svg>
                <span className={classes.people_text}>Отмечено: <b>12</b> человек</span>
            </div>
            <div onClick={handleToggleModalWindow} className={classes.add_client} ref={refAdd}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="32" height="32" rx="16" fill="white"/><rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#2E5BFF" strokeOpacity="0.16"/><path fillRule="evenodd" clipRule="evenodd" d="M22.6992 16C22.6992 16.3866 22.3858 16.7 21.9992 16.7H9.99922C9.61262 16.7 9.29922 16.3866 9.29922 16C9.29922 15.6134 9.61262 15.3 9.99922 15.3L21.9992 15.3C22.3858 15.3 22.6992 15.6134 22.6992 16Z" fill="#43BF41"/><path fillRule="evenodd" clipRule="evenodd" d="M15.9992 9.29999C16.3858 9.29999 16.6992 9.61339 16.6992 9.99999V22C16.6992 22.3866 16.3858 22.7 15.9992 22.7C15.6126 22.7 15.2992 22.3866 15.2992 22V9.99999C15.2992 9.61339 15.6126 9.29999 15.9992 9.29999Z" fill="#43BF41"/></svg>
            </div>
            <div className={cn({[classes.client_wrapper]:!hide},{[classes.none]:hide})}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6016 2.82955V1.90909C17.6016 0.854727 16.7691 0 15.7422 0H2.46094C1.43403 0 0.601562 0.854727 0.601562 1.90909V2.82955C0.601562 2.92367 0.675904 3 0.767578 3H17.4355C17.5272 3 17.6016 2.92367 17.6016 2.82955Z" fill="#E0E0E0"/><path d="M0.75 3.92045V9.75C0.75 10.8044 1.58247 11.6591 2.60937 11.6591H15.8906C16.9175 11.6591 17.75 10.8044 17.75 9.75V3.92045C17.75 3.82633 17.6757 3.75 17.584 3.75H0.916016C0.824342 3.75 0.75 3.82633 0.75 3.92045Z" fill="#E0E0E0"/></svg>
                        </td>
                        <td>
                            0000000027625
                        </td>
                        <td>Константин Константинопольский</td>
                        <td className={classes.table_notif}>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3633 2.73922C13.6612 2.73922 11.0537 1.77609 9.03908 0.0337891L9 0L8.96092 0.0337891C6.94623 1.77609 4.33879 2.73922 1.63669 2.73922H0V6.96055C0 12.4425 3.28504 17.4271 8.42191 19.7397L9 20L9.57809 19.7397C14.715 17.4271 18 12.4425 18 6.96059V2.73922H16.3633ZM15 11.8026H10.9396V16H7.06036V11.8026H3V8.04922H7.06036V4H10.9396V8.04922H15V11.8026Z" fill="#E50E0F"/><path d="M10 9V5H8V9H4V11H8V15H10V11H14V9H10Z" fill="#E50E0F"/></svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99898 4.02336C8.00032 4.02336 7.67493 2.07473 8.69934 1.07856L9.57969 0.176607C9.80926 -0.0586278 10.188 -0.0590185 10.418 0.176333L11.3226 1.10188C12.3171 2.1045 11.9834 4.02336 9.99898 4.02336Z" fill="#43BF41"/><path d="M19.4141 17.4608H0.585938C0.262344 17.4608 0 17.6403 0 17.8617V19.599C0 19.8204 0.262344 19.9999 0.585938 19.9999H19.4141C19.7377 19.9999 20 19.8204 20 19.599V17.8617C20 17.6403 19.7377 17.4608 19.4141 17.4608Z" fill="#43BF41"/><path d="M1.6643 11.4606C1.83883 11.6325 2.18941 11.8765 2.44082 11.9096C2.7232 11.9482 3.14863 11.6448 3.33719 11.4591C3.41719 11.3791 4.15664 10.664 4.99996 10.664C5.84328 10.664 6.58277 11.3791 6.66426 11.4606C6.8134 11.6075 7.21633 11.914 7.49996 11.914C7.78359 11.914 8.18648 11.6075 8.33719 11.4591C8.41719 11.3791 9.15664 10.664 9.99996 10.664C10.8433 10.664 11.5828 11.3791 11.6643 11.4606C11.8134 11.6075 12.2163 11.914 12.5 11.914C12.7836 11.914 13.1865 11.6075 13.3372 11.4591C13.4172 11.3791 14.1566 10.664 15 10.664C15.8433 10.664 16.5828 11.3791 16.6643 11.4606C16.8452 11.6388 17.2383 11.914 17.5 11.914C17.7605 11.914 18.152 11.6415 18.3372 11.4591C18.3832 11.4131 18.6472 11.1574 19.0234 10.9482V9.92175C19.0234 8.95249 18.2348 8.16394 17.2656 8.16394H2.73438C1.76512 8.16394 0.976562 8.95249 0.976562 9.92175V10.9482C1.35297 11.1576 1.61746 11.4137 1.6643 11.4606Z" fill="#43BF41"/><path d="M11.8359 6.99206V5.31238C11.8359 4.98878 11.5736 4.72644 11.25 4.72644H8.75C8.42641 4.72644 8.16406 4.98878 8.16406 5.31238V6.99206H11.8359Z" fill="#43BF41"/><path d="M19.0235 16.2889V12.4184C18.9432 12.4873 18.8331 12.5752 18.7 12.6646C17.8668 13.2282 17.1395 13.2106 16.3513 12.6981C16.1497 12.5682 15.9557 12.4091 15.8357 12.2892C15.6866 12.1423 15.2837 11.8358 15 11.8358C14.7164 11.8358 14.3135 12.1423 14.1628 12.2907C14.0828 12.3707 13.3434 13.0858 12.5 13.0858C11.6567 13.0858 10.9172 12.3707 10.8357 12.2892C10.6866 12.1423 10.2837 11.8358 10 11.8358C9.71641 11.8358 9.31352 12.1423 9.16281 12.2907C9.08281 12.3707 8.34336 13.0858 7.50004 13.0858C6.65672 13.0858 5.91723 12.3707 5.83574 12.2892C5.6866 12.1423 5.28367 11.8358 5.00004 11.8358C4.71641 11.8358 4.31352 12.1423 4.16281 12.2907C4.04145 12.4121 3.84504 12.5725 3.6416 12.7029C2.84309 13.2191 2.11598 13.2188 1.29664 12.6623C1.16527 12.5737 1.05637 12.4868 0.976562 12.4183V16.289H19.0235V16.2889Z" fill="#43BF41"/></svg>
                        </td>
                        <td>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 5.00923 0 3.51384 0.643078 2.4C1.06437 1.67031 1.67031 1.06437 2.4 0.643078C3.51384 0 5.00923 0 8 0C10.9908 0 12.4862 0 13.6 0.643078C14.3297 1.06437 14.9356 1.67031 15.3569 2.4C16 3.51384 16 5.00923 16 8C16 10.9908 16 12.4862 15.3569 13.6C14.9356 14.3297 14.3297 14.9356 13.6 15.3569C12.4862 16 10.9908 16 8 16C5.00923 16 3.51384 16 2.4 15.3569C1.67031 14.9356 1.06437 14.3297 0.643078 13.6C0 12.4862 0 10.9908 0 8ZM10.396 5.60402C10.6147 5.82271 10.6147 6.17729 10.396 6.39598L8.79196 8L10.396 9.60402C10.6147 9.82271 10.6147 10.1773 10.396 10.396C10.1773 10.6147 9.82271 10.6147 9.60402 10.396L8 8.79196L6.39598 10.396C6.17729 10.6147 5.82271 10.6147 5.60402 10.396C5.38533 10.1773 5.38533 9.82271 5.60402 9.60402L7.20804 8L5.60402 6.39598C5.38533 6.17729 5.38533 5.82271 5.60402 5.60402C5.82271 5.38533 6.17729 5.38533 6.39598 5.60402L8 7.20804L9.60402 5.60402C9.82271 5.38533 10.1773 5.38533 10.396 5.60402Z" fill="#222628"/></svg>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6016 2.82955V1.90909C17.6016 0.854727 16.7691 0 15.7422 0H2.46094C1.43403 0 0.601562 0.854727 0.601562 1.90909V2.82955C0.601562 2.92367 0.675904 3 0.767578 3H17.4355C17.5272 3 17.6016 2.92367 17.6016 2.82955Z" fill="#E0E0E0"/><path d="M0.75 3.92045V9.75C0.75 10.8044 1.58247 11.6591 2.60937 11.6591H15.8906C16.9175 11.6591 17.75 10.8044 17.75 9.75V3.92045C17.75 3.82633 17.6757 3.75 17.584 3.75H0.916016C0.824342 3.75 0.75 3.82633 0.75 3.92045Z" fill="#E0E0E0"/></svg>
                        </td>
                        <td>
                            0000000027625
                        </td>
                        <td>Константин Константинопольский</td>
                        <td className={classes.table_notif}>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3633 2.73922C13.6612 2.73922 11.0537 1.77609 9.03908 0.0337891L9 0L8.96092 0.0337891C6.94623 1.77609 4.33879 2.73922 1.63669 2.73922H0V6.96055C0 12.4425 3.28504 17.4271 8.42191 19.7397L9 20L9.57809 19.7397C14.715 17.4271 18 12.4425 18 6.96059V2.73922H16.3633ZM15 11.8026H10.9396V16H7.06036V11.8026H3V8.04922H7.06036V4H10.9396V8.04922H15V11.8026Z" fill="#E50E0F"/><path d="M10 9V5H8V9H4V11H8V15H10V11H14V9H10Z" fill="#E50E0F"/></svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99898 4.02336C8.00032 4.02336 7.67493 2.07473 8.69934 1.07856L9.57969 0.176607C9.80926 -0.0586278 10.188 -0.0590185 10.418 0.176333L11.3226 1.10188C12.3171 2.1045 11.9834 4.02336 9.99898 4.02336Z" fill="#43BF41"/><path d="M19.4141 17.4608H0.585938C0.262344 17.4608 0 17.6403 0 17.8617V19.599C0 19.8204 0.262344 19.9999 0.585938 19.9999H19.4141C19.7377 19.9999 20 19.8204 20 19.599V17.8617C20 17.6403 19.7377 17.4608 19.4141 17.4608Z" fill="#43BF41"/><path d="M1.6643 11.4606C1.83883 11.6325 2.18941 11.8765 2.44082 11.9096C2.7232 11.9482 3.14863 11.6448 3.33719 11.4591C3.41719 11.3791 4.15664 10.664 4.99996 10.664C5.84328 10.664 6.58277 11.3791 6.66426 11.4606C6.8134 11.6075 7.21633 11.914 7.49996 11.914C7.78359 11.914 8.18648 11.6075 8.33719 11.4591C8.41719 11.3791 9.15664 10.664 9.99996 10.664C10.8433 10.664 11.5828 11.3791 11.6643 11.4606C11.8134 11.6075 12.2163 11.914 12.5 11.914C12.7836 11.914 13.1865 11.6075 13.3372 11.4591C13.4172 11.3791 14.1566 10.664 15 10.664C15.8433 10.664 16.5828 11.3791 16.6643 11.4606C16.8452 11.6388 17.2383 11.914 17.5 11.914C17.7605 11.914 18.152 11.6415 18.3372 11.4591C18.3832 11.4131 18.6472 11.1574 19.0234 10.9482V9.92175C19.0234 8.95249 18.2348 8.16394 17.2656 8.16394H2.73438C1.76512 8.16394 0.976562 8.95249 0.976562 9.92175V10.9482C1.35297 11.1576 1.61746 11.4137 1.6643 11.4606Z" fill="#43BF41"/><path d="M11.8359 6.99206V5.31238C11.8359 4.98878 11.5736 4.72644 11.25 4.72644H8.75C8.42641 4.72644 8.16406 4.98878 8.16406 5.31238V6.99206H11.8359Z" fill="#43BF41"/><path d="M19.0235 16.2889V12.4184C18.9432 12.4873 18.8331 12.5752 18.7 12.6646C17.8668 13.2282 17.1395 13.2106 16.3513 12.6981C16.1497 12.5682 15.9557 12.4091 15.8357 12.2892C15.6866 12.1423 15.2837 11.8358 15 11.8358C14.7164 11.8358 14.3135 12.1423 14.1628 12.2907C14.0828 12.3707 13.3434 13.0858 12.5 13.0858C11.6567 13.0858 10.9172 12.3707 10.8357 12.2892C10.6866 12.1423 10.2837 11.8358 10 11.8358C9.71641 11.8358 9.31352 12.1423 9.16281 12.2907C9.08281 12.3707 8.34336 13.0858 7.50004 13.0858C6.65672 13.0858 5.91723 12.3707 5.83574 12.2892C5.6866 12.1423 5.28367 11.8358 5.00004 11.8358C4.71641 11.8358 4.31352 12.1423 4.16281 12.2907C4.04145 12.4121 3.84504 12.5725 3.6416 12.7029C2.84309 13.2191 2.11598 13.2188 1.29664 12.6623C1.16527 12.5737 1.05637 12.4868 0.976562 12.4183V16.289H19.0235V16.2889Z" fill="#43BF41"/></svg>
                        </td>
                        <td>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 5.00923 0 3.51384 0.643078 2.4C1.06437 1.67031 1.67031 1.06437 2.4 0.643078C3.51384 0 5.00923 0 8 0C10.9908 0 12.4862 0 13.6 0.643078C14.3297 1.06437 14.9356 1.67031 15.3569 2.4C16 3.51384 16 5.00923 16 8C16 10.9908 16 12.4862 15.3569 13.6C14.9356 14.3297 14.3297 14.9356 13.6 15.3569C12.4862 16 10.9908 16 8 16C5.00923 16 3.51384 16 2.4 15.3569C1.67031 14.9356 1.06437 14.3297 0.643078 13.6C0 12.4862 0 10.9908 0 8ZM10.396 5.60402C10.6147 5.82271 10.6147 6.17729 10.396 6.39598L8.79196 8L10.396 9.60402C10.6147 9.82271 10.6147 10.1773 10.396 10.396C10.1773 10.6147 9.82271 10.6147 9.60402 10.396L8 8.79196L6.39598 10.396C6.17729 10.6147 5.82271 10.6147 5.60402 10.396C5.38533 10.1773 5.38533 9.82271 5.60402 9.60402L7.20804 8L5.60402 6.39598C5.38533 6.17729 5.38533 5.82271 5.60402 5.60402C5.82271 5.38533 6.17729 5.38533 6.39598 5.60402L8 7.20804L9.60402 5.60402C9.82271 5.38533 10.1773 5.38533 10.396 5.60402Z" fill="#222628"/></svg>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.6016 2.82955V1.90909C17.6016 0.854727 16.7691 0 15.7422 0H2.46094C1.43403 0 0.601562 0.854727 0.601562 1.90909V2.82955C0.601562 2.92367 0.675904 3 0.767578 3H17.4355C17.5272 3 17.6016 2.92367 17.6016 2.82955Z" fill="#E0E0E0"/><path d="M0.75 3.92045V9.75C0.75 10.8044 1.58247 11.6591 2.60937 11.6591H15.8906C16.9175 11.6591 17.75 10.8044 17.75 9.75V3.92045C17.75 3.82633 17.6757 3.75 17.584 3.75H0.916016C0.824342 3.75 0.75 3.82633 0.75 3.92045Z" fill="#E0E0E0"/></svg>
                        </td>
                        <td>
                            0000000027625
                        </td>
                        <td>Константин Константинопольский</td>
                        <td className={classes.table_notif}>
                            <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.3633 2.73922C13.6612 2.73922 11.0537 1.77609 9.03908 0.0337891L9 0L8.96092 0.0337891C6.94623 1.77609 4.33879 2.73922 1.63669 2.73922H0V6.96055C0 12.4425 3.28504 17.4271 8.42191 19.7397L9 20L9.57809 19.7397C14.715 17.4271 18 12.4425 18 6.96059V2.73922H16.3633ZM15 11.8026H10.9396V16H7.06036V11.8026H3V8.04922H7.06036V4H10.9396V8.04922H15V11.8026Z" fill="#E50E0F"/><path d="M10 9V5H8V9H4V11H8V15H10V11H14V9H10Z" fill="#E50E0F"/></svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.99898 4.02336C8.00032 4.02336 7.67493 2.07473 8.69934 1.07856L9.57969 0.176607C9.80926 -0.0586278 10.188 -0.0590185 10.418 0.176333L11.3226 1.10188C12.3171 2.1045 11.9834 4.02336 9.99898 4.02336Z" fill="#43BF41"/><path d="M19.4141 17.4608H0.585938C0.262344 17.4608 0 17.6403 0 17.8617V19.599C0 19.8204 0.262344 19.9999 0.585938 19.9999H19.4141C19.7377 19.9999 20 19.8204 20 19.599V17.8617C20 17.6403 19.7377 17.4608 19.4141 17.4608Z" fill="#43BF41"/><path d="M1.6643 11.4606C1.83883 11.6325 2.18941 11.8765 2.44082 11.9096C2.7232 11.9482 3.14863 11.6448 3.33719 11.4591C3.41719 11.3791 4.15664 10.664 4.99996 10.664C5.84328 10.664 6.58277 11.3791 6.66426 11.4606C6.8134 11.6075 7.21633 11.914 7.49996 11.914C7.78359 11.914 8.18648 11.6075 8.33719 11.4591C8.41719 11.3791 9.15664 10.664 9.99996 10.664C10.8433 10.664 11.5828 11.3791 11.6643 11.4606C11.8134 11.6075 12.2163 11.914 12.5 11.914C12.7836 11.914 13.1865 11.6075 13.3372 11.4591C13.4172 11.3791 14.1566 10.664 15 10.664C15.8433 10.664 16.5828 11.3791 16.6643 11.4606C16.8452 11.6388 17.2383 11.914 17.5 11.914C17.7605 11.914 18.152 11.6415 18.3372 11.4591C18.3832 11.4131 18.6472 11.1574 19.0234 10.9482V9.92175C19.0234 8.95249 18.2348 8.16394 17.2656 8.16394H2.73438C1.76512 8.16394 0.976562 8.95249 0.976562 9.92175V10.9482C1.35297 11.1576 1.61746 11.4137 1.6643 11.4606Z" fill="#43BF41"/><path d="M11.8359 6.99206V5.31238C11.8359 4.98878 11.5736 4.72644 11.25 4.72644H8.75C8.42641 4.72644 8.16406 4.98878 8.16406 5.31238V6.99206H11.8359Z" fill="#43BF41"/><path d="M19.0235 16.2889V12.4184C18.9432 12.4873 18.8331 12.5752 18.7 12.6646C17.8668 13.2282 17.1395 13.2106 16.3513 12.6981C16.1497 12.5682 15.9557 12.4091 15.8357 12.2892C15.6866 12.1423 15.2837 11.8358 15 11.8358C14.7164 11.8358 14.3135 12.1423 14.1628 12.2907C14.0828 12.3707 13.3434 13.0858 12.5 13.0858C11.6567 13.0858 10.9172 12.3707 10.8357 12.2892C10.6866 12.1423 10.2837 11.8358 10 11.8358C9.71641 11.8358 9.31352 12.1423 9.16281 12.2907C9.08281 12.3707 8.34336 13.0858 7.50004 13.0858C6.65672 13.0858 5.91723 12.3707 5.83574 12.2892C5.6866 12.1423 5.28367 11.8358 5.00004 11.8358C4.71641 11.8358 4.31352 12.1423 4.16281 12.2907C4.04145 12.4121 3.84504 12.5725 3.6416 12.7029C2.84309 13.2191 2.11598 13.2188 1.29664 12.6623C1.16527 12.5737 1.05637 12.4868 0.976562 12.4183V16.289H19.0235V16.2889Z" fill="#43BF41"/></svg>
                        </td>
                        <td>
                            <svg className={classes.add_client} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 8C0 5.00923 0 3.51384 0.643078 2.4C1.06437 1.67031 1.67031 1.06437 2.4 0.643078C3.51384 0 5.00923 0 8 0C10.9908 0 12.4862 0 13.6 0.643078C14.3297 1.06437 14.9356 1.67031 15.3569 2.4C16 3.51384 16 5.00923 16 8C16 10.9908 16 12.4862 15.3569 13.6C14.9356 14.3297 14.3297 14.9356 13.6 15.3569C12.4862 16 10.9908 16 8 16C5.00923 16 3.51384 16 2.4 15.3569C1.67031 14.9356 1.06437 14.3297 0.643078 13.6C0 12.4862 0 10.9908 0 8ZM10.396 5.60402C10.6147 5.82271 10.6147 6.17729 10.396 6.39598L8.79196 8L10.396 9.60402C10.6147 9.82271 10.6147 10.1773 10.396 10.396C10.1773 10.6147 9.82271 10.6147 9.60402 10.396L8 8.79196L6.39598 10.396C6.17729 10.6147 5.82271 10.6147 5.60402 10.396C5.38533 10.1773 5.38533 9.82271 5.60402 9.60402L7.20804 8L5.60402 6.39598C5.38533 6.17729 5.38533 5.82271 5.60402 5.60402C5.82271 5.38533 6.17729 5.38533 6.39598 5.60402L8 7.20804L9.60402 5.60402C9.82271 5.38533 10.1773 5.38533 10.396 5.60402Z" fill="#222628"/></svg>
                        </td>
                    </tr>

                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default ItemCourse;