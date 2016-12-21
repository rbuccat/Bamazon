var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "P00P00girl^",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  items();
})

var items = function(){
	console.log("\nWelcome to Bamazon.com!!\n");
	var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
    	for (var i = 0; i < res.length; i++) {
        	console.log("Item ID: " + res[i].item_id + " || Product: " + res[i].product_name + " || Price: " + res[i].price);
      	}
    console.log("\n");  	
    inquirer.prompt({
    		name: "id",
    		type: "input",
    		message: "What ID would you like to buy?",
    		validate: function(value) {
      		if (isNaN(value) === false) {
        		return true;
      		}
      			return false;
    		}
    	}).then(function(answer){
    		for(var i = 0; i < res.length; i++){
    			if(res[i].item_id === parseInt(answer.id)){
    				var chosenID = res[i];	
    				inquirer.prompt({
    					name: "quantity",
    					type: "input",
    					message: "How many would you like to buy?",
    					validate: function(value) {
      						if (isNaN(value) === false) {
        						return true;
      						}
      							return false;
    					}
    				}).then(function(answer){
    					if(parseInt(answer.quantity) <= chosenID.stock_quantity){
    						var newQuantity = chosenID.stock_quantity - (parseInt(answer.quantity));
							connection.query("UPDATE products SET ? WHERE ?", [{
                				stock_quantity: newQuantity
              				}, {
                				item_id: chosenID.item_id
              				}], function(err, res) {
									var totalPrice = parseFloat(chosenID.price * parseInt(answer.quantity)).toFixed(2);
									console.log("\n--------------------------");
									console.log("Your total for buying " + parseInt(answer.quantity) + " " + chosenID.product_name + " is $" + totalPrice);
									console.log("--------------------------\n");
									items();
              				});
						}else{
							console.log("\n--------------------------");
							console.log("Insufficient quantity!");
							console.log("--------------------------\n");
							items();
						}
    				})
    			}
    		}
    	})
    })
};