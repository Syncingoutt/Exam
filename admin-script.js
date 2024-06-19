app.post('/admin', (req, res) => {
    const { name, email, message } = req.body;

    // Display the form data on the admin page
    const bookingInfo = `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
    `;
    document.getElementById('booking-info').innerHTML = bookingInfo;

    // Send a response back to the user side
    res.json({ message: 'Form data received successfully!' });
});