"use strict"


function abbrevName(name){

return name.split(' ').map(name => name.charAt(0).toUpperCase()).join(".");

}
