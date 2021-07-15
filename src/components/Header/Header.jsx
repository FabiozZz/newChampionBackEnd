import React from 'react';
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {log_out} from "../../Acnions/userActions";
import {useHistory} from "react-router";
import Api from "../../Api/Api";
import classes from './header.module.css';

/**
 * компонент шапки CRM
 * @returns {JSX.Element}
 * @constructor
 */
export const Header = () => {

    /**
     * константы из redux
     * @param isAuth авторизован ли менеджер
     * @param currentUser данные менеджера если он авторизован
     */
    const {currentUser,isAuth} = useSelector(state => state.user);

    const dispatch = useDispatch();

    const history = useHistory();

    /**
     * прослушивание события выхода из CRM
     */
    const handleExitCRM = () => {
        Api.logout();
        dispatch(log_out());
        history.push('/');
    };


    return (
        <div className={`row ${classes.header_wrapper}`}>
            <div className={`col-12 ${classes.header}`}>
                <div className={classes.header__logo}>
                    <NavLink to={'/'}>
                        <svg width="147" height="32" viewBox="0 0 147 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.8857 32C11.581 32 11.3067 31.8933 11.0629 31.68C10.8495 31.4362 10.7429 31.1619 10.7429 30.8571V21.0286L0.137143 1.46286C0.0457143 1.18857 0 1.02095 0 0.960001C0 0.716191 0.0914286 0.502858 0.274286 0.320002C0.487619 0.106667 0.731429 0 1.00571 0H6.72C7.32952 0 7.86286 0.32 8.32 0.960001L14.8571 12.7543L21.44 0.960001C21.8057 0.32 22.3391 0 23.04 0H28.7543C29.0286 0 29.2571 0.106667 29.44 0.320002C29.6229 0.502858 29.7143 0.716191 29.7143 0.960001C29.7143 1.11238 29.6838 1.28 29.6229 1.46286L19.0171 21.0286V30.8571C19.0171 31.1924 18.8952 31.4667 18.6514 31.68C18.4381 31.8933 18.1638 32 17.8286 32H11.8857Z" fill="#E50E0F"/><path d="M39.8181 14.9333C38.0897 14.9333 36.7208 14.5462 35.7115 13.7719C34.7021 12.9975 34.1974 11.8914 34.1974 10.4533C34.1974 10.1353 34.232 9.75506 34.3011 9.31259C34.467 8.31704 34.7297 7.08642 35.0892 5.62074C35.5455 3.78173 36.3821 2.38519 37.5989 1.43111C38.8157 0.477037 40.4058 0 42.3692 0C43.4478 0 44.4226 0.165926 45.2937 0.497777C46.1786 0.829629 46.8769 1.30667 47.3885 1.92889C47.9001 2.55111 48.1559 3.29086 48.1559 4.14815C48.1559 4.45235 48.1282 4.7358 48.0729 4.99852C48.0453 5.12296 47.9831 5.22667 47.8863 5.30963C47.8033 5.39259 47.6996 5.43407 47.5752 5.43407H44.7544C44.5608 5.43407 44.4157 5.39951 44.3189 5.33037C44.2359 5.24741 44.1875 5.10222 44.1737 4.89481C44.1875 4.21728 44.0147 3.73333 43.6552 3.44296C43.2957 3.13876 42.7702 2.98667 42.0789 2.98667C40.4196 2.98667 39.3687 3.89926 38.9263 5.72444C38.6359 6.85827 38.387 8.01975 38.1796 9.20889C38.1243 9.49926 38.0966 9.78963 38.0966 10.08C38.0966 11.3244 38.7603 11.9467 40.0878 11.9467C40.7653 11.9467 41.3529 11.8015 41.8507 11.5111C42.3485 11.2069 42.7564 10.716 43.0744 10.0385C43.1712 9.83111 43.2749 9.69284 43.3855 9.6237C43.4961 9.54074 43.6482 9.49926 43.8418 9.49926H46.6626C46.787 9.49926 46.8838 9.54074 46.9529 9.6237C47.0082 9.67901 47.0359 9.74815 47.0359 9.83111C47.0359 9.85876 47.029 9.89333 47.0152 9.93481C46.628 11.4973 45.8122 12.721 44.5678 13.6059C43.3233 14.4909 41.7401 14.9333 39.8181 14.9333Z" fill="black"/><path d="M48.6572 14.7259C48.5051 14.7259 48.3876 14.6775 48.3046 14.5807C48.2355 14.4839 48.2148 14.3595 48.2424 14.2074L51.1046 0.725927C51.1323 0.573827 51.2084 0.449382 51.3328 0.352593C51.4572 0.255802 51.5886 0.207407 51.7269 0.207407H54.4024C54.5545 0.207407 54.6721 0.255802 54.755 0.352593C54.8242 0.421728 54.8587 0.511605 54.8587 0.622223C54.8587 0.649876 54.8518 0.684445 54.838 0.725927L53.7802 5.72444H58.8824L59.9402 0.725927C59.9679 0.573827 60.0439 0.449382 60.1683 0.352593C60.2928 0.255802 60.4242 0.207407 60.5624 0.207407H63.238C63.3901 0.207407 63.5076 0.255802 63.5906 0.352593C63.6597 0.421728 63.6943 0.511605 63.6943 0.622223C63.6943 0.649876 63.6874 0.684445 63.6735 0.725927L60.7906 14.2074C60.7629 14.3595 60.6869 14.4839 60.5624 14.5807C60.4518 14.6775 60.3204 14.7259 60.1683 14.7259H57.4928C57.3407 14.7259 57.2232 14.6775 57.1402 14.5807C57.0711 14.4701 57.0503 14.3457 57.078 14.2074L58.1772 9.04296H53.075L51.9758 14.2074C51.9481 14.3595 51.8721 14.4839 51.7476 14.5807C51.6232 14.6775 51.4849 14.7259 51.3328 14.7259H48.6572Z" fill="black"/><path d="M62.8049 14.7259C62.6804 14.7259 62.5836 14.6914 62.5145 14.6222C62.4453 14.5393 62.4108 14.4425 62.4108 14.3319C62.4108 14.2627 62.4315 14.1867 62.473 14.1037L70.1678 0.788148C70.389 0.400988 70.7002 0.207407 71.1011 0.207407H74.2952C74.6962 0.207407 74.9244 0.400988 74.9797 0.788148L77.0123 14.1037C77.0399 14.2973 77.0053 14.4494 76.9085 14.56C76.8118 14.6706 76.6873 14.7259 76.5352 14.7259H74.0256C73.6661 14.7259 73.4587 14.56 73.4034 14.2281L73.0508 12.1748H67.513L66.2686 14.2904C66.0611 14.5807 65.8053 14.7259 65.5011 14.7259H62.8049ZM72.8434 9.18815L72.076 3.71259L68.9856 9.18815H72.8434Z" fill="black"/><path d="M79.0802 14.7259C78.9281 14.7259 78.8105 14.6775 78.7276 14.5807C78.6446 14.4839 78.617 14.3595 78.6446 14.2074L81.5068 0.725927C81.5345 0.573827 81.6105 0.449382 81.735 0.352593C81.8594 0.255802 81.9977 0.207407 82.1498 0.207407H84.3898C84.7216 0.207407 84.936 0.359506 85.0328 0.663704L87.2935 7.19704L92.3335 0.663704C92.4026 0.553086 92.4994 0.449382 92.6239 0.352593C92.7621 0.255802 92.9281 0.207407 93.1216 0.207407H95.3824C95.5345 0.207407 95.652 0.255802 95.735 0.352593C95.7903 0.435555 95.8179 0.518519 95.8179 0.601481C95.8179 0.642963 95.811 0.684445 95.7972 0.725927L92.935 14.2074C92.9073 14.3595 92.8313 14.4839 92.7068 14.5807C92.5824 14.6775 92.451 14.7259 92.3128 14.7259H89.8031C89.651 14.7259 89.5335 14.6775 89.4505 14.5807C89.3814 14.4701 89.3607 14.3457 89.3883 14.2074L91.0061 6.55407L87.8328 10.7644C87.6945 10.9165 87.5631 11.0341 87.4387 11.117C87.3142 11.2 87.169 11.2415 87.0031 11.2415H85.9246C85.6342 11.2415 85.4337 11.0825 85.3231 10.7644L83.8505 6.36741L82.1913 14.2074C82.1636 14.3595 82.0876 14.4839 81.9631 14.5807C81.8387 14.6775 81.7073 14.7259 81.5691 14.7259H79.0802Z" fill="black"/><path d="M96.2353 14.7259C96.0832 14.7259 95.9657 14.6775 95.8827 14.5807C95.8136 14.4701 95.7929 14.3457 95.8205 14.2074L98.6827 0.725927C98.7104 0.573827 98.7865 0.449382 98.9109 0.352593C99.0353 0.255802 99.1667 0.207407 99.305 0.207407H104.822C106.357 0.207407 107.587 0.525432 108.514 1.16148C109.454 1.79753 109.924 2.71704 109.924 3.92C109.924 4.26568 109.883 4.62519 109.8 4.99852C109.454 6.58864 108.756 7.76395 107.705 8.52444C106.668 9.28494 105.244 9.66518 103.432 9.66518H100.632L99.6783 14.2074C99.6507 14.3595 99.5746 14.4839 99.4502 14.5807C99.3257 14.6775 99.1944 14.7259 99.0561 14.7259H96.2353ZM103.578 6.80296C104.158 6.80296 104.663 6.64395 105.092 6.32593C105.534 6.0079 105.824 5.5516 105.963 4.95704C106.004 4.72198 106.025 4.51457 106.025 4.33481C106.025 3.93383 105.907 3.62963 105.672 3.42222C105.437 3.20099 105.036 3.09037 104.469 3.09037H101.981L101.192 6.80296H103.578Z" fill="black"/><path d="M110.272 14.7259C110.12 14.7259 110.002 14.6775 109.919 14.5807C109.836 14.4701 109.809 14.3457 109.836 14.2074L112.719 0.725927C112.747 0.573827 112.823 0.449382 112.947 0.352593C113.072 0.255802 113.203 0.207407 113.341 0.207407H116.141C116.294 0.207407 116.411 0.255802 116.494 0.352593C116.549 0.435555 116.577 0.518519 116.577 0.601481C116.577 0.642963 116.57 0.684445 116.556 0.725927L113.694 14.2074C113.666 14.3595 113.59 14.4839 113.466 14.5807C113.341 14.6775 113.21 14.7259 113.072 14.7259H110.272Z" fill="black"/><path d="M122.679 14.9333C121.034 14.9333 119.686 14.5462 118.635 13.7719C117.598 12.9837 117.079 11.8637 117.079 10.4119C117.079 10.1077 117.114 9.73432 117.183 9.29185C117.363 8.2963 117.619 7.10025 117.95 5.7037C118.891 1.90123 121.317 0 125.23 0C126.295 0 127.249 0.179753 128.093 0.53926C128.936 0.884938 129.6 1.41037 130.084 2.11556C130.568 2.80691 130.81 3.63654 130.81 4.60444C130.81 4.89481 130.775 5.26123 130.706 5.7037C130.499 6.93432 130.25 8.13037 129.959 9.29185C129.475 11.1862 128.639 12.6035 127.45 13.5437C126.261 14.4701 124.67 14.9333 122.679 14.9333ZM122.97 11.9467C123.744 11.9467 124.401 11.7185 124.94 11.2622C125.493 10.8059 125.887 10.1077 126.122 9.16741C126.44 7.86765 126.682 6.73383 126.848 5.76593C126.903 5.47556 126.931 5.17827 126.931 4.87407C126.931 3.6158 126.274 2.98667 124.961 2.98667C124.186 2.98667 123.523 3.21481 122.97 3.67111C122.43 4.12741 122.043 4.82568 121.808 5.76593C121.559 6.69235 121.31 7.82617 121.062 9.16741C121.006 9.44395 120.979 9.73432 120.979 10.0385C120.979 11.3106 121.642 11.9467 122.97 11.9467Z" fill="black"/><path d="M131.762 14.7259C131.61 14.7259 131.492 14.6775 131.409 14.5807C131.34 14.4701 131.319 14.3457 131.347 14.2074L134.209 0.725927C134.237 0.573827 134.313 0.449382 134.438 0.352593C134.562 0.255802 134.693 0.207407 134.832 0.207407H137.03C137.362 0.207407 137.569 0.338765 137.652 0.601481L141.033 8.62815L142.713 0.725927C142.741 0.573827 142.817 0.449382 142.941 0.352593C143.066 0.255802 143.197 0.207407 143.335 0.207407H145.824C145.976 0.207407 146.094 0.255802 146.177 0.352593C146.246 0.421728 146.28 0.511605 146.28 0.622223C146.28 0.649876 146.274 0.684445 146.26 0.725927L143.377 14.1867C143.349 14.3388 143.273 14.4701 143.149 14.5807C143.038 14.6775 142.907 14.7259 142.755 14.7259H140.556C140.362 14.7259 140.224 14.6914 140.141 14.6222C140.058 14.5393 139.989 14.4425 139.934 14.3319L136.512 6.59556L134.894 14.2074C134.866 14.3595 134.79 14.4839 134.666 14.5807C134.541 14.6775 134.403 14.7259 134.251 14.7259H131.762Z" fill="black"/><path d="M37.5041 32C36.4453 32 35.6394 31.7156 35.0863 31.1467C34.5411 30.5778 34.2487 29.7916 34.2092 28.7882C34.2013 28.5748 34.1974 28.2272 34.1974 27.7452C34.1974 27.2553 34.2013 26.8998 34.2092 26.6785C34.2487 25.683 34.545 24.9007 35.0981 24.3319C35.6512 23.7551 36.4532 23.4667 37.5041 23.4667C38.2073 23.4667 38.8038 23.5931 39.2937 23.8459C39.7836 24.0909 40.1549 24.4148 40.4078 24.8178C40.6606 25.2207 40.7989 25.6514 40.8226 26.1096V26.1333C40.8226 26.1966 40.7949 26.2519 40.7396 26.2993C40.6922 26.3388 40.6369 26.3585 40.5737 26.3585H39.9218C39.7638 26.3585 39.665 26.2677 39.6255 26.0859C39.4912 25.4933 39.2502 25.0785 38.9026 24.8415C38.5549 24.5966 38.0887 24.4741 37.5041 24.4741C36.145 24.4741 35.4418 25.2287 35.3944 26.7378C35.3865 26.9511 35.3826 27.279 35.3826 27.7215C35.3826 28.164 35.3865 28.4998 35.3944 28.7289C35.4418 30.238 36.145 30.9926 37.5041 30.9926C38.0887 30.9926 38.5549 30.8741 38.9026 30.637C39.2581 30.3921 39.4991 29.9733 39.6255 29.3807C39.6492 29.278 39.6848 29.2069 39.7322 29.1674C39.7796 29.1279 39.8428 29.1082 39.9218 29.1082H40.5737C40.6448 29.1082 40.7041 29.1319 40.7515 29.1793C40.8068 29.2188 40.8305 29.2741 40.8226 29.3452C40.7989 29.8114 40.6606 30.2459 40.4078 30.6489C40.1549 31.0519 39.7836 31.3798 39.2937 31.6326C38.8038 31.8775 38.2073 32 37.5041 32Z" fill="black"/><path d="M46.5946 31.8815C46.5156 31.8815 46.4484 31.8578 46.3931 31.8104C46.3457 31.7551 46.322 31.6879 46.322 31.6089V23.8696C46.322 23.7827 46.3457 23.7156 46.3931 23.6682C46.4484 23.6128 46.5156 23.5852 46.5946 23.5852H49.4865C50.3951 23.5852 51.1062 23.7985 51.6198 24.2252C52.1334 24.6519 52.3902 25.2682 52.3902 26.0741C52.3902 26.6746 52.24 27.1684 51.9398 27.5556C51.6474 27.9427 51.2326 28.2114 50.6954 28.3615L52.5205 31.5141C52.5442 31.5615 52.5561 31.6049 52.5561 31.6445C52.5561 31.7077 52.5284 31.763 52.4731 31.8104C52.4257 31.8578 52.3704 31.8815 52.3072 31.8815H51.7383C51.6198 31.8815 51.525 31.8538 51.4539 31.7985C51.3907 31.7432 51.3314 31.6642 51.2761 31.5615L49.5576 28.5511H47.4835V31.6089C47.4835 31.6879 47.4558 31.7551 47.4005 31.8104C47.3452 31.8578 47.2781 31.8815 47.1991 31.8815H46.5946ZM49.4391 27.5437C50.6163 27.5437 51.205 27.0499 51.205 26.0622C51.205 25.0746 50.6163 24.5807 49.4391 24.5807H47.4835V27.5437H49.4391Z" fill="black"/><path d="M58.2719 31.8815C58.1929 31.8815 58.1257 31.8578 58.0704 31.8104C58.023 31.7551 57.9993 31.6879 57.9993 31.6089V23.8696C57.9993 23.7827 58.023 23.7156 58.0704 23.6682C58.1257 23.6128 58.1929 23.5852 58.2719 23.5852H58.8645C58.9909 23.5852 59.0937 23.6484 59.1727 23.7748L61.6734 28.563L64.1978 23.7748C64.2136 23.7274 64.2453 23.684 64.2927 23.6445C64.348 23.6049 64.4151 23.5852 64.4941 23.5852H65.0749C65.1618 23.5852 65.229 23.6128 65.2764 23.6682C65.3317 23.7156 65.3593 23.7827 65.3593 23.8696V31.6089C65.3593 31.6879 65.3317 31.7551 65.2764 31.8104C65.2211 31.8578 65.1539 31.8815 65.0749 31.8815H64.4941C64.4151 31.8815 64.348 31.8578 64.2927 31.8104C64.2453 31.7551 64.2216 31.6879 64.2216 31.6089V25.7778L62.2423 29.6415C62.1633 29.8074 62.0369 29.8904 61.863 29.8904H61.4956C61.3218 29.8904 61.1954 29.8074 61.1164 29.6415L59.1253 25.7778V31.6089C59.1253 31.6879 59.0976 31.7551 59.0423 31.8104C58.9949 31.8578 58.9317 31.8815 58.8527 31.8815H58.2719Z" fill="black"/><path d="M80.803 32C80.1472 32 79.5783 31.8973 79.0964 31.6919C78.6223 31.4864 78.2588 31.2178 78.006 30.8859C77.7532 30.5462 77.6188 30.1827 77.603 29.7956C77.603 29.7324 77.6267 29.677 77.6741 29.6296C77.7295 29.5743 77.7927 29.5467 77.8638 29.5467H78.4682C78.6183 29.5467 78.7211 29.6257 78.7764 29.7837C78.8475 30.1156 79.049 30.4 79.3808 30.637C79.7206 30.8741 80.1946 30.9926 80.803 30.9926C81.4588 30.9926 81.9527 30.878 82.2845 30.6489C82.6164 30.4119 82.7823 30.084 82.7823 29.6652C82.7823 29.3966 82.6993 29.1793 82.5334 29.0133C82.3754 28.8474 82.1383 28.7012 81.8223 28.5748C81.5062 28.4484 81.0322 28.2904 80.4001 28.1007C79.7838 27.9269 79.2939 27.7412 78.9304 27.5437C78.567 27.3462 78.2944 27.1012 78.1127 26.8089C77.9309 26.5166 77.8401 26.1491 77.8401 25.7067C77.8401 25.28 77.9546 24.8968 78.1838 24.557C78.4208 24.2173 78.7566 23.9526 79.1912 23.763C79.6257 23.5654 80.1433 23.4667 80.7438 23.4667C81.3601 23.4667 81.8895 23.5773 82.3319 23.7985C82.7744 24.0119 83.1102 24.2845 83.3393 24.6163C83.5685 24.9482 83.6909 25.28 83.7067 25.6119C83.7067 25.6751 83.683 25.7304 83.6356 25.7778C83.5961 25.8252 83.5369 25.8489 83.4578 25.8489H82.8297C82.6638 25.8489 82.5611 25.7738 82.5215 25.6237C82.4741 25.2919 82.2885 25.0193 81.9645 24.8059C81.6406 24.5847 81.2337 24.4741 80.7438 24.4741C80.2065 24.4741 79.7838 24.5768 79.4756 24.7822C79.1675 24.9877 79.0134 25.2919 79.0134 25.6948C79.0134 25.9635 79.0845 26.1847 79.2267 26.3585C79.3769 26.5324 79.602 26.6864 79.9023 26.8207C80.2025 26.9472 80.6411 27.0933 81.2178 27.2593C81.8895 27.441 82.4188 27.6306 82.806 27.8282C83.1932 28.0178 83.4815 28.2588 83.6712 28.5511C83.8608 28.8356 83.9556 29.199 83.9556 29.6415C83.9556 30.3763 83.6712 30.9531 83.1023 31.3719C82.5334 31.7906 81.767 32 80.803 32Z" fill="black"/><path d="M91.6081 31.8815C91.5291 31.8815 91.4619 31.8578 91.4066 31.8104C91.3592 31.7551 91.3355 31.6879 91.3355 31.6089V28.8119L88.4792 23.9763C88.4792 23.9605 88.4753 23.9368 88.4674 23.9052C88.4516 23.8736 88.4437 23.8459 88.4437 23.8222C88.4437 23.759 88.4674 23.7037 88.5148 23.6563C88.5622 23.6089 88.6175 23.5852 88.6807 23.5852H89.297C89.4313 23.5852 89.534 23.6524 89.6052 23.7867L91.9163 27.6267L94.2274 23.7867C94.3143 23.6524 94.421 23.5852 94.5474 23.5852H95.1518C95.2229 23.5852 95.2822 23.6089 95.3296 23.6563C95.377 23.7037 95.4007 23.759 95.4007 23.8222C95.4007 23.8617 95.3849 23.9131 95.3533 23.9763L92.5089 28.8119V31.6089C92.5089 31.6879 92.4812 31.7551 92.4259 31.8104C92.3706 31.8578 92.3034 31.8815 92.2244 31.8815H91.6081Z" fill="black"/><path d="M103.093 32C102.437 32 101.868 31.8973 101.386 31.6919C100.912 31.4864 100.549 31.2178 100.296 30.8859C100.043 30.5462 99.9086 30.1827 99.8928 29.7956C99.8928 29.7324 99.9165 29.677 99.964 29.6296C100.019 29.5743 100.082 29.5467 100.154 29.5467H100.758C100.908 29.5467 101.011 29.6257 101.066 29.7837C101.137 30.1156 101.339 30.4 101.671 30.637C102.01 30.8741 102.484 30.9926 103.093 30.9926C103.749 30.9926 104.242 30.878 104.574 30.6489C104.906 30.4119 105.072 30.084 105.072 29.6652C105.072 29.3966 104.989 29.1793 104.823 29.0133C104.665 28.8474 104.428 28.7012 104.112 28.5748C103.796 28.4484 103.322 28.2904 102.69 28.1007C102.074 27.9269 101.584 27.7412 101.22 27.5437C100.857 27.3462 100.584 27.1012 100.402 26.8089C100.221 26.5166 100.13 26.1491 100.13 25.7067C100.13 25.28 100.244 24.8968 100.474 24.557C100.711 24.2173 101.046 23.9526 101.481 23.763C101.916 23.5654 102.433 23.4667 103.034 23.4667C103.65 23.4667 104.179 23.5773 104.622 23.7985C105.064 24.0119 105.4 24.2845 105.629 24.6163C105.858 24.9482 105.981 25.28 105.997 25.6119C105.997 25.6751 105.973 25.7304 105.925 25.7778C105.886 25.8252 105.827 25.8489 105.748 25.8489H105.12C104.954 25.8489 104.851 25.7738 104.811 25.6237C104.764 25.2919 104.578 25.0193 104.254 24.8059C103.93 24.5847 103.523 24.4741 103.034 24.4741C102.496 24.4741 102.074 24.5768 101.765 24.7822C101.457 24.9877 101.303 25.2919 101.303 25.6948C101.303 25.9635 101.374 26.1847 101.517 26.3585C101.667 26.5324 101.892 26.6864 102.192 26.8207C102.492 26.9472 102.931 27.0933 103.508 27.2593C104.179 27.441 104.709 27.6306 105.096 27.8282C105.483 28.0178 105.771 28.2588 105.961 28.5511C106.151 28.8356 106.245 29.199 106.245 29.6415C106.245 30.3763 105.961 30.9531 105.392 31.3719C104.823 31.7906 104.057 32 103.093 32Z" fill="black"/><path d="M113.703 31.8815C113.624 31.8815 113.557 31.8578 113.502 31.8104C113.454 31.7551 113.431 31.6879 113.431 31.6089V24.64H111.155C111.076 24.64 111.009 24.6163 110.954 24.5689C110.906 24.5136 110.883 24.4464 110.883 24.3674V23.8696C110.883 23.7906 110.906 23.7235 110.954 23.6682C111.009 23.6128 111.076 23.5852 111.155 23.5852H116.868C116.955 23.5852 117.022 23.6128 117.069 23.6682C117.125 23.7156 117.152 23.7827 117.152 23.8696V24.3674C117.152 24.4464 117.125 24.5136 117.069 24.5689C117.014 24.6163 116.947 24.64 116.868 24.64H114.604V31.6089C114.604 31.6879 114.576 31.7551 114.521 31.8104C114.466 31.8578 114.399 31.8815 114.32 31.8815H113.703Z" fill="black"/><path d="M122.665 31.8815C122.585 31.8815 122.518 31.8578 122.463 31.8104C122.416 31.7551 122.392 31.6879 122.392 31.6089V23.8696C122.392 23.7827 122.416 23.7156 122.463 23.6682C122.518 23.6128 122.585 23.5852 122.665 23.5852H127.559C127.638 23.5852 127.702 23.6128 127.749 23.6682C127.804 23.7156 127.832 23.7827 127.832 23.8696V24.32C127.832 24.399 127.808 24.4662 127.761 24.5215C127.713 24.5689 127.646 24.5926 127.559 24.5926H123.53V27.1882H127.299C127.378 27.1882 127.441 27.2158 127.488 27.2711C127.544 27.3185 127.571 27.3857 127.571 27.4726V27.9111C127.571 27.9901 127.544 28.0573 127.488 28.1126C127.441 28.16 127.378 28.1837 127.299 28.1837H123.53V30.8741H127.654C127.741 30.8741 127.808 30.8978 127.856 30.9452C127.903 30.9926 127.927 31.0598 127.927 31.1467V31.6089C127.927 31.6879 127.899 31.7551 127.844 31.8104C127.796 31.8578 127.733 31.8815 127.654 31.8815H122.665Z" fill="black"/><path d="M133.763 31.8815C133.684 31.8815 133.617 31.8578 133.562 31.8104C133.514 31.7551 133.491 31.6879 133.491 31.6089V23.8696C133.491 23.7827 133.514 23.7156 133.562 23.6682C133.617 23.6128 133.684 23.5852 133.763 23.5852H134.356C134.482 23.5852 134.585 23.6484 134.664 23.7748L137.165 28.563L139.689 23.7748C139.705 23.7274 139.736 23.684 139.784 23.6445C139.839 23.6049 139.906 23.5852 139.985 23.5852H140.566C140.653 23.5852 140.72 23.6128 140.768 23.6682C140.823 23.7156 140.851 23.7827 140.851 23.8696V31.6089C140.851 31.6879 140.823 31.7551 140.768 31.8104C140.712 31.8578 140.645 31.8815 140.566 31.8815H139.985C139.906 31.8815 139.839 31.8578 139.784 31.8104C139.736 31.7551 139.713 31.6879 139.713 31.6089V25.7778L137.733 29.6415C137.654 29.8074 137.528 29.8904 137.354 29.8904H136.987C136.813 29.8904 136.687 29.8074 136.608 29.6415L134.616 25.7778V31.6089C134.616 31.6879 134.589 31.7551 134.533 31.8104C134.486 31.8578 134.423 31.8815 134.344 31.8815H133.763Z" fill="black"/></svg>
                    </NavLink>
                </div>
                {isAuth&&
                <div className={classes.header__logout} onClick={handleExitCRM}>
                    <span className={classes.header__name}>администратор</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9999 12.6669C13.6312 12.6669 13.3333 12.9656 13.3333 13.3335V16.0002C13.3333 16.3675 13.0346 16.6668 12.6665 16.6668H10.6666V6.66691C10.6666 6.09758 10.3039 5.58891 9.75861 5.39958L9.56122 5.33354H12.6665C13.0346 5.33354 13.3333 5.63286 13.3333 6.00029V8.00027C13.3333 8.36818 13.6312 8.66689 13.9999 8.66689C14.3685 8.66689 14.6665 8.36818 14.6665 8.00027V6.00029C14.6665 4.89764 13.7692 4.00031 12.6665 4.00031H5.49998C5.47459 4.00031 5.45335 4.01166 5.4287 4.01495C5.39659 4.01227 5.36595 4.00031 5.33336 4.00031C4.59802 4.00031 4 4.5982 4 5.33354V17.3334C4 17.9028 4.36267 18.4114 4.90795 18.6008L8.91999 19.9381C9.05598 19.9801 9.19123 20.0002 9.33332 20.0002C10.0687 20.0002 10.6666 19.4021 10.6666 18.6668V18.0002H12.6665C13.7692 18.0002 14.6665 17.1028 14.6665 16.0002V13.3335C14.6665 12.9656 14.3685 12.6669 13.9999 12.6669Z" fill="#8798AD"/><path d="M19.8045 10.1954L17.1378 7.52883C16.9472 7.33815 16.6605 7.28078 16.4112 7.38405C16.1626 7.48744 15.9998 7.73073 15.9998 8.00013V10.0001H13.3332C12.9652 10.0001 12.6665 10.2987 12.6665 10.6667C12.6665 11.0348 12.9652 11.3334 13.3332 11.3334H15.9998V13.3333C15.9998 13.6027 16.1626 13.846 16.4112 13.9494C16.6605 14.0527 16.9472 13.9953 17.1378 13.8048L19.8045 11.138C20.0651 10.8774 20.0651 10.456 19.8045 10.1954Z" fill="#8798AD"/></svg>
                </div>
                }

            </div>

        </div>
    );
};