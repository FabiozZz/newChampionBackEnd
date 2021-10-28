import { useEffect, useState } from 'react';
import { isEmpty } from '../helpers/common';

export const useInputOnObject = initialState => {
	const [state, setState] = useState(initialState);
	const handleChange = e => {
		if (e && e.target) {
			let name = e.target.name;
			let value = e.target.value;
			setState(prev => ({ ...prev, [name]: value }));
		} else if (e && e.props) {
			let name = e.props.name;
			let value = e.value;
			setState(prev => ({ ...prev, [name]: value }));
		} else if (typeof e === 'object') {
			setState(prev => ({ ...prev, ...(e && e) }));
		}
	};
	const copyState = Object.assign({}, state);
	let newState = {};
	for (const key in copyState) {
		if (copyState[key]) {
			newState[key] = copyState[key];
		}
	}
	return {
		state: { ...state, ...newState },
		onChange: handleChange,
	};
};

export const useInput = initialProps => {
	const [state, setState] = useState(initialProps);
	const handleChange = e => {
		let value = e.target.value;
		setState(value);
	};
	return {
		state,
		onChange: handleChange,
	};
};
export const usePrice = () => {
	const [editPrice, setEditPrice] = useState({
		price: 0,
		edit: false,
	});
	const handleChangePriceAbonement = e => {
		setEditPrice(prevState => ({ ...prevState, price: Number(e.target.value) }));
	};
	const toggleEdit = () => {
		setEditPrice(prevState => ({ ...prevState, edit: !prevState.edit }));
	};
	return {
		editPrice,
		setEditPrice,
		toggleEdit,
		handleChangePriceAbonement,
	};
};
export function useInitialStateOnUser(user, data, setAbonement, abonements) {
	useEffect(() => {
		const { subscription } = user;
		if (subscription) {
			console.log('%cabonements: ', 'color: MidnightBlue; background: Aquamarine;', abonements);
			if (subscription && subscription.rate?.id && subscription.rate.rate_type !== 0) {
				data.onChange({ rate_id: abonements.find(item => item.id === subscription.rate.id).id });
			}
			if (subscription.training_group && subscription.training_group.id) {
				data.onChange({ training_group_id: subscription.training_group.id });
			}
		}
		if (user && user.level && user.level.id) {
			data.onChange({ level_id: user.level.id });
		}
		if (user && user.age_group.id) {
			console.log(user.age_group);
			data.onChange({ age_group_id: user.age_group.id });
		}

		console.log('%cuser: ', 'color: MidnightBlue; background: Aquamarine;', user);
	}, [user]);
	useEffect(() => {
		if (data.state.rate_id) {
			setAbonement({ ...abonements.find(abonement => abonement.id === data.state.rate_id) });
		}
	}, [abonements, data.state?.rate_id]);
}
