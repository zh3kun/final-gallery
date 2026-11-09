// Шаги 6-7: события мыши и клавиатуры.
// Эти функции вызываются из атрибутов onmouseover / onfocus и onmouseleave / onblur в HTML.

// Показывает выбранное изображение в большом окне предпросмотра
function upDate(previewPic) {
  console.log("upDate() called. Image alt: " + previewPic.alt);
  console.log("Image src: " + previewPic.src);

  var preview = document.getElementById("image");
  preview.style.backgroundImage = "url('" + previewPic.src + "')";
  preview.innerHTML = previewPic.alt;
}

// Возвращает окно предпросмотра в исходное состояние
function unDo() {
  console.log("unDo() called. Preview reset.");

  var preview = document.getElementById("image");
  preview.style.backgroundImage = "none";
  preview.innerHTML = "Hover over an image below to display here.";
}

// Шаг 9: добавляет tabindex каждому изображению, чтобы до него можно было дойти клавишей Tab
function addTabFocus() {
  // 9a: сообщение в консоли, чтобы убедиться, что событие сработало
  console.log("addTabFocus() called: page loaded.");

  // 9b: цикл for перебирает каждое изображение
  var images = document.querySelectorAll(".preview");
  for (var i = 0; i < images.length; i++) {
    // 9c: добавляем атрибут tabindex
    images[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image " + (i + 1));
  }
}

// Шаг 8: слушатель события onload (страница полностью загружена)
window.addEventListener("load", addTabFocus);
