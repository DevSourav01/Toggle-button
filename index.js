const toggle = document.querySelector(".toggle-button");

toggle.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
    toggle.textContent = "Light Mode";
    toggle.style.color = "black";
    toggle.style.backgroundColor = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    toggle.textContent = "Dark Mode";
    
    // Applying the styles correctly to the 'toggle' button
    toggle.style.border = "none";
    toggle.style.padding = "10px 20px";
    toggle.style.cursor = "pointer";
    toggle.style.fontSize = "20px";
    toggle.style.borderRadius = "70px";  // Apply borderRadius once
    toggle.style.margin = "0 10px";
    toggle.style.color = "white";
    toggle.style.backgroundColor = "black";
  }
});
