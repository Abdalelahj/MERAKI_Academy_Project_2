


let fav = JSON.parse(localStorage.getItem("users")) || [];
let counter = 0;
let thisPoster;
const users = [
    {
      username: "ahmadali",
      password: "1234567",
      favObj: [],
    },
  ];

const image_1 = [
  "./images/فيلم-The-Beekeeper-2024.jpg",
  "./images/فيلم-Mission-Impossible-7-2023-مترجم-10.jpg",
  "images/Fast-X-2023-مترجم.jpg",
  "/images/فيلم-JW4-2023-مترجم.jpg",
  "images/فيلم-A-Quiet-Place-3-Day-One-2024-مترجم.jpg",
  "/images/فيلم-Despicable-Me-4-2024-مترجم.jpg",
  "/images/فيلم-Dune-Part-2-2024-مترجم.jpg",
  "/images/فيلم-The-Union-2024-مترجم.jpg",
  "/images/مسلسل-House-of-The-Dragon-الموسم-الثاني.jpg",
  "/images/مسلسل-The-Blacklist-الموسم-10-كامل.jpg",
  "/images/مسلسل-The-Simpsons-الموسم-الخامس-والثلاثون.jpg",
];

// let movies = [
//     {
//         id: 1,
//         movieName: "BeeKeeper",
//         seriesName: "",
//         actors: ["actor1", "actor2"],
//         type: "action",
//         imageSrc: image_1[0],
//         title: " the beekeeper for Jason Statham",
//         description:
//             "مشاهدة و تحميل فيلم ذا بي كيبر النحال The Beekeeper 2024 مترجم كامل بطولة جيسون ستاثام و جوش هوتشرسن و أمبير سيينا و إيمي رافر لامبمان اونلاين بجودة 1080p BluRay عالية اون لاين",
//         rate: 7,
//         video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SzINZZ6iqxY?si=MWUSevwuVHSRKmfm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//         trailer: "https://www.youtube.com/watch?v=SzINZZ6iqxY",
//     },
//     {
//         id: 2,
//         movieName: "mission impossible",
//         seriesName: "",

