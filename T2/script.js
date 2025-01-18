function createCounter() {
	let count = 0; // This variable is part of the lexical scope of createCounter.
  
	return function() {
	  // This inner function forms a closure.
  
	  // Replace 'Siek Sophannai' with your full name
	  console.log('Student Name: Siek Sophannai');
  
	  count++; // It remembers and accesses the count variable from its parent's scope.
	  return count;
	};
  }
  
  // Create a counter instance
  const counter = createCounter();
  
  console.log(counter());
  console.log(counter());
  console.log(counter());