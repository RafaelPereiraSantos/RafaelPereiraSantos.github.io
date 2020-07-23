window.onload = function() {

  const about_me_link = document.getElementById("about-me-link");
  const about_me_element = document.getElementById("about-me");

  about_me_link.onclick = function() {
    about_me_element.scrollIntoView();
    return false;
  }
}
