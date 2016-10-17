var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.listen(3000);
var http = require('http');
// var url = require('url');
// var url_parts = url.parse(request.url, true);
// var query = url_parts.query;
app.use(express.static('.'));
//app.use(express.static(path.join(__dirname, 'public')));


    app.get('/', function(req, res) {
        res.sendFile(__dirname + "/" + "newwebpage.html");
    });
	
	
	// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
	app.get('/maxnumber', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   


var jason = [{
    "no1" : "83"
    
},
{
    "no1" : "55"
    
},
{
    "no1" : "32"
    
},
{
    "no1" : "843"
    
},
{
    "no1" : "177"
    
}
];
var max = 0;
var i = 0;
arrlength = jason.length;
for(i=0; i < jason.length; i++){
      var value = Number(jason[i].no1);
      if (value > max)
      {
        max = value;
      }
   }

   

res.send(JSON.stringify({
                    "max": max,
                }));
});


app.get('/oneevenNumber', urlencodedParser, function (req, res){
var evennum = [{
    "num3" : "1"
    
},
{
    "num3" : "5"
    
},
{
    "num3" : "88"
    
},
{
    "num3" : "9"
    
},
{
    "num3" : "7"
    
}
];
		
	var evenarrlength = evennum.length;
   
   for(var i=0;i<evenarrlength;i++){
	   var check = Number(evennum[i]["num3"]);
       if(check%2===0){	   
	   res.send(JSON.stringify({
					"result": "true"
				}));
	   }     
     }
	res.send(JSON.stringify({
					"result": "false"
	}));

		

});

app.get('/allevenNumber', urlencodedParser, function (req, res){
var allevennum = [{
    "num4" : "6"
    
},
{
    "num4" : "4"
    
},
{
    "num4" : "2"
    
},
{
    "num4" : "8"
    
},
{
    "num4" : "20"
    
}
];
		
	var allevenarrlength = allevennum.length;
   
   for(var i=0;i<allevenarrlength;i++){
	   var check = Number(allevennum[i]["num4"]);
       if(check%2===1){	   
	   res.send(JSON.stringify({
					"result1": "false"
				}));
	   }     
     }
	res.send(JSON.stringify({
					"result1": "true"
	}));

		

});



app.get('/averageNumber', urlencodedParser, function (req, res){
var avgnum = [{
    "num2" : "8"
    
},
{
    "num2" : "5"
    
},
{
    "num2" : "3"
    
},
{
    "num2" : "9"
    
},
{
    "num2" : "7"
    
}
];
	
	var averageNumber = 0;
	var avgresult = 0;
	var avgarrlength = avgnum.length;
	for(var i=0;i<avgarrlength;i++){
		averageNumber = averageNumber+ Number (avgnum[i]["num2"]);

	}
avgresult = averageNumber/avgarrlength;
	res.send(JSON.stringify({
                    "avg": avgresult,
                }));
});




app.post('/getTwiceString/:string1', function (req, res){
	console.log("------++++-----"+req.params.string1);
	var somevar = req.params.string1;
	
	

	var stringchecktwice = [
	{
		"num5" : "harry"
		
	},
	{
		"num5" : "potter"
		
	},
	{
		"num5" : "potter"
		
	},
	{
		"num5" : "hogwards"
		
	},
	{
		"num5" : "dumberdore"
		
	},
	{
		"num5" : "harry"
		
	}
	];
		
	function findStringInArrayTwice(stringchecktwice,somevar){
		var stringlength = stringchecktwice.length;
		for(var i=0;i<stringlength;i++){
			console.log("------++++-----"+req.params.string1);
			if(somevar.trim() === (String (stringchecktwice[i]["num5"]).trim()))
			{
				for(var j=i+1;j<stringlength;j++){
					if(somevar.trim() === (String (stringchecktwice[j]["num5"]).trim())){
						console.log("------++++-----"+req.params.string1);
						res.end(JSON.stringify({
							"result": "true"
						}));
					}
				}			
			}
		}
		res.end(JSON.stringify({
					"result": "false"
				}));

	}
	findStringInArrayTwice(stringchecktwice,somevar);

});



app.post('/checkstringonce/:string2', function (req, res){
	console.log("------++++-----"+req.params.string2);
	var somevar2 = req.params.string2;
	
	

	var stringcheckonce = [
	{
		"num6" : "harry"
		
	},
	{
		"num6" : "potter"
		
	},
	
	{
		"num6" : "hogwards"
		
	},
	{
		"num6" : "dumberdore"
		
	},
	
	];
		
	function findStringInArrayOnce(stringcheckonce,somevar1){
		var stringlength = stringcheckonce.length;
		for(var i=0;i<stringlength;i++){
			console.log("------++++-----"+req.params.string1);
			if(somevar1.trim() === (String (stringcheckonce[i]["num6"]).trim()))
			{
						res.end(JSON.stringify({
							"result1": "true"
						}));
					}
				}			
		
		res.end(JSON.stringify({
					"result1": "false"
				}));

	}
	findStringInArrayOnce(stringcheckonce,somevar2);

});



