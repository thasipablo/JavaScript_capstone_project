const displayReservations = (apiURL, bookData) => {
    const curtain = document.createElement('div');
    curtain.id = 'curtain';
    const reservationCtr = document.createElement('div');
    reservationCtr.id = 'reservation-ctr';
    reservationCtr.innerHTML = `<img src="${bookData.formats['image/jpeg']}" alt="${bookData.title}">
                                <h2>${bookData.title}</h2>
                                <p class="author">${bookData.authors[0].name}</p>
                                `
    curtain.appendChild(reservationCtr);
    const closeBtn = document.createElement('button');
    closeBtn.setAttribute('type', 'button');
    closeBtn.id = 'close-btn';
    closeBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
    curtain.appendChild(closeBtn);
    document.body.appendChild(curtain);
    document.querySelector('html').style.overflowY = 'hidden';

    closeBtn.addEventListener('click', () => {
        curtain.remove();
        document.querySelector('html').style.overflowY = 'auto';
    });
};

export default displayReservations;