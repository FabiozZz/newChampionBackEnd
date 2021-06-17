import React from 'react';
import PropTypes from "prop-types";
import classes from './cardUserStatus.module.css';
import {CustomTooltip} from "../../CustomTooltip/CustomTooltip";
import parentClass from '../cardUser.module.css';

/**
 * вспомогательный компонент для визуального отображения статуса клиента
 * @param cardStatusName имя статуса
 * @param cardFrom срок абонимента от ...
 * @param cardTo срок абонимента до ...
 * @param lessons количество доступных занятий
 * @param status числовое отображение статуса, количество купленных абониментов
 * @param style объект стилей
 * @param danger булевое значение, выгорает абонимент
 * @param freeze булевое значение, заморожен ли абонимент
 * @param classStatus строка, класс для оболлочки карточки
 * @returns {JSX.Element}
 * @constructor
 */
export const CardUserStatus = ({abonimentName,cardStatusName,cardFrom,cardTo,lessons,status, style,danger,freeze, classStatus=''}) => {

    let color = status > 0 && status <3 ? '#E0E0E0':
        status >= 3 && status <= 5 ? '#A45640' :
            status >= 6 && status <= 11? '#EEAD12' :
                status >= 12 && status <=23? '#A1234B' :
                    status >= 24 && status <=35 ? '#082567' :
                        status >= 36 ? 'diamond' : null;



    const renderCardStatus = color === 'diamond'?
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4665 3.77273V2.54545C23.4665 1.13964 22.3565 0 20.9873 0H3.27897C1.90976 0 0.799805 1.13964 0.799805 2.54545V3.77273C0.799805 3.89823 0.898927 4 1.02116 4H23.2451C23.3673 4 23.4665 3.89823 23.4665 3.77273Z" fill="url(#paint0_linear)"/><path d="M0.799805 5.6818V13.4545C0.799805 14.8603 1.90976 16 3.27897 16H20.9873C22.3565 16 23.4665 14.8603 23.4665 13.4545V5.6818C23.4665 5.5563 23.3673 5.45453 23.2451 5.45453H1.02116C0.898927 5.45453 0.799805 5.5563 0.799805 5.6818Z" fill="url(#paint1_linear)"/><defs><linearGradient id="paint0_linear" x1="0.799805" y1="0" x2="4.37394" y2="10.4994" gradientUnits="userSpaceOnUse"><stop stopColor="#AEAEAE"/><stop offset="0.505208" stopColor="#E0E0E0"/><stop offset="1" stopColor="#797979"/></linearGradient><linearGradient id="paint1_linear" x1="0.799805" y1="5.45453" x2="16.1537" y2="22.5628" gradientUnits="userSpaceOnUse"><stop stopColor="#AEAEAE"/><stop offset="0.505208" stopColor="#E0E0E0"/><stop offset="1" stopColor="#797979"/></linearGradient></defs>

        </svg>
        :
        <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4674 3.77273V2.54545C23.4674 1.13964 22.3575 0 20.9883 0H3.27995C1.91074 0 0.800781 1.13964 0.800781 2.54545V3.77273C0.800781 3.89823 0.899904 4 1.02214 4H23.2461C23.3683 4 23.4674 3.89823 23.4674 3.77273Z" fill={`${color}`}/><path d="M0.800781 5.6818V13.4545C0.800781 14.8603 1.91074 16 3.27995 16H20.9883C22.3575 16 23.4674 14.8603 23.4674 13.4545V5.6818C23.4674 5.5563 23.3683 5.45453 23.2461 5.45453H1.02214C0.899904 5.45453 0.800781 5.5563 0.800781 5.6818Z" fill={`${color}`}/>

        </svg>;

    return (
        <CustomTooltip placement={'top'} color={'dark'} title={()=>(
            <div className={parentClass.cardUser__tooltip_text_wrapper}>
                {freeze?
                    <p className={`${parentClass.cardUser__tooltip_text_wrapper__text_center} ${parentClass.cardUser__tooltip_text_wrapper__text_center__date}`}>ЗАМОРОЖЕН</p>:null}
                <p className={parentClass.cardUser__tooltip_text_wrapper__text_center}>{abonimentName} {cardStatusName}</p>
                <p className={parentClass.cardUser__tooltip_text_wrapper__text_center}>Срок действия: <span className={parentClass.cardUser__tooltip_text_wrapper__text_center__date}>{cardFrom}-{cardTo}</span></p>
                <p className={parentClass.cardUser__tooltip_text_wrapper__text_center}>Доступно: <span className={parentClass.cardUser__tooltip_text_wrapper__text_center__date}>{lessons}</span> занятий</p>
            </div>
        )}>
        <div style={{margin:"0 auto",...style}} className={`${classStatus} ${classes.statusWrapper}`}>

            {color && renderCardStatus }
            {
                danger ?
            <svg className={classes.danger} width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-outside-1" maskUnits="userSpaceOnUse" x="0" y="0" width="14" height="12" fill="black"><rect fill="white" width="14" height="12"/><path d="M11.4807 7.23734C11.2378 7.11234 10.9554 7.07859 10.6854 7.14234C10.5773 7.16776 10.4796 7.21068 10.3882 7.26234L10.0386 7.08234L10.4858 6.9265C10.7301 6.84149 10.8492 6.59898 10.7521 6.38522C10.6549 6.17147 10.3772 6.06604 10.1334 6.1523L9.00092 6.54731L8.47086 6.27439C8.49181 6.18563 8.50372 6.09438 8.50372 6.00021C8.50372 5.90604 8.49181 5.81478 8.47086 5.72603L9.00092 5.4531L10.1339 5.84812C10.192 5.86854 10.2515 5.87812 10.3101 5.87812C10.4992 5.87812 10.6782 5.77853 10.7525 5.61561C10.8502 5.40185 10.7311 5.15934 10.4863 5.07434L10.0391 4.9185L10.3892 4.73849C10.4801 4.79016 10.5782 4.83349 10.6859 4.85849C10.7754 4.87933 10.8659 4.88975 10.9559 4.88975C11.1383 4.88975 11.3188 4.84683 11.4812 4.76349C11.9755 4.50848 12.147 3.94346 11.8626 3.50385C11.7226 3.28676 11.495 3.13259 11.2216 3.06884C10.9521 3.00508 10.6692 3.03883 10.4268 3.16384C10.0772 3.34426 9.89339 3.67969 9.91387 4.01638L9.5786 4.18888L9.64955 3.77428C9.68861 3.54677 9.50906 3.33468 9.24856 3.30051C8.99091 3.26718 8.74613 3.42302 8.70708 3.65136L8.52229 4.73307L7.99129 5.00683C7.84222 4.88891 7.6684 4.79932 7.47599 4.74182V4.17805L8.43228 3.4951C8.63612 3.34968 8.66659 3.08717 8.50039 2.90883C8.33418 2.73091 8.03415 2.70424 7.83032 2.84924L7.47599 3.10259V2.74591C7.81317 2.59173 8.04653 2.28422 8.04653 1.92587C8.04653 1.41543 7.57696 1 6.99975 1C6.42255 1 5.95298 1.41543 5.95298 1.92587C5.95298 2.28422 6.18634 2.59173 6.52351 2.74591V3.10259L6.16919 2.84966C5.96584 2.70424 5.66533 2.73049 5.49912 2.90883C5.33291 3.08717 5.36339 3.34968 5.56722 3.49552L6.52351 4.17805V4.74182C6.33111 4.79932 6.15728 4.88891 6.00822 5.00558L5.47721 4.73224L5.29291 3.65053C5.25386 3.42218 5.00812 3.26593 4.75142 3.29968C4.49092 3.33343 4.31138 3.54594 4.35043 3.77345L4.42139 4.18805L4.08612 4.01554C4.10659 3.67928 3.92277 3.34343 3.5732 3.16301C3.33127 3.038 3.04839 3.00425 2.77836 3.068C2.50547 3.13217 2.27783 3.28635 2.13734 3.50344C1.85303 3.94304 2.02447 4.50806 2.51929 4.76307C2.68168 4.84641 2.8617 4.88933 3.04458 4.88933C3.13459 4.88933 3.22507 4.87891 3.31461 4.85808C3.42224 4.83266 3.51987 4.78974 3.61083 4.73766L3.96086 4.91766L3.51367 5.07392C3.26936 5.15892 3.1503 5.40143 3.24746 5.61519C3.32175 5.77853 3.50082 5.8777 3.68988 5.8777C3.74846 5.8777 3.80847 5.86812 3.86609 5.8477L4.99907 5.45269L5.52912 5.72561C5.50817 5.81437 5.49626 5.90562 5.49626 5.99979C5.49626 6.09396 5.50769 6.18522 5.52912 6.27397L4.99907 6.5469L3.86609 6.15271C3.62083 6.06646 3.34461 6.17188 3.24746 6.38564C3.14983 6.5994 3.26889 6.84191 3.51367 6.92691L3.96086 7.08275L3.6113 7.26276C3.52034 7.21109 3.42224 7.16776 3.31413 7.14276C3.04363 7.079 2.76122 7.11317 2.51881 7.23776C2.02447 7.49277 1.8535 8.05821 2.13782 8.4974C2.27783 8.71407 2.50547 8.86866 2.77836 8.93241C2.86789 8.95325 2.95838 8.96367 3.04839 8.96367C3.23079 8.96367 3.41128 8.92075 3.57368 8.83741C3.92324 8.65699 4.10707 8.32156 4.08659 7.98529L4.42186 7.81278L4.35091 8.2278C4.31185 8.45531 4.4914 8.6674 4.7519 8.70157C4.77571 8.70449 4.79952 8.70616 4.82286 8.70616C5.05479 8.70616 5.25814 8.55782 5.29338 8.35072L5.47817 7.26901L6.00917 6.99525C6.15824 7.11234 6.33206 7.20151 6.52447 7.25901V7.82278L5.56818 8.50573C5.36434 8.65115 5.33387 8.91366 5.50007 9.092C5.66676 9.27034 5.96679 9.29701 6.17014 9.15159L6.52351 8.89783V9.25451C6.18634 9.40868 5.95298 9.7162 5.95298 10.0741C5.95298 10.5846 6.42255 11 6.99975 11C7.57696 11 8.04653 10.5846 8.04653 10.0741C8.04653 9.7162 7.81317 9.40827 7.47599 9.25451V8.89783L7.83032 9.15076C7.9189 9.21368 8.0251 9.24451 8.1313 9.24451C8.26941 9.24451 8.40657 9.19242 8.50039 9.09117C8.66659 8.91283 8.63612 8.65032 8.43228 8.5049L7.47599 7.82237V7.25859C7.6684 7.20109 7.84222 7.1115 7.99129 6.99483L8.52229 7.26859L8.70708 8.35031C8.74232 8.5574 8.94567 8.70574 9.1776 8.70574C9.20094 8.70574 9.22475 8.70449 9.24856 8.70115C9.50859 8.66699 9.68813 8.45489 9.64955 8.22739L9.5786 7.81237L9.91387 7.98487C9.89339 8.32156 10.0772 8.65699 10.4268 8.83741C10.5892 8.92075 10.7692 8.96367 10.9521 8.96367C11.0421 8.96367 11.1326 8.95325 11.2221 8.93241C11.495 8.86866 11.7222 8.71407 11.8626 8.4974C12.146 8.05779 11.975 7.49235 11.4807 7.23734Z"/></mask><path d="M11.4807 7.23734C11.2378 7.11234 10.9554 7.07859 10.6854 7.14234C10.5773 7.16776 10.4796 7.21068 10.3882 7.26234L10.0386 7.08234L10.4858 6.9265C10.7301 6.84149 10.8492 6.59898 10.7521 6.38522C10.6549 6.17147 10.3772 6.06604 10.1334 6.1523L9.00092 6.54731L8.47086 6.27439C8.49181 6.18563 8.50372 6.09438 8.50372 6.00021C8.50372 5.90604 8.49181 5.81478 8.47086 5.72603L9.00092 5.4531L10.1339 5.84812C10.192 5.86854 10.2515 5.87812 10.3101 5.87812C10.4992 5.87812 10.6782 5.77853 10.7525 5.61561C10.8502 5.40185 10.7311 5.15934 10.4863 5.07434L10.0391 4.9185L10.3892 4.73849C10.4801 4.79016 10.5782 4.83349 10.6859 4.85849C10.7754 4.87933 10.8659 4.88975 10.9559 4.88975C11.1383 4.88975 11.3188 4.84683 11.4812 4.76349C11.9755 4.50848 12.147 3.94346 11.8626 3.50385C11.7226 3.28676 11.495 3.13259 11.2216 3.06884C10.9521 3.00508 10.6692 3.03883 10.4268 3.16384C10.0772 3.34426 9.89339 3.67969 9.91387 4.01638L9.5786 4.18888L9.64955 3.77428C9.68861 3.54677 9.50906 3.33468 9.24856 3.30051C8.99091 3.26718 8.74613 3.42302 8.70708 3.65136L8.52229 4.73307L7.99129 5.00683C7.84222 4.88891 7.6684 4.79932 7.47599 4.74182V4.17805L8.43228 3.4951C8.63612 3.34968 8.66659 3.08717 8.50039 2.90883C8.33418 2.73091 8.03415 2.70424 7.83032 2.84924L7.47599 3.10259V2.74591C7.81317 2.59173 8.04653 2.28422 8.04653 1.92587C8.04653 1.41543 7.57696 1 6.99975 1C6.42255 1 5.95298 1.41543 5.95298 1.92587C5.95298 2.28422 6.18634 2.59173 6.52351 2.74591V3.10259L6.16919 2.84966C5.96584 2.70424 5.66533 2.73049 5.49912 2.90883C5.33291 3.08717 5.36339 3.34968 5.56722 3.49552L6.52351 4.17805V4.74182C6.33111 4.79932 6.15728 4.88891 6.00822 5.00558L5.47721 4.73224L5.29291 3.65053C5.25386 3.42218 5.00812 3.26593 4.75142 3.29968C4.49092 3.33343 4.31138 3.54594 4.35043 3.77345L4.42139 4.18805L4.08612 4.01554C4.10659 3.67928 3.92277 3.34343 3.5732 3.16301C3.33127 3.038 3.04839 3.00425 2.77836 3.068C2.50547 3.13217 2.27783 3.28635 2.13734 3.50344C1.85303 3.94304 2.02447 4.50806 2.51929 4.76307C2.68168 4.84641 2.8617 4.88933 3.04458 4.88933C3.13459 4.88933 3.22507 4.87891 3.31461 4.85808C3.42224 4.83266 3.51987 4.78974 3.61083 4.73766L3.96086 4.91766L3.51367 5.07392C3.26936 5.15892 3.1503 5.40143 3.24746 5.61519C3.32175 5.77853 3.50082 5.8777 3.68988 5.8777C3.74846 5.8777 3.80847 5.86812 3.86609 5.8477L4.99907 5.45269L5.52912 5.72561C5.50817 5.81437 5.49626 5.90562 5.49626 5.99979C5.49626 6.09396 5.50769 6.18522 5.52912 6.27397L4.99907 6.5469L3.86609 6.15271C3.62083 6.06646 3.34461 6.17188 3.24746 6.38564C3.14983 6.5994 3.26889 6.84191 3.51367 6.92691L3.96086 7.08275L3.6113 7.26276C3.52034 7.21109 3.42224 7.16776 3.31413 7.14276C3.04363 7.079 2.76122 7.11317 2.51881 7.23776C2.02447 7.49277 1.8535 8.05821 2.13782 8.4974C2.27783 8.71407 2.50547 8.86866 2.77836 8.93241C2.86789 8.95325 2.95838 8.96367 3.04839 8.96367C3.23079 8.96367 3.41128 8.92075 3.57368 8.83741C3.92324 8.65699 4.10707 8.32156 4.08659 7.98529L4.42186 7.81278L4.35091 8.2278C4.31185 8.45531 4.4914 8.6674 4.7519 8.70157C4.77571 8.70449 4.79952 8.70616 4.82286 8.70616C5.05479 8.70616 5.25814 8.55782 5.29338 8.35072L5.47817 7.26901L6.00917 6.99525C6.15824 7.11234 6.33206 7.20151 6.52447 7.25901V7.82278L5.56818 8.50573C5.36434 8.65115 5.33387 8.91366 5.50007 9.092C5.66676 9.27034 5.96679 9.29701 6.17014 9.15159L6.52351 8.89783V9.25451C6.18634 9.40868 5.95298 9.7162 5.95298 10.0741C5.95298 10.5846 6.42255 11 6.99975 11C7.57696 11 8.04653 10.5846 8.04653 10.0741C8.04653 9.7162 7.81317 9.40827 7.47599 9.25451V8.89783L7.83032 9.15076C7.9189 9.21368 8.0251 9.24451 8.1313 9.24451C8.26941 9.24451 8.40657 9.19242 8.50039 9.09117C8.66659 8.91283 8.63612 8.65032 8.43228 8.5049L7.47599 7.82237V7.25859C7.6684 7.20109 7.84222 7.1115 7.99129 6.99483L8.52229 7.26859L8.70708 8.35031C8.74232 8.5574 8.94567 8.70574 9.1776 8.70574C9.20094 8.70574 9.22475 8.70449 9.24856 8.70115C9.50859 8.66699 9.68813 8.45489 9.64955 8.22739L9.5786 7.81237L9.91387 7.98487C9.89339 8.32156 10.0772 8.65699 10.4268 8.83741C10.5892 8.92075 10.7692 8.96367 10.9521 8.96367C11.0421 8.96367 11.1326 8.95325 11.2221 8.93241C11.495 8.86866 11.7222 8.71407 11.8626 8.4974C12.146 8.05779 11.975 7.49235 11.4807 7.23734Z" fill="#00C1D4"/><path d="M11.4807 7.23734C11.2378 7.11234 10.9554 7.07859 10.6854 7.14234C10.5773 7.16776 10.4796 7.21068 10.3882 7.26234L10.0386 7.08234L10.4858 6.9265C10.7301 6.84149 10.8492 6.59898 10.7521 6.38522C10.6549 6.17147 10.3772 6.06604 10.1334 6.1523L9.00092 6.54731L8.47086 6.27439C8.49181 6.18563 8.50372 6.09438 8.50372 6.00021C8.50372 5.90604 8.49181 5.81478 8.47086 5.72603L9.00092 5.4531L10.1339 5.84812C10.192 5.86854 10.2515 5.87812 10.3101 5.87812C10.4992 5.87812 10.6782 5.77853 10.7525 5.61561C10.8502 5.40185 10.7311 5.15934 10.4863 5.07434L10.0391 4.9185L10.3892 4.73849C10.4801 4.79016 10.5782 4.83349 10.6859 4.85849C10.7754 4.87933 10.8659 4.88975 10.9559 4.88975C11.1383 4.88975 11.3188 4.84683 11.4812 4.76349C11.9755 4.50848 12.147 3.94346 11.8626 3.50385C11.7226 3.28676 11.495 3.13259 11.2216 3.06884C10.9521 3.00508 10.6692 3.03883 10.4268 3.16384C10.0772 3.34426 9.89339 3.67969 9.91387 4.01638L9.5786 4.18888L9.64955 3.77428C9.68861 3.54677 9.50906 3.33468 9.24856 3.30051C8.99091 3.26718 8.74613 3.42302 8.70708 3.65136L8.52229 4.73307L7.99129 5.00683C7.84222 4.88891 7.6684 4.79932 7.47599 4.74182V4.17805L8.43228 3.4951C8.63612 3.34968 8.66659 3.08717 8.50039 2.90883C8.33418 2.73091 8.03415 2.70424 7.83032 2.84924L7.47599 3.10259V2.74591C7.81317 2.59173 8.04653 2.28422 8.04653 1.92587C8.04653 1.41543 7.57696 1 6.99975 1C6.42255 1 5.95298 1.41543 5.95298 1.92587C5.95298 2.28422 6.18634 2.59173 6.52351 2.74591V3.10259L6.16919 2.84966C5.96584 2.70424 5.66533 2.73049 5.49912 2.90883C5.33291 3.08717 5.36339 3.34968 5.56722 3.49552L6.52351 4.17805V4.74182C6.33111 4.79932 6.15728 4.88891 6.00822 5.00558L5.47721 4.73224L5.29291 3.65053C5.25386 3.42218 5.00812 3.26593 4.75142 3.29968C4.49092 3.33343 4.31138 3.54594 4.35043 3.77345L4.42139 4.18805L4.08612 4.01554C4.10659 3.67928 3.92277 3.34343 3.5732 3.16301C3.33127 3.038 3.04839 3.00425 2.77836 3.068C2.50547 3.13217 2.27783 3.28635 2.13734 3.50344C1.85303 3.94304 2.02447 4.50806 2.51929 4.76307C2.68168 4.84641 2.8617 4.88933 3.04458 4.88933C3.13459 4.88933 3.22507 4.87891 3.31461 4.85808C3.42224 4.83266 3.51987 4.78974 3.61083 4.73766L3.96086 4.91766L3.51367 5.07392C3.26936 5.15892 3.1503 5.40143 3.24746 5.61519C3.32175 5.77853 3.50082 5.8777 3.68988 5.8777C3.74846 5.8777 3.80847 5.86812 3.86609 5.8477L4.99907 5.45269L5.52912 5.72561C5.50817 5.81437 5.49626 5.90562 5.49626 5.99979C5.49626 6.09396 5.50769 6.18522 5.52912 6.27397L4.99907 6.5469L3.86609 6.15271C3.62083 6.06646 3.34461 6.17188 3.24746 6.38564C3.14983 6.5994 3.26889 6.84191 3.51367 6.92691L3.96086 7.08275L3.6113 7.26276C3.52034 7.21109 3.42224 7.16776 3.31413 7.14276C3.04363 7.079 2.76122 7.11317 2.51881 7.23776C2.02447 7.49277 1.8535 8.05821 2.13782 8.4974C2.27783 8.71407 2.50547 8.86866 2.77836 8.93241C2.86789 8.95325 2.95838 8.96367 3.04839 8.96367C3.23079 8.96367 3.41128 8.92075 3.57368 8.83741C3.92324 8.65699 4.10707 8.32156 4.08659 7.98529L4.42186 7.81278L4.35091 8.2278C4.31185 8.45531 4.4914 8.6674 4.7519 8.70157C4.77571 8.70449 4.79952 8.70616 4.82286 8.70616C5.05479 8.70616 5.25814 8.55782 5.29338 8.35072L5.47817 7.26901L6.00917 6.99525C6.15824 7.11234 6.33206 7.20151 6.52447 7.25901V7.82278L5.56818 8.50573C5.36434 8.65115 5.33387 8.91366 5.50007 9.092C5.66676 9.27034 5.96679 9.29701 6.17014 9.15159L6.52351 8.89783V9.25451C6.18634 9.40868 5.95298 9.7162 5.95298 10.0741C5.95298 10.5846 6.42255 11 6.99975 11C7.57696 11 8.04653 10.5846 8.04653 10.0741C8.04653 9.7162 7.81317 9.40827 7.47599 9.25451V8.89783L7.83032 9.15076C7.9189 9.21368 8.0251 9.24451 8.1313 9.24451C8.26941 9.24451 8.40657 9.19242 8.50039 9.09117C8.66659 8.91283 8.63612 8.65032 8.43228 8.5049L7.47599 7.82237V7.25859C7.6684 7.20109 7.84222 7.1115 7.99129 6.99483L8.52229 7.26859L8.70708 8.35031C8.74232 8.5574 8.94567 8.70574 9.1776 8.70574C9.20094 8.70574 9.22475 8.70449 9.24856 8.70115C9.50859 8.66699 9.68813 8.45489 9.64955 8.22739L9.5786 7.81237L9.91387 7.98487C9.89339 8.32156 10.0772 8.65699 10.4268 8.83741C10.5892 8.92075 10.7692 8.96367 10.9521 8.96367C11.0421 8.96367 11.1326 8.95325 11.2221 8.93241C11.495 8.86866 11.7222 8.71407 11.8626 8.4974C12.146 8.05779 11.975 7.49235 11.4807 7.23734Z" stroke="white" strokeWidth="2" mask="url(#path-1-outside-1)"/></svg>
                :
                    freeze?
            <svg className={classes.danger} width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.64998 1.18014L1.04851 12.4526C0.983546 12.5658 0.98385 12.705 1.04931 12.8179C1.11477 12.9308 1.23544 13.0002 1.36593 13H14.5689C14.6995 13.0005 14.8202 12.9308 14.8852 12.8175C14.9501 12.7042 14.9492 12.5647 14.8828 12.4523L8.2852 1.18014C8.21838 1.06841 8.09777 1 7.96759 1C7.8374 1 7.71679 1.06841 7.64998 1.18014ZM7.96662 12.2258C7.32526 12.2258 6.80534 11.7059 6.80534 11.0645C6.80534 10.4232 7.32526 9.90326 7.96662 9.90326C8.60797 9.90326 9.1279 10.4232 9.1279 11.0645C9.1279 11.7059 8.60797 12.2258 7.96662 12.2258ZM9.1279 4.48397V7.9678C9.1279 8.60916 8.60797 9.12908 7.96662 9.12908C7.32526 9.12908 6.80534 8.60916 6.80534 7.9678V4.48397C6.80534 3.84262 7.32526 3.3227 7.96662 3.3227C8.60797 3.3227 9.1279 3.84262 9.1279 4.48397Z" fill="#E50E0F"/><path fillRule="evenodd" clipRule="evenodd" d="M0.185594 11.9473L6.78706 0.674796L7.64998 1.18014L1.04851 12.4526C0.983546 12.5658 0.98385 12.705 1.04931 12.8179C1.11477 12.9308 1.23544 13.0002 1.36593 13H14.5689C14.6995 13.0005 14.8202 12.9308 14.8852 12.8175C14.9501 12.7042 14.9492 12.5647 14.8828 12.4523L8.2852 1.18014C8.21838 1.06841 8.09777 1 7.96759 1C7.8374 1 7.71679 1.06841 7.64998 1.18014L6.79171 0.666933C7.03907 0.253264 7.4856 0 7.96759 0C8.44957 0 8.8961 0.25326 9.14346 0.666933L9.14827 0.674981L15.7438 11.9437C15.7443 11.9444 15.7447 11.9452 15.7451 11.9459C15.9932 12.3676 15.9962 12.8901 15.7528 13.3147C15.5094 13.7393 15.0571 14.0008 14.5678 14C14.567 14 14.5661 14 14.5653 14L14.5689 13V14H14.5678L1.36733 14M1.36733 14C0.880105 14.0004 0.428688 13.7411 0.184245 13.3196C-0.0603459 12.8978 -0.0614825 12.3776 0.181266 11.9548L0.185594 11.9473M8.43918 3.42288C8.29482 3.35849 8.1349 3.3227 7.96662 3.3227C7.79906 3.3227 7.63979 3.35818 7.49592 3.42205C7.08909 3.60265 6.80534 4.01017 6.80534 4.48397V7.9678C6.80534 8.40173 7.04335 8.78007 7.39593 8.9794C7.56447 9.07469 7.75919 9.12908 7.96662 9.12908C8.17405 9.12908 8.36877 9.07469 8.53731 8.9794C8.88989 8.78007 9.1279 8.40173 9.1279 7.9678V4.48397C9.1279 4.0109 8.84502 3.60389 8.43918 3.42288ZM8.53731 10.0529C8.36877 9.95765 8.17405 9.90326 7.96662 9.90326C7.75919 9.90326 7.56447 9.95765 7.39593 10.0529C7.04335 10.2523 6.80534 10.6306 6.80534 11.0645C6.80534 11.4483 6.99148 11.7886 7.27839 12C7.471 12.1419 7.70901 12.2258 7.96662 12.2258C8.22423 12.2258 8.46224 12.1419 8.65484 12C8.94176 11.7886 9.1279 11.4483 9.1279 11.0645C9.1279 10.6306 8.88989 10.2523 8.53731 10.0529ZM7.80534 11.0645C7.80534 11.1536 7.87755 11.2258 7.96662 11.2258C8.05569 11.2258 8.1279 11.1536 8.1279 11.0645C8.1279 10.9755 8.05569 10.9033 7.96662 10.9033C7.87755 10.9033 7.80534 10.9755 7.80534 11.0645ZM8.1279 7.9678V4.48397C8.1279 4.3949 8.05569 4.3227 7.96662 4.3227C7.87755 4.3227 7.80534 4.3949 7.80534 4.48397V7.9678C7.80534 8.05687 7.87755 8.12908 7.96662 8.12908C8.05569 8.12908 8.1279 8.05687 8.1279 7.9678Z" fill="white"/></svg>
    :null
            }
        </div>
        </CustomTooltip>
    );
};
CardUserStatus.defaultProps = {
    status: 0,
    danger: false,
    freeze:false
}
CardUserStatus.propType = {
    status: PropTypes.number.isRequired,
    style: PropTypes.object,
    danger: PropTypes.oneOf([0||false, 1||true]),
    freeze: PropTypes.oneOf([0||false, 1||true]),
    classStatus: PropTypes.string
};