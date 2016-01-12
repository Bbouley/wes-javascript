// The following code...

myFn();
myFn("first");
myFn("first", "second");
myFn(undefined, "second");
myFn("first", "second", "third");
myFn("first", undefined, "third");
myFn("first", "second", "third", "fourth");
myFn(undefined, "second", undefined, "fourth");

// Should return the following...

// No arguments!

// Beginning to read arguments...
// Reading argument #1: first

// Beginning to read arguments...
// Reading argument #1: first
// Reading argument #2: second

// Beginning to read arguments...
// Reading argument #2: second

// Beginning to read arguments...
// Reading argument #1: first
// Reading argument #2: second
// Reading argument #3: third

// Beginning to read arguments...
// Reading argument #1: first
// Reading argument #3: third

// Beginning to read arguments...
// Reading argument #1: first
// Reading argument #2: second
// Reading argument #3: third
// AARG! Too many arguments:
//  { '0': 'first', '1': 'second', '2': 'third', '3': 'fourth' }

// Beginning to read arguments...
// Reading argument #2: second
// AARG! Too many arguments:
//  { '0': undefined, '1': 'second', '2': undefined, '3': 'fourth' }
