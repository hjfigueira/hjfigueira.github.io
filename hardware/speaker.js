
    Speaker = function(name){

        this.name = name;

        this.audio = new AudioContext();

        oscilator = this.audio.createOscillator();
        oscilator.connect(this.audio.destination);

        this.oscilator = oscilator;
    };

    Speaker.prototype.onPowerCheck = function()
    {
        return 'Speaker Power Check ............ OK';
    };

    Speaker.prototype.onPowerUp = function()
    {
        //self = this;
        //this.oscilator.frequency.value = 600;
        //this.oscilator.start();
        //
        //setTimeout(function(){
        //    self.oscilator.stop();
        //},1);

        return 'Speaker BOOT'
    };

    Speaker.prototype.onPowerOff = function()
    {

    };

    Speaker.prototype.onDetails = function()
    {
        return this.name;
    };

    Speaker.prototype.boot = function()
    {

    };

    Speaker.prototype.onClock = function()
    {

    };