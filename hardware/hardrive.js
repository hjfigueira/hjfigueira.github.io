
    HardDrive = function(name, size){

        this.name = name;
        this.size = size;

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
        mb.withComponent(['vga','cpu'],function(vga,cpu){

            vga.write('¬');
            vga.write('¬');
            vga.write('--------------------------------------------------¬');
            vga.write('             _          _ _  ___  ____  ¬');
            vga.write('            | |__   ___| (_)/ _ \\/ ___| ¬');
            vga.write('            |  _ \\ / _ \\ | | | | \\___ \\ ¬');
            vga.write('            | | | |  __/ | | |_| |___)|¬');
            vga.write('            |_| |_|\\___|_|_|\\___/|____/ ¬');
            vga.write('¬');
            vga.write('¬');
            vga.write('--------------------------------------------------¬');
            vga.write('       Hyper-Engineered Local-Installed OS ¬');
            vga.write('--------------------------------------------------¬');
            vga.write('¬');
            vga.write('¬');
            vga.write('¬');
            vga.write('¬');
            vga.write('                    Wellcome¬');
            vga.write('¬');
            vga.write('¬');
            vga.write('¬');
            vga.write('¬         Loading Things and Other Stuff¬');
            cpu.setFrequency(10);
            vga.write('          ##############################¬');
            cpu.restoreDefaultFrequency();
            vga.write('¬');
        });
    };

    HardDrive.prototype.onClock = function()
    {



    };

    HardDrive.prototype.displayLoad = function()
    {

    };