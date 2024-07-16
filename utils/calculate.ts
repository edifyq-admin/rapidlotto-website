
export const calculateRate = (value) => +value.toString() > 0 ?  +(1 / +value.toString()).toFixed(4) : 0;
