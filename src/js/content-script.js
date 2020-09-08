const host = window.location.origin;
let jumpToHref = undefined;

try {
  if (host === 'https://weixin110.qq.com') {
    jumpToHref = document.getElementsByClassName('weui-btn')[0].href;
  } else if (host === 'https://support.weixin.qq.com') {
    let url = document.body.getAttribute('url');
    jumpToHref = url.replace(/&amp;/g, '&');
  }
} catch (e) {
  console.log(`[vision] has an error: ${e}`);
}

if (jumpToHref !== undefined) {
  let urlRegEx = /^(https?(\:\/\/))+(\w\-\.\/)?((?!weixin(110)?.qq.com).)*$/g;
  if (jumpToHref.match(urlRegEx)) {
    window.location.href = jumpToHref;
  }
}
