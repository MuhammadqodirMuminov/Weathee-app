window.addEventListener("DOMContentLoaded", () => {
	const mainInformation = document.querySelector("#main-inform"),
		elSearch = document.querySelector("#input"),
		API = "3a8b342edae5c733d0bfd144646d7061";

	elSearch.addEventListener("keypress", (e) => {
		if (e.key == "Enter") {
			const getInputValue = elSearch.value;

			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${getInputValue}&appid=${API}`
			)
				.then((Response) => Response.json())
                .then((json) => weather(json));
    

			function weather(json) {
				console.log(json.main);
				const country = json.sys.country,
					name = json.name,
					date = new Date().getDate();
				let months = [
					"January",
					"February",
					"March",
					"April",
					"May",
					"June",
					"July",
					"August",
					"September",
					"October",
					"November",
					"December",
				];
				const thisMonth = months[new Date().getMonth()];
				let days = [
					"Sunday",
					"Monday",
					"Tuesday",
					"Wednesday",
					"Thursday",
					"Friday",
					"Saturday",
				];
				const thisDay = days[new Date().getDay()];
				const temp = Math.round(json.main.temp - 273);
				const weather = json.weather[0].main;
				const maxWeather = Math.round(json.main.temp_max - 273);
				const minWeather = Math.round(json.main.temp_min - 273);

				mainInformation.innerHTML = `<section class="location">
                                                <div class="city">${country},${name}</div>
                                                <div class="date">${thisDay} ${date} ${thisMonth}</div>
                                            </section>
                                            <div class="main-temp">
                                                <div class="temp">${temp}<span class="temp-span">°C</span></div>
                                                <div class="weather">${weather}</div>
                                                <div class="degree">${minWeather}°C/${maxWeather}°C</div>
                                            </div>`;
			}
		}
	});
});