//         actors: ["actor1", "actor2"],
//         imageSrc: image_1[1],
//         description:
//             "مشاهدة و تحميل فيلم مهمة مستحيلة 7 تصفية الحساب الجزء الاول السابع Mission: Impossible - Dead Reckoning Part One 7 2023 مترجم كامل ميشن امبوسيبل 7 ديد ريكونينغ بارت 1 M:I-7 بطولة توم كروز اونلاين بجودة 1080p BluRay عالية اون لاين",
//         title: "mission impossible",
//         rate: 7,
//         type: "action",
//     },
//     {
//         id: 3,
//         movieName: "Fast and Furious ",
//         seriesName: "",
//         actors: ["actor1", "actor2"],
//         imageSrc: image_1[2],
//         description:
//             "مشاهدة و تحميل فيلم فاست إكس السريع 10 السرعة والغضب 10 الجزء العاشر Fast and Furious 10 Fast X 2023 مترجم كامل فاست اند فيورس 10 بطولة فين ديزل و جايسون موموا و تشارليز ثيرون اونلاين بجودة 1080p BluRay عالية اون لاين",
//         title: "Fast and Furious 10 Fast X 2023 ",
//         type: "romance",
//         rate: 7,
//     },
//     {
//         id: 4,
//         movieName: "John Wick",
//         seriesName: "",
//         actors: ["actor1", "actor2"],
//         imageSrc: image_1[3],
//         title: " فيلم جون ويك John Wick 4 2023 مترجم ",
//         description:
//             "مشاهدة و تحميل فيلم جون ويك: شابتر 4 الجز الرابع John Wick: Chapter 4 2023 مترجم كامل جون ويك الفصل 4 بطولة كيانو ريفز اونلاين بجودة 1080p BluRay عالية اون لاين",
//         rate: 7,
//         type: "romance",
//     },
//     {
//         id: 5,
//         movieName: "A Quiet Place 3 Day-One 2024",
//         seriesName: "",
//         actors: ["actor1", "actor2"],
//         imageSrc: "images/فيلم-A-Quiet-Place-3-Day-One-2024-مترجم.jpg",
//         description:
//             "مشاهدة و تحميل فيلم مكان هادئ: اليوم الأول 3 الجزء الثالث A Quiet Place: Day One Part III 3 2024 مترجم كامل أي كوايت بليس 3 داي ون بطولة لوبيتا نيونغو و جوزيف كوين و أليكس وولف و دجيمون هونسو اونلاين بجودة 1080p WEB-DL عالية اون لاين",
//         title: " A-Quiet-Place-3-Day-One-2024",
//         rate: 7,
//     },
//     {
//         id: 6,
//         movieName: "Despicable Me 4-2024",
//         seriesName: "",
//         actors: ["actor1", "actor2"],
//         imageSrc: image_1[5],
//         description:
//             "مشاهدة و تحميل فيلم الانيميشن أنا الحقير 4 الجزء الرابع Despicable Me 4 2024 مترجم كامل ديسبيكابل مي 4 أنا فهلوي 4 بطولة كريس ريناود و ويل فيرل و ستيف كارل و ميراندا كوسجروف و ماديسون بولان اونلاين بجودة 1080p WEB-DL عالية اون لاين-Me-4-2024-",
//         title: "Despicable Me 4-2024",
//         type: "comedy",
//         rate: 7,
//     },
//     {
//         id: 7,
//         movieName: "Dune Part 2 2024",
//         seriesName: "",
//         actors: ["actor1", "actor2"],
//         imageSrc: image_1[6],
//         description:
//             "مشاهدة و تحميل فيلم كثيب دون 2 الجزء الثاني Dune Part Two 2 2024 مترجم كامل بطولة اوستن بتلر و تيموثي شالامي و زيندايا و ريبيكا فيرغسون و فلورنس بيو و كريستوفر واكن اونلاين بجودة 1080p BluRay عالية اون لاين",
//         title: "Dune Part 2 2024",
//         rate: 7,
//         type: "comedy",
//     },
//     {
//         id: 8,
//         movieName: "The-Union-2024",
//         seriesName: "",
//         actors: ["actor1", "actor2"],
//         imageSrc: image_1[7],
//         description:
//             "مشاهدة و تحميل فيلم الاتحاد The Union 2024 مترجم كامل بطولة مارك والبيرغ و هالي بيري و جي كي سيمونز و جيسيكا دي غو و مايك كولتر اونلاين بجودة 1080p WEB-DL عالية اون لاين",
//         title: "The-Union-2024",
//         rate: 7,
//     },
//     {
//         id: 9,
//         movieName: "",
//         seriesName: "House of The Dragon",
//         actors: ["actor1", "actor2"],
//         imageSrc: image_1[8],
//         description:
//             "مشاهدة و تحميل الحلقة 8 الاخيرة مترجمة مسلسل صراع العروش منزل ال التنين بيت Game of Thrones House of The Dragon GOT HOTD S02E08 2022 جيم اوف ثرونز هاوس اوف دراجون الموسم الثاني House Of The Dragon Season 2 Episode 8 مترجم اونلاين HD اون لاين",
//         title: "House of The Dragon",
//         rate: 7,
//         trailer: "https://youtu.be/DotnJ7tTA34?feature=shared",
//         video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/DotnJ7tTA34?si=WIhZtEbK1BjpSIow" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//         type: "history",
//     },
//     {
//         id: 10,
//         movieName: "",
//         seriesName: "The Blacklist",
//         actors: ["actor1", "actor2"],
//         imageSrc: image_1[9],
//         description:
//             "“ريموند ريدينغتون” أحد أهم المطلوبين لمكتب التحقيقات الفيدرالية، يقرر تسليم نفسه لكن تحت شرط واحد: سيتحدث فقط مع العميلة المستجدة “إليزابيث كين”، ويقدم لها قائمة بأهم المجرمين وطريقة القبض عليهم، وهذه القائمة تُسمى بالقائمة السوداء",
//         title: "The Blacklist",
//         rate: 7,
//         trailer: "https://youtu.be/SGB5cMf0r4I?feature=shared",
//         video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/SGB5cMf0r4I?si=FHVFoo4UXdGADv0_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//         type: "crime",
//     },
//     {
//         id: 11,
//         movieName: "",
//         seriesName: "The Simpsons",
//         actors: ["actor1", "actor2"],
//         imageSrc: image_1[10],
//         description:
//             "يوميات عائلة “سيمبسون” المكونة من الأب “هومر” والأم “مارج” وأطفالهم الثلاثة “بارت” و”ليزا” و”ماغي” وكلبهم “سانتا ليتل هيلبر” والقط “سنوبول الثاني”. يعيشوا في مدينة “سبرينغفيلد”. حيث يعمل رب الأسرة “هومر” في محطة للطاقة النووية",
//         title: "The Simpsons",
//         rate: 7,
//         trailer: "https://youtu.be/3R1ebDCv7vM?feature=shared",
//         video: `<iframe width="560" height="315" src="https://www.youtube.com/embed/3R1ebDCv7vM?si=FpcaYdknUFQrfAGi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
//         type: "family",
//     },
// ];

