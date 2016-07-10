
    MotherBoard = function()
    {
        this.slots = {
            'cpu' : null,
            'vga': null,
            'sata': null,
            'ubs1': null,
            'ubs2': null,
            'ubs3': null,
            'ubs4': null,
            'p2': null
        };
    };

    MotherBoard.prototype.plugDevice = function(slot, device)
    {
        try{
            this.validate(slot);
            device.motherBoard = this;
            this.slots[slot] = device;
        }
        catch(error){
            console.log(error);
            return error;
        }
    };

    MotherBoard.prototype.unplugDevice = function(slot)
    {
        this.slots[slot] = null;
    };

    MotherBoard.prototype.onPowerUp = function()
    {
        this.withComponent(['vga'],function(vga){
            vga.write('MotherBoard Power ON¬');
            vga.write('--------------------------------------------------¬');
        });

        this.hardwareSpecs();

        this.startComponents();

        this.withComponent(['vga','cpu','sata'],function(vga,cpu,sata){
            vga.write('¬');
            vga.write('Starting BOOT Coroutine¬');
            vga.write('--------------------------------------------------¬');
            cpu.sleep(2000);
            vga.clear();
            sata.boot();
        });

    };

    MotherBoard.prototype.onPowerOff = function()
    {};

    MotherBoard.prototype.validate = function(slot)
    {
        if(this.slots[slot] != null)
        {
            throw { message : 'Slot '+slot+' already in use' };
        }
    };

    MotherBoard.prototype.forEachComponent = function(callback)
    {
        $.each(this.slots,function(type, component){
            if(component != null)
            {
                callback(type, component);
            }
        });
    };

    MotherBoard.prototype.startComponents = function()
    {
        var self =  this;

        self.withComponent(['vga'],function(vga){
            vga.write("¬");
            vga.write("Beginning Hardware Check¬");
            vga.write('--------------------------------------------------¬');
        });

        this.forEachComponent(function(type, component){

            self.withComponent(['vga', 'cpu'],function(vga,cpu){
                vga.write(component.onPowerCheck()+'¬');
                vga.write(component.onPowerUp(self)+'¬');
            });

        });

        self.withComponent(['vga'],function(vga){
            vga.write("All Devices Powered UP and RUNNING¬");
        });

    };

    MotherBoard.prototype.withComponent = function(slotArray,ifConnected)
    {
        var self = this;
        components = [];

        slotArray.forEach(function(item){
            components.push(self.slots[item]);
        });

        ifConnected.apply(self,components);
    };

    MotherBoard.prototype.hardwareSpecs = function()
    {
        self = this;

        this.forEachComponent(function(type,component){
            self.withComponent(['vga'],function(vga){
                vga.write( type +' : '+component.onDetails()+'¬');
            });
        })
    };
