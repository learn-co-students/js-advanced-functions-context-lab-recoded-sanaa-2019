/* Your Code Here */
function createEmployeeRecord(arr){
 let obj= {
   firstName:arr[0],
   familyName:arr[1],
   title:arr[2],
   payPerHour:arr[3],
   timeInEvents:[],
   timeOutEvents:[],
   
 }
 return obj
}

function createEmployees(arr){
  return arr.map(obj=>createEmployeeRecord(obj));
}
function createTimeInEvent(date_time){
 
  this.timeInEvents.push({type:"TimeIn",hour:parseInt(date_time.split(" ")[1]),date:date_time.split(" ")[0]})
  return this

}
function createTimeOutEvent(date_time){
   this.timeOutEvents.push({type:"TimeOut",hour:parseInt(date_time.split(" ")[1]),date:date_time.split(" ")[0]})
  return this
}
function hoursWorkedOnDate(datework){
    let startwork=this.timeInEvents.find(function(start){
        return start.date===datework;
    })
    let endwork=this.timeOutEvents.find(function(end){
        return end.date===datework;
    })
if(endwork==undefined||startwork==undefined){ return 0; }else return (endwork.hour-startwork.hour)/100;
}
function wagesEarnedOnDate(date){
    return (this.payPerHour)*hoursWorkedOnDate.call(this,date)
}
let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
createTimeInEvent.call(cRecord, "44-03-14 0900")
createTimeOutEvent.call(cRecord, "44-03-14 2100")
createTimeInEvent.call(cRecord, "44-03-15 0900")
createTimeOutEvent.call(cRecord, "44-03-15 1100")
//console.log(wagesEarnedOnDate.call(emRec,'2014-02-28'))
//Given an array of multiple employees
let a=[["Rafiki", "", "Aide", 10],
["Simba", "", "King", 100]].map(function(e){
    let a=createEmployeeRecord(e);

    return a;
})
let times=[[["2019-01-01 0900", "2019-01-01 1300"],
["2019-01-02 1000", "2019-01-02 1300"]],[["2019-01-11 0900", "2019-01-11 1300"],
["2019-01-12 1000", "2019-01-12 1300"]]]

a.forEach(function(e,index){
    createTimeInEvent.call(e,times[index][0][0]);
    createTimeInEvent.call(e,times[index][1][0]);
    createTimeOutEvent.call(e,times[index][0][1]);
    createTimeOutEvent.call(e,times[index][1][1]);
})




let allWagesFor = function () {	let allWagesFor = function () {
let eligibleDates = this.timeInEvents.map(function (e) {let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date })	  

    let payable = eligibleDates.reduce(function (memo, d) {	    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)	      

    
    return payable	 

//Given an array of multiple employees
function calculatePayroll(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
        total+=allWagesFor.call(arr[i])
    }
    return total;
}
//console.log(calculatePayroll.call(a))
/* The payroll system
runs payroll using the mock data provided by Ultron data systems
Dependent functions: createEmployeeRecords
takes CSV data, returns an array of employee records */
function createEmployeeRecords(arr){
    return arr.map(e=>createEmployeeRecord(e));
}
let re=createEmployeeRecords([["Rafiki", "", "Aide", 10],
["Simba", "", "King", 100]])
//console.log(re)
// Dependent functions: findEmployeebyFirstName(collection, firstNameString)
function findEmployeebyFirstName(collection,firstNameString){
    return collection.find(function(e){
        return e.firstName===firstNameString;
    })
}
console.log(findEmployeebyFirstName(re,"Simba"))

let allRecords = createEmployeeRecords([
    ["Thor", "Odinsson", "Electrical Engineer", 45],
    ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
    ["Natalia", "Romanov", "CEO", 150],
    ["Darcey", "Lewis", "Intern", 15],
    ["Jarvis", "Stark", "CIO", 125],
    ["Anthony", "Stark", "Angel Investor", 300]
])
const csvTimesIn = [
    ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
    ["Natalia", ["2018-01-03 1700", "2018-01-05 1800", "2018-01-03 1300"]],
    ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
    ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
    ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
]

const csvTimesOut = [
    ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Natalia", ["2018-01-03 2300", "2018-01-05 2300", "2018-01-03 2300"]],
    ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
    ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
    ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
]
for(let i=0;i<allRecords.length;i++){

    csvTimesIn[i][1].forEach(function(ele){
        createTimeInEvent.call(allRecords[i],ele);
    })



    csvTimesOut[i][1].forEach(function(ele){
        createTimeOutEvent.call(allRecords[i],ele);
    })




}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}