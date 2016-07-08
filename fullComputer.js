
// Instantiating the phisical devices
cpu         = new Processor('Indel Pendulum II',10);
monitor     = new Monitor('M6040XT2',60,40);
keyboard    = new KeyBoard('GiGABITE');
storage     = new HardDrive('SeaDoor 2MB',2);
motherBoard = new MotherBoard('BNE DS2267');


motherBoard.plugDevice('cpu',cpu);
motherBoard.plugDevice('usb1',keyboard);
motherBoard.plugDevice('sata',storage);
motherBoard.plugDevice('vga',monitor);

motherBoard.onPowerUp();