window.onload = function() {

  const about_me_link = document.getElementById("about-me-link");
  const about_me_element = document.getElementById("about-me");

  const background_link = document.getElementById("background-link");
  const background_element = document.getElementById("background");

  const knowledge_link = document.getElementById("knowledge-link");
  const knowledge_element = document.getElementById("knowledge");

  const tldr_link = document.getElementById("tldr-link");
  const tldr_element = document.getElementById("tldr");

  const contact_link = document.getElementById("contact-link");
  const contact_element = document.getElementById("contact");

  links = [
    about_me_link,
    background_link,
    knowledge_link,
    tldr_link,
    contact_link
  ]

  elements = [
    about_me_element,
    background_element,
    knowledge_element,
    tldr_element,
    contact_element
  ]


  links.forEach((item, index) => {
    item.onclick = () => {
      console.log(index)
      elements[index].scrollIntoView();
      return false;
    }
  })

}
