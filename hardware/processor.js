
    Processor = function(name,frequency){

        this.name               = name;
        this.hertzClock         = frequency;
        this.frequency          = 1000/this.hertzClock;
        this.clockTimeout       = null;
        this.defaultFrequency   = this.frequency;
        this.motherBoard        = null;
        this.clocking           = true;
        this.instructions       = [];

    };

    Processor.prototype.onPowerCheck = function()
    {
        return 'CPU Power Check .............................. OK';
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

            //self.motherBoard.forEachComponent(function(slot, component){
            //
            //    if(component.clocking && typeof component.onClock == 'function' ){
            //        component.onClock();
            //    }
            //
            //});

            if(self.clocking)
            {
                self.onClock();
            }

            self.clockTimeout = setTimeout(clockFunction, self.frequency);
        };

        this.clockTimeout = setTimeout(clockFunction, this.frequency);
    };

    Processor.prototype.sleep = function(milliseconds)
    {
        var self = this;

        this.execute(function(){
            self.clocking = false;
            setTimeout(function(){self.clocking = true;}, milliseconds);
        });
    };

    Processor.prototype.execute = function(instruction)
    {
        this.instructions.push(instruction);
    };

    Processor.prototype.onClock = function()
    {
        exec = this.instructions[0];
        this.instructions.shift();

        if(exec != undefined){
            exec.apply(null,[]);
        }
    };

    Processor.prototype.restoreDefaultFrequency = function()
    {
        this.execute(function(){
            this.frequency = this.defaultFrequency;
        });
    };

    Processor.prototype.setFrequency = function(newHertzFrequency)
    {
        var self = this;
        this.execute(function(){
            self.frequency = 1000/newHertzFrequency;
        });
    };