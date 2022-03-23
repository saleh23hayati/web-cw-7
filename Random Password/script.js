

 const input = document.querySelector("input");
 
 const button = document.querySelector("button");
 

 
   {Number} [length] 
 {String} 
 
 function GeneratePassword(length = 16) {
   
   
    {String}
    
   const charset =
     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$";
 
   
    {String}
   
   let password = "";
 
  
   for (let i = 0; i < length; ++i) {
     
     {Number}
      
     let at = Math.floor(Math.random() * (charset.length + 1));
 
     
     password += charset.charAt(at);
   }
 
  
   return password;
 }
 
 
 button.addEventListener("click", () => {
   input.value = GeneratePassword(16);
 });
 