"use strict"


function hello(name) {
  if (!name) return "Hello, World!"
  const editedName = name[0].toUpperCase() + name.slice(1,name.length).toLowerCase()
  return `Hello, ${editedName}!`
}
