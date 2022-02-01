import React from 'react';
import classes from './chips.module.css';
import cn from 'classnames';
import PropTypes from 'prop-types';

const Chips = ({
                   children, active = false, click = () => {
    }, full = false
               }) => {
    return (
        <div
            onClick={click}
            className={cn(
                classes.wrapper,
                {[classes.default]: !active},
                {[classes.active]: active}
            )}>
            {children}
            {active ? (
                <svg
                    width="15"
                    height="16"
                    viewBox="0 0 15 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.5 0.5C3.3525 0.5 0 3.8525 0 8C0 12.1475 3.3525 15.5 7.5 15.5C11.6475 15.5 15 12.1475 15 8C15 3.8525 11.6475 0.5 7.5 0.5ZM11.25 10.6925L10.1925 11.75L7.5 9.0575L4.8075 11.75L3.75 10.6925L6.4425 8L3.75 5.3075L4.8075 4.25L7.5 6.9425L10.1925 4.25L11.25 5.3075L8.5575 8L11.25 10.6925Z"
                        fill="#F4F6FC"
                    />
                </svg>
            ) : full ? (
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.5 8C16.5 12.4183 12.9183 16 8.5 16C4.08172 16 0.5 12.4183 0.5 8C0.5 3.58172 4.08172 0 8.5 0C12.9183 0 16.5 3.58172 16.5 8ZM1.56756 8C1.56756 11.8287 4.67132 14.9324 8.5 14.9324C12.3287 14.9324 15.4324 11.8287 15.4324 8C15.4324 4.17132 12.3287 1.06756 8.5 1.06756C4.67132 1.06756 1.56756 4.17132 1.56756 8Z"
                        fill="#43BF41"/>
                    <path
                        d="M14.5 8C14.5 11.3137 11.8137 14 8.5 14C5.18629 14 2.5 11.3137 2.5 8C2.5 4.68629 5.18629 2 8.5 2C11.8137 2 14.5 4.68629 14.5 8Z"
                        fill="#43BF41"/>
                </svg>

            ) : (
                <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.5 8C16.5 12.4183 12.9183 16 8.5 16C4.08172 16 0.5 12.4183 0.5 8C0.5 3.58172 4.08172 0 8.5 0C12.9183 0 16.5 3.58172 16.5 8ZM1.56756 8C1.56756 11.8287 4.67132 14.9324 8.5 14.9324C12.3287 14.9324 15.4324 11.8287 15.4324 8C15.4324 4.17132 12.3287 1.06756 8.5 1.06756C4.67132 1.06756 1.56756 4.17132 1.56756 8Z"
                        fill="#5F5F5F"
                    />
                </svg>
            )}
        </div>
    );
};

Chips.propTypes = {
    children: PropTypes.node.isRequired,
    active: PropTypes.bool.isRequired,
    click: PropTypes.func,
};

export default Chips;
