
    Processor = function(name,frequency){

        this.name = name;
        this.frequency = frequency;
    };

    Processor.prototype.onPowerCheck = function()
    {
        return 'CPU Power Check ............ OK';
    };

    Processor.prototype.onPowerUp = function()
    {
        return 'CPU Starting CLOCK 854 MHZ'
    };

    Processor.prototype.onPowerOff = function()
    {

    };