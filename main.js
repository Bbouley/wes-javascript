// Write a function that will take in an array of full names, and only return the first name of each person.
// For example ['Bradley Bouley', 'Robert Hajek'] should return ['Bradley', 'Robert']

var names = ['Bradley Bouley', 'Robert Hajek', 'Wes Reid']

function firstNames(arr) {
    var output = []
    for (var i = 0; i < arr.length; i++) {
        var name = arr[i].split(' ', 1);
        output.push(name[0]);
    }
    return output;
}

var myFn = function() {
    if (arguments.length === 0) {
        console.log('No arguments!')
        return;
    } else {
        console.log('Beginning to read arguments')
        for (var key in arguments) {
            if (parseInt(key) > 2) {
                console.log('AARGH, too many arguments')
                console.log(arguments);
                return
            } else if (arguments[key] !==  undefined) {
                console.log('Reading argument #' + (parseInt(key)+parseInt(1)) + ' : ' + arguments[key])
            }
        }
    }
}

myFn();
myFn("first");
myFn("first", "second");
myFn(undefined, "second");
myFn("first", "second", "third");
myFn("first", undefined, "third");
myFn("first", "second", "third", "fourth");
myFn(undefined, "second", undefined, "fourth");
