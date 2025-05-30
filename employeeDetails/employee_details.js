const employees = [
      { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
      { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
      { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'SQL' },
      { id: 4, name: 'Pikachu King', age: 25, department: 'IT', salary: 100000, specialization: 'C++'},
      { id: 5, name: 'Arielle Mermaid', age: 75, department: 'Finance', salary: 150000, specialization: 'Java'},
      { id: 6, name: 'Bob Sponge', age: 54, department: 'Finance', salary: 95000, specialization: 'PowerBI'},
      { id: 7, name: 'King Kong', age: 33, department: 'IT', salary: 75000, specialization: 'Machine Learning' },
      { id: 8, name: 'White Snow', age: 28, department: 'HR', salary: 65000, specialization: 'Tableau'},
      { id: 9, name: 'Ocus Pokus', age: 99, department: 'Finance', salary: 117000, specialization:'.NET'}
    ];
 // Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}


function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.name} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
        document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} -${foundEmployee.specialization}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';
     }
 }

 function findEmployeeBySpecialization(employeeSpecialization) {
    const foundEmployeeSpecial = employees.find(employee => employee.specialization === employeeSpecialization);
    if (foundEmployeeSpecial) {
        document.getElementById('employeesDetails').innerHTML=`<p>${foundEmployeeSpecial.specialization}: ${foundEmployeeSpecial.name} - ${foundEmployeeSpecial.department} - $${foundEmployeeSpecial.salary}</p>`;
    }
    else{
        document.getElementById('employeesDetails').innerHTML = 'no employee with this specialization';
     }
 }

