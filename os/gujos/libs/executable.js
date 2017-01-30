

    function Executable(program)
    {
        this.os = null;

        this.program = program;

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
            this.program.main.apply(this.program,this.loadedLibs);
        }
    }