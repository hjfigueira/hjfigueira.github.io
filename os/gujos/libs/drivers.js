
 function Driver(drivercode)
 {

   this.core = drivercode;
   this.device = null;

   this.bindDevice = function(device)
   {
     this.device = device;
   };

   this.call = function(method)
   {
       var args = Array.prototype.slice.call(arguments);
       args.push(this.device);
       this.core[method].apply(this, args.reverse());
   }

 }