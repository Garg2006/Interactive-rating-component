const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".container");
const num = document.querySelectorAll(".num");


num.forEach((item) => {
  item.addEventListener("click", (e) => {
    const value = e.currentTarget.value;

    submitBtn.addEventListener("click", () => {
      container.innerHTML = `
        <div class="img-container1">
                                <img src="images/illustration-thank-you.svg">
                                </div>
                                <div class="num-selected">
                                <p>You selected ${value} out of 5</p>
                                </div>
                                <h2>Thank you!<h2>
                                <p class="para2">
                                We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
                                </p>
                                `;

      container.style.display = "flex";
      container.style.alignItems = "center";
    });
  });
});
