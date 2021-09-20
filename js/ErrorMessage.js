//creación función del modales Error's
const errorMessage = () =>
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: "olvidaste colocar un UserName para buscar, ¡Intenta de nuevo!",
    confirmButtonText: "Reintentar",
  });
const errorNotFound = () => {
  Swal.fire({
    title: "Upps 404!",
    text: "Lo sentimos GitHub user no encontrado.",
    imageUrl: "./../assets/img/404.gif",
    imageWidth: 200,
    imageHeight: 200,
    imageAlt: "404 picture",
    confirmButtonText: "Reintentar",
  });
};
