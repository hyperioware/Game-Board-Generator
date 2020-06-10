class Board{
  height = 0;
  width = 0;
  name = "";
  tiles = {};
  constructor(settings){
    this.height = settings.height;
    this.width = settings.width;
    this.name = settings.name;
    this.tiles = settings.tiles;
  }
}
