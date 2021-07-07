/* Your Code Here */

let createEmployeeRecord=function(employeeRecord){
    return {
        firstName:employeeRecord[0],
        familyName:employeeRecord[1],
        title:employeeRecord[2],
        payPerHour:employeeRecord[3],
        timeInEvents:[],
        timeOutEvents:[]
    }
}

let createEmployees=function(arr){
  let myArr=arr.map(item=>createEmployeeRecord(item));
  return  myArr;
}

let createTimeInEvent=function(datestamp){
    let bpRecord=datestamp.split(" ");
    let updatedBpRecord=Object.assign({},this)
    let newEvent ={
        type:"TimeIn",
        hour:parseInt(bpRecord[1]),
        date:bpRecord[0]
    }
    updatedBpRecord.timeInEvents.push(newEvent);
    return updatedBpRecord;
}

let createTimeOutEvent=function(datestamp){
    let bpRecord=datestamp.split(" ");
    let updatedBpRecord=Object.assign({},this)
    let newEvent ={
        type:"TimeOut",
        hour:parseInt(bpRecord[1]),
        date:bpRecord[0]
    }
    updatedBpRecord.timeOutEvents.push(newEvent);
    return updatedBpRecord;
}

let hoursWorkedOnDate=function(workHour){
    let hourIn=this.timeInEvents.find(e=>e.date==workHour);
    let hourOut=this.timeOutEvents.find(e=>e.date==workHour);
    let hourWorked=(hourOut.hour-hourIn.hour)/100;
    return hourWorked;
}

let wagesEarnedOnDate=function(date){
    let datepay=this.payPerHour*hoursWorkedOnDate.call(this,date);
    return datepay;
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

const findEmployeebyFirstName =function(srcArray,firstName){
return srcArray.find(function(name)
{return name.firstName == firstName});
}

let calculatePayroll=function(srcArray){
return srcArray.reduce((memo,d)=>memo+allWagesFor.call(d),0)
}
const createEmployeeRecords = function(srcArray){
    return srcArray.map(e=> createEmployeeRecord(e));
    }
