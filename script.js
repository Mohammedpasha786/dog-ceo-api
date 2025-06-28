const dogContainer = document.getElementById("dogContainer");
const loadBtn = document.getElementById("loadBtn");
const searchInput = document.getElementById("search");

let allImages = [];

async function fetchDogs() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
  const data = await res.json();
  allImages = data.message;
  displayDogs(allImages.slice(0, 5));
}

function displayDogs(dogUrls) {
  dogContainer.innerHTML = "";
  dogUrls.forEach((url) => {
    const img = document.createElement("img");
    img.src = url;
    img.alt = "dog";
    dogContainer.appendChild(img);
  });
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = allImages.filter((url) => url.toLowerCase().includes(value));
  displayDogs(filtered.slice(0, 5));
});

loadBtn.addEventListener("click", fetchDogs);

fetchDogs(); // Initial load
