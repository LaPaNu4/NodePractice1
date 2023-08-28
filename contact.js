import fs from "fs/promises";
import path from "path";
import { nanoid } from "nanoid";

const contactsPath = path.resolve("db", "contacts.json");

export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    return contacts;
  } catch (error) {
    console.error("Помилка при зчитуванні файлу:", error);
    return [];
  }
}

export async function getContactById(contactId) {
try {
    const data = await fs.readFile(contactsPath, 'utf-8');
    const contacts = JSON.parse(data);

    const contact = contacts.find(contact => contact.id === contactId);
    return contact || null;
  } catch (error) {
    console.error("Помилка при зчитуванні файлу:", error);
    return null;
  }
}

export async function removeContact(contactId) {
 try {
   const data = await fs.readFile(contactsPath, "utf-8");
   const contacts = JSON.parse(data);

   const contactIndex = contacts.findIndex(
     (contact) => contact.id === contactId
   );

   if (contactIndex !== -1) {
     const removedContact = contacts.splice(contactIndex, 1)[0];

     await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

     return removedContact;
   } else {
     return null;
   }
 } catch (error) {
   console.error("Помилка при зчитуванні/запису файлу:", error);
   return null;
 }
}

export async function addContact(name, email, phone) {
try {
  const data = await fs.readFile(contactsPath, "utf-8");
  const contacts = JSON.parse(data);

  const newContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };

  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return newContact;
} catch (error) {
  console.error("Помилка при зчитуванні/запису файлу:", error);
  return null;
}
}
