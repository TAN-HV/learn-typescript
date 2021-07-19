type StringOrNumber = string | number
type Student = {
    name :string
    id : StringOrNumber
}

const studentDetails  = (id : StringOrNumber, studentname :string): void => {
    console.log(`Student ${studentname} has id ${id}`);
    
}
studentDetails(123, 'ha tan')
studentDetails('123', 'ha tan dap troai')

const greet2 = (user:Student) => {
    console.log(`${user.name} with id ${user.id} say hello`);
}
greet2({name: 'ha tan', id: '456'})