var ua = navigator.userAgent.toLowerCase(); 
if (ua.indexOf('safari') != -1) { 
  if (ua.indexOf('chrome') > -1) {
    alert("chrome") // Chrome
  } else {
    alert("safari") // Safari
  }
}