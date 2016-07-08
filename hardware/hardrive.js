
    HardDrive = function(name, size){

        this.name = name;
        this.size = size;

    };

    HardDrive.prototype.onPowerCheck = function()
    {
        return 'HardDrive Power Check .......... OK';
    };

    HardDrive.prototype.onPowerUp = function()
    {
       return 'HardDrive BOOT'
    };

    HardDrive.prototype.onPowerOff = function()
    {

    };

    HardDrive.prototype.onDetails = function()
    {
        return this.name+' : '+this.size+' MB';
    };

    HardDrive.prototype.boot = function()
    {

    };

    HardDrive.prototype.onClock = function()
    {



    };

    HardDrive.prototype.displayLoad = function()
    {

    };