document.getElementById("cookieForm").addEventListener("submit", function(e) {
      e.preventDefault();

      let user = document.getElementById("userInput").value;
      let age = document.getElementById("ageInput").value;

      let expireDate = new Date();
      expireDate.setHours(expireDate.getHours() + 3); 

      document.cookie = "user=" + encodeURIComponent(user) + "; Expires=" + expireDate.toUTCString();
      document.cookie = "age=" + encodeURIComponent(age) + "; Expires=" + expireDate.toUTCString();

      alert("Куки збережено!");
    });

    
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