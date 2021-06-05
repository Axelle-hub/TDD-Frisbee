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


// envoyer un frisbee
router.post("/create-frisbee", (req, res) => {
  let userCreator = req.body.userCreator;
  let userInvited = req.body.userInvited;
  let sport = req.body.sport;
  let address = req.body.address;
  let hourMeeting = req.body.hourMeeting;
  let dateMeeting = req.body.dateMeeting;
  let isAccepted = req.body.isAccepted; 

  if (!userCreator || !userInvited || !sport || !address || !hourMeeting || !dateMeeting || !isAccepted) {
    res.json({result: false, message: "veuillez remplir tous les champs"});
  } else {
    res.json({result: true, message: "Frisbee envoyé"});
  }
});



module.exports = router;
