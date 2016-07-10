
    Monitor = function(name,y,x)
    {
        this.name       = name;
        this.ySize      = y;
        this.xSize      = x;

        this.pixelXRate = 100/this.xSize;
        this.pixelYRate = 100/this.ySize;

        //this.buffer     = [];
        //this.queue      = [];
        //this.clocking   = true;
    };

    Monitor.prototype.onClock = function()
    {
        if(this.buffer.length == 0)
        {
            this.queueToBuffer();

            if(this.queue.length == 0)
            {
                this.clocking = false;
            }
        }

        this.printPixelFromBuffer();
    };

    //Monitor.prototype.print = function()
    //{
    //    this.clocking = true;
    //};

    Monitor.prototype.clear  = function()
    {
        this.motherBoard.withComponent(['cpu'], function(cpu){

            cpu.execute(function(){$('#main-canvas div').remove()});

        });

    };

    Monitor.prototype.printPixelFromBuffer = function()
    {
        if(typeof this.buffer[0] != 'undefined')
        {
            cBuffer = this.buffer[0];
            this.buffer.shift();

            if(cBuffer.c == '¬')
            {
                this.moveScreen();
            }
            else
            {
                if(cBuffer.x >= this.xSize || cBuffer.y >= this.ySize)
                {
                    return false;
                }

                if(cBuffer.x < 0 || cBuffer.y < 0 )
                {
                    return false;
                }

                this.setPixel(cBuffer.c,cBuffer.x,cBuffer.y);

            }
        }
    };

    Monitor.prototype.setPixel = function(char,x,y)
    {
        absoluteX = this.pixelXRate * x;
        absoluteY = this.pixelYRate * y;

        if (char != '') {
            $('[data-x="' + x + '"][data-y="' + y + '"]').remove();

            var newChar = '<div data-x="' + x + '" data-y="' + y + '" style="left : ' + absoluteY + '%; top : ' + absoluteX + '%;">' + char + '</div>';
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
        return 'Monitor Power Check .......................... OK';
    };

    Monitor.prototype.onPowerUp = function()
    {
        return 'Monitor Already ON';
    };

    Monitor.prototype.onPowerOff = function()
    {

    };

    Monitor.prototype.moveScreen = function()
    {
        for (xc = 0; xc <= this.xSize; xc++) {

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

    //Monitor.prototype.write = function(string, x, y)
    //{
    //    var self = this;
    //
    //    if(!x){x = this.xSize-1};
    //    if(!y){y = 1};
    //
    //    if(typeof string != 'undefined')
    //    {
    //        self.queue.push({ x : x, y : y, string :string});
    //        self.print();
    //    }
    //};

    Monitor.prototype.write = function(string, x, y)
    {
        var self = this;
        this.motherBoard.withComponent(['cpu'], function(cpu){

                if(!x){x = self.xSize-1};
                if(!y){y = 1};

                arrayChar = string.split('');
                arrayChar.forEach(function(item,index){

                cpu.execute(function(){

                    if(item == '¬')
                    {
                        self.moveScreen();
                    }
                    else
                    {
                        if(x >= self.xSize || y >= self.ySize)
                        {
                            return false;
                        }

                        if(x < 0 || y < 0 )
                        {
                            return false;
                        }

                        self.setPixel(item,x,y+index);

                    }

                });

            });

        });

    };

    Monitor.prototype.onDetails = function()
    {
        return this.name+' - '+this.xSize+'x'+this.ySize;
    };