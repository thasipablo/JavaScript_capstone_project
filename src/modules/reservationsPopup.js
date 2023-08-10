const populateReservations = (reservationData, container) => {
  container.innerHTML = '';
  let reservCount = 0;
  if (reservationData.length > 0) {
    reservCount = reservationData.length;
  } else {
    reservCount = 0;
  }
  container.parentElement.querySelector(
    '#reservation-counter'
  ).textContent = `Reservations (${reservCount})`;
  if (reservationData.length > 0) {
    reservationData.forEach((reserv) => {
      const reservEl = document.createElement('li');
      reservEl.className = 'reservation';
      reservEl.textContent = `${reserv.date_start} - 
            ${reserv.date_end} by ${reserv.username}`;
      container.appendChild(reservEl);
    });
  }
};

const displayReservations = async (apiURL, bookData) => {
  const curtain = document.createElement('div');
  curtain.id = 'curtain';
  const reservationCtr = document.createElement('div');
  reservationCtr.className = 'popup-content';
  reservationCtr.innerHTML = `<img src="${bookData.formats['image/jpeg']}" alt="${bookData.title}">
                                <h2>${bookData.title}</h2>
                                <p class="author">${bookData.authors[0].name}</p>
                                <h2 id='reservation-counter'>Reservations</h2>
                                <ul id='reservation-list'>
                                </ul>
                                <p>Date format: mm/dd/yyyy</p>
                                <form class="form">
                                    <div><input name='username' id='username' placeholder='Username' type='text' /></div>
                                    <div><label for='startdate'>Start date</label><br><input name='startdate' id='startdate' type='date' /></div>
                                    <div><label for='enddate'>End date</label><br><input name='enddate' id='enddate' type='date' /></div>
                                    <button type='button' id='reservation-btn'>Add reservation</button>
                                </form>
                                `;
  curtain.appendChild(reservationCtr);
  const closeBtn = document.createElement('button');
  closeBtn.setAttribute('type', 'button');
  closeBtn.id = 'close-btn';
  closeBtn.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';
  curtain.appendChild(closeBtn);
  document.querySelector('html').style.overflowY = 'hidden';

  closeBtn.addEventListener('click', () => {
    curtain.remove();
    document.querySelector('html').style.overflowY = 'auto';
  });

  const reservationList = reservationCtr.querySelector('#reservation-list');
  const request = await fetch(`${apiURL}?item_id=${bookData.id}`);
  const result = await request.json();
  populateReservations(result, reservationList);

  reservationCtr
    .querySelector('#reservation-btn')
    .addEventListener('click', async () => {
      const username = reservationCtr.querySelector('#username').value;
      const startDate = reservationCtr.querySelector('#startdate').value;
      const endDate = reservationCtr.querySelector('#enddate').value;

      if (username.length > 0 && startDate && endDate) {
        const response = await fetch(apiURL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            item_id: bookData.id,
            username,
            date_start: startDate,
            date_end: endDate,
          }),
        });

        if (response.ok) {
          const request = await fetch(`${apiURL}?item_id=${bookData.id}`);
          const result = await request.json();
          populateReservations(result, reservationList);
        }
      }
    });

  return curtain;
};

export { displayReservations, populateReservations };
