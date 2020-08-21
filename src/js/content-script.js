const host = window.location.origin;
let jumpToHref = undefined;

if (host === 'https://weixin110.qq.com') {
  jumpToHref = document.getElementsByTagName('a')[0].href;
} else if (host === 'https://support.weixin.qq.com') {
  let url = document.body.getAttribute('url');
  jumpToHref = url.replace(/&amp;/g, '&');
}

if (jumpToHref !== undefined) {
  window.location.href = jumpToHref;
}
