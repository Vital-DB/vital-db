export const dateFormatter = (date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
}

export const heightFormatter = (inches) => {
    const feet = Math.floor(inches / 12);
    let inch = inches % 12;
    if (inch === 0){
        inch = '';
    } else {
        inch = `${inch}in`
    }
    const height = `${feet}ft${inch}`;

    return height;
}