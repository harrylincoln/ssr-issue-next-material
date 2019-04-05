import range from './range';

export const getMidnight = (date = new Date()) => {
    const clone = new Date(date);
    clone.setHours(0);
    clone.setMinutes(0);
    clone.setSeconds(0);
    clone.setMilliseconds(0);

    return clone;
};

export const getNextSaturday = (date) => {
    const currentDay = date.getDay();

    const daysUntilSaturday = currentDay === 6 ? 6 - currentDay : 7;

    const saturday = new Date(date);

    saturday.setDate(date.getDate() + daysUntilSaturday);

    return saturday;
};

export const addWeek = (date, weeks = 1) => {
    const clone = new Date(date);
    clone.setDate(date.getDate() + 7 * weeks);
    return clone;
};

export const getWeeks = (startDate, amount) =>
    range(amount, 1).map((week) => addWeek(startDate, week));

export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const getOrdinal = (day) => {
    const ordinals = ['', 'st', 'nd', 'rd'];
    const remainder = day % 100;
    return (
        day +
        (remainder > 10 && remainder < 14
            ? 'th'
            : ordinals[remainder % 10] || 'th')
    );
};
