
    Monitor = function()
    {
        this.ySize = 40;
        this.xSize = 20;

        this.pixelXRate = 5;
        this.pixelYRate = 2.5;

        this.buffer = [];
        this.queue = [];
    };

    Monitor.prototype.print = function()
    {
        var self = this;
        var refreshPerChar = 100;

        var updateInterval = setInterval(function(){

            if(self.buffer.length == 0)
            {
                self.queueToBuffer();

                if(self.queue.length == 0)
                {
                    clearInterval(updateInterval);
                }
            }

            self.printPixelFromBuffer();

        }, refreshPerChar);
    };

    Monitor.prototype.clear  = function()
    {
        $('#main-canvas div').remove();
    };

    Monitor.prototype.printPixelFromBuffer = function()
    {
        if(typeof this.buffer[0] != 'undefined')
        {
            cBuffer = this.buffer[0];
            this.buffer.shift();

            console.log(cBuffer.c);

            if(cBuffer.c == '¬')
            {
                console.log('Scrool');
                this.moveScreen();
            }
            else
            {
                this.setPixel(cBuffer.c,cBuffer.x,cBuffer.y);
            }
        }
    };

    Monitor.prototype.setPixel = function(char,x,y)
    {
        absoluteX = this.pixelXRate*x;
        absoluteY = this.pixelYRate*y;

        if(char != '')
        {
            $('[data-x="'+x+'"][data-y="'+y+'"]').remove();

            var newChar = '<div data-x="'+x+'" data-y="'+y+'" style="left : '+absoluteY+'%; top : '+absoluteX+'%;">'+char+'</div>';
            $('#main-canvas').append(newChar);

        }
    };

    Monitor.prototype.movePixel = function(x,y,xto,yto)
    {
        pixel = $('[data-x="'+x+'"][data-y="'+y+'"]');

        positionXTo = this.pixelXRate*xto;
        positionYTo = this.pixelYRate*yto;

        pixel.css('left',positionYTo+'%');
        pixel.css('top',positionXTo+'%');
        pixel.attr('data-x',xto);
        pixel.attr('data-y',yto);
    };

    Monitor.prototype.onPowerCheck = function()
    {
        return 'Monitor Power Check ............ OK';
    };

    Monitor.prototype.onPowerUp = function()
    {
        setInterval(function(){

            seed = (Math.random()*10).toPrecision(1);

            $('#main-canvas').removeClass();
            $('#main-canvas').addClass('textshadow-'+seed);

        },100);

        return 'Monitor Already ON';
    };

    Monitor.prototype.onPowerOff = function()
    {

    };

    Monitor.prototype.moveScreen = function()
    {
        for (xc = 0; xc <= 20; xc++) {

            pixel = $('[data-x="'+xc+'"]');

            to = (xc -1);

            if(to == -1)
            {
                pixel.remove();
            }else{

                positionXTo = this.pixelXRate * to;

                pixel.css('top', positionXTo + '%');
                pixel.attr('data-x', to);
            }
        }
    };

    Monitor.prototype.queueToBuffer = function()
    {
        var self = this;
        queue = this.queue[0];

        if(typeof queue != 'undefined')
        {
            this.queue.shift();

            arrayChar = queue.string.split('');
            arrayChar.forEach(function(item,index){

                self.buffer.push({ x : queue.x, y : queue.y+index, c :item});

            });
        }
    };

    Monitor.prototype.write = function(string, x, y)
    {
        var self = this;

        if(!x){x = 20};
        if(!y){y = 1};


        if(typeof string != 'undefined')
        {
            self.queue.push({ x : x, y : y, string :string});
            this.print();
        }
    };