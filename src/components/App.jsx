import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './app.css';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { Container } from 'react-bootstrap';
import { SideBar } from './SideBar/SideBar';
import Routes from '../Routes/Routes';
import { ConnectedRouter } from 'connected-react-router';
import { token_verify } from 'store/Actions/userActions';
import { Auth } from './Auth/Auth';
import nookies from 'nookies';
import {Chart as CChart} from "react-chartjs-2";
import zoom from "chartjs-plugin-zoom";
import 'chartjs-adapter-moment';


CChart.register([
	zoom,
	{
		id: 'some',
		afterDraw: function (chart, easing) {
			// console.log(chart);
			if (
				chart._active &&
				chart._active.length &&
				chart.config._config.type !== 'pie' &&
				chart.config._config.type !== 'bar'
			) {
				const activePoint = chart.tooltip._active[0];
				// console.log(activePoint);
				const ctx = chart.ctx;
				const x = activePoint.element.x;
				// console.log(chart.scales.yAxes.top);
				const topY = chart.scales.yAxes.top;
				const bottomY = chart.scales.yAxes.bottom;
				ctx.save();
				ctx.beginPath();
				ctx.moveTo(x, topY);
				ctx.lineTo(x, bottomY);
				ctx.lineWidth = 1;
				ctx.strokeStyle = '#69707F';
				ctx.fillStyle = '#69707F';
				ctx.stroke();
				ctx.fill();
				ctx.restore();
			}
		},
	},
]);
/**
 * главный компонент содержащий все приложение
 *
 * @return {JSX.Element}
 */
function App({ history }) {
	/**
	 * константа из redux показывает авторизован ли менеджер
	 * @type {boolean}
	 */
	const { isAuth } = useSelector(state => state.user);
	const access = nookies.get().access;
	// const refresh = nookies.get().refresh;
	const dispatch = useDispatch();

	/**
	 * если не авторизован пользователь, то его выбрасывает на экран входа в систему
	 */
	useEffect(() => {
		if (access) {
			dispatch(token_verify());
		}
	}, [access, dispatch]);
	return (
		<>
			<ConnectedRouter history={history}>
				{isAuth ? (
					<Container className={'h-100 p-0 m-0'} fluid={true}>
						<Header />
						<div className="wrapper_large">
							<SideBar />
							<div className="app-wrapper">
								<Routes />
							</div>
						</div>

						<div className="app-wrapper__footer">
							<Footer />
						</div>
					</Container>
				) : (
					<Container className={'h-100'} fluid={true}>
						<Header />
						<div className="app-wrapper_auth">
							<Auth />
						</div>
					</Container>
				)}
			</ConnectedRouter>
		</>
	);
}

export default App;
