"use client";
import "./FullCalender.css";
import FullCalendar from "@fullcalendar/react";

import React, { useState, useRef, useEffect } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import resourceTimelinePlugin from "@fullcalendar/resource-timeline";
import timeGridPlugin from "@fullcalendar/timegrid";
import { useRouter } from "next/navigation";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useAxios } from "Hooks";
import NoSsr from "components/NoSsr";

const getWorkingDays = (arr) => {
  const Dayes = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wendsday",
    4: "Thersday",
    5: "Friday",
    6: "Satarday",
  };
  const workingDays = arr?.map((day) => {
    for (const [key, value] of Object.entries(Dayes)) {
      if (day == value) {
        return parseInt(key);
      }
    }
  });
  return workingDays;
};
// const renderDayCell = (arg) => {
//   // const isBusinessHour = arg?.view?.calendar?.isDateInBusinessHours(arg.date);
//   console.log(arg, "argargarg");
//   // Render buttons only for business hours cells
//   if (true) {
//     // Create a new button element
//     const button = (
//       <button onClick={() => handleButtonClick(arg.date)}>Click Me</button>
//     );

//     // Return the button element to be displayed in the cell
//     return (
//       <div>
//         {arg.dayNumberText}
//         {button}
//       </div>
//     );
//   }

//   // Return null for non-business hours cells (no button will be displayed)
//   return null;
// };
const FullCalendarComponent = ({
  expertAvailableHours,
  sessions,
  calander,
  setSteps,
  steps,
}) => {
  const router = useRouter();
  const calendarRef = useRef();
  useEffect(() => {}, [steps]);
  console.log(steps);
  const handlePreviousPage = () => {
    console.log("prev was clicked ");
    calendarRef.current.getApi().prev();
    setSteps((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNextPage = () => {
    console.log("next was clickedf");
    calendarRef.current.getApi().next();
    setSteps((prev) => prev + 1);
  };
  const handleEventClick = (arg) => {
    // Handle event click here
    const event = arg.event;
    console.log("Event clicked: ", event);
    router.push(`/web/Session?id=${event._def.publicId}`);
  };

  return (
    <NoSsr>
      <div className="bg-[#ffff] font-semibold p-1 w-full my-4 rounded shadow-md text-black">
        <button
          className=" absolute top-30 py-3  right-20 w-10 z-10 "
          onClick={handlePreviousPage}
        ></button>
        <button
          className=" absolute top-30 py-3  w-10 right-4  z-10"
          onClick={handleNextPage}
        ></button>
        <FullCalendar
          headerToolbar={{
            left: "title",
            center: "",
            right: "prev,next", // user can switch between the two
          }}
          events={[...sessions]}
          plugins={[timeGridPlugin]}
          initialView="timeGridWeek"
          allDaySlot={false}
          slotDuration="01:00:00"
          slotEventOverlap={true}
          ref={calendarRef}
          themeSystem="Litera"
          eventContent="Sessino"
          eventBackgroundColor={
            (calander &&
            calander.sessions &&
            calander?.sessions[0] &&
            calander?.sessions[0]?.status == "pending"
              ? "#FFC300"
              : "green") || "#FFC300"
          }
          eventTextColor="white"
          displayEventTime={true}
          businessHours={{
            daysOfWeek: getWorkingDays(calander?.workingHours?.daysOfWork), // Monday - Thursday
            startTime: expertAvailableHours?.fromTime, // a start time (10am in this example)
            endTime: expertAvailableHours?.toTime,
          }}
          eventClick={handleEventClick}
        />
      </div>
    </NoSsr>
  );
};
export default FullCalendarComponent;
