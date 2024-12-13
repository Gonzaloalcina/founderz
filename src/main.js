const tabs = document.querySelectorAll(".js--tabs");
const contents = document.querySelectorAll(".js--content");
const activeClass = "active";

// content dynamic padding
contents.forEach((content, index) => {
  content.style.paddingLeft = 8 * `${index + 1}` + "px";
});

// tabs interaction
tabs.forEach((tab) => {
  // event listener
  tab.addEventListener("click", (event) => {
    // handle tabs active classes
    const tabs = document.querySelectorAll(".js--tabs");
    tabs.forEach((tab) => {
      if (tab.classList.contains(`${activeClass}`)) {
        tab.classList.remove(`${activeClass}`);
      }
    });
    tab.classList.add(`${activeClass}`);
    // content comprobation
    const tabNumber = tab.innerHTML;
    contents.forEach((content, index) => {
      const contentNumber = content.innerHTML;
      // remove class to all elements
      if (content.classList.contains(`${activeClass}`)) {
        content.classList.remove(`${activeClass}`);
      }
      // add class to multiple ones
      if (contentNumber % tabNumber === 0) {
        content.classList.add(`${activeClass}`);
      }
    });
  });
});
