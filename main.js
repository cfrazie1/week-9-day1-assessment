//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype


// Instances of Dog
// Needed: sadie, moonshine, atticus

function Dog (hungry){
  this.status = 'normal';
  this.color = 'black';
  this.hungry = hungry;
};
let sadie = new Dog(false);

let moonshine = new Dog(true);

let atticus = new Dog();


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human(cool) {
  this.pet = function(dog) {
    dog.status = 'happy';
    }

    this.feed = function(dog){
      dog.hungry = false;
    }
    this.cool = cool;
    }

    let mason = new Human(false);

    let julia = new Human(true);

// Instances of Human
// Needed: mason, julia
