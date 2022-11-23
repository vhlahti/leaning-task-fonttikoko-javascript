function fonttiKoko() {
  const element = document.getElementById("myList");
  const currentFont = document.getElementById("display");
  const fontSize = window.getComputedStyle(element, null).getPropertyValue("font-size");
  if (fontSize === "16px")
  {
    element.style.fontSize = "20px";
    currentFont.innerHTML = "Fonttikoko on nyt: 20px";
  }
  else if (fontSize === "20px")
  {
    element.style.fontSize = "24px";
    currentFont.innerHTML = "Fonttikoko on nyt: 24px";
  }
  else if (fontSize === "24px")
  {
    element.style.fontSize = "28px";
    currentFont.innerHTML = "Fonttikoko on nyt: 28px";
  }
  else if (fontSize === "28px")
  {
    element.style.fontSize = "32px";
    currentFont.innerHTML = "Fonttikoko on nyt: 32px";
  }
  else if (fontSize === "32px")
  {
    element.style.fontSize = "16px";
    currentFont.innerHTML = "Fonttikoko on nyt: 16px";
  }
}