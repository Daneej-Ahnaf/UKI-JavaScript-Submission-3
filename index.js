

var employeeId = 'abc123';

function foo() {    
   employeeId();
   return;

   function employeeId() {
       console.log(typeof employeeId);
   }
} 
foo();


