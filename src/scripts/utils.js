export function setREM() {
    let html = document.documentElement;
    window.rem = html.getBoundingClientRect().width / 16;
    html.style.fontSize = window.rem + 'px';
}