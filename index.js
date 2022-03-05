// Get HTML element
const topHeadlines = document.getElementById("topHeadlines");
const breakingNews = document.getElementById("breakingNews");
const world = document.getElementById("world");
const business = document.getElementById("business");
const technology = document.getElementById("technology");
const sports = document.getElementById("sports");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const advance = document.getElementById("advanceSearch");
const sortPublishedAt = document.getElementById("sortPublishedAt");
const sortRelevance = document.getElementById("sortRelevance");

const content = document.getElementById("content");

// Set Array for json
var newArr = [];

// Get api
const TOKEN = "ef5fe3c21cf8a80cc7a2dcd012d1ac37";
const TOP_HEADLINES =
  "https://gnews.io/api/v4/top-headlines?country=us&lang=en&token=";
const BREAKING_NEWS =
  "https://gnews.io/api/v4/top-headlines?topic=breaking-news&country=us&lang=en&token=";
const WORLD_NEWS =
  "https://gnews.io/api/v4/top-headlines?topic=world&country=us&lang=en&token=";
const BUSINESS_NEWS =
  "https://gnews.io/api/v4/top-headlines?topic=business&country=us&lang=en&token=";
const TECHNOLOGY_NEWS =
  "https://gnews.io/api/v4/top-headlines?topic=technology&country=us&lang=en&token=";
const SPORT_NEWS =
  "https://gnews.io/api/v4/top-headlines?topic=sports&country=us&lang=en&token=";
const SEARCH_NEWS = "https://gnews.io/api/v4/search?&lang=en&q=";
const ADVANCE_SEARCH = "https://gnews.io/api/v4/search?&lang=en&q=";

// Khi tải trang thì màn hình hiển thị biểu tượng loading
window.onload = function () {
  content.innerHTML =
    '<div class="spinner-border text-primary text-center m-5 p5" role="status"><span class="visually-hidden">Loading...</span></div>';
  fetchTopHeadlines();
};

// Khi click vào tiêu đề trang thì gọi hàm fetch chạy lấy nội dung từ api
topHeadlines.addEventListener("click", function () {
  fetchTopHeadlines();
});
breakingNews.addEventListener("click", function () {
  fetchBreakingNews();
});
world.addEventListener("click", function () {
  fetchWorld();
});
business.addEventListener("click", function () {
  fetchBusiness();
});
technology.addEventListener("click", function () {
  fetchTechnology();
});
sports.addEventListener("click", function () {
  fetchSports();
});
searchBtn.addEventListener("click", function () {
  fetchSearch();
});
sortPublishedAt.addEventListener("click", function () {
  fetchPublishedSearch();
});
sortRelevance.addEventListener("click", function () {
  fetchRelevanceSearch();
});

//Đồng bộ nội dung từ api, nếu thành công thì chạy hàm display new
//Nếu không thành công thì sẽ thông báo lỗi
const fetchTopHeadlines = async () => {
  const response = await fetch(TOP_HEADLINES + TOKEN);
  newArr = [];
  // Neu thanh cong thi tra lai du lieu json
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchBreakingNews = async () => {
  const response = await fetch(BREAKING_NEWS + TOKEN);
  newArr = [];
  // Neu thanh cong thi tra lai du lieu json
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchWorld = async () => {
  const response = await fetch(WORLD_NEWS + TOKEN);
  newArr = [];
  // Neu thanh cong thi tra lai du lieu json
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchBusiness = async () => {
  const response = await fetch(BUSINESS_NEWS + TOKEN);
  newArr = [];
  // Neu thanh cong thi tra lai du lieu json
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchTechnology = async () => {
  const response = await fetch(TECHNOLOGY_NEWS + TOKEN);
  newArr = [];
  // Neu thanh cong thi tra lai du lieu json
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchSports = async () => {
  const response = await fetch(SPORT_NEWS + TOKEN);
  newArr = [];
  // Neu thanh cong thi tra lai du lieu json
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchSearch = async () => {
  if (searchInput.value == null) return;
  const response = await fetch(
    SEARCH_NEWS +
      encodeURIComponent(searchInput.value) +
      "&sortby=publishedAt&token=" +
      TOKEN
  );
  newArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchPublishedSearch = async () => {
  if (advance.value == null) return;
  const response = await fetch(
    SEARCH_NEWS +
      encodeURIComponent(advance.value) +
      "&sortby=publishedAt&token=" +
      TOKEN
  );
  newArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};

const fetchRelevanceSearch = async () => {
  if (advance.value == null) return;
  const response = await fetch(
    SEARCH_NEWS +
      encodeURIComponent(advance.value) +
      "&sortby=relevance&token=" +
      TOKEN
  );
  newArr = [];
  if (response.status >= 200 && response.status < 300) {
    const myJson = await response.json();
    newArr = myJson.articles;
  } else {
    console.log(response.status, response.statusText);
  }
  displayNews();
};


// Hàm chạy hiển thị nội dung
function displayNews() {
  content.innerHTML = "";

  // Neu array rỗng thì báo lỗi no data
  if (newArr.length == 0) {
    content.innerHTML = "No data found.";
    return;
  }

  // Vòng lặp nội dung lấy dữ liệu từ json
  newArr.forEach((news) => {
    // Ngay chi tra cum truoc T
    const date = news.publishedAt.split("T");

    // Khai báo html element để hiển thị nội dung
    const card = document.createElement("div");
    card.className = "card mt-2";
    card.setAttribute("height", "300px");

    const row = document.createElement("div");
    row.className = "row g-0";

    const colImage = document.createElement("div");
    colImage.className =
      "col-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 col-xxl-4";

    const image = document.createElement("img");
    image.className = "img-fluid rounded align-middle";
    image.setAttribute("width", "100%");
    image.src = news.image;

    const cardContent = document.createElement("div");
    cardContent.className =
      "col-12 col-sm-12 col-md-7 col-lg-8 col-xl-8 col-xxl-8";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";

    const linkHeading = document.createElement("a");
    linkHeading.className = "card-title";
    linkHeading.setAttribute("target", "_blank");
    linkHeading.href = news.url;

    const newsHeading = document.createElement("h4");
    newsHeading.innerHTML = news.title;

    const dateHeading = document.createElement("h6");
    dateHeading.className = "text-primary";
    dateHeading.innerHTML = date[0];

    const descriptionNews = document.createElement("p");
    descriptionNews.className = "text-muted";
    descriptionNews.innerHTML = news.description;

    const link = document.createElement("a");
    link.className = "btn btn-warning";
    link.setAttribute("target", "_blank");
    link.href = news.url;
    link.innerHTML = "Read more";

    //Add nội dung hoàn chỉnh
    colImage.appendChild(image);
    linkHeading.appendChild(newsHeading);

    cardBody.appendChild(linkHeading);
    cardBody.appendChild(dateHeading);
    cardBody.appendChild(descriptionNews);
    cardBody.appendChild(link);
    cardContent.appendChild(cardBody);

    row.appendChild(colImage);
    row.appendChild(cardContent);

    card.appendChild(row);

    content.appendChild(card);
  });
}
