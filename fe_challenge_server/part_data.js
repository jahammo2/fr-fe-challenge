const maxQuant = 100;
const randomQuant = () => {
  return Math.floor(Math.random() * maxQuant).toString();
};

const parts = [
  {
    part: { file_name: "moon.stl", id: "1", units: "mm" },
    id: "1",
    manufacturingProcess: { id: "1", name: "DLS" },
    material: { id: "1", type: "flexible plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "sun.stl", id: "2", units: "mm" },
    id: "2",
    manufacturingProcess: { id: "2", name: "FDM" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "star.stl", id: "3", units: "mm" },
    id: "3",
    manufacturingProcess: { id: "3", name: "CNC" },
    material: { id: "3", type: "aluminum" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "mercury.stl", id: "4", units: "mm" },
    id: "4",
    manufacturingProcess: { id: "3", name: "CNC" },
    material: { id: "4", type: "steel" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "venus.stl", id: "5", units: "mm" },
    id: "5",
    manufacturingProcess: { id: "2", name: "FDM" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "earth.stl", id: "6", units: "mm" },
    id: "6",
    manufacturingProcess: { id: "1", name: "DLS" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "mars.stl", id: "7", units: "mm" },
    id: "7",
    manufacturingProcess: { id: "2", name: "FDM" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "jupiter.stl", id: "8", units: "mm" },
    id: "8",
    manufacturingProcess: { id: "3", name: "CNC" },
    material: { id: "3", type: "aluminum" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "saturn.stl", id: "9", units: "mm" },
    id: "9",
    manufacturingProcess: { id: "1", name: "DLS" },
    material: { id: "1", type: "flexible plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "uranus.stl", id: "10", units: "mm" },
    id: "10",
    manufacturingProcess: { id: "2", name: "FDM" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "neptune.stl", id: "11", units: "mm" },
    id: "11",
    manufacturingProcess: { id: "3", name: "CNC" },
    material: { id: "4", type: "steel" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "pluto.stl", id: "12", units: "mm" },
    id: "12",
    manufacturingProcess: { id: "3", name: "CNC" },
    material: { id: "3", type: "aluminum" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "asteroid.stl", id: "13", units: "mm" },
    id: "13",
    manufacturingProcess: { id: "2", name: "FDM" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "meteor.stl", id: "14", units: "mm" },
    id: "14",
    manufacturingProcess: { id: "1", name: "DLS" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "comet.stl", id: "15", units: "mm" },
    id: "15",
    manufacturingProcess: { id: "2", name: "FDM" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "rocket.stl", id: "16", units: "mm" },
    id: "16",
    manufacturingProcess: { id: "3", name: "CNC" },
    material: { id: "4", type: "steel" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "space_station.stl", id: "17", units: "mm" },
    id: "17",
    manufacturingProcess: { id: "1", name: "DLS" },
    material: { id: "1", type: "flexible plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "astronaut.stl", id: "18", units: "mm" },
    id: "18",
    manufacturingProcess: { id: "2", name: "FDM" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "nasa_logo.stl", id: "19", units: "mm" },
    id: "19",
    manufacturingProcess: { id: "3", name: "CNC" },
    material: { id: "3", type: "aluminum" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "ufo.stl", id: "20", units: "mm" },
    id: "20",
    manufacturingProcess: { id: "1", name: "DLS" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "perseverance_rover.stl", id: "21", units: "mm" },
    id: "21",
    manufacturingProcess: { id: "3", name: "CNC" },
    material: { id: "2", type: "rigid plastic" },
    quantity: randomQuant(),
  },
  {
    part: { file_name: "hubble_telescope.stl", id: "22", units: "mm" },
    id: "22",
    manufacturingProcess: { id: "1", name: "DLS" },
    material: { id: "1", type: "flexible plastic" },
    quantity: randomQuant(),
  },
];

exports.parts = parts;
