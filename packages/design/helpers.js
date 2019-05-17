export const serverSideRendering = (function() {
  try {
    return !(document !== undefined);
  } catch (e) {
    return true;
  }
})();

export const getCookie = (cname) => {
  if (serverSideRendering) return null;

  const name = cname + '=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');

  for (let i = 0; i < ca.length; i++) {
    const c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
};

export const setCookie = (cname, cvalue, exdays) => {
  if (serverSideRendering) return null;

  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);

  const expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
};
