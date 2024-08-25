

let myFavArr=JSON.parse(localStorage.getItem("Add"))||[];
// let myFavArr=[];
// console.log(myFavArr);
let counter=0;
let thisPoster;

const listaty = () => {
  $("#movieOption").hide();
  $("#movieBtn").on("mouseenter", function () {
    $("#movieOption").show(200);
    seriesList.hide();
  });

  $(this).on("click", function () {
    $("#movieOption").hide();
    seriesList.hide();
  });
  const seriesList = $(`<div id="seriesLi">
            <div class="history">History</div>
            <div class="crime">Crime</div>
            <div class="family">Family</div> </div>`);

  seriesList.hide();
  $(`.seriesList`).append(seriesList);
  $(`#seriesBtn`).on("mouseenter", function () {
    seriesList.show(200);
    $("#movieOption").hide();
  });

  const favList = $(
    `<div id="favLi">
    <div id="deleteDiv"><button>Delete item</button></div>
    <div id="favItems"></div>
    </div>`
  );
  favList.hide();
  $(`body`).append(favList);
  $(`#FavBtn`).on("click", function (e) {
      favList.show();
      $(`.pageContent`).hide();
    $(`#Result`).hide();
    $(`#resultItem`).hide();
    $(`#videoTap`).hide();
    $(`#actionMovies`).hide();
    console.log(e.target);
    // selecItmes("#favLi")
    console.log($(this));
    // $(`#favLi`).text("")
    $(`#favItems`).text("")
    renderMovies(myFavArr,"#favItems",null)
    //   $(`#favItems`).show()  
    $(`#favItems`).on("mouseover",(e)=>{
        $(`#deleteDiv button`).on("click",function(){
            $(e.target).on("click",function(){
                // thisPoster.removeClass("added")
                myFavArr.forEach((elem,i)=>{
                    if($(this).hasClass(elem.id)){
                        console.log($(this));
                        myFavArr.splice(i,1)
                        localStorage.setItem("Add",JSON.stringify(myFavArr)) 
                        console.log(myFavArr);
                        $(`#favItems`).text("")
                        renderMovies(myFavArr,"#favItems",null)
                    }
                })
            })
        })
        }) 
   

});

  //   $(this).on("mouseover",  (event)=> {
  //     if (event.target.matches("#movieBtn","#movieOption")|| event.target.matches("#movieOption")) {
  //         console.log($(this));
  //       $("#movieOption").show();
  //     }
  //     else{
  //       $("#movieOption").hide();

  //     }
  //     // if (!event.target.matches("#seriesBtn")) {
  //     //   seriesList.hide();
  //     // }
  //   });

  $(`div #night`).on("click", function () {
    $(`body`).toggleClass("darkMode");
  });

  $(`.mainPage button`).on("click", () => {
    $(`.pageContent`).show();
    $(`#Result`).hide();
    $("#favLi").hide();
    $(`#resultItem`).hide();
    $(`#videoTap`).hide();
    $(`#actionMovies`).hide();
  });
};
listaty();

const image_1 = [
  "./images/فيلم-The-Beekeeper-2024.jpg",
  "./images/فيلم-Mission-Impossible-7-2023-مترجم-10.jpg",
  "./images/Fast-X-2023-مترجم.jpg",
  "/images/فيلم-JW4-2023-مترجم.jpg",
  "images/فيلم-A-Quiet-Place-3-Day-One-2024-مترجم.jpg",
  "/images/فيلم-Despicable-Me-4-2024-مترجم.jpg",
  "/images/فيلم-Dune-Part-2-2024-مترجم.jpg",
  "/images/فيلم-The-Union-2024-مترجم.jpg",
  "/images/مسلسل-House-of-The-Dragon-الموسم-الثاني.jpg",
  "/images/مسلسل-The-Blacklist-الموسم-10-كامل.jpg",
  "/images/مسلسل-The-Simpsons-الموسم-الخامس-والثلاثون.jpg",
];

