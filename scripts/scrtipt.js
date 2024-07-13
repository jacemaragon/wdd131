document.addEventListener("DOMContentLoaded", () => {
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = lastModified;

    const calculateWindChill = (temperature, windSpeed) => {
        if (temperature <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
        }
        return "N/A";
    };

    const temperature = 20; // °C
    const windSpeed = 10; // km/h
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windchill").textContent = windChill + "°C";
});