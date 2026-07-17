"use strict";

/**
 * ══════════════════════════════════════════════════════════
 *  Interactive Photo Gallery — script.js
 *  Vanilla JavaScript ES6+ | Tối ưu hiệu năng tối đa
 * ══════════════════════════════════════════════════════════
 */

document.addEventListener("DOMContentLoaded", () => {

  // ── Cache DOM một lần duy nhất ────────────────────────────
  const imageDiv = document.getElementById("image");
  const DEFAULT_TEXT = "Di chuột qua hình ảnh bên dưới để hiển thị tại đây.";

  if (!imageDiv) {
    console.warn("[Gallery] Không tìm thấy #image.");
    return;
  }

  // ══════════════════════════════════════════════════════════
  //  upDate(previewPic) — Hover vào ảnh
  // ══════════════════════════════════════════════════════════
  window.upDate = function upDate(previewPic) {
    if (!previewPic || !previewPic.src) return;

    // Log theo yêu cầu đề bài
    console.log("Hover detected");
    console.log("Alt: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    // Cập nhật trực tiếp — không qua lớp trung gian
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  };

  // ══════════════════════════════════════════════════════════
  //  unDo() — Rời chuột khỏi ảnh
  // ══════════════════════════════════════════════════════════
  window.unDo = function unDo() {
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = DEFAULT_TEXT;
  };

  // ══════════════════════════════════════════════════════════
  //  Event Delegation — 1 listener duy nhất trên document
  //  Thay vì gắn listener riêng lẻ lên từng ảnh
  // ══════════════════════════════════════════════════════════
  document.addEventListener("mouseover", (e) => {
    const img = e.target;
    if (img.tagName === "IMG" && img.id !== "image") {
      window.upDate(img);
    }
  });

  document.addEventListener("mouseout", (e) => {
    const img = e.target;
    if (img.tagName === "IMG" && img.id !== "image") {
      window.unDo();
    }
  });

});
