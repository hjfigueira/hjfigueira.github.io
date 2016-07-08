
    KeyBoard = function(name){

        this.name = name;



    };

    KeyBoard.prototype.onPowerCheck = function()
    {
        return 'Keyboard Power Check ........... OK';
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