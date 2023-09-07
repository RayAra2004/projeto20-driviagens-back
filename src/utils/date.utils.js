import dayjs from "dayjs";

export function convertDate1(date){
    const day = String(date).substring(0,2);
    const month = String(date).substring(3,5);
    const year = String(date).substring(6);

    return `${year}-${month}-${day}`;
}

export function dateLargerDateCurrent(date){
    const dateFligth = new Date(convertDate1(date)).getTime();

    const dateCurrent = new Date().getTime();

    return dateFligth > dateCurrent;
}