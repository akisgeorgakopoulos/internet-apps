const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//const { Parser } = require('json2csv');

const Article = require('../models/Article');

mongoose
	.connect('mongodb://localhost:27017/Internet_Apps', {
		useNewUrlParser: true,
		useUnifiedTopology: true
    })
    .then(() => console.log('Connected to MongoDB'))
	.catch((err) => console.error('Problem connecting to MongoDB', err));



router.get('/:Name1',
	async (req, res) => {

        let r_array = [];
        
        let result = {
            name: '',
            number_of_articles: '',
            first_date: '',
            last_date: '',
            year_with_most: ''
        };

        const x1 = req.params.Name1;
        r_array.push(JSON.parse(JSON.stringify(result)));
        r_array[r_array.length -1].name = req.params.Name1;

        const x2 = req.query.Name2;
        if (x2 != '' ) {
            r_array.push(JSON.parse(JSON.stringify(result)));
            r_array[r_array.length -1].name = req.query.Name2;
        }
        
        const x3 = req.query.Name3;
        if (x3 != '')  {
            r_array.push(JSON.parse(JSON.stringify(result)));
            r_array[r_array.length -1].name = req.query.Name3;
        }
        
        const x4 = req.query.Name4;
        if (x4 != '') {
            r_array.push(JSON.parse(JSON.stringify(result)));
            r_array[r_array.length -1].name = req.query.Name4;
        }
        
        const x5 = req.query.Name5;
        if (x5 != '') {
            r_array.push(JSON.parse(JSON.stringify(result)));
            r_array[r_array.length -1].name = req.query.Name5;
        }
        
        const x6 = req.query.Name6;
        if (x6 != '') {
            r_array.push(JSON.parse(JSON.stringify(result)));
            r_array[r_array.length -1].name = req.query.Name6;
        }
        
        const x7 = req.query.Name7;
        if (x7 != '') {
            r_array.push(JSON.parse(JSON.stringify(result)));
            r_array[r_array.length -1].name = req.query.Name7;
        }
        
        const x8 = req.query.Name8;
        if (x8 != '') {
            r_array.push(JSON.parse(JSON.stringify(result)));
            r_array[r_array.length -1].name = req.query.Name8;
        }
        
        const x9 = req.query.Name9;
        if (x9 != '') {
            r_array.push(JSON.parse(JSON.stringify(result)));
            r_array[r_array.length -1].name = req.query.Name9;
        }
        
        const x10 = req.query.Name10;
        if (x10 != '') {
            r_array.push(JSON.parse(JSON.stringify(result)));
            r_array[r_array.length -1].name = req.query.Name10;
        }
        
        //console.log(r_array);

        let i;
        for (i=0 ;i<= r_array.length-1 ;i++){
           
            let k = RegExp(".*" + r_array[i].name + ".*","i");

            let rtt = await Article.find()
                                    .or( [{ title : k},{ abstract : k}] )
                                    .sort({publish_time: 1});
                                                                    
            
            //how many references we have in our database
            let length_a = rtt.length;
            r_array[i].number_of_articles = length_a;
             
            //if we got no record -> zero
            if (length_a === 0){
                //console.log("no record matches");
                r_array[i].first_date = '-';
                r_array[i].last_date = '-';
                r_array[i].year_with_most = '-';
                //not any other query needed
            }
            else{
                //find the last non void publish_time
                const ln = length_a -1;
                let t = ln;
                while( rtt[t].publish_time == '' ){
                    t = t-1;
                    if (t == -1) {
                        t = t + 1;//if no non void date then void as last_date
                        break;
                    }
                }

                //console.log(r_array[i]);
                //if it is all void then just print the void
                r_array[i].last_date = rtt[t].publish_time;
                //console.log(rtt[i].publish_time);
                
                //find the first non void publish_time
                let j = 0;
                while( rtt[j].publish_time == ''){
                    j = j + 1;
                    if (j == length_a) {
                        j = j - 1;//if no non void date then void as first_date
                        break;
                    }
                }
                
                //if it is all void then just print the void
                r_array[i].first_date = rtt[j].publish_time;
                //console.log(rtt[j].publish_time);

                //find year with most published articles
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

                r_array[i].year_with_most = yahre[0]._id;

            }            
        
        }
        
        //console.log(r_array);
        res.send(r_array);

           
    }
);



module.exports = router;
