/* Your Code Here */
let em=["Gray", "Worm", "Security", 7];
function createEmployeeRecord(arr){
    return{
        firstName:arr[0],
        familyName:arr[1],
        title:arr[2],
        payPerHour:arr[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}
//console.log(createEmployeeRecord(em));
//  process an Array of Arrays into an Array of employee records
let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
]

function createEmployees(arr){
    return arr.map(e=>createEmployeeRecord(e));
}
//console.log(createEmployees(twoRows));
//it adds a timeIn event Object to an employee's record of timeInEvents when provided an employee record and Date/Time String and returns the updated record
function createTimeInEvent(date){
    
    this.timeInEvents.push({
        type:"TimeIn",
        hour:parseInt(date.split(" ")[1]),
        date:date.split(" ")[0]
    })
    return this;
}
let emRec=createEmployeeRecord(em);
createTimeInEvent.call(emRec,"2014-02-28 1400");
//console.log(emRec.timeInEvents[0].date)
// it adds a timeOut event Object to an employee's record of timeOutEvents when provided an employee record and Date/Time String and returns the updated record
function createTimeOutEvent(date){
    
    this.timeOutEvents.push({
        type:"TimeOut",
        hour:parseInt(date.split(" ")[1]),
        date:date.split(" ")[0]
    })
    return this;
}
//let emRec=createEmployeeRecord(em);
createTimeOutEvent.call(emRec,"2014-02-28 2400");
//console.log(emRec.timeOutEvents[0].date)
// Given an employee record with a date-matched timeInEvent and timeOutEvent, hoursWorkedOnDate calculates the hours worked when given an employee record and a date
//console.log(emRec)
function hoursWorkedOnDate(dat){
    let n=this.timeInEvents.find(function(ele){
        return ele.date===dat;
    })
    let ot=this.timeOutEvents.find(function(ele){
        return ele.date===dat;
    })
    if(ot==undefined||n==undefined){
        return 0;
    }
    
    else return (ot.hour-n.hour)/100;
}

//console.log(hoursWorkedOnDate.call(emRec,"2014-02-28"))
//Given an employee record with a date-matched timeInEvent and timeOutEvent
function wagesEarnedOnDate(date){
    return (this.payPerHour)*hoursWorkedOnDate.call(this,date)
}
//
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
//console.log(a)

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
    }.bind(this),0) // <== Hm, why did we need to add bind() there? We'll discuss soon!
    
    return payable
}
console.log(allWagesFor.call(cRecord))
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
//console.log(employees)
console.log(allRecords);
console.log(calculatePayroll(allRecords))