import moment from 'moment';

export const MomentUtils = {
    display: date => moment(date).format('MMMM DD YYYY, h:mm a'),
    diff: (start, end) => {
        const a = moment(start);
        const b = moment(end);
        return moment.duration(a.diff(b)).humanize();
    },
};

export default MomentUtils;