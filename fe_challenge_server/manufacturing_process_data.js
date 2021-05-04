const manufacturingProcesses = [
  {
    id: "1",
    name: "DLS",
    materials: [
      { id: "1", type: "flexible plastic" },
      { id: "2", type: "rigid plastic" },
    ],
  },
  {
    id: "2",
    name: "FDM",
    materials: [{ id: "1", type: "rigid plastic" }],
  },
  {
    id: "3",
    name: "CNC",
    materials: [
      { id: "3", type: "aluminum" },
      { id: "1", type: "rigid plastic" },
      { id: "4", type: "steel" },
    ],
  },
];

exports.manufacturingProcesses = manufacturingProcesses;
