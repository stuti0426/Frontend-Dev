// q6_employee_system.js

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary assumption based on "getAnnual" context
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        const bonus = this.getAnnualSalary() * (percent / 100);
        return this.getAnnualSalary() + bonus;
    }
}

const employees = [
    new Employee(1, "Alice", "HR", 5000),
    new Employee(2, "Bob", "Tech", 8000),
    new Employee(3, "Charlie", "Tech", 8500),
    new Employee(4, "Dave", "Finance", 7000),
    new Employee(5, "Eve", "Support", 4000)
];

// Calculate Total Annual Payout using reduce()
const totalPayout = employees.reduce((total, emp) => {
    return total + emp.getAnnualSalary();
}, 0);

console.log("--- Employee Report ---");
employees.forEach(e => console.log(`${e.name}: Annual Salary $${e.getAnnualSalary()}`));
console.log(`\nTotal Company Annual Payout: $${totalPayout}`);