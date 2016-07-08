stdout  = {

    monitor : monitorFirmware,

    buffer : [],

    screenBottom : 30,

    screenTop : 6,

    write : function(string, x, y)
    {
//                    if(typeof x == 'undefined')
//                    {
//                        x = 0;
//                    }
//
//                    if(typeof y == 'undefined')
//                    {
//                        y = 0;
//                    }

        var self = this;

        arrayChar = string.split('');
        arrayChar.forEach(function(item,index){

            self.monitor.buffer.push({ x : x, y : y+index, c :item});

        });

        this.monitor.print();
    },

    shiftX : function(x,dir)
    {
        pixel = $('[data-x="'+x+'"]');
        to = (x+(1*dir));
        positionXTo = <?= $xRation?>*to;

        pixel.css('top',positionXTo+'%');
        pixel.attr('data-x',to);
    },

    scroolScreen : function(dir)
    {

    },


    pushLine : function(string)
    {
        this.shiftX();
    }
};