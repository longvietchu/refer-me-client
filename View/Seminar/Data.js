export const columns = [
    {
        id: "name",
        label: "Tên Seminar",
        width: 250,
        align: "flex-start",
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "date", label: "Ngày", width: 200, align: "center",
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "timeStart", label: "Giờ bắt đầu", width: 200, align: "center",
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "timeEnd", label: "Giờ kết thúc", width: 200, align: "center",
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "location",
        label: "Địa điểm",
        width: 270,
        align: "flex-start",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "speaker",
        label: "Diễn giả",
        width: 170,
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
        width: 170,
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
