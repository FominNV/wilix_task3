import { createHook } from 'async_hooks';
import React, { FC } from 'react';
import * as DATA from '../data';

export const useExchange = () => {
    const validateText = (text: string): boolean | string[]  => {
        const regExp = /(\d+\.?\d+)\s+([a-zA-Z]{3})\s+(in)\s+([a-zA-Z]{3})/gi;
        if ( text.match(regExp) ) {
            const result = text.match(regExp);
            return result![0].split(' ');
        }
        return false;
    }

    const getExchange = (text: string): string => {
        console.log(DATA);
        let input = document.getElementById('result');
        if ( validateText(text) ) {
            let keys: any = validateText(text);
            let count: number = +keys[0] || 1;
            let from, to;
            Object.entries(DATA.rates).map(el => {
                if (el[0] === keys[1].toUpperCase()) {
                    from = el[1];
                }
                if (el[0] === keys[3].toUpperCase()) {
                    to = el[1];
                }
            });

            if (to && from) {
                input?.classList.remove('wrong');
                return `${( (count * to) / from).toFixed(2)} ${keys[3].toUpperCase()}  (${count} ${keys[1].toUpperCase()} = ${( (count * to) / from).toFixed(2)} ${keys[3].toUpperCase()})`;
            } else {
                input?.classList.add('wrong');
                return to === undefined ? `Не найдена валюта: ${keys[3]}` : `Не найдена валюта: ${keys[1]}`;
            }
        } else {
            input?.classList.add('wrong');
            return 'Соблюдайте, пожалуйста, шаблон...';
        }
    }
    return getExchange;
}