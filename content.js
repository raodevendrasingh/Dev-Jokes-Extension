const jokeUrl = "https://v2.jokeapi.dev/joke/Programming";

async function fetchJokes() {
	try {
		const response = await fetch(jokeUrl);
		if (!response.ok) {
			throw new Error("Failed to fetch jokes");
		}
		const jokeData = await response.json();

		if (jokeData.type === "single") {
			const jokeText = jokeData.joke;
			const formattedJoke = jokeText.replace(/\n/g, "<br>");
			singlejoke.innerHTML = formattedJoke;
		} 
        else if (jokeData.type === "twopart") {
			const jokeSetup = jokeData.setup;
			const jokeDelivery = jokeData.delivery;
            const formattedSetup = jokeSetup.replace(/\n/g, "<br>");
            const formattedDelivery = jokeDelivery.replace(/\n/g, "<br>");
            
			singlejoke.innerHTML = formattedSetup;
			lineTwo.innerHTML = formattedDelivery;
		}
	} catch (error) {
		console.error("Error fetching jokes:", error);
	}
}

fetchJokes();
