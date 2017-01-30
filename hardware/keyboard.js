
    KeyBoard = function(name){

        this.name = name;

        this.bindEvent();
        this.buffer = [];
        this.callback = null;
    };

    KeyBoard.prototype.onPowerCheck = function()
    {
        return 'Keyboard Power Check ......................... OK';
    };

    KeyBoard.prototype.onPowerUp = function()
    {
        return 'USB Keyboard BOOT'
    };

    KeyBoard.prototype.onPowerOff = function()
    {

    };

    KeyBoard.prototype.onDetails = function()
    {
        return this.name;
    };

    KeyBoard.prototype.onClock = function()
    {

    };

    KeyBoard.prototype.bindEvent = function()
    {
        var self = this;

        document.onkeydown = function(event)
        {
            self.pushToBuffer(event.key);
            self.callback.apply(this,[event.key]);
        }
    };

    KeyBoard.prototype.pushToBuffer = function(keyPressed)
    {
        this.buffer.push(keyPressed);
    };

    KeyBoard.prototype.onPress = function(callback)
    {
        this.callback = callback;
    };