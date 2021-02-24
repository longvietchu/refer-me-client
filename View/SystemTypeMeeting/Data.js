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
];
