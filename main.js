
const paragraphFactory = (content) => {
    if (content === null) return
    var paragraph = document.createElement("p");
    paragraph.innerHTML = content
    return paragraph;
}

const getSection = document.getElementById("list");

const getGithubProjects = async () => {
    const url = "https://api.github.com/users/Alzemiro/repos"
    return fetch(url)
            .then(response => response.json())
            .catch(error => new Error(error));
}

const getNames = getGithubProjects()

const newProjects = (names) => {
    if(!names ) return
    names.then( response => 
        response.forEach( data => {
        let content = paragraphFactory(data.name)
        getSection.appendChild(content)
    }))
}

newProjects(getNames)
