import React from 'react'
import Student from './Student'
import s1 from './img/s1.png'
import s2 from './img/s2.png'
import s3 from './img/s3.png'
import s4 from './img/s4.png'

function CardList() {
    const cardInfo = [
        {
          image:
            "s1.png",
          name: "Mike",
          gpa: 3.8
        },
        {
          image:
            "s2.png",
            name: "Manal",
            gpa: 3.6
        },
        {
          image:
            "s3.png",
            name: "Moe",
            gpa: 3.2
        },
        {
          image:
            "s4.png",
            name: "Mary",
            gpa: 2.6
        }
      
    ]
const studentList = cardInfo.map(student => <Student key ={student.name} student = {student}/>)
  return <div>{studentList}</div>
}

export default CardList