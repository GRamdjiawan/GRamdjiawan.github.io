async function checkUrl(path, url) {
    let JSONUrl = `${path}json/pages.json`;
    const getJSON = await fetch(JSONUrl);
    const pages = await getJSON.json();

    for (let i = 0; i < pages.length; i++) {
        if (pages[i].page === url) {
            console.log(`This is ${url}`);
        }
    }
}

function checkCorrectUrl() {
    const possiblePages = [
        {
            page: 'index.html',
            path: './'
        },
        {
            page: 'pokemon.html',
            path: '../../'
        },
        {
            page: '1sta.html',
            path: '../../'
        },
    ];
    let siteUrl = location.href;
    let splitUrl = siteUrl.split('/');
    const splitUrlLength = splitUrl.length - 1;
    // if there is a redirect with an id appended to it it will read it without the id
    if (splitUrl[splitUrlLength].split('#')) {
        const urlId = splitUrl[splitUrlLength].split('#');
        for (let i = 0; i < possiblePages.length; i++) {
            if (possiblePages[i].page == urlId[0]) {
                checkUrl(possiblePages[i].path, possiblePages[i].page);
            }
        }
    } else {
        for (let i = 0; i < possiblePages.length; i++) {
            if (possiblePages[i].page == splitUrl[splitUrlLength]) {
                checkUrl(possiblePages[i].path, possiblePages[i].page);
            }
        }
    }
}

checkCorrectUrl();

