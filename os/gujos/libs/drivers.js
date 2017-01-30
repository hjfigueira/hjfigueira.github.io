
 function Driver(drivercode)
 {
    this.core = drivercode;
    this.device = null;
    this.motherBoard = null;

    this.bindDevice = function(device,motherBoard)
    {
        this.device = device;
        this.motherBoard = motherBoard;
    };

    this.call = function(method)
    {
        var args = Array.prototype.slice.call(arguments);
        args.push(this.device);
        args.push(this.motherBoard);
        this.core[method].apply(this.core, args.reverse());
    }

 }