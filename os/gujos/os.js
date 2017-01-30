
    OperationSystem = function(motherBoard)
    {
        this.name = 'heliOS';
        this.motherBoard = motherBoard;
        this.libs = {};
    };

    OperationSystem.prototype.boot = function()
    {
        this.printBootScreen();
        this.bindDriversAndLibs();
        this.executeDefaultApplication();

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
            vga.write('¬         Loading Things and Other Stuff¬');
            cpu.setFrequency(10);
            vga.write('          ##############################¬');
            cpu.setFrequency(800);
            vga.write('¬');

        });

    };

    OperationSystem.prototype.loadLib = function(library, alias, device)
    {
        library.bindDevice(this.motherBoard.slots[device], this.motherBoard);
        this.libs[alias] = library;
    };

    OperationSystem.prototype.bindDriversAndLibs = function()
    {
        this.loadLib(stdout,'stdout','vga');
        this.loadLib(stdin,'stdin','usb1');
    };


    OperationSystem.prototype.executeDefaultApplication = function()
    {
        this.startProgram(bash);
    };

    OperationSystem.prototype.onClock = function()
    {
        alert('ok');
    };

    OperationSystem.prototype.startProgram = function(program)
    {
        libsToLoad = this.getLibs(program.include);
        program.loadLibs(libsToLoad);
        program.setOs(this);
        program.run();
    };

    OperationSystem.prototype.getLibs = function(requestedLibs)
    {
        var availableLibs = this.libs;
        var loaded = [];

        requestedLibs.forEach(function(index, collection){
            loaded.push(availableLibs[index])
        });

        return loaded;

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