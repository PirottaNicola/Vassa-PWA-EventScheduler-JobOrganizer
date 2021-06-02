import { getDay } from 'date-fns'

export const getDayName = (data) => {
    switch (getDay(data)) {
        case 0:
            return 'dom';
        case 1:
            return 'lun';
        case 2:
            return 'mar';
        case 3:
            return 'mer';
        case 4:
            return 'gio';
        case 5:
            return 'ven';
        case 6:
            return 'sab';
        default:
            break;
    }
    console.log(getDay(data))
}

export const getNextDayName = (name) => {
    switch (name) {
        case 'dom': return 'lun'
        case 'lun': return 'mar'
        case 'mar': return 'mer'
        case 'mer': return 'gio'
        case 'gio': return 'ven'
        case 'ven': return 'sab'
        case 'sab': return 'dom'
        default:
            break;
    }
}