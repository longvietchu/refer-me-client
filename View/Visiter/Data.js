export const columns = [
    { id: "date", label: "Ngày đến", width: 250, align: "center", format: (value) => value.toLocaleString("en-US") },
    {
        id: "startTime",
        label: "Giờ vào",
        width: 200,
        align: "center",
        format: (value) => value.toLocaleString("en-US")
    },
    {
        id: "endTime",
        label: "Giờ ra",
        width: 200,
        align: "center",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "name",
        label: "Tên cá nhân/Đơn vị",
        width: 270,
        align: "flex-start",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "sdt",
        label: "SĐT",
        width: 170,
        align: "flex-end",
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
        id: "employee",
        label: "Đầu mối",
        width: 170,
        align: "flex-start",
        format: (value) => value.toLocaleString("en-US"),
    },
    {
        id: "sdtEmployee",
        label: "SĐT",
        width: 170,
        align: "flex-end",
        format: (value) => value.toLocaleString("en-US"),
    },
];
