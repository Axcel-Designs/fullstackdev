const section = document.querySelectorAll("section");

section.forEach((sec) => {
  sec.addEventListener("click", () => {
    const productName = sec.querySelector("h2").textContent;
    alert(productName);
  });
});
