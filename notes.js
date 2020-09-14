const { version } = require("mongoose");

/*let data =
[
    {
    "Pid" : "4",
    "PName" : " assfd",
    "PType" : [
                   {
                    "pty": "xyz",
                    "version": 101
                    },
                    {
                        "pty": "gc",
                        "version": 102
                        }
                ]
    
    },

    {
        "Pid" : "5",
        "PName" : " cvcd",
        "PType" : [
                       {
                        "pty": "xyz",
                        "version": 103
                        },
                        {
                            "pty": "gc",
                            "version": 104
                            }
                    ]
        
        }

]
console.log('data[0].PType',data[0].PType)
console.log('xyz',data[0].PType[0].version)
var Ptype = data[0].PType;
console.log('pty',Ptype)
let arr = [];
for(let i=0;i<Ptype.length;i++)
{
    arr.push(Ptype[i].version)
}
console.log('arr',arr);
let arr1 =[];
for(let x =0;x<data.length;x++){
  
    console.log('dysw',data[x].PType);
    let y = data[x].PType
    for(let j=0; j<y.length; j++)
    {
        console.log('version',y[j].version)
        arr1.push(y[j].version)
    }
}
console.log('arr1',arr1) */


/*var info = {
    "name " : "Charles",
    "age" : "20",
    "city" : " San Diego",
    "State" : " CA"
};
info.city=undefined;
console.log(info.city);*/

var fs = require('fs');

var content = fs.readFileSync('sample.json', 'utf8');
console.log(content);
var content1 = fs.appendFile('sample.txt', 'appended text', function (err) {
    if (err) throw err;
    console.log('saved');
});
var content2 = fs.writeFile('write.txt','written from the function',function(err){
    if(err) throw err;
    console.log('text added');
});
/*var content3 = fs.unlink('deletefile.txt',function(err){
    if(err) throw err;
    console.log('File Deleted');
});*/
setTimeout(function(){ alert("Hello"); }, 4000);



/*let employee = [
    {
        "Id": '1', "Name": 'nalanda1', "Salary": [{
            "pty": "xyz",
            "version": 101
        }, {
            "pty": "xyz",
            "version": 102
        }, {
            "pty": "xyz",
            "version": 103
        }]
    },
    {
        "Id": '2', "Name": 'nalanda2', "Salary": [{
            "pty": "xyz",
            "version": 104
        }, {
            "pty": "xyz",
            "version": 105
        }, {
            "pty": "xyz",
            "version": 106
        }]
    },
    {
        "Id": '3', "Name": 'nalanda3', "Salary": [{
            "pty": "xyz",
            "version": 107
        }, {
            "pty": "xyz",
            "version": 108
        }, {
            "pty": "xyz",
            "version": 109
        }]
    },
    {
        "Id": '4', "Name": 'nalanda4', "Salary": [{
            "pty": "xyz",
            "version": 110
        }, {
            "pty": "xyz",
            "version": 111
        }, {
            "pty": "xyz",
            "version": 112
        }]
    },
    {
        "Id": '5', "Name": 'nalanda5', "Salary": [{
            "pty": "xyz",
            "version": 113
        }, {
            "pty": "xyz",
            "version": 114
        }, {
            "pty": "xyz",
            "version": 115
        }]
    },
    {
        "Id": '6', "Name": 'nalanda6', "Salary": [{
            "pty": "xyz",
            "version": 116
        }, {
            "pty": "xyz",
            "version": 117
        }, {
            "pty": "xyz",
            "version": 118
        }]
    }
]
let arr = [];
for (let i = 0; i < employee.length; i++) {
    arr.push(employee[i].Salary[i])
}
console.log('array1 ' , arr); */



