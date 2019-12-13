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