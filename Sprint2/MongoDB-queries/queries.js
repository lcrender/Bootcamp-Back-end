//db.createCollection("data")
db.data.find();
db.data.find({}, {name:1,restaurant_id:1,borough:1,cuisine:1});
db.data.find({}, {name:1,restaurant_id:1,borough:1,cuisine:1,_id:0});
db.data.find({}, {name:1,restaurant_id:1,borough:1,address:{zipcode:1},_id:0});
db.data.find({borough:"Bronx"});
db.data.find({borough:"Bronx"}).limit(5);
db.data.find({borough:"Bronx"}).skip(5).limit(5);
db.data.find({"grades.score":{$gt:90}});
db.data.find({$and: [{"grades.score":{$gt:80}}, {"grades.score": {$lt:100}}]});
db.data.find({"address.coord":{$lt:-95.754168}});
db.data.find({$and: [{"cuisine": {$ne: "American "}}, {"grades.score":{$gt:70}}, {"address.coord": {$lt:-65.754168}}]});
db.data.find({$and: [{"cuisine": {$ne: "American "}}, {"grades.grade": "A"}, {"borough": {$ne: "Brooklyn"}}]}, {name:1, cuisine:1}).sort({"cuisine": -1});
db.data.find({ name:/^Wil/ }, {restaurant_id:1,name:1,borough:1,cuisine:1});
db.data.find({ name:/ces$/ }, {restaurant_id:1,name:1,borough:1,cuisine:1});
db.data.find({ name:/Reg/ }, {restaurant_id:1,name:1,borough:1,cuisine:1});
db.data.find({$and: [{"borough":"Bronx"}, { $or: [ { "cuisine":/^American/ }, { "cuisine":"Chinese" } ] }]},{name:1,cuisine:1});
db.data.find({$or:[{"borough":"Staten Island"}, {"borough":"Queens"}, {"borough":"Bronx"}, {"borough":"Brooklyn"}]}, {restaurant_id:1,name:1,borough:1,cuisine:1});
db.data.find({$nor:[{"borough":"Staten Island"}, {"borough":"Queens"}, {"borough":"Bronx"}, {"borough":"Brooklyn"}]}, {restaurant_id:1,name:1,borough:1,cuisine:1});
db.data.find({"grades.score":{$lt:10}}, {restaurant_id:1,name:1,borough:1,cuisine:1});
db.data.find({$and: [{"cuisine": "Seafood"}, {$nor: [{ "cuisine":/^American/ }, { "cuisine":"Chinese" }, {name:/^Wil/}]}]} ,{restaurant_id:1,name:1,borough:1,cuisine:1});
db.data.find({$and: [{"grades.grade": "A"}, {"grades.score": 11}, {"grades.date": ISODate("2014-08-11T00:00:00Z")}]} ,{restaurant_id:1,name:1,grades:1});
//23 no hay ninguno?
db.data.find({$and: [{"grades.1.grade": "A"}, {"grades.1.score": 9}, {"grades.1,date": ISODate("2014-08-11T00:00:00Z")}]} ,{restaurant_id:1,name:1,grades:1});
db.data.find({$and: [{"address.coord.1": {$gte:42}}, {"address.coord.1": {$lte:52}}]},{restaurant_id:1,name:1,address:1}).sort({"name": 1});
//25 esto es ascendente o descendente?
db.data.find({},{name:1}).sort({"name": -1});
db.data.find({}, { cuisine: 1, borough: 1 }).sort({ "cuisine": 1, "borough": -1 });
db.data.find({ address: {$exists: false}});
db.data.find({ address: null});
db.data.find({"address.coord": { $type: "double"}});
//30
db.data.find({ name:/mon/ }, {name:1,borough:1,"address.coord":1,cuisine:1});
db.data.find({ name:/^Mad/ }, {name:1,borough:1,"address.coord":1,cuisine:1});