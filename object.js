// const elf = {
//     name: 'orwell',
//     weapon: 'stone',
//     attack (){
//         console.log("attack with " + elf.weapon);
//     }
// }

// elf.attack();


// const elf2 = {
//     name: 'katy',
//     weapon: 'fire',
//     attack (){
//         console.log("attack with " + elf2.weapon);
//     }
// }

// elf2.attack();


//CREATING FACTORY FUNCTIONS




//CONSTRUCTOR FUNCTION


// function Elf (name,weapon){
//     this.name = name;
//     this.weapon = weapon;
// }

// Elf.prototype.attack = function (){
//     console.log('attack using: ' + this.weapon)
//     this.title = 'Master'
//     console.log(this)
// }

// const merk = new Elf('merk', 'sword');

// merk.attack()


// IN ES-6 IF WE HAVE TO RIGHT "this.name = name;" , we just write "name;""



// CLASSES IT CREATES A

class Elf {
    constructor(name, weapon){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        console.log('attack using ' + this.weapon)
    }
}

elf2 = new Elf('katy', 'fire');
elf = new Elf('orwel', 'stone');
elf.attack();
console.log(elf instanceof Elf);

//PLAYING WIHT 'THIS'

