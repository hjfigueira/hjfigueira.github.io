
    stdin = new Driver({

        buffer: [],

        bind : function(mb,keyboard)
        {

        },

        getBufferString : function(mb,keyboard)
        {
            return keyboard.buffer.toString();
            keyboard.buffer = [];
        },

        onPress : function(mb, keyboard, callback )
        {
            keyboard.onPress(callback);
        }

    });