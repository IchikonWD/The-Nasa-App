const router = require("express").Router();

const landings = require("../controllers/landings");
const neas = require("../controllers/neas");

// Landings
router.get(
  "/astronomy/landings:minimum_mass?:from?:to?",
  landings.getAllLandings
);
router.get("/astronomy/landings/mass/:mass", landings.getOneLandingMass);
router.get("/astronomy/landings/class/:class", landings.getAllLandingClass);

// NEAS
router.get("/astronomy/neas:class?:from?:to?", neas.getNeas);

module.exports = router;
