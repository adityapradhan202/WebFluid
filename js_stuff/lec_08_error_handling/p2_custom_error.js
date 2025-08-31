// Throwing custom error
// Now why do we need to throw custom error?
// Suppose we get an https error code 110, we may understand what this code means, but normal people won't
// So, in such runtime errors, to give a proper explanation, we use the custom errors
// Custom error allow us to throw our own errors, with custom error message

try{
    console.log(x); 
}
catch(e){
    let myError = new Error("Bruh! First declare the variale, then use it!");
    console.log(String(myError));
}
