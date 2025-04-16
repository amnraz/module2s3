 function createEmployee( name, role, salary){
    let obj ={
        name: name,
        role: role,
        salary: salary, 
        introduce:function(){
            console.log(`"Hello, I am ${name}, working as a ${role}."`)
        }
    }
    return obj
 }
 createEmployee()
 const employee1 = createEmployee("Raju", "Developer", 60000);
  employee1.introduce();
  const employee2 = createEmployee("Farhan", "Software Engineer", 65000);
  employee2.introduce()
