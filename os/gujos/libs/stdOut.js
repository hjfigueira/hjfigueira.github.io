    
    stdout = new Driver({

        main : function(vga)
        {

        },

        clear : function(vga)
        {
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
            vga.moveScreen();
        },

        write : function(vga,string)
        {
            vga.write(string);
        }
    
    });