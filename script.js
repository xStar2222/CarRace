const carData = [
    { name: "Mustang Ecoboost", year: 2015, zeroToSixty: 5.6 },
    { name: "Mustang Ecoboost", year: 2016, zeroToSixty: 5.5 },
    { name: "Mustang Ecoboost", year: 2017, zeroToSixty: 2.9 },
    { name: "Mustang Ecoboost", year: 2018, zeroToSixty: 5.1 },
    { name: "Mustang Ecoboost", year: 2019, zeroToSixty: 2.9 },
    { name: "Mustang Ecoboost", year: 2020, zeroToSixty: 2.9 },
    { name: "Mustang Ecoboost", year: 2021, zeroToSixty: 5.1 },
    { name: "Mustang Ecoboost", year: 2022, zeroToSixty: 2.9 },
    { name: "Mustang Ecoboost", year: 2023, zeroToSixty: 2.9 },
    { name: "Mustang Ecoboost", year: 2024, zeroToSixty: 2.9 },
    { name: "Mustang GT", year: 2015, zeroToSixty: 4.4 },
    { name: "Mustang GT", year: 2016, zeroToSixty: 4.3 },
    { name: "Mustang GT", year: 2017, zeroToSixty: 4.3 },
    { name: "Mustang GT", year: 2018, zeroToSixty: 3.9 },
    { name: "Mustang GT", year: 2019, zeroToSixty: 3.9 },
    { name: "Mustang GT", year: 2020, zeroToSixty: 3.9 },
    { name: "Mustang GT", year: 2021, zeroToSixty: 3.9 },
    { name: "Mustang GT", year: 2022, zeroToSixty: 3.9 },
    { name: "Mustang GT", year: 2023, zeroToSixty: 3.9 },
    { name: "Mustang GT", year: 2024, zeroToSixty: 3.9 },
    { name: "Ford Mustang Bullitt", year: 2019, zeroToSixty: 4.4 },
    { name: "Ferrari F40", year: 1987, zeroToSixty: 4.2 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    { name: "Placeholer", year: 2019, zeroToSixty: 4.4 },
    // Try to find a way to do this easier
];

carData.sort((a, b) => a.name.localeCompare(b.name));

document.addEventListener("DOMContentLoaded", () => {
    const car1Select = document.getElementById("car1");
    const car2Select = document.getElementById("car2");
    const startRaceBtn = document.getElementById("startRace");
    const resultsDiv = document.getElementById("results");

    carData.forEach((car) => {
        const option1 = document.createElement("option");
        option1.value = JSON.stringify(car); 
        option1.text = `${car.name} (${car.year})`;
        car1Select.add(option1);

        const option2 = document.createElement("option");
        option2.value = JSON.stringify(car); 
        option2.text = `${car.name} (${car.year})`;
        car2Select.add(option2);
    });

    startRaceBtn.addEventListener("click", () => {
        const car1 = JSON.parse(car1Select.value); 
        const car2 = JSON.parse(car2Select.value); 

        if (car1.zeroToSixty < car2.zeroToSixty) {
            resultsDiv.textContent = `${car1.name} (${car1.year}) wins!`;
        } else if (car1.zeroToSixty > car2.zeroToSixty) {
            resultsDiv.textContent = `${car2.name} (${car2.year}) wins!`;
        } else {
            resultsDiv.textContent = "It's a tie!";
        }
    });
});
