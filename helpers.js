const environment = process.env.DB_ENV;

//checks if environment is production and returns a safe error message for users
//else returns message useful for development
const returnSafeErrorMessage = (res, message, error) => {
  if (environment === "production") {
    res.status(500).json({ message });
  } else {
    console.log("Get categories error", error);
    res.status(500).json({ message, error });
  }
};

module.exports = {
  returnSafeErrorMessage
};
