const authCaptcha = async (req, res, next) => {
  const formData = JSON.parse(req.body);
  const human = await validateHuman(formData.token);
  if (!human) {
      res.status(400);
      res.json({errors: "Not an human"})
  }

  async function validateHuman(token: string): Promise<Boolean> {
    const secret = process.env.SECRET_KEY;
    const response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`,
      {
        method: "POST",
      }
    );
    const data = await response.json();
    return data.success;
  }
  return next();
};

module.exports = authCaptcha;
