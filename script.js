document.getElementById("convert").addEventListener("click", function() {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;

    if (unit === "celsius") {
        const fahrenheit = (parseFloat(temperatureInput) * 9/5) + 32;
        document.getElementById("result").textContent = `Converted Temperature: ${fahrenheit} °F`;
    } else if (unit === "fahrenheit") {
        const celsius = (parseFloat(temperatureInput) - 32) * 5/9;
        document.getElementById("result").textContent = `Converted Temperature: ${celsius} °C`;
    }
});
