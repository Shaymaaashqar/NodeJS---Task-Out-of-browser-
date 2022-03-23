var fs=require('fs');
var users ; 
var bufferString; 
var user=[{"UserName":"Tamer","BirthDate (MM/DD/YYYY)":"05/25/1994","Address":"Nablus","MobileNumber":"0599999999","Gender (M/F)":"M"},{"UserName":"Shaymaa","BirthDate (MM/DD/YYYY)":"01/01/1990","Address":"Ramallah","MobileNumber":"0560000000","Gender (M/F)":"F"},{"UserName":"Karam","BirthDate (MM/DD/YYYY)":"01/01/1999","Address":"Tubas","MobileNumber":"0511111111","Gender (M/F)":"M"}];
function readCSV(file){
fs.readFile(file,'utf-8',function(error,data){
//console.log(data);
bufferString = data.toString(); 
users = bufferString.split('\n').filter(element => element);
//console.log(users);
var arrObj = [];
var headers = users[0].split(',');
//console.log(headers);
for(var i = 1; i < users.length; i++) {
  var info = users[i].split(',');
  var obj = {};
  for(var j = 0; j < info.length; j++) {
     obj[headers[j].trim()] = info[j].trim();
  }
  arrObj.push(obj);

}

const t=JSON.stringify(arrObj);
return console.log(t);
})
}
function readPlain(file){
  fs.readFile(file,'utf-8',function(error,data){;
 // console.log(data);
})
  }

function saveToFile(user){
const jsonContent= JSON.stringify(user);
fs.writeFile("./users.json",jsonContent,"utf-8",(error)=>{
  if(error){
    return console.log(error);
  }
  console.log("The file saved succesfully");
});
}

function readJsonFile(file){
  fs.readFile(file,'utf-8',function(error,data){;
    console.log(data);});
}
readCSV('./users.csv');
readPlain('./input.txt');
saveToFile(user);
readJsonFile('./users.json');