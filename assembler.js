

// Instantiating the phisical devices
monitor     = new Monitor();
keyboard    = new KeyBoard();
storage     = new Storage();
motherBoard = new MotherBoard();

motherBoard.plugDevice(monitor);
motherBoard.plugDevice(keyboard);
motherBoard.plugDevice(storage);

motherBoard.powerUp();