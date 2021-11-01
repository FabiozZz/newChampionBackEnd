import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Input from 'utils/FromAnt/Input/Input';

describe('Input', function () {
	it('Input have in the document', () => {
		act(() => {
			render(<Input />);
		});
		expect(screen.getByPlaceholderText(/не заполнено/i)).toBeInTheDocument();
	});

	it('typing user in Input', () => {
		render(<Input />);
		expect(screen.queryByDisplayValue('react')).toBeNull();
		userEvent.type(screen.getByRole('textbox'), 'react');

		expect(screen.getByDisplayValue('react')).toBeInTheDocument();
	});
	it('with value and onChange', () => {
		let value = '';
		const onChange = jest.fn(e => {
			value = e.target.value;
		});
		const text = 'some text typing user';
		render(<Input value={value} setValue={onChange} />);
		expect(value).toEqual('');
		userEvent.type(screen.getByRole('textbox'), text);
		expect(screen.getByDisplayValue(text)).toBeInTheDocument();
		expect(onChange).toHaveBeenCalledTimes(text.length);
		expect(value).toEqual(text);
	});
	it('add class error with text error', () => {
		const text = 'some text typing user';
		render(<Input error={'error'} />);
		expect(screen.getByText('error')).toBeInTheDocument();
		let span = screen.getByText('error');
		expect(span).toHaveClass('form-fail');
	});
	describe('snapshots', () => {
		it('snapshots', () => {
			const input = render(<Input />);
			expect(input).toMatchSnapshot();
		});
		it('snapshots with error', () => {
			const input = render(<Input error={'error'} />);
			expect(input).toMatchSnapshot();
		});
		it('snapshots with error and value', () => {
			const input = render(<Input error={'error'} value={'some text'} />);
			expect(input).toMatchSnapshot();
		});
		it('snapshots only value', () => {
			const input = render(<Input value={'some text'} />);
			expect(input).toMatchSnapshot();
		});
	});
});
