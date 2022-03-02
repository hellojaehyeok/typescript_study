
function getCurrentDate(currentDate: Date){
    const year = currentDate.getFullYear();
    let month = String(currentDate.getMonth()+1).padStart(2, "0");
    let date = String(currentDate.getDate()).padStart(2, "0");

    return `${year}.${month}.${date}`
}

const setTimeZero = (date:Date):Date => {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
} 

export {getCurrentDate, setTimeZero}