
    OperationSystem = function(motherBoard)
    {
        this.name = 'heliOS';
        this.motherBoard = motherBoard;
        this.libs = [];
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
            vga.write('¬          Loading Things and Other Stuff¬');
            cpu.setFrequency(10);
            vga.write('           ##############################¬');
            cpu.restoreDefaultFrequency();
            vga.write('¬');

        });

    };


    OperationSystem.prototype.bindDriversAndLibs = function()
    {
        this.loadLib(stdout,'vga');
        this.loadLib(stdin,'usb1');
    };

    OperationSystem.prototype.loadLib = function(library, device)
    {
        library.bindDevice(device);
        this.slots[device] = library;
    };

    OperationSystem.prototype.executeDefaultApplication = function()
    {

    };