Page({
  onLoad(options) {
    // web-view 通过 URL 参数传递
  },
  onMessage(e) {
    // 接收网页发来的 postMessage
    console.log("message from web:", e.detail.data);
  },
  onError(e) {
    console.error("webview error:", e.detail);
  },
});
