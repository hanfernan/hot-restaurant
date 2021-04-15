const submitBtn = $('.submit');
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let reserveName = $("#reserve-name").value.trim();
    let reservePhone = $('#reserve-phone').value.trim();
    let reserveEmail = $('#reserve-email').value.trim();
    let reserveId = $('#reserve-unique-id').value.trim();

    let newReservation = {
        name: reserveName,
        phone: reservePhone,
        email: reserveEmail,
        id: reserveId,
    };

    fetch('/api/reservation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        }
        
    })
})


