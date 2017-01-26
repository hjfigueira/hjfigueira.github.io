
// Instantiating the physical devices
motherBoard = new MotherBoard('BNE DS2267');
cpu         = new Processor('Indel Pendulum II',3000);
monitor     = new Monitor('M6040XT2',50,25);
keyboard    = new KeyBoard('GiGABITE');
storage     = new HardDrive('SeaDoor',2);
speaker     = new Speaker('BEITS - Super Expensive Ed');


motherBoard.plugDevice('cpu',cpu);
motherBoard.plugDevice('usb1',keyboard);
motherBoard.plugDevice('sata',storage);
motherBoard.plugDevice('vga',monitor);
motherBoard.plugDevice('p2',speaker);

motherBoard.onPowerUp();