const movies = [
  {
    id: 1,
    movieName: "BeeKeeper",
    seriesName: "",
    actors: ["actor1", "actor2"],
    type: "action",
    imageSrc: image_1[0],
    title: " the beekeeper for Jason Statham",
    description:
      "مشاهدة و تحميل فيلم ذا بي كيبر النحال The Beekeeper 2024 مترجم كامل بطولة جيسون ستاثام و جوش هوتشرسن و أمبير سيينا و إيمي رافر لامبمان اونلاين بجودة 1080p BluRay عالية اون لاين",
    rate: 7,
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SzINZZ6iqxY?si=MWUSevwuVHSRKmfm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    trailer: "https://www.youtube.com/watch?v=SzINZZ6iqxY",
  },
  {
    id: 2,
    movieName: "mission impossible",
    seriesName: "",

    actors: ["actor1", "actor2"],
    imageSrc: image_1[1],
    description:
      "مشاهدة و تحميل فيلم مهمة مستحيلة 7 تصفية الحساب الجزء الاول السابع Mission: Impossible - Dead Reckoning Part One 7 2023 مترجم كامل ميشن امبوسيبل 7 ديد ريكونينغ بارت 1 M:I-7 بطولة توم كروز اونلاين بجودة 1080p BluRay عالية اون لاين",
    title: "mission impossible",
    rate: 7,
    type: "action",
  },
  {
    id: 3,
    movieName: "Fast and Furious ",
    seriesName: "",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[2],
    description:
      "مشاهدة و تحميل فيلم فاست إكس السريع 10 السرعة والغضب 10 الجزء العاشر Fast and Furious 10 Fast X 2023 مترجم كامل فاست اند فيورس 10 بطولة فين ديزل و جايسون موموا و تشارليز ثيرون اونلاين بجودة 1080p BluRay عالية اون لاين",
    title: "Fast and Furious 10 Fast X 2023 ",
    type: "romance",
    rate: 7,
  },
  {
    id: 4,
    movieName: "John Wick",
    seriesName: "",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[3],
    title: " فيلم جون ويك John Wick 4 2023 مترجم ",
    description:
      "مشاهدة و تحميل فيلم جون ويك: شابتر 4 الجز الرابع John Wick: Chapter 4 2023 مترجم كامل جون ويك الفصل 4 بطولة كيانو ريفز اونلاين بجودة 1080p BluRay عالية اون لاين",
    rate: 7,
    type: "romance",
  },
  {
    id: 5,
    movieName: "A Quiet Place 3 Day-One 2024",
    seriesName: "",
    actors: ["actor1", "actor2"],
    imageSrc: "images/فيلم-A-Quiet-Place-3-Day-One-2024-مترجم.jpg",
    description:
      "مشاهدة و تحميل فيلم مكان هادئ: اليوم الأول 3 الجزء الثالث A Quiet Place: Day One Part III 3 2024 مترجم كامل أي كوايت بليس 3 داي ون بطولة لوبيتا نيونغو و جوزيف كوين و أليكس وولف و دجيمون هونسو اونلاين بجودة 1080p WEB-DL عالية اون لاين",
    title: " A-Quiet-Place-3-Day-One-2024",
    rate: 7,
  },
  {
    id: 6,
    movieName: "Despicable Me 4-2024",
    seriesName: "",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[5],
    description:
      "مشاهدة و تحميل فيلم الانيميشن أنا الحقير 4 الجزء الرابع Despicable Me 4 2024 مترجم كامل ديسبيكابل مي 4 أنا فهلوي 4 بطولة كريس ريناود و ويل فيرل و ستيف كارل و ميراندا كوسجروف و ماديسون بولان اونلاين بجودة 1080p WEB-DL عالية اون لاين-Me-4-2024-",
    title: "Despicable Me 4-2024",
    type: "comedy",
    rate: 7,
  },
  {
    id: 7,
    movieName: "Dune Part 2 2024",
    seriesName: "",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[6],
    description:
      "مشاهدة و تحميل فيلم كثيب دون 2 الجزء الثاني Dune Part Two 2 2024 مترجم كامل بطولة اوستن بتلر و تيموثي شالامي و زيندايا و ريبيكا فيرغسون و فلورنس بيو و كريستوفر واكن اونلاين بجودة 1080p BluRay عالية اون لاين",
    title: "Dune Part 2 2024",
    rate: 7,
    type: "comedy",
  },
  {
    id: 8,
    movieName: "The-Union-2024",
    seriesName: "",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[7],
    description:
      "مشاهدة و تحميل فيلم الاتحاد The Union 2024 مترجم كامل بطولة مارك والبيرغ و هالي بيري و جي كي سيمونز و جيسيكا دي غو و مايك كولتر اونلاين بجودة 1080p WEB-DL عالية اون لاين",
    title: "The-Union-2024",
    rate: 7,
  },
  {
    id: 9,
    movieName: "",
    seriesName: "House of The Dragon",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[8],
    description:
      "مشاهدة و تحميل الحلقة 8 الاخيرة مترجمة مسلسل صراع العروش منزل ال التنين بيت Game of Thrones House of The Dragon GOT HOTD S02E08 2022 جيم اوف ثرونز هاوس اوف دراجون الموسم الثاني House Of The Dragon Season 2 Episode 8 مترجم اونلاين HD اون لاين",
    title: "House of The Dragon",
    rate: 7,
    trailer: "https://youtu.be/DotnJ7tTA34?feature=shared",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DotnJ7tTA34?si=WIhZtEbK1BjpSIow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    type: "history",
  },
  {
    id: 10,
    movieName: "",
    seriesName: "The Blacklist",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[9],
    description:
      "“ريموند ريدينغتون” أحد أهم المطلوبين لمكتب التحقيقات الفيدرالية، يقرر تسليم نفسه لكن تحت شرط واحد: سيتحدث فقط مع العميلة المستجدة “إليزابيث كين”، ويقدم لها قائمة بأهم المجرمين وطريقة القبض عليهم، وهذه القائمة تُسمى بالقائمة السوداء",
    title: "The Blacklist",
    rate: 7,
    trailer: "https://youtu.be/SGB5cMf0r4I?feature=shared",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SGB5cMf0r4I?si=FHVFoo4UXdGADv0_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    type: "crime",
  },
  {
    id: 11,
    movieName: "",
    seriesName: "The Simpsons",
    actors: ["actor1", "actor2"],
    imageSrc: image_1[10],
    description:
      "يوميات عائلة “سيمبسون” المكونة من الأب “هومر” والأم “مارج” وأطفالهم الثلاثة “بارت” و”ليزا” و”ماغي” وكلبهم “سانتا ليتل هيلبر” والقط “سنوبول الثاني”. يعيشوا في مدينة “سبرينغفيلد”. حيث يعمل رب الأسرة “هومر” في محطة للطاقة النووية",
    title: "The Simpsons",
    rate: 7,
    trailer: "https://youtu.be/3R1ebDCv7vM?feature=shared",
    video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3R1ebDCv7vM?si=FpcaYdknUFQrfAGi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    type: "family",
  },
];

