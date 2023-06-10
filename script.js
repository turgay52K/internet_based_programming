const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const itemNumber = movieLists[i].querySelectorAll("img").length;

  arrow.addEventListener("click", function () {

    clickCounter++;
    if (itemNumber - (4 + clickCounter) >= 0) {
      movieLists[i].style.transform = `translateX(${movieLists[i].computedStyleMap().get("transform")[0].x.value - 300}px)`;

    } else {
      movieLists[i].style.transform = "translateX(0)";
    }
  });
});


