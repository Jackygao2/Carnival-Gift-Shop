// write a function constructor Phone that creates a phone object with the following properties:
function Phone(name, height, width, screenSize, resolution) {
  this.name = name;
  this.height = height;
  this.width = width;
  this.screenSize = screenSize;
    this.resolution = resolution;
}
const iPhone = new Phone("iPhone11", 144, 71.4,6.1,12 );