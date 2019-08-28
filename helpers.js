const environment = process.env.DB_ENV;

//checks if environment is production and returns a safe error message for users
//else returns message useful for development
console.log(environment);
const returnSafeErrorMessage = (res, message, error) => {
  if (environment === "production") {
    res.status(500).json({ message });
  } else {
    console.log(`
      ********************
      ${message}
      ********************
      ${error}`);
    res.status(500).json({ message });
  }
};

module.exports = { returnSafeErrorMessage };
