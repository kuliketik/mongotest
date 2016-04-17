var mongo = require('mongodb');

var client = mongo.MongoClient;

var url = 'mongodb://localhost:27017/mydb';

client.connect(url, function(err, db){
	if(err){
		console.log('error');
	}else{
		console.log('connected');
		var coll = db.collection('users');
		var user1 = {name:'rudi', umur:'12', id:'admin'};
		var user2 = {name:'ana', umur:'23', id:'user'};
		var user3 = {name:'ani', umur:'21', id:'admin'};
		var user4 = {name:'anu', umur:'23', id:'user'};
		coll.insert([user1, user2, user3, user4], function(err, res){
			if(err){
				console.log('failed inserting data');
			}else{
				console.log('success inserting data');
			}
			db.close()
		});
	}
});