function updateEmployeeDetails(employee,new_role){
    return{
        ...employee,
        role:new_role
    }

}
const employee = {name: 'Afroz', role: 'Developer', age: 28, location: 'IN'}
console.log(updateEmployeeDetails (employee, 'Senior Developer'));