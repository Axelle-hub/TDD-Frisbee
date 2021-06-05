var app = require("../app")
var request = require("supertest")

test("Ajout d'un lieu sur la map - create-pin", async (done) => {
 await request(app).post('/createPin')
   .send({ Name: "Stade de foot", Address: "56 Boulevard Pereire 75017 Paris", Sport: "foot", Description: "Super stade de foot", PlacesPicture: "image", PlacesLatitude: "123", PlacesLongitude: "142" })
   .expect(200)
   .expect({result: true});
 done();
});

