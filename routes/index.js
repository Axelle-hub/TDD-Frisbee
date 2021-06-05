var express = require('express');
var router = express.Router();

// ajout d'un lieu sur la carte
router.post('/createPin', (req, res) => {
  let Name = req.body.Name;
  let Address = req.body.Address;
  let Sport = req.body.Sport;
  let Description = req.body.Description;
  let PlacesPicture = req.body.PlacesPicture;
  let PlacesLatitude = req.body.PlacesLatitude;
  let PlacesLongitude = req.body.PlacesLongitude;

  if (!Name || !Address || !Sport || !Description || !PlacesPicture || !PlacesLatitude || !PlacesLongitude) {
    res.json({ result: false, message: "lieu non ajouté"});
  } else {
    // Traitement de l'ajout d'un lieu sur la carte
    res.json({ result: true, messsage: "lieu ajouté" });
  }
});


module.exports = router;
