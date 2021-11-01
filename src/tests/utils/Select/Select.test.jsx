import { act, render, screen } from '@testing-library/react';
import Select from 'utils/FromAnt/Select/Select';
import userEvent from '@testing-library/user-event';

const data = [
	{ id: 1, name: 'some 1' },
	{ id: 2, name: 'some 2' },
	{ id: 3, name: 'some 3' },
	{ id: 4, name: 'some 4' },
	{ id: 5, name: 'some 5' },
];

describe('Select component', function () {
	it('should enable standart placeholder and custom', function () {
		act(() => {
			render(<Select />);
		});
		expect(screen.getByText(/не выбран/i)).toBeInTheDocument();
	});
	it('should enable data', function () {
		act(() => {
			render(<Select data={data} field={'name'} />);
		});
		expect(screen.queryByText('some 1')).toBeNull();
		act(() => {
			userEvent.click(screen.getByText(/не выбран/i));
		});
		// expect(screen.getByText('some 1')).toBeInTheDocument();
	});
	// it('should works onChange function', function () {
	// 	const onChange = jest.fn();
	// 	act(() => {
	// 		render(<Select data={data} setValue={onChange} field={'name'} />);
	// 	});
	// 	expect(screen.queryByText('some 1')).toBeNull();
	// 	userEvent.click(screen.getByText(/не выбран/i));
	// 	userEvent.click(screen.getByText('some 1'));
	// 	expect(onChange).toHaveBeenCalledTimes(1);
	// });
});
