class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (!name || !position || !department || salary < 0) {
            throw new Error('Invalid input');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }

        this.departments[department].push({ name, position, salary })

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let currentBest = {
            name: '',
            salary: 0
        };

        for (let depkey in this.departments) {
            let averageSalary = 0;
            for (let empKey in this.departments[depkey]) {
                averageSalary += this.departments[depkey][empKey].salary;
            }
            averageSalary = averageSalary / this.departments[depkey].length;
            if (currentBest.salary < averageSalary) {
                currentBest.name = depkey;
                currentBest.salary = averageSalary;
            }
        }

        this.departments[currentBest.name].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);

            // if (a.salary - b.salary < 0) {
            //     return b;
            // } else if (a.salary - b.salary > 0) {
            //     return a;
            // } else {
            //     return a.name.localCompare(b.name);
            // }
        })

        const bestDepartmentString = '';
        bestDepartmentString = `Best Department is: ${currentBest.name}\n`;
        bestDepartmentString += `Average salary: ${currentBest.salary.toFixed(2)}\n`;
        this.departments[currentBest.name].forEach((el) => {
            bestDepartmentString += `${el.name} ${el.salary} ${el.position}\n`;
        })

        return bestDepartmentString.trim();
    }
}

let company = new Company();
company.addEmployee("Stanimir", 2000, "engineer", "Construction");
company.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
company.addEmployee("Slavi", 500, "dyer", "Construction");
company.addEmployee("Stan", 2000, "architect", "Construction");
company.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
company.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
company.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(company.bestDepartment());
