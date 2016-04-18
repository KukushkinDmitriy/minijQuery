function $(selector) {
    return /^<[a-z]+>$/i.test(selector += "")
        ? document.createElement(selector.slice(1, -1))
        : Array.from(document.querySelectorAll(selector))
}
