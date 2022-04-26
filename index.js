// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]                 //is assigned an initial value of ["Milo", "Otis", "Garfield"]

    function destructivelyAppendCat(name){              //appends a cat to the end of the cats array
                        cats.push(name);     
}
    function destructivelyPrependCat(name){             //prepends a cat to the beginning of the cats array
                        cats.unshift(name);
    }
    function destructivelyRemoveLastCat(){
                        cats.pop();
    }
    function destructivelyRemoveFirstCat(){
                        cats.shift();
    }
    function appendCat(name){
                    return [...cats, name];
    }
    function prependCat(name){
                    return [name, ...cats];
    }
    function removeLastCat(){
                    return cats.slice(0,2)
    }
    function removeFirstCat(){
                    return cats.slice(1)
    }

//     destructivelyPrependCat(name)
//     ✓ prepends a cat to the beginning of the cats array

//   destructivelyRemoveFirstCat()
//     ✓ removes the first cat from the cats array
//   appendCat(name)
//     ✓ appends a cat to the cats array and returns a new array, leaving the cats array unchanged
//   prependCat(name)
//     ✓ prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
//   removeLastCat()
//     ✓ removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
//   removeFirstCat()
//     ✓ removes the first cat from the cats array and returns a new array, leaving the cats array unchanged