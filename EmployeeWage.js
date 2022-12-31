function getAttendance() {

    let checkStatus =  Math.floor(Math.random() * 10) %  2;

    if(checkStatus == 0) {
        console.log("Employee is Absent");
    } else {
        console.log("Employee is Present");
    }
}

    getAttendance();

    const   PART_TIME_PRESENT = 2;
    const   PART_TIME_WORK_HR = 4;
    const   FULL_TIME_PRESENT = 1;
    const   FULL_TIME_WORK_HR = 8;
    const   SALARY_PER_HR = 20;

    function getPartTime() {
        let workHr = 0;
        let dailyWage = 0;
        let emp = Math.floor(Math.random() * 10) %  3;

        if (emp == 	FULL_TIME_PRESENT) {
        console.log("Employee is Present");
        workHr = FULL_TIME_WORK_HR;
        }
        else if (emp == PART_TIME_PRESENT) {
            console.log("Employee is part time");
            workHr = PART_TIME_WORK_HR;
        }
        else{
        console.log("Employee is Absent");
        workHr = 0;
        }
        
        dailyWage= (SALARY_PER_HR * workHr);
        console.log("salary will be :" + dailyWage);
        
    }

    getPartTime();

    function getWagePerMonth() {
			
        let empHr = 0;
        let total = 0;
        let days = 0;
        let workHr = 0;
        
        while( days<20 ) {
        let emp =  Math.floor(Math.random() * 10) %  3;
        
        switch(emp) { 
            case 0:
                console.log("Employee is Present");
                empHr = 8;
                break;
            case 1:
                console.log("Employee is PartTime ");
                empHr = 4;
                break;
            case 2:
                console.log("Employee is Absent");
                empHr = 0;
                break;
            default:
                console.log("contition does not exit");
        }
        let dailyWage = (SALARY_PER_HR * empHr);
        total = (total + dailyWage);
        days = (days + 1);
        workHr = (workHr + empHr);
        }
        console.log("total salary will be :" + total);
    
        console.log("total working hours will be:" + workHr);
        
    }

    getWagePerMonth();