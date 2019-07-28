var db = require('./db');


module.exports = {
	get: function(userId, callback){
		var sql = "select * from registration where id="+userId;
		db.getResults(sql, function(result){

			if(result.length >0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from registration";
		db.getResults(sql, function(results){
			callback(results);
		});
	}
}