"use strict"


function bonusTime(salary, bonus) {
  salary = bonus ? salary * 10 : salary 
  return "\u00A3" + salary
}
