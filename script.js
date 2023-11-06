const proxyUrl = 'https://cors-anywhere.herokuapp.com/';



const rssUrl = "https://www.sec.gov/cgi-bin/browse-edgar?action=getcurrent&CIK=&type=&company=&dateb=&owner=include&start=0&count=40&output=atom";

const url = proxyUrl + rssUrl;

fetch(rssUrl, {mode: no-cors})
    .then(response => response.text())
    .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
    .then(data => {
        const items = data.querySelectorAll("item");
        let html = "";
        items.forEach(item => {
            const title = item.querySelector("title").textContent;
            const link = item.querySelector("link").textContent;
            const description = item.querySelector("description").textContent;
            html += '<div class="feed-item"><h2><a href="${link}" target="_blank">"${title}"</a></h2><p>"${description}"</p></div>';
        });
        document.getElementById("feed-container").innerHTML = html;
    })
    .catch(error => console.log("Error:", error));