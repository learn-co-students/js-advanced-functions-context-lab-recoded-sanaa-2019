const createEmployeeRecord = function (arr){
    return {firstName:arr[0],familyName:arr[1],title:arr[2],payPerHour:arr[3],timeInEvents:[],timeOutEvents:[]}
}
const createEmployees = function(array){
    return array.map(createEmployeeRecord)
}
const createTimeInEvent = function(dateTime){
    let time = dateTime.split(' ');
    let hour = parseInt(time[1] , 10 );
	time = time[0];
    let timeOut = {
        type:"TimeIn",
        date:time, 
        hour: hour
    };
     this.timeInEvents.push(timeOut);
    return this
}
const createTimeOutEvent = function(dateTime){
    let time = dateTime.split(' ');
    let hour = parseInt(time[1] , 10 );
	time = time[0];
    let timeOut = {
        type:"TimeOut",
        date:time, 
        hour: hour
    };
     this.timeOutEvents.push(timeOut);
    return this
}
   const  hoursWorkedOnDate = function( searchDate ){
    let timeIn = this.timeInEvents.find(o => o.date === searchDate);
    let timeOut = this.timeOutEvents.find(o => o.date === searchDate);
    return (timeOut.hour-timeIn.hour)/100;
}

const wagesEarnedOnDate = function (time){
    return this.payPerHour * hoursWorkedOnDate.call(this ,time)
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}
  const findEmployeebyFirstName = function(arr , firstName){
    return arr.find(function(name){
        return name.firstName  == firstName;
    });
}
    const calculatePayroll = function(employees){
    return employees.reduce((m, e) => m + allWagesFor.call(e), 0)
 }
const createEmployeeRecords = function(arr){
    return arr.map(function(emp){
       return createEmployeeRecord(emp);
    })
}