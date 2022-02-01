import { useEffect, useState } from 'react';
import { isEmpty } from 'helpers/common';

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
		state: { ...newState },
		onChange: handleChange,
	};
};

export const useInput = initialProps => {
	const [state, setState] = useState(initialProps);
	const handleChange = e => {
		if (e.target && e.target.value) {
			let value = e.target.value;
			setState(value);
		} else {
			setState(e);
		}
	};
	return {
		state,
		onChange: handleChange,
	};
};
export const usePrice = sum => {
	const [editPrice, setEditPrice] = useState({
		price: sum || 0,
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
		if (!isEmpty(user)) {
			const { subscription } = user;
			if (subscription) {
				console.log(
					'%cabonements: ',
					'color: MidnightBlue; background: Aquamarine;',
					abonements
				);
				if (subscription && subscription.rate?.id && subscription.rate.rate_type !== 0) {
					data.onChange({
						rate_id: abonements.find(item => item.id === subscription.rate.id).id,
					});
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
		}
	}, [abonements, data, user]);
	useEffect(() => {
		if (data.state.rate_id) {
			setAbonement({
				...abonements.find(abonement => abonement.id === data.state.rate_id),
			});
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [abonements, data.state?.rate_id]);
}

export const useSelectWithCheck = (array) => {
	const [state, setState] = useState([...((array&&!!array.length)?[{id:0,name:'Все',active:true}]:[])])

	const check = (group)=>{
		const select_group = state.find(_=>_.id === group.id)
		select_group.active = !select_group.active

		setState(state.map(_=>_.id === select_group.id? select_group:_.id === 0?({..._,active:false}):_ ))
	}

	const clear = ()=>{
		const base_check = state.find(_=>_.id ===0)
		base_check.active = !base_check.active
		if (base_check.active){
			setState(prevState => prevState.map(_=>_.id!==0?({..._,active: false}):({..._,active:_.active})))
		}else{
			setState(prevState => prevState.map(_=>_.id===0?({..._,active: base_check.active}):_))
		}
	}
	useEffect(() => {
		if (state.length === 1 && array.length) {
			setState(prevState => [...prevState,...array.map(_ => ({..._, active: false}))])
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [array]);
	return {
		state,
		check,
		clear
	}

};