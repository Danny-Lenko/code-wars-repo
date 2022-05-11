"use strict"

class God{
   /**
    * @returns Human[]
    */
     static create(){
       return [adam, eve]
     }
   }
   
   class Human {
     
     constructor(name) {
       this.name = name
       this.arms = 2
       this.legs = 2
     }
   
   }
   
   class Man extends Human {
     constructor(name) {
         super(name)
         this.strength = true
         this.buity = false
     }
   }
   
   class Woman extends Human {
     constructor(name) {
         super(name)
         this.strength = false
         this.buity = true
     }
   }
   
   const adam = new Man('Adam')
   const eve = new Woman('Eve')