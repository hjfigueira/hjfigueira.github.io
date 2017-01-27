    
    stdout = new Driver({

        main : function(vga)
        {

        },

        clear : function(vga)
        {
            vga.write('¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬¬');
        },

        write : function(vga,string)
        {
            vga.write(string);
        }

    });