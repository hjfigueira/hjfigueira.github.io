
 function Driver(drivercode)
 {
   this.core = drivercode;
   this.device = null;

   this.bindDevice = function(device)
   {
     this.device = device;
   }

   

 }

