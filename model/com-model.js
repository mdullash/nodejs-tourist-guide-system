var db = require('./db');


module.exports = {
	get: function(userId, callback){
		var sql = "select * from comment where id="+userId;
		db.getResults(sql, function(result){

			if(result.length >0){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	getAll: function(callback){
		var sql = "select * from comment";
		db.getResults(sql, function(results){
			callback(results);
		});
	},
	
	insert: function(user, callback){
		var sql = "insert into comment values(null, '"+ user.uemail+"','"+ user.comment+"')"
		db.execute(sql, function(success){
			callback(success);
		});
	},

	delete: function(user, callback){
		var sql = "delete from admin where id="+user.id;
		db.execute(sql, function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}