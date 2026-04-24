const userRoutes = require("./users");
const authRoutes = require("./auth");
const documentRoutes = require("./documents");
const sinisterRoutes = require("./sinisters");
const requestRoutes = require("./requests");
const historyRoutes = require("./history");

function initRoutes(app) {
  app.use("/api/users", userRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/documents", documentRoutes);
  app.use("/api/sinisters", sinisterRoutes);
  app.use("/api/requests", requestRoutes);
  app.use("/api/history", historyRoutes);

  app.use(
    "/",
    (req, res, next) => {
      // Middleware
      console.log("middleware 1 homepage");
      next();
    },
    (req, res, next) => {
      // controller
      console.log("controller 1 homepage");
      res.status(200).json({
        message: "Bienvenue sur la route d'accueil",
      });
    },
  );
}

module.exports = initRoutes;
