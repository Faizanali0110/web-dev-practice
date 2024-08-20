function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[now.getDay()];

    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clockDisplay").textContent = timeString;
    document.getElementById("dayDisplay").textContent = day;
}

// Call the function initially and then every second
setInterval(updateClock, 1000);
updateClock(); // initial call to display the time immediately on load