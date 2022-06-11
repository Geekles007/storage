import {FilterOption} from "../models/FilterOption";
import {DateTime} from "luxon";

const buildQueryString = (params: FilterOption) => {
    const keys = Object.keys(params);
    if (keys.length === 0) return '';
    return "?" + keys.map((key: string) => `${key}=${params[key]}`)
        .join('&');
}

const formatDate = (date: string) => {
    const dateTime = DateTime.fromISO(date).toFormat("D");
    return dateTime.split("/").reverse().join("-");
}

export {
    buildQueryString,
    formatDate
}
