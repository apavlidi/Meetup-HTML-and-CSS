import React from "react";
// const moreInfoButton = document.querySelector(".intro__more-info");
// const showMoreInfo = () => {
//     document.querySelector(".more-info").classList.remove('more-info--hidden')
// }
// moreInfoButton.addEventListener('click', showMoreInfo);


function myFun() {
    return "More info...";
}

const MoreInfo = () =>
    <>
        <button onClick={myFun}>More info</button>
        <section className="more-info more-info--hidden">
            <h2>More info...</h2>
        </section>
    </>

export {MoreInfo};
