    
    stdout = new Driver({

        main : function(mb,vga)
        {

        },

        clear : function(mb, vga)
        {
            vga.clear();
        },

        write : function(mb, vga, string, x,y)
        {
            vga.write(string, x, y);
        }

    });