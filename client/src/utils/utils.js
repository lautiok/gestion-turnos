import moment from 'moment';

export const getAvailableTimes = (date, reservas = []) => {
    const dayOfWeek = moment(date).day();

    let availableTimes = [];

    if (dayOfWeek === 1 || dayOfWeek === 3) {
        availableTimes = [
            { value: '08:00', label: '8:00' },
            { value: '09:00', label: '9:00' },
            { value: '10:00', label: '10:00' },
            { value: '10:30', label: '10:30' },
            { value: '12:00', label: '12:00' }
        ];
    } else if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 5) { 
        availableTimes = [
            { value: '14:00', label: '14:00' },
            { value: '15:00', label: '15:00' },
            { value: '17:00', label: '17:00' }
        ];
    }

    // Filtrar las horas disponibles eliminando aquellas que ya están reservadas para la fecha seleccionada
    availableTimes = availableTimes.filter(time => {
        const dateTimeStr = `${moment(date).format('YYYY-MM-DD')} ${time.value}`;
        return !reservas.some(reserva => reserva.date === moment(date).format('YYYY-MM-DD') && reserva.time === time.value);
    });

    return availableTimes;
};
