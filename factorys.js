export const paragraphFactory = (content) => {
    if (content === null) return
    var paragraph = document.createElement("p");
    paragraph.innerHTML = content
    return paragraph;
}

