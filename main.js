var bannerImg = document.getElementById("banner_img");
var bannerImgBx = document.getElementById("banner_imgBx");
var bannerText = document.getElementById("banner_text");
var i = "1";
bannerImg.addEventListener("click", imageZoomIn);

function imageZoomIn() {
    bannerImg.style.width = "500px";
    bannerImg.style.alignSelf = "center";
    bannerImgBx.style.width = "100%";
    bannerText.style.display = "none";
}

