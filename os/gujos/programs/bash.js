/**
 * Created by helio on 07/07/16.
 */

    bash = new Executable({

        include : ['stdout'],

        main : function(stdout){

            stdout.call('clear');
            stdout.call('write','>_');

        }

    });