const { Sequelize } = require("sequelize");
const { DATABASE_PATH, PORT } =
  require("dotenv").config().parsed;

  const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: DATABASE_PATH,
    define: {
      timestamps: false,
    }
  });

sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((error) => console.error("Unable to connect to the database:", error));

module.exports = sequelize;