import  { addContact, getContactById, removeContact, listContacts } from './contact.js'

// Приклади викликів функцій
(async () => {
  // Додавання нового контакту
  const newContact = await addContact(
    "New Contact",
    "new@example.com",
    "123-456-7890"
  );
  console.log("Додано новий контакт:", newContact);

  // Отримання контакту за id
  const contactIdToFind = newContact.id;
  const foundContact = await getContactById(contactIdToFind);
  if (foundContact) {
    console.log("Знайдено контакт за id:", foundContact);
  } else {
    console.log("Контакт не знайдений.");
  }

  // Видалення контакту за id
  const contactIdToRemove = newContact.id;
  const removedContact = await removeContact(contactIdToRemove);
  if (removedContact) {
    console.log("Видалено контакт:", removedContact);
  } else {
    console.log("Контакт не знайдений.");
  }

  // Отримання списку всіх контактів
  const allContacts = await listContacts();
  if (allContacts.length > 0) {
    console.log("Список всіх контактів:", allContacts);
  } else {
    console.log("Список контактів порожній.");
  }
})();
