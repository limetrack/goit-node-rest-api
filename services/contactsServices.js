import { Contact } from "../models/contact.js";

export async function listContacts() {
  return await Contact.findAll();
}

export async function getContactById(contactId) {
  return await Contact.findByPk(contactId);
}

export async function addContact(name, email, phone) {
  return await Contact.create({ name, email, phone });
}

export async function removeContact(contactId) {
  const contact = await getContactById(contactId);

  if (!contact) return null;

  await contact.destroy();

  return contact;
}

export async function updateContact(contactId, updates) {
  const contact = await getContactById(contactId);

  if (!contact) return null;

  await contact.update(updates);
  
  return contact;
}

export async function updateStatusContact(contactId, updates) {
  return await updateContact(contactId, updates);
}
