/**
 * Created by helio on 07/07/16.
 */

    bash = new Executable({

        include : ['stdout','stdin'],

        command : [],

        currentCursor : {
            'x' : 1,
            'y' : 0
        },

        main : function(stdout,stdin){

            var self = this;

            stdout.call('clear');
            stdout.call('write',0,0,'Type "help" for commands¬¬');
            stdout.call('write',0,0,'>_');

            stdin.call('onPress',function(keyString){

                if(keyString == 'Backspace') {

                    stdout.call('write', self.currentCursor.x, self.currentCursor.y, '_ ');

                    self.command.pop();

                    if (self.currentCursor.x > 2) {
                        self.currentCursor.x -= 1;
                    }

                }else if (keyString == 'Enter') {

                    stdout.call('write',self.currentCursor.x+1, self.currentCursor.y,' ');
                    stdout.call('write',0,0,'¬¬');
                    self.currentCursor.x = 1;
                    self.checkCommand(stdout);

                }else if(/^[a-zA-Z0-9 -.]{1,1}$/.test(keyString)){

                    self.currentCursor.x += 1;
                    stdout.call('write',self.currentCursor.x, self.currentCursor.y,keyString);
                    stdout.call('write',self.currentCursor.x+1, self.currentCursor.y,'_');
                    self.command.push(keyString);
                }

            })

        },

        checkCommand : function(stdout)
        {
            var string = '';

            this.command.forEach(function(item){
                string += item;
            });

            commandArray = string.split(' ');

            command = commandArray.shift();
            parameters = commandArray;

            this.command = [];

            this.invokeCommand(command,parameters,stdout);

        },

        invokeCommand : function(command, parameters,stdout)
        {
            if( command == 'clear' )
            {
                stdout.call('clear');

            }
            else if ( command == 'help' ) {

                stdout.call('write',0,0,'Available Comands ¬¬');
                stdout.call('write',0,0,'help   - Display this help¬');
                stdout.call('write',0,0,'send   - Sends contacts messages for administrator¬');
                stdout.call('write',0,0,'ls     - List folder content¬');
                stdout.call('write',0,0,'cd     - Change current directory¬');

            }
            else{

                stdout.call('write',0,0,'[ERROR] I\'m sorry user, i\'m afraid a cant do that¬');

            }

            stdout.call('write',0,0,'¬');
            stdout.call('write',0,0,'>_');
        }

    });