// $(this).on("mouseover", function (e) {
//   if (!e.target.matches(`.common`)) {
//     $(".common p").hide();
//   }
// });

//=========================== search=====================//

$(`#myInput`).on("keyup", () => {
  searchMyThing();
});

$(`#search`).on("click", () => {
  searchMyThing();
});

$(`#Result`).hide();

const searchMyThing = () => {
    $(`#favLi`).hide();
  $(`.pageContent`).hide();
  newAny.hide();
  $(`#videoTap`).hide();
  $(`#resultItem`).hide();
  $(`#Result`).show();

  let inpVal = $(`#myInput`).val().toLowerCase().trim();
  let result = [];
  if (inpVal !== "") {
    movies.filter((elem, i) => {
      if (elem.movieName.trim().toLowerCase().includes(inpVal)) {
        result.push(elem);
      }
      if (elem.seriesName.trim().toLowerCase().includes(inpVal)) {
        result.push(elem);
      }
    });
  }

  if (result.length) {
    $(`.pageContent`).hide();
    $(`#Result`).show();
    $(`#Result`).text("");

    renderMovies(result, `#Result`, null);
    selecItmes(`#Result`);
  } else {
    $(`#Result`).text("");
    $("#Result").text("NO Result Found");
  }
};

//====================Select Itmes===========================//
let newAny = $(`<div id="resultItem"></div>`);
$(`body`).append(newAny);
newAny.hide();
function selecItmes(parentDiv) {
  $(parentDiv).on("mouseover", "div", function (e) {
    $(e.currentTarget).on("click", () => {
      $(`#Result`).hide();
      $(`#actionMovies`).hide();
      $(`#resultItem`).show();
      $(`#resultItem`).text("");
      $("#favLi").hide()
   for (let i = 0; i < movies.length; i++) {
        if ($(this).hasClass(movies[i].id)) {
            thisPoster=$(this)
          $(`#resultItem`).append($(`<div id="item">
            <h5>Type : ${movies[i].type}</h5>
            <h5> Quality :WEB_DL</h5>
            <h5>  Language :USA </h5>
            <h5> Year :2024</h5>
            <h5> Duration :107 min</h5>
            </div>
            <div id="item2">
            <div id="subItem2_1">
            <div id="subItem2_1_1">
            <div id="text">${movies[i].description}</div>
                <div class="tralier"><h4>Watch Trailer<h4> <button type="submit" id="playTrailer"><a href =${movies[i].trailer} target="_blank"><i class="fa fa-play"></i></a></button></div>
            </div>
            <div id="subItem2_1_2"></div>
            </div>
            <div id="subItem2_2">
            <div id="subItem2_2_1">Watch Now</div>
            <div id="subItem2_2_2">
           <div id="favDiv"><button type="submit" id="favBtn">Add to favorite</button></div>
            <button type="submit" id="play"><i class="fa fa-play"></i></button>
            </div>
            </div>
            </div>`));
     
          $(`#subItem2_1_2`).css({
            "background-image": `url(${movies[i].imageSrc})`,
            "background-size": "cover",
            width: "250px",
            height: "250px",
          });

          $(`#play`).on("click", () => {
            $(`body`).append($(`<div id="videoTap"></div>`));
            $(`#resultItem`).hide();
            $(`#videoTap`).show();
            $(`#videoTap`).text("");
            $(`#videoTap`).append($(`${movies[i].video}`));
          });
          $(`#favBtn`).on("click", function(){
            if(!thisPoster.hasClass("added")){
                thisPoster.addClass("added")
                myFavArr.push(movies[i])
                localStorage.setItem("Add",JSON.stringify(myFavArr)) 
                console.log(myFavArr);  
            }

          })
        }
      }
    });
  });
}

