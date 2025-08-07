let cosmonauts_div = document.querySelector("#cosmonauts");
let url = "https://api.spacexdata.com/v4/crew";
const button = document.querySelector("button");
const select = document.querySelector("#find");

button.addEventListener("click", () => {
  const selectedAgency = select.options[select.selectedIndex].text;
  cosmonauts_div.innerHTML = ""; 

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let filtered = data.filter(el => 
        selectedAgency === "Нічого не вибрано" || el.agency === selectedAgency
      );

      if (filtered.length === 0) {
        cosmonauts_div.innerHTML = "<p style='color: white;'>Нічого не знайдено</p>";
        return;
      }

      filtered.forEach((el) => {
        const html = `
          <div class="card">
            <div>
              <img class="card-img-top" src="${el.image}" alt="${el.name}">
              <div class="card-body">
                <h3>${el.name}</h3>
                <p>${el.agency}</p>
                <a href="${el.wikipedia}" target="_blank">Детальніше</a>
              </div>
            </div>
          </div>
        `;

        const div = document.createElement("div");
        div.className = "col-4";
        div.innerHTML = html;
        cosmonauts_div.insertAdjacentElement("beforeend", div);
      });
    });
});
