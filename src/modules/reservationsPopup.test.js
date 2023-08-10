import { populateReservations } from "./reservationsPopup";

test('Reservation counter', () => {
    const reservationData = [
        {
            username: 'Pablo',
            date_start: new Date(),
            date_end: new Date('10/20/2023')
        },
        {
            username: 'Gumaro',
            date_start: new Date(),
            date_end: new Date('11/02/2023')
        },
        {
            username: 'Cristian',
            date_start: new Date(),
            date_end: new Date('12/23/2023')
        }
    ];
    const reservationCtr = document.createElement('div');
    const reservationCounter = document.createElement('h2');
    reservationCounter.id = 'reservation-counter';
    const reservationList = document.createElement('ul');
    reservationCtr.append(reservationCounter, reservationList);
    populateReservations(reservationData, reservationList);

    let reservationCount = reservationList.querySelectorAll('li').length;

    expect(reservationCount).toBe(3);
});