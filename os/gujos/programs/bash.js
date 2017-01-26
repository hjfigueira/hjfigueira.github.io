/**
 * Created by helio on 07/07/16.
 */

    bash = new Executable({

        include : ['stdin','stdout'],

        main : function(stdin, stdout){

            stdout.call('clear');
            stdout.write('>_');

        }

    });