const picture = document.querySelector("#picture");
const nombre = document.querySelector("#name");
const Ulogin = document.querySelector("#login");
const wrapperAbout = document.getElementsByClassName("AboutMe");
const aboutMe = document.querySelector("#bio");
const ubication = document.querySelector("#location");
const foll = document.querySelector("#followers");
const repos = document.querySelector("#repos");
const linkTwitter = document.querySelector("#twitter");
const linkGithub = document.querySelector("#github");

//Enviando data al HTML
const setDataHTML = (data) => {
  const {
    avatar_url,
    bio,
    followers,
    html_url,
    location,
    login,
    name,
    public_repos,
    twitter_username,
  } = data;
  const { firstChild } = wrapperAbout[0];
  //enviado data
  picture.src = avatar_url;
  nombre.innerText = name === null ? "Desconocido" : name;
  Ulogin.innerText = login;
  firstChild.innerText = `Acerca de ${login} :`;
  aboutMe.innerText =
    bio === null ? "Ser o no ser una biografía, he ahí mi dilema." : bio;
  ubication.innerText =
    location === null ? "Ubicación desconocida..." : location;
  foll.innerText = `No. ${followers}`;
  repos.innerText = `No. ${public_repos}`;
  twitter_username !== null
    ? ((linkTwitter.className = "link"),
      (linkTwitter.href = `https://twitter.com/${twitter_username}`))
    : (linkTwitter.className = "link_none");
  linkGithub.href = html_url;
};
