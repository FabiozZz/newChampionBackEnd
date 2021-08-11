import React, { useRef} from 'react';
import classes from "./tel.module.css";
import PropTypes from "prop-types";
import './phoneinput'

/**
 * @param style принимает объект, инлайн стили для обертки
 *
 * @param label принимает строку, подпись к текстовому полю
 *
 * @param name принимает строку, имя текстового поля
 *
 * @param required булевое значение, обязательно ли поле для заполнения
 *
 * @param disabled булевое значение, будет выключенно ввод в поле если true
 *
 * @param className принимает строку, задает класс для обертки компонента
 *
 * @param placeholder принимает строку, надпись которвая будет видно до ввода в поле любого символа
 *
 * @param value принимает строку, строка из родительского компонента из локального стейта
 *
 * @param setValue принимает функцию, передается из родительского компонента, служит для изменения value
 *
 * @param mask принимает строку, для отображения маски ввода
 *
 * @returns {JSX.Element}
 * @constructor
 */
export const MaskInputTel = ({style,label,name,required,disabled,className,placeholder,value,setValue}) => {

    const inputRef = useRef(null);

    const getInputNumbersValue = function (input) {
        // Return stripped input value — just numbers
        return input.value.replace(/\D/g, '');
    }


    const onPhonePaste = function (e) {
        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input);
        let pasted = e.clipboardData || window.clipboardData;
        if (pasted) {
            let pastedText = pasted.getData('Text');
            if (/\D/g.test(pastedText)) {
                // Attempt to paste non-numeric symbol — remove all non-numeric symbols,
                // formatting will be in onPhoneInput handler
                input.value = inputNumbersValue;
                setValue(e)
            }
        }
    }
    const onPhoneInput = function (e) {

        let input = e.target,
            inputNumbersValue = getInputNumbersValue(input),
            selectionStart = input.selectionStart,
            formattedInputValue = "";

        if (!inputNumbersValue) {
            return input.value = "";
        }

        if (input.value.length !== selectionStart) {
            // Editing in the middle of input, not last symbol
            if (e.data && /\D/g.test(e.data)) {
                // Attempt to input non-numeric symbol
                input.value = inputNumbersValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
            let firstSymbols = (inputNumbersValue[0] === "8") ? "7" : "+7";
            formattedInputValue = input.value = firstSymbols + " ";
            if (inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    }
    const onPhoneKeyDown = function (e) {
        // Clear input after remove last symbol
        let inputValue = e.target.value.replace(/\D/g, '');
        if (e.keyCode === 8 && inputValue.length === 1) {
            e.target.value = "";
        }
    }
    const onPhoneKeyUp = (e) => {
        onPhoneKeyDown(e);
        onPhoneInput(e);
        onPhonePaste(e);
        setValue(e)
    };
    // useEffect(() => {
    //     if (inputRef.current) {
    //         inputRef.current.addEventListener('keydown', onPhoneKeyDown);
    //         inputRef.current.addEventListener('input', onPhoneInput, false);
    //         inputRef.current.addEventListener('paste', onPhonePaste, false);
    //     }
    // },[onPhoneInput, onPhonePaste])
    return (
        <>
            <div style={style} className={`${classes.otherInputWrapper} ${className}`}>
                {label && <label>{label}</label>}
                <input name={name}
                       type={"tel"}
                       ref={inputRef}
                       onChange={onPhoneKeyUp}
                       maxLength={"18"}
                       required={required}
                       disabled={disabled}
                       value={value}
                       placeholder={placeholder}
                       // className={classes.block_info__input}
                />
            </div>
        </>
    );
};
MaskInputTel.defaultProps= {
    style:{},
    label:'',
    name:'',
    required:false,
    disabled:false,
    className:'',
    placeholder:'Не указано',
}
MaskInputTel.propTypes= {
    style:PropTypes.object,
    label:PropTypes.string,
    name:PropTypes.string,
    required:PropTypes.bool,
    disabled:PropTypes.bool,
    className:PropTypes.string,
    placeholder:PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func.isRequired
}