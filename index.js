/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */



//1
function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    let obj = {
        firstName: firstName,
        familyName: familyName,
        title: title,
        payPerHour: payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
    return obj
}


//2
function createEmployees(array) {
    return array.map(element => createEmployeeRecord(element))
}

//3 
function createTimeInEvent(timeIn) {
    let dateAndTime = timeIn.split(" ");

    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateAndTime[1]),
        date: dateAndTime[0]

    })
    return this;
}

//4
function createTimeOutEvent(timeOut) {

    let dateAndTime = timeOut.split(" ");
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(dateAndTime[1]),
        date: dateAndTime[0]
    })
    return this;
}

//5
function hoursWorkedOnDate(dateWork) {
    let hoursIn = this.timeInEvents.find(e => e.date == dateWork);
    let hoursOut = this.timeOutEvents.find(e => e.date == dateWork);

    let WorkHours = (hoursOut.hour - hoursIn.hour)/100;
    return WorkHours;
}

//6
function wagesEarnedOnDate(earnDate) {
    let payOwed = this.payPerHour * hoursWorkedOnDate.call(this, earnDate)
    return payOwed;
}

//7
let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

//8
function createEmployeeRecords(array) { //eactly the same as createEmployees function

    return array.map(element => createEmployeeRecord(element))
}


//9
function findEmployeebyFirstName(array, firstName) {

       return  array.find(function (obj) {
        return obj.firstName == firstName;
    });

}

//10
function calculatePayroll(array) { //returns sum of pay of all employees for all dates
 
  let Allarray = array.map (employee => allWagesFor.call(employee) )
    return Allarray.reduce((total, item) => total += item)
}
     




    
