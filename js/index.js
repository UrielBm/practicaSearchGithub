//declaración de constantes
const searchForm = document.querySelector("#searchForm");
const loading = document.querySelector("#loading");
const card = document.querySelector("#Card");
const inputName = document.querySelector("#userName");
//creación de la función para buscar usuario de GitHub
const handleGetGithubUser = async (userName) => {
  try {
    loading.className = "loading";
    card.className = "hiddenCard";
    let resp = await fetch(`https://api.github.com/users/${userName}`);
    resp = await resp.json();
    if (resp.message === "Not Found") {
      errorNotFound();
      loading.className = "loadingNone";
      return;
    } else {
      setDataHTML(resp);
      setTimeout(() => {
        loading.className = "loadingNone";
        card.className = "Card";
      }, 2000);
    }
  } catch (e) {
    console.log(e);
  }
};

// creación del método submit
const handleSetSubmit = (e) => {
  e.preventDefault();
  const userName = inputName.value;
  if (userName.trim() === "") {
    errorMessage();
    return;
  }
  handleGetGithubUser(userName);
  inputName.value = "";
};

inputName.addEventListener("focus", () => {
  window.innerWidth < 720 && (card.className = "hiddenCard");
});
// añadiendo evento de Submit al form
searchForm.addEventListener("submit", (e) => handleSetSubmit(e));
