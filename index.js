/* Your Code Here */
const createEmployeeRecord = function (array){
  return {
    firstName : array[0],
    familyName : array[1],
    title : array[2],
    payPerHour : array[3],
    timeInEvents : [],
    timeOutEvents : []
  };
}

const createEmployees = function(array){
  let arr= array.map(createEmployeeRecord(array));
  return arr;
}

const createTimeInEvent= function(dateStamp){
  let dateTimeArr = dateStamp.split(" ");
  let date =  dateTimeArr[0];
  let time = parseInt(dateTimeArr[1]);
  let obj = {
    type:"TimeIn",
    hour:time,
    date:date
  }
  this.timeInEvents.push(obj);
  return this;
}

const createTimeOutEvent = function(dateStamp){
   let dateTimeArr = dateStamp.split(" ");
  let date =  dateTimeArr[0];
  let time = parseInt(dateTimeArr[1]);
  let obj = {
    type:"TimeOut",
    hour:time,
    date:date
  }
  this.timeInEvents.push(obj);
  return this;
}

const hoursWorkedOnDate = function(dateStamp){
  let timeIn = this.timeInEvents.find(e=>e.date==dateStamp);
  let timeOut = this.timeOutEvents.find(e=>e.date==dateStamp);
  let hoursRes = timeIn.hour - timeOut.hour;
  hoursRes= hoursRes/100;

  return hoursRes;
  
}

const wagesEarnedOnDate =  function(dateStamp){
  let payOwed = hoursWorkedOnDate(dateStamp).call(this,dateStamp) * this.payPerHour;
  return payOwed;
}


const findEmployeeByFirstName = function(srcArray, firstName){
  return srcArray.find(e=> e.firstName === firstName ) 
}

const calculatePayroll = function(empRecord){
  return empRecord.reduce((record,e)=>record + allWagesFor.call(e),0);

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