var app = require("../app")
var request = require("supertest")

test("Ajout d'un lieu sur la map - create-pin", async (done) => {
 await request(app).post('/createPin')
   .send({ Name: "Stade de foot", Address: "56 Boulevard Pereire 75017 Paris", Sport: "foot", Description: "Super stade de foot", PlacesPicture: "image", PlacesLatitude: "123", PlacesLongitude: "142" })
   .expect(200)
   .expect({result: true, messsage: "lieu ajouté"});
 done();
});


test("Envoyer un Frisbee - create-frisbee", async (done) => {
  await request(app).post('/create-frisbee')
  .send({userCreator: "Marie", userInvited: "Thomas", sport: "Football", address: "10 rue du chemin, 69000 Lyon", hourMeeting: "17h - 18h", dateMeeting: "10/05/2021", isAccepted: "true" })
  .expect(200)
  .expect({result: true, message: "Frisbee envoyé"});
  done();
});