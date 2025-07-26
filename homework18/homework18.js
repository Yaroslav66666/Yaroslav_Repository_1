document.cookie = "user=Sasha";
document.cookie = "age=25";
document.cookie = "Cookie Saving Day=03.06.2025";


let expireDate = new Date();
expireDate.setHours(expireDate.getHours()+3);

document.cookie = "user=Sasha; Expires=" + expireDate.toUTCString();
document.cookie = "age=25; Expires=" + expireDate.toUTCString();



let myCookie = "Моя =кука;= складна";

myCookie = encodeURIComponent(myCookie);
console.log(myCookie);

document.cookie = `complex=${myCookie}`;


console.log(decodeURIComponent(myCookie));




let cookies = document.cookie.split("; ");
let user = "";
let age = "";

  for (let i = 0; i < cookies.length; i++) {
    let parts = cookies[i].split("=");
    if (parts[0] === "user") {
      user = decodeURIComponent(parts[1]);
    }
    if (parts[0] === "age") {
      age = decodeURIComponent(parts[1]);
    }
  }

  if (user && age) {
    document.write("User: " + user + "<br>Age: " + age);
  } else {
    document.write("Кука user або age не знайдена.");
  }