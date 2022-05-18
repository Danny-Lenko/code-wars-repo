"use strict"

String.prototype.digit = function() {
   const match = this.match(/\d/);
    if (!match) return false
    return this.length === match.length
  };