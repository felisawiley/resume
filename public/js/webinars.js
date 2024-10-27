// In js/webinars.js
function loadWebinars() {
    const webinarsRef = firebase.database().ref('webinars');
    webinarsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        const webinarsList = document.getElementById('webinars-list');
        webinarsList.innerHTML = '';
        
        for (let id in data) {
            const webinar = data[id];
            const webinarElement = document.createElement('div');
            webinarElement.innerHTML = `
                <h2>${webinar.title}</h2>
                <p>Date: ${webinar.date}</p>
                <p>Description: ${webinar.description}</p>
                <p>Duration: ${webinar.duration}</p>
                <a href="${webinar.registrationLink}" target="_blank">Register</a>
            `;
            webinarsList.appendChild(webinarElement);
        }
    });
}

// Call this function when the webinars page loads
if (window.location.pathname.includes('webinars.html')) {
    loadWebinars();
}