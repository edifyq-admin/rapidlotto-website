
export const formatCurrency = (value: string) => {
    const dollarValue = formatDecimalNumber(value);
    if (dollarValue.indexOf('.') < 0) {
        return `${dollarValue}.00`;
    }
    const val = dollarValue.split('.');
    if (val[1].length < 2) {
        for (let i = 0; i < 2 - val[1].length; i++) {
            val[1] += '0';
        }
        return [val[0], val[1]].join('.');
    }
    return [val[0], val[1].substring(0, 2)].join('.');
}

export const formatDecimalNumber = (value: string) => {
    if (value.indexOf('.') < 0) {
        return (+value).toLocaleString();
    }
    if (value.endsWith('.')) {
        return `${(+value).toLocaleString()}.`;
    }
    const val = value.split('.');
    return [(+val[0]).toLocaleString(), val[1]].join('.');
}
