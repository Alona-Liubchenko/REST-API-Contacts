const Contact = require('../../models/contact')

const updateContact = async (req, res) => {
  const { contactId } = req.params;
  const contact = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
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
