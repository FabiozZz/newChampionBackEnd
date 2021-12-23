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
