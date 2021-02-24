export const columns = [
  {
    id: "name",
    label: "Tên",
    minWidth: 400,
    align: "flex-start",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "code",
    label: "Mã",
    minWidth: 150,
    align: "flex-start",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "capacity",
    label: "Sức chứa",
    minWidth: 150,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "officename",
    label: "Thuộc văn phòng",
    minWidth: 150,
    align: "flex-start",
    format: (value) => value.toLocaleString("en-US"),
  },
];
