"use client";
import MeetingCard from "./MeetingCard";
import MiniMeeting from "./MiniMeeting";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import React, { useEffect, useState, useRef } from "react";
import { HomeCalender } from "components";
import DateCalendar from "./DateCalendar";
import Link from "next/link";

const MeetingsPage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="w-[80%] grid grid-cols-10 pr-4 pt-2 pb-4">
      <div className="col-span-7 pr-4">
        <p className="text-2xl font-semibold leading-6 text-gray-900 my-6">
          Meetings
        </p>
        <div className="text-gray-900 my-2 font-semibold leading-4 text-lg">
          Today
        </div>
        <MeetingCard />
        <div className="text-gray-900 my-2 font-semibold leading-4 text-lg mt-4">
          Tomorrow
        </div>
        <MeetingCard />
        <MeetingCard />
        <MeetingCard />
        <div className="text-gray-900 my-2 font-semibold leading-4 text-lg mt-4">
          History
        </div>
        <MeetingCard />
        <MeetingCard />
      </div>

      <div className="col-span-3 flex-col items-center flex pt-24">
        {/* <Calendar
				className="p-1 rounded-lg border-none shadow w-full aspect-square text-sm"
				onChange={onChange}
				value={value}
			/>  */}
        <div className="p-1 rounded-lg border-none shadow w-fit text-sm bg-white">
          <DateCalendar />
          <div className="flex justify-between px-2 items-center">
          <p className="text-gray-800 font-semibold ">Oct 7/2023 | Monday</p>
<Link href="" className="text-white rounded font-semibold px-2 py-1 bg-gradient-to-bl from-indigo-600 to-purple-500">Book</Link>
          </div>
          <MiniMeeting />
          <MiniMeeting />
        </div>
      </div>
    </div>
  );
};
export default MeetingsPage;
