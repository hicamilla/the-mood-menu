function displayRecipe(response) {
  new Typewriter("#recipe-description", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let moodInput = document.querySelector("#mood-input");
  let apiKey = "YOUR_SHECODES_API_KEY";
  let context =
    "You are a creative chef and playlist curator. Given a mood, generate a short, vivid recipe suggestion (title + ingredients + one-liner description) and a Spotify playlist name to match the mood. Format everything as a simple paragraph in HTML. Separate lines with <br /> if needed.";
  let prompt = `User mood: ${moodInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeSection = document.querySelector("#result");
  recipeSection.classList.remove("hidden");

  let recipeDesc = document.querySelector("#recipe-description");
  recipeDesc.innerHTML = `⏳ Generating recipe for "${moodInput.value}"...`;

  axios.get(apiURL).then(displayRecipe);
}

let form = document.querySelector("#mood-form");
form.addEventListener("submit", generateRecipe);