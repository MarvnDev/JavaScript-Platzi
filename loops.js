var students = ["Maria","Sergio","Rosa","Daniel"]

function greetStudents(student){
    console.log(`Hello ${student}`)
}

// for(var i = 0; i < students.length; i++){
//     greetStudents(students[i])
// }

// for(var student of students){
//     greetStudents(student)
// }

// ----------------while
while(students.length>0){
    console.log(students)
    var student = students.shift()
    greetStudents(student)
}