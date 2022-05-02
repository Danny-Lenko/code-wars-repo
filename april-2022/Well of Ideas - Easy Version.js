"use strict"


function well(x){
  const goodIdeas = x.filter(idea => idea === 'good')
  return goodIdeas.length > 2 ? 'I smell a series!' 
    : goodIdeas.length > 0 ? 'Publish!'
    : 'Fail!'
}
