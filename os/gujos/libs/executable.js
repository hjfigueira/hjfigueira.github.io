

    function Executable(program)
    {
        this.os = null;

        this.main = program.main;

        this.include = program.include;

        this.loadedLibs = null;


        this.setOs = function(os)
        {
            this.os = os;
        };

        this.loadLibs = function(loadedLibs)
        {
            this.loadedLibs = loadedLibs;
        };

        this.run = function()
        {
            this.main.apply(null,this.loadedLibs);
        }
    }