//==================Categories====================//

$(`#movieOption .action`).on("click", () => {
  $(`#Result`).hide();
  $(`#resultItem`).hide();
  $(`#videoTap`).hide();
  newAny.hide();
  $(`.pageContent`).hide();
  $("#favLi").hide();

  $(`body`).append($(`<div id="actionMovies"></div>`));
  $(`#actionMovies`).text("");
  $(`#actionMovies`).show();
  renderMovies(movies, "#actionMovies", "action");
  selecItmes(`#actionMovies`);
});
$(`#movieOption .comedy`).on("click", () => {
  $(`#Result`).hide();
  $(`#resultItem`).hide();
  $(`#videoTap`).hide();
  $(`.pageContent`).hide();
  newAny.hide();
  $("#favLi").hide();

  $(`body`).append($(`<div id="actionMovies"></div>`));
  $(`#actionMovies`).text("");
  $(`#actionMovies`).show();
  renderMovies(movies, "#actionMovies", "comedy");
  selecItmes(`#actionMovies`);
});
$(`#movieOption .romance`).on("click", () => {
  $(`#Result`).hide();
  $(`#resultItem`).hide();
  $(`#videoTap`).hide();
  $(`.pageContent`).hide();
  newAny.hide();
  $("#favLi").hide();

  $(`body`).append($(`<div id="actionMovies"></div>`));
  $(`#actionMovies`).text("");
  $(`#actionMovies`).show();
  renderMovies(movies, "#actionMovies", "romance");
  selecItmes(`#actionMovies`);

});
$(`#seriesLi .history`).on("click", () => {
  $(`#Result`).hide();
  $(`#resultItem`).hide();
  $(`#videoTap`).hide();
  $(`.pageContent`).hide();
  newAny.hide();
  $("#favLi").hide();

  $(`body`).append($(`<div id="actionMovies"></div>`));
  $(`#actionMovies`).text("");
  $(`#actionMovies`).show();
  renderMovies(movies, "#actionMovies", "history");
  selecItmes(`#actionMovies`);

});
$(`#seriesLi .crime`).on("click", () => {
  $(`#Result`).hide();
  $(`#resultItem`).hide();
  $(`#videoTap`).hide();
  $(`.pageContent`).hide();
  newAny.hide();
  $("#favLi").hide();

  $(`body`).append($(`<div id="actionMovies"></div>`));
  $(`#actionMovies`).text("");
  $(`#actionMovies`).show();
  renderMovies(movies, "#actionMovies", "crime");
  selecItmes(`#actionMovies`);

});
$(`#seriesLi .family`).on("click", () => {
  $(`#Result`).hide();
  $(`#resultItem`).hide();
  $(`#videoTap`).hide();
  $(`.pageContent`).hide();
  newAny.hide();
  $("#favLi").hide();

  $(`body`).append($(`<div id="actionMovies"></div>`));
  $(`#actionMovies`).text("");
  $(`#actionMovies`).show();
  renderMovies(movies, "#actionMovies", "family");
  selecItmes(`#actionMovies`);

});

