
window.addEventListener("DOMContentLoaded", function() {
    var btn = document.querySelector("#btn"),
    txt = document.querySelector("#en"),
    ru = document.querySelector("#ru") ;
    btn.addEventListener("click", function() {
var xhr = new XMLHttpRequest();
var text = encodeURIComponent(txt.value);
var key = "https://tech.yandex.com/key/form.xml?service=trnsl";
var url = "https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180211T123406Z.5e8fdca2b02e3b41.80c393299afdad5755bde4253495d0f45e99a098
"&text="+text+"&lang=en-ru&format=plain&options=1"
xhr.open('GET', url, true);
xhr.onload = function() {
  if (xhr.status >= 200 && xhr.status < 400) {
    var data = JSON.parse(request.responseText);
    ru.value = data.text;
  }
};
request.send();
    });
});
  

  