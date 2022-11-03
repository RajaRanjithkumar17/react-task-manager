(function foo(){
    console.log("foo");
}());
bar();
baz();
foo();
function bar(){
    console.log("bar");
};
function baz(){
    console.log("bar");
};