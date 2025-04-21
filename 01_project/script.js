function updateClock() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = "AM";

    if (hours >= 12) {
        ampm = "PM";
        if (hours > 12) hours -= 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    // Add 0 if needed
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("time").textContent = timeString;

    const dateString = now.toDateString(); // Simple format: Mon Apr 21 2025
    document.getElementById("date").textContent = dateString;
}

setInterval(updateClock, 1000);
updateClock();
