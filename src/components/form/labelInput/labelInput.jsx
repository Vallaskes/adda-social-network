import React from "react";
import style from './labelInput.module.scss';
import './labelInput.scss';

const addStyleFocus = `${style.inputFocus}`;

window.addEventListener('DOMContentLoaded', () => {
    let i = document.querySelectorAll("input");
    let t = document.querySelectorAll("textarea");
    let f = [];

    if (i) f.push.apply(f, i);
    if (t) f.push.apply(f, t);

    if (!document.querySelectorAll('input[type="search"]')) {
        f.forEach(input => {
            input.addEventListener("focus", () => input.parentNode.querySelector('label').classList.add(addStyleFocus));
            input.addEventListener("blur", () => {if(input.value === "") input.parentNode.querySelector('label').classList.remove(addStyleFocus)});
        });
    }

    function setCursorPosition(pos, elem) {
        elem.focus();
        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);
        else if (elem.createTextRange) {
            let range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd("character", pos);
            range.moveStart("character", pos);
            range.select()
        }
    }

    function mask(event) {
        let matrix = "+38 (0__) ___-__-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, "");
        if (def.length >= val.length) val = def;
        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
        if (event.type === "blur") {
            if (this.value.length === 2) this.value = ""
        } else setCursorPosition(this.value.length, this)
    }

    let input = document.querySelectorAll('input[type="tel"]');
    if (input) {
        input.forEach( input => {
            input.addEventListener("input", mask, false);
            input.addEventListener("focus", mask, false);
            input.addEventListener("blur", mask, false);
        })
    }
});

const LabelInput = (props) => {
    return (
        <div className={`${props.className} ${style.labelInput}`}>
            <input id={props.htmlFor} type={props.type}/>
            <label htmlFor={props.htmlFor}>{props.text}</label>
        </div>
    )
};

export default LabelInput;