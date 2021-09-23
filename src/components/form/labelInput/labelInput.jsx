import style from './labelInput.module.scss';
import React from "react";

window.addEventListener('DOMContentLoaded', () => {
    let i = document.querySelectorAll('input[type="text"]');
    let p = document.querySelectorAll('input[type="password"]');
    let t = document.querySelectorAll('input[type="tel"]');
    let e = document.querySelectorAll('input[type="email"]');
    let ta = document.querySelectorAll('textarea');
    let f = [];

    if (i) f.push.apply(f, i);
    if (p) f.push.apply(f, p);
    if (e) f.push.apply(f, e);
    if (t) f.push.apply(f, t);
    if (ta) f.push.apply(f, t);

    f.forEach(input => {
        input.addEventListener("focus", () => input.parentNode.querySelector('label').classList.add(style.inputFocus));
        input.addEventListener("blur", () => {if(input.value === "") input.parentNode.querySelector('label').classList.remove(style.inputFocus)});
    });

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

const LabelInput = ({color, className, htmlFor, type = 'text', text, half = null, ...props}) => {
    return (
        <div className={`${style.labelInput} ${style[color]} ${half ? style.half : ''} ${className}`}>
            <label htmlFor={htmlFor}>{text}</label>
            <input id={htmlFor} type={type} {...props} />
        </div>
    )
};

export default LabelInput;