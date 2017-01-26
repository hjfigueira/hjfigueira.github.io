
 function Driver(drivercode)
 {
   this.core = drivercode;
   this.device = null;

   this.bindDevice = function(device)
   {
     this.device = device;
   };

   this.call = function(method, arguments)
   {
       argumentList = [this.device];
       argumentList.concat(arguments);

       this.core[method].apply(this, argumentList);
   }

 }