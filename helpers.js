const environment = process.env.DB_ENV;

//checks if environment is production and returns a safe error message for users
//else returns message useful for development
const returnSafeErrorMessage = res => {
  if (environment === "production") {
    res.status(500).json({ message: "Error getting categories" });
  } else {
    console.log("Get categories error", error);
    res.status(500).json({ message: "Error getting categories", error });
  }
};

module.exports = {
  returnSafeErrorMessage
};
