const validate = (schema) => async (req, res, next) => {
  try {
    const parse = await schema.parseAsync(req.body);

    req.body = parse;
    next();
  } catch (err) {
    const message = err.message[1];
    return res.status(400).json({ msg: message });
  }
};

module.exports = validate;
