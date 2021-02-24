export const columns = [
  {
    id: "name",
    label: "Tên cuộc họp",
    width: 250,
    align: "flex-start",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date", label: "Ngày", width: 200, align: "center",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "timeStart", label: "Giờ bắt đầu", minWidth: 60, align: "center",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "timeEnd", label: "Giờ kết thúc", minWidth: 60, align: "center",
    format: (value) => value.toLocaleString("en-US")
  },
  {
    id: "location",
    label: "Địa điểm",
    minWidth: 72,
    align: "flex-start",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "level",
    label: "Mức độ",
    minWidth: 62,
    align: "flex-start",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "creator",
    label: "Người tạo",
    width: 170,
    align: "flex-start",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Trạng thái",
    minWidth: 80,
    align: "flex-start",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "dateCreate",
    label: "Ngày tạo",
    width: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];
