
    Processor = function(name,frequency){

        this.name           = name;
        this.hertzClock     = frequency;
        this.frequency      = 1000/this.hertzClock;
        this.clockTimeout   = null;
        this.motherBoard    = null;
        this.sleeping       = null;

    };

    Processor.prototype.onPowerCheck = function()
    {
        return 'CPU Power Check ................ OK';
    };

    Processor.prototype.onPowerUp = function(motherBoard)
    {
        this.motherBoard = motherBoard;
        this.startClocking();
        return 'CPU Starting CLOCK @'+this.hertzClock+'Htz';
    };

    Processor.prototype.onPowerOff = function()
    {
        clearTimeout(this.clockTimeout);
    };

    Processor.prototype.onDetails = function()
    {
        return this.name+' @'+this.frequency+' Htz';
    };

    Processor.prototype.startClocking = function()
    {
        var self = this;

        var clockFunction = function(){

            self.motherBoard.forEachComponent(function(slot, component){

                if(self.sleeping){
                    return false;
                }

                if(slot != 'cpu')
                {
                    if(component.clocking && typeof component.onClock == 'function' ){
                        component.onClock();
                    }
                }
            });

            self.clockTimeout = setTimeout(clockFunction, self.frequency);
        };

        this.clockTimeout = setTimeout(clockFunction, this.frequency);
    };

    Processor.prototype.sleep = function(milliseconds)
    {
        var self = this;

        self.sleeping = true;

        setTimeout(function(){self.sleeping = false;}, milliseconds);
    };