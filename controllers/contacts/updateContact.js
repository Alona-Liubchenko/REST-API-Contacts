const contactsOperations = require("../../models/contacts");

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await contactsOperations.updateContact(contactId, req.body);
  if (!contact) {
    const error = new Error(`Contact with id =${contactId} not found`);
    error.status = 404;
    throw error;
  }
  res.json({
    status: "success",
    code: 200,
    data: { contact },
  });
};

module.exports = updateContact;