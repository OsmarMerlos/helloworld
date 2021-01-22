function allLongestStrings(inputArray) {
    let nuevoArray = [];
    let tamano = 0

    inputArray.forEach(e => {
        if(e.length > tamano){
        tamano = e.length;
        }
    });

    inputArray.forEach(function(e){

        if(e.length >= tamano){
            nuevoArray.push(e)
        }

    });



    return nuevoArray;
}
console.log(allLongestStrings(["enyky", "benyky","yely","varennyky"]));

