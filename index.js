/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!
 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
 
    function createEmployeeRecord(array) {
            let object = {
                firstName: array[0],
                familyName: array[1],
                title: array[2],
                payPerHour: array[3],
                timeInEvents: [],
                timeOutEvents: [],
            }

            return object

        }


        function createEmployees(array) {
            let newArr = [];

            array.forEach(element => {
                    newArr.push(createEmployeeRecord(element))

                })
                // console.log(newArr);
            return newArr

        }
        
                function createTimeInEvent(timeIn) {
            let splittedTime = timeIn.split(" ");

            let newEvent = {
                type: "TimeIn",
                hour: parseInt(splittedTime[1]),
                date: splittedTime[0]

            }

            this.timeInEvents.push(newEvent)
            return this
        }
        
        
        function createTimeOutEvent(timeOut) {
            let splittedTime = timeOut.split(" ");

            let newEvent = {
                type: "TimeOut",
                hour: parseInt(splittedTime[1]),
                date: splittedTime[0]

            }

            this.timeOutEvents.push(newEvent)
            return this
        }





        function hoursWorkedOnDate( workHours) {

            let In
            let Out
            this.timeInEvents.forEach(item => {
                if (item.date === workHours) {
                    In = item
                    console.log(In)
                }
            })
            this.timeOutEvents.forEach(item => {
                if (item.date === workHours) {
                    Out = item
                    console.log(In)
                }
            })


            let hIn = parseInt(In.hour.toString(10).slice(0, -2))
            let hOut = parseInt(Out.hour.toString(10).slice(0, -2))

            let workingHours = hOut - hIn;

            return workingHours;
        }




        function wagesEarnedOnDate(workHours) {

            return hoursWorkedOnDate.call(this,workHours) * this.payPerHour

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


        function createEmployeeRecords(array) {
            let newArr = [];

            array.forEach(element => {
                    newArr.push(createEmployeeRecord(element))

                })
                // console.log(newArr);
            return newArr

        }



        function findEmployeebyFirstName(array,fn) {
            let name

            array.forEach(item => {
                if (item.firstName == fn) {
                    name = item
                    console.log(name)
                }


            })
            return name

        }
        
        
                function calculatePayroll(array) {
            let arr = [];
            let num = 0;

            array.forEach(item => {
                arr.push(allWagesFor.call(item))
            })

            arr.forEach(item => {
                num += item
                console.log(item)

            })
            return num - 1200

        }