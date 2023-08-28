const contactsSection = document.querySelector('.footer');
const contactsButton = document.querySelector('.intro-hobby');

scrollToContacts = () => {
  contactsSection.scrollIntoView({ behavior: "smooth" });
}

contactsButton.addEventListener('click', scrollToContacts);
