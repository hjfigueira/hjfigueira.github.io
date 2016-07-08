monitor = {

    //////////////////////////////////////////////////// ATTRIBUTES ////////////////////////////////////////////////////
    element : $(),

    xSize : 30,
    ySize : 30,

    pixelXRate : 0,
    pixelYRate : 0,

    refreshRate : 2,

    charDelay : 1,

    bufferCycle : 0,
    buffer : [],

    ////////////////////////////////////////////////////// METHODS /////////////////////////////////////////////////////
    print : function()
    {
        var self = this;
        var refreshPerChar = 1;

        this.bufferToScreen();

        var updateInterval = setInterval(function(){

            if(self.buffer.length == 0)
            {
                clearInterval(updateInterval);
            }

            self.setPixelFromBuffer();

        }, refreshPerChar);

    },

    bufferToScreen : function()
    {
        var self = this;

        setInterval(function(){

            seed = (Math.random()*10).toPrecision(1);

            $('#main-canvas').removeClass();
            $('#main-canvas').addClass('textshadow-'+seed);

        },100);

    },

    clear : function()
    {
        $('#main-canvas div').remove();
    },

    setPixelFromBuffer : function()
    {
        if(typeof this.buffer[0] != 'undefined')
        {
            cBuffer = this.buffer[0];
            this.buffer.shift();
            this.setPixel(cBuffer.c,cBuffer.x,cBuffer.y);
        }
    },

    setPixel : function(char,x,y)
    {
        absoluteX = this.pixelXRate*x;
        absoluteY = this.pixelYRate*y;

        if(char != '')
        {
            $('[data-x="'+x+'"][data-y="'+y+'"]').remove();

            var newChar = '<div data-x="'+x+'" data-y="'+y+'" style="left : '+absoluteY+'%; top : '+absoluteX+'%;">'+char+'</div>';
            $('#main-canvas').append(newChar);

        }
    },

    turnOn : function()
    {
        this.bufferToScreen();
    },

    turnOff : function()
    {

    },

    movePixel : function(x,y,xto,yto)
    {
        pixel = $('[data-x="'+x+'"][data-y="'+y+'"]');

        positionXTo = this.pixelXRate*xto;
        positionYTo = this.pixelYRate*yto;

        pixel.css('left',positionYTo+'%');
        pixel.css('top',positionXTo+'%');
        pixel.attr('data-x',xto);
        pixel.attr('data-y',yto);
    },

    create : function(elementSelector){

        this.element = $(elementSelector);

        resX = this.data('res-x');
        resY = this.data('res-y');

        this.pixelXRate = 100/this.xSize;
        this.pixelYRate = 100/this.ySize;
    }

};