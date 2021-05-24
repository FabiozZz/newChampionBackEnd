import React, {useState} from 'react';
import './otherInput.css'
import PropTypes from "prop-types";

/**
 * визуальная обертка для стандартного <input/>
 *
 * @param name имя поля
 *
 * @param required стандартный аттрибут для <input/>, установка обязательного поля
 *
 * @param label принимает строку, устанавливает подпись для поля
 *
 * @param type стандартный аттрибут для <input/>, устанавливает тип поля
 *
 * @param disabled булевое значение, для переключения состояния кнопки
 *
 * @param simpleClass принимает строку, установка пользовательских классов для обертки без изменения стандартных, уже установленных классов
 *
 * @param style принимает объект стилей
 *
 * @param placeholder стандартный аттрибут для <input/>, установка подписи внутри поля инпут
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const OtherInput = ({name,required=false, label,type='text',disabled=false,simpleClass='',style={},placeholder='Не указано'}) => {

    /**
     * локальный стейт для поля <input />
     */
    const [input, setInput] = useState('');

    /**
     * прослушивание события ввода в поле, изменение локального стейта
     * @param target
     */
    const handleChangeInput = ({target}) => {
        setInput(target.value);
    };

    return (
        <div style={style} className={`otherInput-wrapper ${simpleClass}`}>
            {label&&<label>{label}</label>}
            <input value={input} name={name} onChange={handleChangeInput} required={required} placeholder={placeholder} type={type} disabled={disabled}/>
        </div>
    );
};

OtherInput.defaultProps = {
    required: false,
    type: 'text',
    disabled: false,
    simpleClass: '',
    name:'',
    style: {},
    placeholder: 'Не указано'
};

OtherInput.propTypes = {
    required: PropTypes.bool,
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    simpleClass: PropTypes.string,
    style: PropTypes.object,
    placeholder: PropTypes.string
};