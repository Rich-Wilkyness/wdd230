const baseURL = "https://rich-wilkyness.github.io/wdd230/";

const linksURL = "https://rich-wilkyness.github.io/wdd230/data/links.json";

async function getLinks() {
    const response = await fetch(linksURL);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayLinks(data);
    }
}

function displayLinks(data) {

}

getLinks();