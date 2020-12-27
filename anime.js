const Form = document.querySelector("form");
let animeKey = " ";

Form.addEventListener("submit", (event) => {
  event.preventDefault();

  animeKey = document.querySelector("input").value.trim();
  fetchResult(animeKey);
});

const fetchResult = (animeKey) => {
  fetch(`https://api.jikan.moe/v3/search/anime?q=${animeKey}`)
    .then((res) => res.json().then((data) => Result(data.results)))
    .catch((err) => Result(err));
};

const Result = (data) => {
  const showBox = document.querySelector(".result");
  let tmp = "";

  let count = 0;
  for (let i of data) {
    if (count >= 15) break;

    var img1_url = i.image_url;
    var title = i.title;
    var synopsis = i.synopsis;
    var url1 = i.url;
    var epi = i.episodes;
    var rate = i.rated;
    var sco = i.score;
    var start = i.start_date;
    var end = i.end_date;

    tmp += `<div class="result container">
    


      <div class="row">
        <div class="col s12 m7">
          <div id="anime1" class="anime container">
            <div class="anime-image">
              <br>
              <br>

              <img id="imh" src="${img1_url}" />
              <br>
              <div id="titl"class="anime-title">${title}</div>
              <br>
            </div>
            <br>
            <div id="cont1" class="anime-content">
              <p>
                   ${synopsis}
              </p>
            </div>
            <br>
            <div id="cont2" class="anime-score">
    
              <h3>Score : ${sco}</h3>
              
            </div>
            <div id="cont3" class="anime-rate">
              <h3>Rating : ${rate} </h3>
            
            </div>
            <div id="cont4" class="anime-start">
              <h3>Starting Date : ${start}</h3>
            </div>
            <div id="cont5" class="anime-end">
              <h3>Ending Date : ${end}</h3>
              
            </div>


            <div class="epis">
              <h3>Episode : ${epi}</h3>
            </div>
            <div class="anime-action">
              <a id="url2" href="${url1}">
                  もっと知るために
                  Motto shiru tame ni</a>
            </div>
            <br>
            <br>
            
          </div>
        </div>
      </div>
    </div> 
</div>`;

    count++;
  }
  showBox.innerHTML = tmp;
};
