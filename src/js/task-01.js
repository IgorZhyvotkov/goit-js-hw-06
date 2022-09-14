const categoriesListRef = document.querySelector("#categories");
const categoriesListItemRef = categoriesListRef.querySelectorAll(".item");
console.log("Number of categories:", categoriesListItemRef.length);

categoriesListItemRef.forEach((item) => {
  const tittleRef = item.querySelector("h2");
  console.log("Category:", tittleRef.textContent);

  const itemsList = item.querySelectorAll("li");
  console.log("Elements:", itemsList.length);
});
