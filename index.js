/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
*/
function createEmployeeRecord(arr){
let empRecord ={
    firstName:arr[0],
    familyName:arr[1],
    title:arr[2],
    payPerHour:arr[3],
    timeInEvents:[],
    timeOutEvents:[]
}
return empRecord
}

function createEmployees(arr) {
    return arr.map(function(emp){
      return createEmployeeRecord(emp);
    })
  }


function createEmployeeRecords(arr){
let empsArr =[]
for(let i=0;i<arr.length;i++)
{
    empsArr.push(createEmployeeRecord(arr[i]))
}
return empsArr
}

function createTimeInEvent(datetime){
let [date,hour]=datetime.split(' ')
this.timeInEvents.push({type:"TimeIn",hour:parseInt(hour,10),date:date})
return this
}

function createTimeOutEvent(datetime){
let [date,hour]=datetime.split(' ')
this.timeOutEvents.push({type:"TimeOut",hour:parseInt(hour,10),date:date})
return this
}

function hoursWorkedOnDate(date){
let total = 0
for(let i=0;i<this.timeInEvents.length;i++){
    if(this.timeInEvents[i].date==date){
    total+=(this.timeOutEvents[i].hour - this.timeInEvents[i].hour)/100
    break
    }
}
return total
}


function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date)*this.payPerHour
  }
  


function findEmployeebyFirstName(srcArray,firstName){
    let foundEmp
    srcArray.forEach(emp=>{
        if(emp.firstName==firstName)
        foundEmp=emp
    })
    return foundEmp
    }
    
    function calculatePayroll(arr){
        return arr.reduce(function(ac, emp){
            return ac + allWagesFor.call(emp)
        }, 0)
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