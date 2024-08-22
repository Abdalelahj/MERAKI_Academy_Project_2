


const listaty = () => {
  $("#movieOption").hide();
  $("#movieBtn").on("mouseover", function () {
    $("#movieOption").show("slow");
  });
  const seriesList = $(`<div id="seriesLi"><a href="history">History</a>
            <a href="#crime">Crime</a>
            <a href="#family">Family</a> </div>`);
  seriesList.hide();
  $(`.seriesList`).append(seriesList);
  $(`#seriesBtn`).on("mouseover", function () {
    seriesList.show("slow");
  });

  const favList = $(
    `<div id="favLi">there will be added some fav option</div>`
  );
  favList.hide();
  $(`body`).append(favList);
  $(`#FavBtn`).on("click", function () {
    $(`.pageContent`).toggle();
    favList.toggle();
  });

  $(this).on("mouseover", function (event) {
    if (!event.target.matches("#movieBtn")) {
      $("#movieOption").hide();
    }
    if (!event.target.matches("#seriesBtn")) {
      seriesList.hide();
    }
  });

  $(`div #night`).on("click", function () {
    $(`body`).toggleClass("darkMode");
  });

  $(`.mainPage button`).on("click", ()=>{
    $(`.pageContent`).show()
    $(`#Result`).hide()
    favList.hide();
  })
};
listaty();

const poster = [
  {
    id: 0,
    div: $(`<div id="poster1" class="common"> <button>next</button></div>`),
  },
  {
    id: 1,
    div: $(`<div id="poster2" class="common"></div>`),
  },
  {
    id: 2,
    div: $(`<div id="poster3" class="common"></div>`),
  },
  {
    id: 3,
    div: $(`<div id="poster4" class="common"></div>`),
  },
];

const divMaker = () => {
  // for(let i=0; i<4 ; i++){
  //     poster.push({
  //         id:i,
  //         div:  $(`<div id="poster${i}" class="common"></div>`)
  //     })
  // }
  poster.forEach((elem, i) => {
    $(`.newest`).append(elem.div);
  });
};
divMaker();

const image_1 = [
  "./images/فيلم-The-Beekeeper-2024.jpg",
  "./images/فيلم-Mission-Impossible-7-2023-مترجم-10.jpg",
  "./images/Fast-X-2023-مترجم.jpg",
  "/images/فيلم-JW4-2023-مترجم.jpg",
];

const title = [
  $(`<p> the beekeeper for Jason Statham</p>`),
  $(`<p> mission impossible</p>`),
  $(`<p>  Fast and Furious 10 Fast X 2023 </p>`),
  $(`<p>  فيلم جون ويك John Wick 4 2023 مترجم </p>`),
];

const movies = [
  {
    id: 0,
    movieName: "BeeKeeper",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[0],
    description: title[0],
    rate: 7,
  },
  {
    id: 1,
    movieName: "mission impossible",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[1],
    description: title[1],
    rate: 7,
  },
  {
    id: 2,
    movieName: "Fast and Furious ",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[2],
    description: title[2],
    rate: 7,
  },
  {
    id: 3,
    movieName: "John Wick",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[3],
    description: title[3],
    rate: 7,
  },
  {
    id: 4,
    movieName: "some name",
    actors: ["actor1", "actor2"],
    // imageSrc: $(`<img src=${image_1[4]} width ="auto" height ="200px" />`),
    description: title[3],
    rate: 7,
  },
  {
    id: 5,
    movieName: "some name",
    actors: ["actor1", "actor2"],
    // imageSrc: $(`<img src=${image_1[4]} width ="auto" height ="200px" />`),
    description: title[3],
    rate: 7,
  },
  {
    id: 6,
    movieName: "some name",
    actors: ["actor1", "actor2"],
    // imageSrc: $(`<img src=${image_1[4]} width ="auto" height ="200px" />`),
    description: title[3],
    rate: 7,
  },
];

const renderPoster = () => {
  poster.forEach((Element, index) => {
    movies.forEach((elem, i) => {
      if (poster[index].id === elem.id) {
        poster[index].div.css({
          "background-image": `url(${elem.imageSrc})`,
          "background-size": "cover",
        });
        poster[index].div.append(elem.description);
      }
    });
  });
};
renderPoster();

$(`.common`).on("mouseover", function () {
  $(`#${this.id} p`).show("slow");
});

$(this).on("mouseover", function (e) {
  if (!e.target.matches(`.common`)) {
    $(".common p").hide();
  }
});

//=========================== search

$(`#myInput`).on("change", () => {
  searchMyThing();
});

$(`.fa fa-search`).on("click", () => {
  searchMyThing();
});

for (let i = 0; i < 8; i++) {
  $(`#Result`).append($(`<div id=col${i}  class="common_1"></div>`));
}
$(`#Result`).hide();

const searchMyThing = () => {
//   $("#Result").empty();

  $(`.pageContent`).hide();
  $(`#Result`).show();

  let inpVal = $(`#myInput`).val().toLowerCase();
  let result = [];

  if (inpVal !== "") {
    movies.filter((elem, i) => {
      if (elem.movieName.toLowerCase().includes(inpVal)) {
        result.push(elem);
      }
    });
  }

  if (result.length > 0) {
    console.log("seconed");
    result.forEach((elem, i) => {
      $(`#col${i}`).css({
        "background-image": `url(${elem.imageSrc})`,
        "background-size": "cover",
      });
      $(`#col${i}`).append(elem.description.text());
    });
  } else {
    $("#Result").text("NO Result Found").css({
      "display": "flex",
      "font-size": "35px",
      "margin-top": "70px",
      "justify-content": "center",
    });
  }
};
