function İRİS(el) {
  this.el = document.querySelector(el);
  this.init();
}
İRİS.prototype = {
  init: function () {
    this.image = this.el.querySelector("[data-iris-target]");
    this.imageRecognition();
    this.loading();
    const image = this.image;
    image.parentElement.style.position = "relative";
  },
  loading: function () {
    const image = this.image;
    var loading =
      '<svg class="iris-loading" viewBox="0 0 100 100" style="z-index: 99;margin: 0 auto;fill: white;position: absolute;top: 0;right: 0;left: 0;bottom: 0;display: flex;align-items: center;justify-content: center;width: 100%;height: 100vh;background: #1918184d;"><path fill="#fff" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"><animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform></path></svg>';
    image.insertAdjacentHTML("beforebegin", loading);
  },
  imageRecognition: function () {
    const predictionsİRİS = [];
    const image = this.image;
    cocoSsd.load().then((modelİRİS) => {
      const bb = document.querySelector(".iris-loading");
      bb.parentNode.removeChild(bb);
      modelİRİS.detect(image).then((predictionsİRİS) => {
        İRİSel(predictionsİRİS[0].bbox, predictionsİRİS[0].class);
      });
    });
    function İRİSel(style, text) {
      var İRİSstyle =
        "left:" +
        style[0].toFixed(2) +
        "px;top:" +
        style[1].toFixed(2) +
        "px;width:" +
        style[2].toFixed(2) +
        "px;height:" +
        style[3].toFixed(2) +
        "px;position: absolute;border: .1rem solid red;border-radius: 10px;display: flex;align-items: flex-start;justify-content: center;background: transparent;text-align: center;";
      var İRİStextstyle =
        "width: fit-content;background: white;border-radius: 5px;padding: 2px 10px;margin-top: -12px;user-select: none;";

      var İRİSchild =
        '<div class="iris-content" style="' +
        İRİSstyle +
        '"><div style="' +
        İRİStextstyle +
        '">Result: <b>' +
        text +
        "</b></div></div>";
      image.insertAdjacentHTML("afterend", İRİSchild);
    }
  }
};

new İRİS("[data-iris]");
