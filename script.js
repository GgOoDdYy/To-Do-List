const container = document.getElementById("essentialsList");
const btn = document.getElementById("essentials");
const input = document.getElementById("textInput");

btn.addEventListener("click", function () {
  if (input.value !== "") {
    container.innerHTML += `
                              <div class="item"><li>${input.value}</li> 
                              <button class="removebtn">Remove</button>
                              </div>`;
    input.value = "";
  }
});

container.addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("removebtn")) {
    e.target.parentElement.remove("item");
  }
});

input.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    if (input.value !== "") {
      container.innerHTML += `
                                <div class="item"><li>${input.value}</li> 
                                <button class="removebtn">Remove</button>
                                </div>`;
      input.value = "";
    }
  }
});
