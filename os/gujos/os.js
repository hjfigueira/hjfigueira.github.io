
    OperationSystem = function(motherBoard)
    {
        this.name = 'heliOS';
        this.motherBoard = motherBoard;
        this.libs = {
            'vga' : stdout,
            'usb1' : stdin
        };
    };

    OperationSystem.prototype.boot = function()
    {
        this.printBootScreen();
        this.bindDriversAndLibs();
        this.executeDefaultApplication();

        // this.motherBoard.withComponent(['cpu'], function(cpu){
        //
        // });
    };

    OperationSystem.prototype.printBootScreen = function()
    {

        this.motherBoard.withComponent(['vga','cpu'],function(vga,cpu){

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
            vga.write('¬          Loading Things and Other Stuff¬');
            cpu.setFrequency(10);
            vga.write('           ##############################¬');
            cpu.restoreDefaultFrequency();
            vga.write('¬');

        });

    };

    OperationSystem.prototype.loadLib = function(library, device)
    {
        library.bindDevice(device);
        this.libs[device] = library;
    };

    OperationSystem.prototype.bindDriversAndLibs = function()
    {
        this.loadLib(stdout,'vga');
        this.loadLib(stdin,'usb1');
    };


    OperationSystem.prototype.executeDefaultApplication = function()
    {
        this.startProgram(bash);
    };

    OperationSystem.prototype.onClock = function()
    {

    };

    OperationSystem.prototype.startProgram = function(program)
    {
        libsToLoad = this.getLibs(program.include);
        program.loadLibs(libsToLoad);
        program.run();
    };

    OperationSystem.prototype.getLibs = function(libArray)
    {
        return libArray.filter(function(n) {
            return this.libs.indexOf(n) != -1;
        });
    };

    OperationSystem.prototype.withLib = function(libsArray,ifConnected)
    {
        var self = this;
        components = [];

        libsArray.forEach(function(item){
            components.push(self.libs[item]);
        });

        return ifConnected.apply(self,components);
    };