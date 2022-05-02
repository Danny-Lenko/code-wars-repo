"use strict"


function getGrade (s1, s2, s3) {
  const ave = (s1+s2+s3) / 3
  return (ave >= 90) ? 'A'
    : (ave >= 80) ? 'B'
    : (ave >= 70) ? 'C'
    : (ave >= 60) ? 'D'
    : 'F'
}
