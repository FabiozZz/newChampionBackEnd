import React from 'react';
import classes from './reports.module.css';
import HeaderNav from '../common/HeaderNav';
import { Redirect } from '../common/Redirect';
import { LinkItem } from '../Settings/LinkItem/LinkItem';

export const Reports = () => {
	return (
		<>
			<HeaderNav />
			<Redirect title={'Отчеты'} />
			<div className={classes.wrapper}>
				<LinkItem to={'/reports/proceeds'} className={classes.link}>
					<svg
						width="48"
						height="48"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M19.6002 0.816406H28.4032C31.3791 0.816398 33.7055 0.816391 35.5738 0.969039C37.4741 1.1243 39.0337 1.445 40.4418 2.16248C42.7656 3.34651 44.6549 5.23582 45.839 7.55962C46.5564 8.96776 46.8771 10.5273 47.0324 12.4276C47.185 14.2959 47.185 16.6224 47.185 19.5983V19.7345C47.185 22.7104 47.185 25.0369 47.0324 26.9052C46.8771 28.8055 46.5564 30.3651 45.839 31.7732C44.6549 34.097 42.7656 35.9863 40.4418 37.1703C39.0337 37.8878 37.4741 38.2085 35.5738 38.3638C33.7055 38.5164 31.3791 38.5164 28.4031 38.5164H19.6003C16.6243 38.5164 14.2979 38.5164 12.4295 38.3638C10.5293 38.2085 8.96971 37.8878 7.56158 37.1703C5.23778 35.9863 3.34847 34.097 2.16443 31.7732C1.44695 30.3651 1.12625 28.8055 0.970992 26.9052C0.818344 25.0369 0.818351 22.7105 0.81836 19.7346V19.5982C0.818351 16.6223 0.818344 14.2959 0.970992 12.4276C1.12625 10.5273 1.44695 8.96776 2.16443 7.55962C3.34847 5.23582 5.23778 3.34651 7.56158 2.16248C8.96971 1.445 10.5293 1.1243 12.4295 0.969039C14.2979 0.816391 16.6243 0.816398 19.6002 0.816406ZM12.6766 3.9923C10.9639 4.13223 9.84793 4.40191 8.93868 4.8652C7.18564 5.75842 5.76037 7.18369 4.86715 8.93673C4.40386 9.84597 4.13418 10.9619 3.99425 12.6746C3.85287 14.405 3.85169 16.6078 3.85169 19.6664C3.85169 22.7251 3.85287 24.9278 3.99425 26.6582C4.13418 28.3709 4.40386 29.4868 4.86715 30.3961C5.76037 32.1491 7.18564 33.5744 8.93868 34.4676C9.84793 34.9309 10.9639 35.2006 12.6766 35.3405C14.4069 35.4819 16.6097 35.4831 19.6684 35.4831H28.335C31.3937 35.4831 33.5964 35.4819 35.3268 35.3405C37.0395 35.2006 38.1555 34.9309 39.0647 34.4676C40.8177 33.5744 42.243 32.1491 43.1362 30.3961C43.5995 29.4868 43.8692 28.3709 44.0091 26.6582C44.1505 24.9278 44.1517 22.7251 44.1517 19.6664C44.1517 16.6078 44.1505 14.405 44.0091 12.6746C43.8692 10.9619 43.5995 9.84597 43.1362 8.93673C42.243 7.18369 40.8177 5.75842 39.0647 4.8652C38.1555 4.40191 37.0395 4.13223 35.3268 3.9923C33.5964 3.85092 31.3937 3.84974 28.335 3.84974H19.6684C16.6097 3.84974 14.4069 3.85092 12.6766 3.9923Z"
							fill="#43BF41"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M24.0018 35.4834C24.8395 35.4834 25.5185 36.1624 25.5185 37.0001V41.3657L33.201 44.2466C33.8876 44.5041 34.2917 45.2159 34.1608 45.9373C34.03 46.6588 33.4018 47.1834 32.6685 47.1834H15.3352C14.6019 47.1834 13.9737 46.6588 13.8428 45.9373C13.712 45.2159 14.1161 44.5041 14.8026 44.2466L22.4852 41.3657V37.0001C22.4852 36.1624 23.1642 35.4834 24.0018 35.4834Z"
							fill="#43BF41"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M19.6792 16.4276C20.2339 15.873 21.12 15.8328 21.7226 16.3349L27.1586 20.8649L31.5959 16.4276C32.1882 15.8353 33.1485 15.8353 33.7408 16.4276C34.3331 17.0199 34.3331 17.9802 33.7408 18.5725L28.3241 23.9892C27.7695 24.5439 26.8834 24.5841 26.2807 24.0819L20.8448 19.5519L16.4075 23.9892C15.8152 24.5815 14.8549 24.5815 14.2626 23.9892C13.6703 23.3969 13.6703 22.4366 14.2626 21.8443L19.6792 16.4276Z"
							fill="#43BF41"
						/>
					</svg>

					<p className={classes.link_text}>Выручка</p>
				</LinkItem>
				<LinkItem to={'/reports/visited'} className={classes.link}>
					<svg
						width="48"
						height="48"
						viewBox="0 0 48 48"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M23.9249 0.816406H24.0785C28.0635 0.816397 31.1576 0.81639 33.6282 1.04031C36.1355 1.26755 38.1491 1.73495 39.9267 2.76127C42.1335 4.03537 43.9661 5.86793 45.2402 8.07474C46.2665 9.85238 46.7339 11.866 46.9611 14.3733C47.185 16.8439 47.185 19.938 47.185 23.9231V24.0764C47.185 28.0615 47.185 31.1556 46.9611 33.6262C46.7339 36.1335 46.2665 38.1471 45.2402 39.9247C43.9661 42.1315 42.1335 43.9641 39.9267 45.2382C38.1491 46.2645 36.1355 46.7319 33.6282 46.9592C31.1576 47.1831 28.0634 47.1831 24.0784 47.1831H23.925C19.9399 47.1831 16.8458 47.1831 14.3752 46.9592C11.8679 46.7319 9.85433 46.2645 8.07669 45.2382C5.86988 43.9641 4.03733 42.1315 2.76322 39.9247C1.7369 38.1471 1.2695 36.1335 1.04226 33.6262C0.818343 31.1556 0.81835 28.0616 0.818359 24.0766V23.9229C0.81835 19.9379 0.818343 16.8438 1.04226 14.3733C1.2695 11.866 1.7369 9.85238 2.76322 8.07474C4.03733 5.86793 5.86988 4.03537 8.07669 2.76127C9.85433 1.73495 11.8679 1.26755 14.3752 1.04031C16.8458 0.81639 19.9399 0.816397 23.9249 0.816406ZM14.649 4.06126C12.3521 4.26943 10.8324 4.67287 9.59336 5.38821C7.84767 6.39609 6.39804 7.84572 5.39017 9.5914C4.67482 10.8304 4.27138 12.3502 4.06321 14.6471C3.85315 16.9648 3.85169 19.9218 3.85169 23.9997C3.85169 28.0777 3.85315 31.0347 4.06321 33.3524C4.27138 35.6493 4.67482 37.1691 5.39017 38.4081C6.39804 40.1538 7.84767 41.6034 9.59336 42.6113C10.8324 43.3266 12.3521 43.73 14.649 43.9382C16.9667 44.1483 19.9238 44.1497 24.0017 44.1497C28.0796 44.1497 31.0366 44.1483 33.3544 43.9382C35.6513 43.73 37.171 43.3266 38.41 42.6113C40.1557 41.6034 41.6053 40.1538 42.6132 38.4081C43.3286 37.1691 43.732 35.6493 43.9402 33.3524C44.1502 31.0347 44.1517 28.0777 44.1517 23.9997C44.1517 19.9218 44.1502 16.9648 43.9402 14.6471C43.732 12.3502 43.3286 10.8304 42.6132 9.5914C41.6053 7.84572 40.1557 6.39609 38.41 5.38821C37.171 4.67287 35.6513 4.26943 33.3544 4.06126C31.0366 3.85119 28.0796 3.84974 24.0017 3.84974C19.9238 3.84974 16.9667 3.85119 14.649 4.06126Z"
							fill="#43BF41"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M15.335 34.1836C14.4974 34.1836 13.8184 33.5046 13.8184 32.6669V26.1669C13.8184 25.3293 14.4974 24.6503 15.335 24.6503C16.1727 24.6503 16.8517 25.3293 16.8517 26.1669V32.6669C16.8517 33.5046 16.1727 34.1836 15.335 34.1836Z"
							fill="#43BF41"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M24.001 34.1836C23.1634 34.1836 22.4844 33.5046 22.4844 32.6669V13.1669C22.4844 12.3293 23.1634 11.6503 24.001 11.6503C24.8387 11.6503 25.5177 12.3293 25.5177 13.1669V32.6669C25.5177 33.5046 24.8387 34.1836 24.001 34.1836Z"
							fill="#43BF41"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M32.669 34.1836C31.8314 34.1836 31.1523 33.5046 31.1523 32.6669V19.6669C31.1523 18.8293 31.8314 18.1503 32.669 18.1503C33.5066 18.1503 34.1857 18.8293 34.1857 19.6669V32.6669C34.1857 33.5046 33.5066 34.1836 32.669 34.1836Z"
							fill="#43BF41"
						/>
					</svg>
					<p className={classes.link_text}>Посещения</p>
				</LinkItem>
				<LinkItem to={'/reports/abonement'} className={classes.link}>
					<svg
						width="48"
						height="44"
						viewBox="0 0 48 44"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M14.6236 4.02281C14.5095 4.01717 14.3851 4.01673 14.0333 4.01673H12.5784C10.8081 4.01673 9.56789 4.01782 8.59965 4.0938C7.64807 4.16846 7.08794 4.3085 6.65704 4.51788C5.65246 5.00603 4.84099 5.8175 4.35284 6.82209C4.14346 7.25298 4.00342 7.81311 3.92875 8.76469C3.85278 9.73293 3.85169 10.9732 3.85169 12.7435V25.9001C3.85169 29.1836 3.85377 31.5245 4.04977 33.3335C4.24268 35.1141 4.60878 36.1986 5.21722 37.0361C5.65823 37.6431 6.19203 38.1769 6.79903 38.6179C7.63648 39.2263 8.72103 39.5924 10.5016 39.7853C12.3106 39.9813 14.6515 39.9834 17.935 39.9834H30.0684C33.3519 39.9834 35.6927 39.9813 37.5017 39.7853C39.2824 39.5924 40.3669 39.2263 41.2044 38.6179C41.8114 38.1769 42.3452 37.6431 42.7862 37.0361C43.3946 36.1986 43.7607 35.1141 43.9536 33.3335C44.1496 31.5245 44.1517 29.1836 44.1517 25.9001V23.5167C44.1517 20.2332 44.1496 17.8923 43.9536 16.0834C43.7607 14.3027 43.3946 13.2182 42.7862 12.3807C42.3452 11.7737 41.8114 11.2399 41.2044 10.7989C40.3669 10.1905 39.2824 9.82439 37.5017 9.63148C35.6927 9.43548 33.3519 9.4334 30.0684 9.4334L25.2657 9.4334C24.9652 9.43342 24.7617 9.43343 24.5634 9.42363C22.4068 9.31706 20.3844 8.34503 18.9539 6.72757C18.8224 6.57885 18.6953 6.41993 18.5076 6.18532L18.484 6.15586C18.2643 5.88121 18.1863 5.78434 18.1106 5.69874C17.2214 4.69329 15.9642 4.08906 14.6236 4.02281ZM14.0711 0.9834C14.3715 0.983383 14.575 0.983372 14.7733 0.993171C16.9299 1.09974 18.9523 2.07178 20.3828 3.68923C20.5143 3.83797 20.6415 3.99691 20.8292 4.23156L20.8527 4.26095C21.0724 4.5356 21.1504 4.63247 21.2261 4.71807C22.1153 5.72351 23.3725 6.32775 24.7131 6.39399C24.8273 6.39963 24.9517 6.40007 25.3034 6.40007L30.1588 6.40007C33.3319 6.40005 35.8371 6.40003 37.8285 6.61579C39.8672 6.83667 41.5466 7.29817 42.9873 8.34491C43.8518 8.97302 44.6121 9.73328 45.2402 10.5978C46.2869 12.0385 46.7484 13.7179 46.9693 15.7566C47.1851 17.7481 47.185 20.2532 47.185 23.4264V25.9904C47.185 29.1636 47.1851 31.6687 46.9693 33.6602C46.7484 35.6989 46.2869 37.3783 45.2402 38.819C44.6121 39.6835 43.8518 40.4438 42.9873 41.0719C41.5466 42.1186 39.8672 42.5801 37.8285 42.801C35.837 43.0168 33.3318 43.0168 30.1587 43.0167H17.8447C14.6715 43.0168 12.1664 43.0168 10.1749 42.801C8.13621 42.5801 6.4568 42.1186 5.01608 41.0719C4.15157 40.4438 3.39131 39.6835 2.7632 38.819C1.71646 37.3783 1.25496 35.6989 1.03408 33.6602C0.818325 31.6688 0.81834 29.1636 0.81836 25.9906V12.6808C0.818347 10.9876 0.818336 9.62827 0.904716 8.52741C0.993466 7.39634 1.18026 6.41068 1.62455 5.49636C2.40983 3.88029 3.71525 2.57487 5.33132 1.78959C6.24564 1.3453 7.2313 1.15851 8.36237 1.06976C9.46323 0.983377 10.8226 0.983388 12.5157 0.983401L14.0711 0.9834Z"
							fill="#43BF41"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M28.334 33.4835C28.334 32.6458 29.013 31.9668 29.8507 31.9668H37.6507C38.4883 31.9668 39.1673 32.6458 39.1673 33.4835C39.1673 34.3211 38.4883 35.0001 37.6507 35.0001H29.8507C29.013 35.0001 28.334 34.3211 28.334 33.4835Z"
							fill="#43BF41"
						/>
					</svg>
					<p className={classes.link_text}>Абонементы</p>
				</LinkItem>
				<LinkItem to={'/reports/client'} className={classes.link}>
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M7.13064 25.3742C7.40881 25.3544 7.8785 25.3854 9.21602 25.4878C11.4645 25.6599 13.9585 25.797 16.2094 25.797C18.2314 25.797 20.3581 25.6864 22.2966 25.5392C23.664 25.4353 24.1516 25.4029 24.417 25.4201C26.338 25.545 27.7036 26.6731 28.1195 28.4788C28.1773 28.7295 28.212 29.1347 28.299 30.3036C28.3921 31.5567 28.4212 32.0103 28.3915 32.3612C28.1963 34.6695 26.3764 36.5469 23.9934 36.8984C23.6311 36.9518 23.1579 36.9563 21.8501 36.9563H9.77996C8.41289 36.9563 7.9184 36.9514 7.54006 36.893C5.18602 36.5298 3.38979 34.6768 3.18037 32.3955C3.14671 32.0289 3.17685 31.5548 3.27424 30.245C3.36155 29.071 3.39648 28.6679 3.45882 28.4056C3.87665 26.6476 5.25841 25.5068 7.13064 25.3742ZM9.2851 22.44C8.19659 22.3564 7.45454 22.2995 6.89751 22.339C3.63761 22.57 1.09736 24.6672 0.369841 27.7283C0.245565 28.2512 0.196455 28.9138 0.125385 29.8726C0.121605 29.9236 0.117764 29.9755 0.113844 30.0281C0.110069 30.0789 0.10634 30.1289 0.102667 30.1782C0.0202789 31.2834 -0.0347347 32.0213 0.0241604 32.6629C0.361069 36.3328 3.25064 39.3137 7.03758 39.8979C7.69959 40.0001 8.46983 39.9999 9.62326 39.9997C9.67472 39.9997 9.72695 39.9997 9.77996 39.9997H21.8501C21.9008 39.9997 21.9508 39.9997 22 39.9997C23.1035 39.9999 23.8403 40 24.4743 39.9065C28.3079 39.3411 31.2355 36.3209 31.5496 32.6077C31.6015 31.9936 31.5489 31.2877 31.4701 30.2304C31.4665 30.1832 31.463 30.1354 31.4594 30.0868C31.4554 30.0336 31.4515 29.9812 31.4477 29.9298C31.3771 28.9767 31.3285 28.3221 31.2132 27.8213C30.4933 24.6965 27.9551 22.5997 24.6309 22.3836C24.098 22.349 23.3483 22.4061 22.2372 22.4907C22.1749 22.4954 22.1114 22.5003 22.0468 22.5052C20.1582 22.6486 18.1203 22.7536 16.2094 22.7536C14.0769 22.7536 11.6757 22.6229 9.46763 22.454C9.40573 22.4492 9.34489 22.4446 9.2851 22.44Z"
							fill="#43BF41"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M25.2852 9.13031C25.2852 4.08778 21.0295 0 15.7798 0C10.5301 0 6.27445 4.08778 6.27445 9.13031V10.2173C6.27445 14.6595 10.0235 18.2606 14.6482 18.2606H16.9114C21.5361 18.2606 25.2852 14.6595 25.2852 10.2173V9.13031ZM15.7798 3.04344C19.2796 3.04344 22.1167 5.76862 22.1167 9.13031V10.2173C22.1167 12.9786 19.7862 15.2172 16.9114 15.2172H14.6482C11.7734 15.2172 9.4429 12.9786 9.4429 10.2173V9.13031C9.4429 5.76862 12.28 3.04344 15.7798 3.04344Z"
							fill="#43BF41"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M33.5173 22.7792C33.794 21.9819 34.6911 21.551 35.5212 21.8168L35.0202 23.2604C35.5212 21.8168 35.5221 21.8171 35.523 21.8174L35.5249 21.818L35.5289 21.8193L35.5379 21.8222L35.5597 21.8296C35.576 21.8351 35.5955 21.8419 35.6182 21.8502C35.6635 21.8666 35.7214 21.8886 35.7901 21.9169C35.9273 21.9734 36.1089 22.0553 36.32 22.168C36.7406 22.3924 37.29 22.7451 37.8378 23.2713C38.9636 24.3527 39.9992 26.0913 39.9992 28.6951C39.9992 31.299 38.9636 33.0375 37.8378 34.1189C37.29 34.6451 36.7406 34.9979 36.32 35.2223C36.1089 35.3349 35.9273 35.4169 35.7901 35.4733C35.7214 35.5016 35.6635 35.5236 35.6182 35.5401C35.5955 35.5483 35.576 35.5552 35.5597 35.5607L35.5379 35.568L35.5289 35.571L35.5249 35.5723L35.523 35.5729C35.5221 35.5732 35.5212 35.5735 35.0202 34.1298L35.5212 35.5735C34.6911 35.8392 33.794 35.4083 33.5173 34.611C33.2428 33.82 33.6821 32.9656 34.4996 32.6926C34.5052 32.6906 34.5197 32.6851 34.542 32.676C34.5905 32.656 34.6741 32.619 34.7813 32.5618C34.9972 32.4466 35.2965 32.2559 35.5974 31.9669C36.169 31.4178 36.8307 30.439 36.8307 28.6951C36.8307 26.9512 36.169 25.9724 35.5974 25.4234C35.2965 25.1344 34.9972 24.9437 34.7813 24.8284C34.6741 24.7712 34.5905 24.7343 34.542 24.7143C34.5197 24.7051 34.5052 24.6997 34.4996 24.6976C33.6821 24.4247 33.2428 23.5702 33.5173 22.7792Z"
							fill="#43BF41"
						/>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M27.7993 2.35707C27.9435 1.52814 28.76 0.968463 29.6229 1.10699L29.3618 2.60789C29.6229 1.10699 29.6238 1.10712 29.6246 1.10726L29.6264 1.10754L29.6302 1.10818L29.6393 1.10968L29.6624 1.11368L29.7281 1.12596C29.7804 1.13616 29.8493 1.15058 29.9325 1.17012C30.0986 1.20912 30.324 1.26907 30.5892 1.35763C31.1152 1.53325 31.8237 1.82992 32.5409 2.31807C34.0278 3.33005 35.4724 5.12435 35.4724 8.0426C35.4724 10.9609 34.0278 12.7551 32.5409 13.7671C31.8237 14.2553 31.1152 14.552 30.5892 14.7276C30.324 14.8161 30.0986 14.8761 29.9325 14.9151C29.8493 14.9346 29.7804 14.949 29.7281 14.9592L29.6624 14.9715L29.6393 14.9755L29.6302 14.977L29.6264 14.9777L29.6246 14.978C29.6238 14.9781 29.623 14.9782 29.3618 13.4773L29.623 14.9782C28.76 15.1167 27.9435 14.5571 27.7993 13.7281C27.6557 12.9031 28.2323 12.1222 29.0887 11.9784C29.0887 11.9784 29.0887 11.9784 29.0887 11.9784C29.0903 11.9781 29.0932 11.9775 29.0972 11.9768C29.1112 11.974 29.1396 11.9682 29.1801 11.9587C29.2616 11.9396 29.3898 11.906 29.5489 11.8529C29.8716 11.7451 30.2947 11.5659 30.7091 11.2839C31.4854 10.7555 32.304 9.83247 32.304 8.0426C32.304 6.25273 31.4854 5.32968 30.7091 4.80133C30.2947 4.51932 29.8716 4.34009 29.5489 4.23235C29.3898 4.17922 29.2616 4.14563 29.1801 4.1265C29.1396 4.11698 29.1112 4.11119 29.0972 4.10844M29.0888 4.10684C29.0887 4.10684 29.0887 4.10684 29.0887 4.10683C29.0875 4.10661 29.087 4.10653 29.0872 4.10656L29.0909 4.1072L29.095 4.10788L29.0977 4.10831"
							fill="#43BF41"
						/>
					</svg>
					<p className={classes.link_text}>Клиенты</p>
				</LinkItem>
			</div>
		</>
	);
};
