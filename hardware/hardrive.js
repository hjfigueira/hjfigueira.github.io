
    HardDrive = function(name, size){

        this.name = name;
        this.size = size;
        this.dataHandler = window.localStorage
    };

    HardDrive.prototype.onPowerCheck = function()
    {
        return 'HardDrive Power Check ........................ OK';
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
        mb = this.motherBoard;
        system = new OperationSystem(this.motherBoard);
        system.boot();

        // bootSector = this.dataHandler.getItem('boot');
        // eval(bootSector);
    };

    HardDrive.prototype.onClock = function()
    {

    };

    HardDrive.prototype.displayLoad = function()
    {

    };