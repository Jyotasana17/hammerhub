document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    alert('Thank you for contacting us!');
});

document.getElementById('report-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const issue = document.getElementById('issue').value;

    console.log(`Issue: ${issue}`);
    alert('Thank you for reporting the issue!');
});