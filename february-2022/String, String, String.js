"use strict"


      Number.prototype.toString = function() {
      return this + '';
      }

      Array.prototype.toString = function() {
      let str = this.join(', ');
      return '[' + str + ']';
      }

      Boolean.prototype.toString = function() {
      return this + ''
      }
