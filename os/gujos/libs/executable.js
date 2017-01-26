

    function Executable(program)
    {
        this.main = program.main;

        this.libs = program.include;

        this.loadedLibs = null;

        this.loadLibs = function(loadedLibs)
        {
            this.loadedLibs = loadedLibs;
        };

        this.run = function()
        {
            this.main.apply(this.loadedLibs);
        }
    }