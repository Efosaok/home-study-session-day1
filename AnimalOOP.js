
var file = {}
Animal = function(name,sex,numberoflegs){
  this.name = name
  this.sex = sex
  this.numberoflegs = numberoflegs
}

Animal.prototype.gender = function(){
  if(this.sex == 'male'){
    return "your animal is male"
  }else{
    return 'your animal is female'
  }
}

Animal.prototype.habitat = function(){
  if(this.numberoflegs == 0){
    return 'your animal is an aquatic habitat'
  }else {
    return 'your animal is a terrestial habitat'
  }
}

Animal.prototype.isBird = function (){
  if (this.numberoflegs == 2){
    return true
  }else{
    return false
  }
}

function Dog(name,furcolor){
  Animal.call(this,'name','sex','numberoflegs')
  this.furcolor = furcolor
}
Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.constructor = Dog

Dog.prototype.bark = function(){
  return "Woooh!! Wooh!!"
}
Dog.prototype.isAggressive = function(){
  if (this.furcolor == black){
    return true
  }else {
    return false
  }
}
module.exports = file