/*
1. Інпут АррВсеСтуденти, ФррНездали
2. Аутпут АррСдали

1)Найти всех, кто сдал(они входят в первий массив,
  но не входят во второй)
  2)Отправить таким елементам сообщения: Add Good job


 */
const getMessagesForBestStudents = (allStudentsList, studentsForRetake) => {
  const passedStudents = allStudentsList.filter(
    (name) => !studentsForRetake.includes(name)
  )
  const messages = passedStudents.map((name) => 'Good job, ' + name)
  return messages
}

// examples
const allStudentsList = ['Den', 'John', 'Ann', 'Mike']
const studentsForRetake = ['John', 'Mike']
console.log(getMessagesForBestStudents(allStudentsList, studentsForRetake)) // ===> ['Good job, Den', 'Good job, Ann']

// const allStudTest2 = ['Den', 'John', 'Ann', 'Mike']
// const retakeStudTest2 = ['Den', 'John', 'Ann', 'Mike']
// getMessagesForBestStudents(allStudTest2, retakeStudTest2) // ===> []