let movies = [];

const renderMovies = (arr, renderDiv, filter,userIndex=null) => {
    $(renderDiv).text('')
  if (filter) {
    const newArr = arr.filter((ele, i) => {
      return ele.type === filter;
    });
    console.log(newArr);
    newArr.forEach((ele, i) => {
      console.log("inside");
      const poster_img = $(`
                <div id="poster${i + 1}" class="common ${ele.id}"> 
                 <img src=https://image.tmdb.org/t/p/w500${movies[i].poster_path})  />
                 <p>${ele.title}</p>
                </div>
                `);
      poster_img.css({
        "background-image": `url(https://image.tmdb.org/t/p/w500${ele.poster_path})`,
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
        "background-image": `url(https://image.tmdb.org/t/p/w500${ele.poster_path})`,
        "background-size": "cover",
        width: "300px",
        height: "300px",
        "align-content": "end"
      });
      $(`.common p`).hide()
      $(renderDiv).append(poster_img);
    });
  }

  if(renderDiv === '#favItems'){
      for(let index =0 ; index<$(`#favItems`).children().length ; index++){
          
    // return   $(`#deleteDiv button`).on("click",()=>{
         $($(`#favItems`).children()).on('click',function(){
            // console.log($(this));
                // console.log($(`#favItems`).children());
                fav[userIndex].favObj.splice(index, 1);
                localStorage.setItem("users",JSON.stringify(fav))
                return renderMovies(fav[userIndex].favObj, "#favItems", null,userIndex);
             });
             
            // })
            }
  }
};

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
    $(`#loginPage`).hide();
    $(`.container a`).hide()

    $(`#favItems`).text("");
    fav.forEach((ele,i)=>{
        if(localStorage.getItem("loginUser")===ele.username){
            renderMovies(ele.favObj, "#favItems", null,i);
            // selecItmes('#favItems')
        }
        })
  });

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
        $(`#loginPage`).hide();
        $(`.container a`).hide()
      });
  

};

const collect = () => {
  selecItmes(".collection");
  $(`.collection`).on("click", () => {
    $(`.pageContent`).hide();
    $(`#favLi`).hide();
  });
};

$(`#myInput`).on("keyup", () => {
  searchMyThing();
});

$(`#search`).on("click", () => {
  searchMyThing();
});

$(`#Result`).hide();