//=====================Render function =====================
const renderMovies = (arr, renderDiv, filter) => {
  if (filter) {
    const newArr = arr.filter((ele, i) => {
      return ele.type === filter;
    });
    console.log(newArr);
    newArr.forEach((ele, i) => {
      console.log("inside");
      const poster_img = $(`
                <div id="poster${i + 1}" class="common ${ele.id}"> 
                 <p>${ele.title}</p>
                </div>
                `);
      poster_img.css({
        "background-image": `url(${ele.imageSrc})`,
        "background-size": "cover",
        width: "250px",
        height: "250px",
      });
      $(renderDiv).append(poster_img);
    });
  } else {
    arr.forEach((ele, i) => {
      const poster_img = $(`
                    <div id="poster${i + 1}" class="common ${ele.id}"> 
                     <p>${ele.title}</p>
                    </div>
                    `);
      poster_img.css({
        "background-image": `url(${ele.imageSrc})`,
        "background-size": "cover",
        width: "250px",
        height: "250px",
      });
      $(renderDiv).append(poster_img);
    });
  }
};

//===================Render Collection===============================
const collect = () => {
  renderMovies(movies, ".collection", null);
  selecItmes(".collection");
  $(`.collection`).on("click", () => {
    $(`.pageContent`).hide();
    $(`#favLi`).hide();
  });
};
collect();
//====================Slider==============================
const slides = $(`<div class="slides"></div>`);
$(`.newest`).append(slides);

image_1.forEach((ele, i) => {
  const poster_img = $(`
            <div id="poster${i + 1}" class="common"> 
            </div>
            `);
  poster_img.css({
    "background-image": `url(${ele})`,
    "background-size": "cover",
    "zoom": "normal",

  });
  $(".slides").append(poster_img);
  
});


const width = 580;
const speed = 4000;
let currentSlide = 0;

let slider = $(`.newest`);
let slideCont = slider.find($(`.slides`));
let photos = slideCont.find($(`.common`));

setInterval(function () {
  slideCont.animate({ "margin-left": "-="+width }, speed, function(){
    currentSlide++;
    console.log(photos.length);
    console.log(currentSlide);
    if (currentSlide === photos.length) {
      currentSlide = 1;
      slideCont.css("margin-left", "0");
    }
  });
}, 8000);

//============================================
