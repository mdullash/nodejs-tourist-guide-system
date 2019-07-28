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
	},
	
	insert: function(user, callback){
		var sql = "insert into registration values(null,'"+ user.fname+"','"+ user.mobile+"','"+ user.email+"','"+ user.pass+"','user')"
		db.execute(sql, function(success){
			callback(success);
		});
	},

	delete: function(user, callback){
		var sql = "delete from registration where id="+user.id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}