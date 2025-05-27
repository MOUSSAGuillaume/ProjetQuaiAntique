export default function Route(url, title, pathHtml, pathJS = "") {
    return {
        url,
        title,
        pathHtml,
        pathJS
    };
}