import yargs from "yargs";

import {
  addContact,
  getContactById,
  removeContact,
  listContacts,
} from "./contact.js";

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allMovies = await listContacts();
      return console.log(allMovies);
    case "get":
      const oneMovie = await getContactById(id);
      return console.log(oneMovie);

    case "add":
      const newMovie = await addContact(name, email, phone);
      return console.log(newMovie);
    case "remove":
      const deleteMovie = await removeContact(id);
      return console.log(deleteMovie);

    default:
      console.warn("Unknown action type!");
  }
}
const { argv } = yargs(process.argv.slice(2));
invokeAction(argv);
