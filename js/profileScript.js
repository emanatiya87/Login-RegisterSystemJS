let currentUserData = JSON.parse(sessionStorage.getItem("currentUser"));
      let infoCard = document.getElementById("infoCard");
      let logout = document.getElementById("logout");
      logout.onclick = function () {
        window.location.href = "index.html";
        sessionStorage.removeItem("currentUser");
      };
      infoCard.innerHTML = `
       <div class="rounded-circle bg-info overflow-hidden  mx-auto">
            <img src=${
              currentUserData.gender == "female"
                ? "images/face2.jpg"
                : "images/face.jpg"
            } class="w-100 h-100" />
          </div>
          <h1 class="text-center">${currentUserData.name}</h1>
          <p class="text-secondary text-center">${currentUserData.email}</p>
          <br>
          <hr>
          <div class="w-100 d-flex justify-content-between">
            <h5 class="text-secondary">Member since</h5>
            <p>${currentUserData.date}</p>
          </div>
      `;
