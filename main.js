let bannerImg = document.getElementById("banner_img");
let bannerImgBx = document.getElementById("banner_imgBx");
let bannerText = document.getElementById("banner_text");

bannerImg.onclick = imageZoomIn;

function imageZoomIn() {
    bannerImg.style.width = "500px";
    bannerImgBx.style.width = "100%";
    bannerText.style.display = "none";
    bannerImg.onclick = imageZoomOut;
}

function imageZoomOut() {
    bannerImg.style.width = "320px";
    bannerImgBx.style.width = "50%";
    bannerText.style.display = "flex";
    bannerImg.onclick = imageZoomIn;
}
