const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//const { Parser } = require('json2csv');

//const Map = require('../models/Map');
const Article = require('../models/Article');

mongoose
	.connect('mongodb://localhost:27017/Internet_Apps', {
		useNewUrlParser: true,
		useUnifiedTopology: true
	})
	.catch((err) => console.error('Problem connecting to MongoDB', err));

console.log('Mongo is ok!!');

router.get('/:Name',
	async (req, res) => {

        var result = {
            name: req.params.Name,
            number_of_articles: '',
            first_date: '',
            last_date: '',
            year_with_most: ''
        };
        
        const x = req.params.Name;
        const k = RegExp(".*" + x + ".*","i");

        const rtt = await Article.find()
                                 .or( [{ title : k},{ abstract : k}] )
                                 .sort({publish_time: 1});
                                                                  
        
        //how many references we have in our database
        const length_a = rtt.length;
        result['number_of_articles'] = length_a;
        //console.log(length_a);
        //res.send(rtt);
        
        // //if we got no record -> zero
        if (length_a == 0){
            console.log("no record matches")
        }
        else{
            //find the last non void publish_time
            const ln = length_a -1;
            var i = ln;
            while( rtt[i].publish_time == '' ){
                i = i-1;
                if (i == -1) {
                    i = i + 1;
                    break;
                }
            }
            //if it is all void then just print the void
            result['last_date'] = rtt[i].publish_time;
            console.log(rtt[i].publish_time);
            
            // //find the first non void publish_time
            var j = 0;
            while( rtt[j].publish_time == ''){
                j = j + 1;
                if (j == length_a) {
                    j = j - 1;
                    break;
                }
            }
            
            //if it is all void then just print the void
            result['first_date'] = rtt[j].publish_time;
            console.log(rtt[j].publish_time);
        }
        

        // //find year with most published articles
        const yahre = await Article.aggregate([
            {
                $match: {
                    $or: [{
                        title: k
                    },
                    { 
                        abstract : k
                    }]
                }
            },
            {
                $group: {
                    _id: "$Year",
                    count: { $sum: 1 }
                }
            },
            { $sort: { 'count': -1 } },
            {$limit: 1},
            {$project: {_id:1} }
        ]);

        result['year_with_most'] = yahre[0]._id;
        res.send(result);

        //res.send("Clippers win the championship");
    
    }
);



module.exports = router;