const searchMyThing = () => {
  $(`#favLi`).hide();
  $(`#favItems`).hide();
  $(`.pageContent`).hide();
  newAny.hide();
  $(`#videoTap`).hide();
  $(`#resultItem`).hide();
  $(`#loginPage`).hide();
  $(`.container a`).hide()

  $(`#Result`).show();

  let inpVal = $(`#myInput`).val().toLowerCase().trim();
  let result = [];
  if (inpVal !== "") {
    movies.filter((elem, i) => {
      if (elem.title.trim().toLowerCase().includes(inpVal)) {
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

const renderDataApi = (data) => {
  if (data) {
    data.forEach((elem, i) => {
      movies.push(elem);
    });
  }
  renderMovies(data, ".collection", null);
  collect();
  listaty();
  selecItmes();
  catag();
};

const getData = () => {
  $.ajax({
    url: "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=4",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGI5YjNiZTJlNGYwMzIxNTU5ZTVhMDk5NTJlMGIwYiIsIm5iZiI6MTcyNDYwODk4OC45MTcwODQsInN1YiI6IjY2YzRlOWQyYjM0YmRjOGM0MmQ1YWE4NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5X33yVcjwLfQQWET33-3uDCjC1ZDgzY3Rdcc4s29J5c",
      accept: "application/json",
    },
    success: (data) => {
    //   console.log(data.results);
      renderDataApi(data.results);
    },
    error: (msg) => {
      // console.log(msg);
    },
  });
};
getData();

//====================Select Itmes===========================//

let newAny = $(`<div id="resultItem"></div>`);
$(`body`).append(newAny);
newAny.hide();

function selecItmes(parentDiv) {
  $(parentDiv).on("mouseover", "div", function (e) {
    console.log(e.currentTarget);
    $(e.currentTarget).on("mouseover",()=>{ $(`.common p`).show() })
    $(e.currentTarget).on("click", () => {
      $(`#Result`).hide();
      $(`#actionMovies`).hide();
      $(`#resultItem`).show();
      $(`#resultItem`).text("");
      $("#favLi").hide();
      for (let i = 0; i < movies.length; i++) {
       
        if ($(this).hasClass(movies[i].id)) {
          thisPoster = $(this);
          $(`#resultItem`).append(
            $(`<div id="item">
            <h5>Type : mix </h5>
            <h5> Quality :WEB_DL</h5>
            <h5>  Language :USA </h5>
            <h5> Year :2024</h5>
            <h5> Duration :107 min</h5>
            </div>
            <div id="item2">
            <div id="subItem2_1">
            <div id="subItem2_1_1">
            <div id="text">${movies[i].overview}</div>
                <div class="tralier"><h4>Watch Trailer<h4> <button type="submit" id="playTrailer"><a target="_blank"><i class="fa fa-play"></i></a></button></div>
            </div>
            <div id="subItem2_1_2">

            </div>
            </div>
            <div id="subItem2_2">
            <div id="subItem2_2_1">Watch Now</div>
            <div id="subItem2_2_2">
            
           <div id="favDiv"><button type="submit" id="favBtn">Add to favorite</button></div>
            <button type="submit" id="play"><i class="fa fa-play"></i></button>
            </div>
            </div>
            </div>`)
          );
          $(`#subItem2_1_2`).css({
            "background-image": `url(https://image.tmdb.org/t/p/w500${movies[i].poster_path})`,
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
          $(`#favBtn`).on("click", function () {
            if (!thisPoster.hasClass("added")) {
              thisPoster.addClass("added");
            fav.map((elem)=>{
                if(localStorage.getItem("loginUser")===elem.username){
                    elem.favObj.push(movies[i]);
                    localStorage.setItem("users",JSON.stringify(fav))
                }
              })
            }
          });
        }
      }
    });
  });
}
// Save the users in the local storage
// login process comapre if it's found in the userslocalstorage
// then save the logged in user in the local starage
// on click the fav button will update the fac array inside the user object inside the array of users
const catag = () => {
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
    $("#favLi").hide();

    $(`body`).append($(`<div id="actionMovies"></div>`));
    $(`#actionMovies`).text("");
    $(`#actionMovies`).show();
    renderMovies(movies, "#actionMovies", "family");
    selecItmes(`#actionMovies`);
  });
};

//====================Slider==============================

const slides = $(`<div class="slides"></div>`);
$(`.newest`).append(slides);

image_1.forEach((ele, i) => {
  const poster_img = $(`
            <div id="poster${i + 1}" class="common ${ele}"> 
            </div>
            `);
  poster_img.css({
    "background-image": `url(${ele})`,
    "background-size": "cover",
    zoom: "normal",
  });
  $(".slides").append(poster_img);
});

const width = 1380;
const speed = 4000;
let currentSlide = 0;

let slider = $(`.newest`);
let slideCont = slider.find($(`.slides`));
let photos = slideCont.find($(`.common`));

setInterval(function () {
  slideCont.animate({ "margin-left": "-=" + width }, speed, function () {
    currentSlide++;
    // console.log(photos.length);
    // console.log(currentSlide);
    if (currentSlide === photos.length) {
      currentSlide = 1;
      slideCont.css("margin-left", "0");
    }
  });
}, 8000);

//============================================
// </form>
// $(`#loginPage`).hide();

const dialogDiv=(message)=>{
    $(`#loginPage`).append($(`
        <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="close">&times</span>
          <p>${message}</p>
        </div>
      </div>`))
      $(`#myModal`).show()
      $(`.close`).on("click",()=>{
        $(`#myModal`).hide()
        $(`#loginUserInp`).val("")
        $(`#loginPassInp`).val("")
        loginForm()
      })
     
    //   $(`.modal`).hide();
  }

  const loginForm=()=>{
    $(`#login>p`).on("click", () => {
        $(`#Result`).hide();
        $(`.createUser`).hide();
        $(`#resultItem`).hide();
        $(`#videoTap`).hide();
        $(`.pageContent`).hide();
        $("#favLi").hide();
      
        $(`body`).append(`<div id="loginPage"></div>`);
        $(`#loginPage`).text("");
        $(`#loginPage`).show("");
        $(`#loginPage`).append(
          $(` <div id="form">
              <div id="formContainer">
         
        <div class="imgcontainer">
          <img src="/images/user_avatar_profile_login_button_account_member-512.webp" alt="Avatar" class="avatar">
        </div>
      
        <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" id="loginUserInp" placeholder="Enter Username" name="uname" required >
      
          <label for="psw"><b>Password</b></label>
          <input type="password" id="loginPassInp" placeholder="Enter Password" name="psw" required>
              
          <button type="submit" class="loginBtn">Login</button>
          <br>
          <label>
            <input type="checkbox" checked="checked" name="remember"> Remember me
          </label>
        </div>
      
        <div class="container" style="background-color:#f1f1f1">
          <button type="button" class="cancelbtn">Cancel</button>
          <span class="psw">Create <a href="#">User?</a></span>
        </div>
      </div>
      </div>
      `)
        );
        
     
        $(`.loginBtn`).on("click",()=>{
            
          let loginUser= $(`#loginUserInp`).val()
          let loginPass= $(`#loginPassInp`).val()
      
          if($(`#formContainer input`).val() === ""){
           return dialogDiv("Username and Password cannot be empty")
            }
          fav.forEach((elem,i)=>{
               
                 
              if(loginUser=== elem.username && loginPass===elem.password){
                              console.log("ok good");
                  $(`.pageContent`).show();
                  $(`#Result`).hide();
                  $("#favLi").hide();
                  $(`#resultItem`).hide();
                  $(`#videoTap`).hide();
                  $(`#actionMovies`).hide();
                  $(`#loginPage`).hide();
                 localStorage.setItem("loginUser",elem.username)
                  dialogDiv("login successful")
              }
            else{
                dialogDiv("Email or Password is wrong!")
            }
     
         
              
         
          })
      })
      
        $(`.container a`).on("click", () => {
          $(`body`).append(
            $(`<div class="createUser">
               <div class="container">
          <label for="uname"><b>Username</b></label>
          <input type="text" id="userInp" placeholder="Create Username" name="uname" required>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" id="passInp" placeholder="Create Password" name="psw" required>
          <label for="psw"><b>Confirm Password</b></label>
          <input type="password" id="ConfirmpassInp" placeholder="Enter Password" name="psw" required>
              <br> <br><br>
          <button type="submit" id="ok">Create new user</button>
         
        </div>
              </div>`)
          );
          $(`#loginPage`).hide();
          $(`.createUser #ok`).on("click", () => {
            let userName = $(`#userInp`).val();
            let pass = $(`#passInp`).val();
            let confirm = $(`#ConfirmpassInp`).val();
      
            if ($(`.createUser input`).val() !== "") {
              if (userName.length >= 6 && pass.length >= 6) {
                console.log(userName.length);
                if (pass !== confirm) {
                  return console.log("passwords not matched");
                } else {
                  users.push({
                    username: userName,
                    password: pass,
                    favObj: [],
                  });
                  localStorage.setItem("users",JSON.stringify(users))
                }
              } else {
                return console.log("username and pass must be at least 6 charachter");
              }
            } else {
              console.log("fill the requried filed first");
            }
      
          });
        });
      
      
      });
      
  }
loginForm()