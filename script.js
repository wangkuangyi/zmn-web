const makeBilibiliSrc = (bvid) => {
  const id = (bvid || "").trim();
  return `https://player.bilibili.com/player.html?bvid=${encodeURIComponent(id)}&page=1&autoplay=0`;
};

const makeVideoIframe = (title, bvid) => `
  <iframe
    title="${title}"
    src="${makeBilibiliSrc(bvid)}"
    loading="lazy"
    allowfullscreen
    referrerpolicy="no-referrer-when-downgrade"
  ></iframe>
`;

const dialog = document.querySelector(".video-dialog");
const dialogTitle = document.querySelector("#dialog-title");
const dialogVideo = document.querySelector("#dialog-video");
const closeDialog = document.querySelector(".close-dialog");

document.querySelectorAll(".featured-cover").forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.dataset.videoTitle || "作品视频";
    const bvid = button.dataset.bvid || "";
    const frame = button.closest(".video-frame");

    frame.innerHTML = makeVideoIframe(title, bvid);
  });
});

document.querySelectorAll(".video-thumb").forEach((button) => {
  button.addEventListener("click", () => {
    const title = button.dataset.videoTitle || "作品视频";
    const bvid = button.dataset.bvid || "";

    dialogTitle.textContent = title;
    dialogVideo.innerHTML = makeVideoIframe(title, bvid);

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  });
});

const closeVideoDialog = () => {
  dialogVideo.innerHTML = "";
  dialog.close();
};

closeDialog.addEventListener("click", closeVideoDialog);

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    closeVideoDialog();
  }
});

dialog.addEventListener("cancel", () => {
  dialogVideo.innerHTML = "";
});
