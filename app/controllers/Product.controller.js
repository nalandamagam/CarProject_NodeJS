const Product = require('../models/Product.model');
const jwt = require('jsonwebtoken');
const accessTokenSecret = 'crudapplication';

const users = [
    {
        username: 'john',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'anna',
        password: 'password123member',
        role: 'member'
    }
];

exports.login = (req, res) => {

    // Read username and password from request body
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.json({ 'message': 'Username or password incorrect' });
    }
}


exports.authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};


exports.findAll = (req, res) => {
    console.log('inside my function');
    let arr = [];
    Product.find().then(data => {

        res.send(data)
    }).catch(error => {
        res.status(400).send({
            message: ' Error Found '
        });
    })
    // res.send('Function controller ON');
}
exports.find = (req, res) => {
    console.log(' Inside get api', req.params.PId);
    if (req.params.PId) {
        console.log('Inside if block in get api');
        Product.find({
            PId: req.params.PId
        },
            function (error, result) {
                if (error) {
                    res.json({
                        message: ' DB find fails'
                    });
                }
                else {
                    res.json({
                        message: 'DB find success',
                        result: result
                    });

                }
            }
        );
    } else {
        response.json({
            message: 'PName not provided'
        });
    }
}

exports.create = async (req, res) => {
    try {
        console.log('inside create fnc', req.body);
        const product = new Product({
            PId: req.body.PId,
            PName: req.body.PName,
            PType: req.body.PType
        });
        // to save into database
        console.log('Product details : ', product);
        let data = await product.save()
        console.log('data', data)
        res.send(data)
    } catch (err) {
        console.log(err);
        /*.then(data => {
            res.send(data);
        }).catch(error => {
            res.status(400).send({
                message: ' Error Found '
            });
        })*/

    }
}

exports.updateProduct = (req, res) => {
    console.log('Inside Update api', req.params.PId);
    if (req.params.PId) {
        console.log('Inside update if block');
        Product.update({
            PId: req.params.PId,
            PName: req.body.PName,
            PType: req.body.PType

        }, function (error, result) {
            if (error) {
                res.json({
                    message: ' DB update fails'
                });
            }
            else {
                res.json({
                    message: 'DB update success'
                });
            }

        }

        );

    } else {
        res.json({
            message: 'PName not provided'
        });
    }

}

exports.delete = (req, response) => {
    console.log('Inside Delete API', req.params.PName);
    //let PId : req.params.PId;
    /* if(req.params.id){
         Product.findByIdAndRemove(
             {
                 _id : req.params.id
             },
             function(err,res){
                 if(err){
                     response.json({
                         message : 'DB delete failed'
                     });
                 }
                 else {
                     response.json({
                         message : 'DB delete success'
                     });
                 }
             }
         );
     }else {
         return res.json({
             status : false,
             message : ' Id not provided'
         }); 
     }*/
    /* if(req.params.PId){
         Product.deleteMany(
             {
                 PId : req.params.PId
             },
             function(error,result){
                 if(error){
                     response.json({
                         message : ' DB delete fails'
                     });
                 }
                 else{
                     response.json({
                         message : 'DB del success'
                     });
                 }
             }
 
         );
     }else{
         response.json({
             message : 'PId not provided'
         });
     }*/
    if (req.params.PName) {
        console.log('Inside if');
        Product.deleteMany(
            {
                PName: req.params.PName
            },
            function (error, result) {
                if (error) {
                    response.json({
                        message: ' DB delete fails'
                    });
                }
                else {
                    response.json({
                        message: 'DB del success'
                    });
                }
            }

        );
    } else {
        response.json({
            message: 'PName not provided'
        });


    }


}

