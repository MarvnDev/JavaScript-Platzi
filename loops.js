var students = ["Maria","Sergio","Rosa","Daniel"]

function greetStudents(student){
    console.log(`Hello ${student}`)
}

for(var i = 0; i < students.length; i++){
    greetStudents(students[i])
}