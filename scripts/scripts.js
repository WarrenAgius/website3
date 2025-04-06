







$('#contactForm').on('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    $('#formMessage').text('');

    const name = $('#name').val();
    const email = $('#email').val();
    const contactNumber = $('#contactNumber').val();
    const comment = $('#comment').val();

    if (name.trim() === '') {
        isValid = false;
        $('#formMessage').append('<p>Please enter your name.</p>');
    }
    if (!validateEmail(email)) {
        isValid = false;
        $('#formMessage').append('<p>Please enter a valid email address.</p>');
    }
    if (!/^\+356 \d{4} \d{4}$/.test(contactNumber)) {
        isValid = false;
        $('#formMessage').append('<p>Please enter a valid contact number (+356 #### ####).</p>');
    }
    if (comment.length < 10) {
        isValid = false;
        $('#formMessage').append('<p>Your comment must be at least 10 characters.</p>');
    }

    if (isValid) {
        alert('Thank you! Your message has been sent.');
        $('#contactForm')[0].reset();
    }
});



function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}



'surprise me button'

const randomIndex = Math.floor(Math.random() * facts.length);
        document.getElementById("funFactDisplay").textContent = facts[randomIndex];



          
      

      