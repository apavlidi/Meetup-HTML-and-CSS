const moreInfoButton = document.querySelector(".intro__more-info");
const showMoreInfo = () => {
    document.querySelector(".more-info").classList.remove('more-info--hidden')
}
moreInfoButton.addEventListener('click', showMoreInfo);
