const section = document.querySelectorAll("section");

section.forEach((sec) => {
  sec.addEventListener("click", (event) => {
    alert(`Button clicked!`);
  });
});
