function Cats(poroda, vik, clichka, stat, colir_sherstki, status, src) {
    this.poroda = poroda;
    this.vik = vik;
    this.clichka = clichka;
    this.stat = stat;
    this.colir_sherstki = colir_sherstki;
    this.status = status;
    this.src = src;

    this.wantsToEat = function () {
        if (this.status === "спить") {
            console.log("Дай мені поспати!");
            return;
        }
        console.log(`${this.clichka} хоче їсти`);
    };

    this.wantsToSleep = function () {
        if (this.status === "їсть") {
            console.log("Дай мені поїсти!");
            return;
        }
        console.log(`${this.clichka} хоче спати`);
    };
}

let cat1 = new Cats("Регдол", "0.5", "Хропун", "male", "Сірий", "спить", "./img/images1.jpg");
let cat2 = new Cats("Британська", "0.8", "Жирун", "female", "Сірий", "їсть", "./img/images2.jpg");
let cat3 = new Cats("Бомбейська", "1", "Просипашка", "male", "Сірий", "просипається", "./img/images3.jpg");

let cats = [cat1, cat2, cat3];

let cat_btns = Array.from(document.querySelectorAll(".cat"));

const PHOTO = document.querySelector(".photo-cats");
const PORODA = document.querySelector(".poroda");
const VIK = document.querySelector(".vik");
const CLICHKA = document.querySelector(".clichka");
const STAT = document.querySelector(".stat");
const COLIR_SHERSTKI = document.querySelector(".colir_sherstki");
const STATUS = document.querySelector(".status");

document.querySelector(".variants-cats").addEventListener("click", (e) => {
    if (!e.target.classList.contains("cat")) return;

    let id = e.target.dataset.id;

    const selectedCat = cats[id];

    PHOTO.src = selectedCat.src;
    PORODA.textContent = `Порода: ${selectedCat.poroda}`;
    VIK.textContent = `Вік: ${selectedCat.vik}`;
    CLICHKA.textContent = `Клічка: ${selectedCat.clichka}`;
    STAT.textContent = `Стать: ${selectedCat.stat}`;
    COLIR_SHERSTKI.textContent = `Колір шерстки: ${selectedCat.colir_sherstki}`;
    STATUS.textContent = `Статус: ${selectedCat.status}`;

    cat_btns.forEach(btn => btn.classList.remove("bg-color"));
    e.target.classList.add("bg-color");
});
