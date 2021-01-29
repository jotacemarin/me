import moment from 'moment';

export const MomentUtils = {
    display: date => moment(date).format('MMMM DD YYYY, h:mm a'),
};

export default MomentUtils;