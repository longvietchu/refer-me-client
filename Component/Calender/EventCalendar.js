import React, { useState } from "react";
import FullCalendar, { formatDate } from "@fullcalendar/react";
import { getTimeHH, formatDateYYYY } from "../../config/Function";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { connect } from "react-redux";
import "./event.css";

let eventGuid = 0;
let todayStr = new Date().toISOString().replace(/T.*$/, ""); // YYYY-MM-DD of today

function createEventId() {
  return String(eventGuid++);
}

function renderEventContent(eventInfo) {
  return (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
    >
      <b style={{ fontSize: "14px" }}>
        {getTimeHH(eventInfo.event.start)} - {getTimeHH(eventInfo.event.end)}
      </b>
      <br />
      <i style={{ fontSize: "16px" }}>{eventInfo.event.title}</i>
    </div>
  );
}

const EventCalendar = (props) => {
  const { calendar, setStartDate, setEndDate } = props;

  const [state, setState] = useState({
    currentEvents: [],
  });

  //   const handleDateSelect = (selectInfo) => {
  //     let title = prompt("Please enter a new title for your event");
  //     let calendarApi = selectInfo.view.calendar;

  //     calendarApi.unselect(); // clear date selection

  //     if (title) {
  //       calendarApi.addEvent({
  //         id: createEventId(),
  //         title,
  //         start: selectInfo.startStr,
  //         end: selectInfo.endStr,
  //         allDay: selectInfo.allDay,
  //       });
  //     }
  //   };

  //   const handleEventClick = (clickInfo) => {
  //     if (
  //       window.confirm(
  //         `Are you sure you want to delete the event '${clickInfo.event.title}'`
  //       )
  //     ) {
  //       clickInfo.event.remove();
  //     }
  //   };

  const handleEvents = (events) => {
    setState({
      currentEvents: events,
    });
  };

  return (
    <div className="demo-app">
      <div className="demo-app-main">
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          titleFormat={{
            month: "2-digit",
            year: "numeric",
            day: "2-digit",
          }}
          buttonText={{
            year: "Năm",
            today: "Hôm nay",
            month: "Tháng",
            week: "Tuần",
            day: "Ngày",
          }}
          slotLabelFormat={{
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
          }}
          // allDayText={"Cả ngày"}
          datesSet={(arg) => {
            setStartDate(formatDateYYYY(arg.view.currentStart));
            setEndDate(formatDateYYYY(arg.view.currentEnd - 1));
          }}
          // datesSet
          allDaySlot={false}
          dayHeaderFormat={{ weekday: "long" }}
          initialView="dayGridMonth"
          locale="vi"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          events={calendar}
          eventBackgroundColor={"red"}
          eventContent={renderEventContent}
        />
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    colors: state.colorsReducer,
  };
};

export default connect(mapStatetoProps, {})(EventCalendar);
