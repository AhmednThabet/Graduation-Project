"use client";
import React, { useState } from "react";
import CatagoryCard from "components/CatagoryCard";
import Calendar from "react-calendar";
import {
  Card,
  Featuers,
  HomeCalender,
  Input,
  Modal,
  NoSsr,
  Review,
  Select,
  ExpertDilog,
  Statistics,
} from "components";
// import { Datepicker } from "@mobiscroll/react";

import { CalendarComponent } from "@syncfusion/ej2-react-calendars";
import PostCard from "featuers/pages/Profile/Posts/PostCard";
import { useCurrentUser } from "Hooks";

const Home = () => {
  const { userRole } = useCurrentUser();
  // const {
  //   isOpen: isOpen,
  //   close: closeButton,
  //   open: OpenButton,
  // } = useToggle(false);

  return (
    <div className="w-[80%] flex-col px-4 py-2">
      {userRole == "expert" && <Statistics />}
      <div>
        <p className="text-2xl font-semibold leading-6 text-gray-900 my-6">
          Categories
        </p>
        <div className="grid gap-4 grid-cols-3 grid-rows-2 w-full">
          <CatagoryCard
            bgUrl={"bg-[url('/assets/img/Catagories/Investment.jpg')]"}
            text="Investment"
          ></CatagoryCard>
          <CatagoryCard
            bgUrl={"bg-[url('/assets/img/Catagories/Realestate1.jpg')]"}
            text="Real estate"
          ></CatagoryCard>
          <CatagoryCard
            bgUrl={"bg-[url('/assets/img/Catagories/SocialMedia.jpeg')]"}
            text="Social Media"
          ></CatagoryCard>
          <CatagoryCard
            bgUrl={"bg-[url('/assets/img/Catagories/Technology1.jpg')]"}
            text="Technology"
          ></CatagoryCard>
          <CatagoryCard
            bgUrl={"bg-[url('/assets/img/Catagories/Finance.png')]"}
            text="Finance"
          ></CatagoryCard>
          <Card className="cursor-pointer select-none w-full h-40 flex justify-center items-center  opacity-40 hover:bg-gray-700 hover:bg-opacity-50">
            <p className="text-xl text-gray-600">o o o</p>
          </Card>
        </div>
      </div>

      {/* <Modal
          isOpen={isOpen}
          closeModal={closeButton}
          title="Become Expert"
          centerTitle={false}
          closeIconClasses="mt-[-40px] mr-[-20px]"
          className="relative inline-flex items-center gap-x-1.5 rounded-md w-[500px]  h-[500px] !bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          <p className="bg-red">Become Expert</p>
        </Modal> */}
      {/* <HomeCalender /> */}

      <div>
        <p className="font-semibold text-2xl leading-6 text-gray-900 my-6 ">
          Featuers
        </p>
        <Featuers />
      </div>
      <div>
        <p className="font-semibold text-2xl leading-6 text-gray-900 my-6 ">
          Top Rated Experts
        </p>
        <Review />
      </div>
    </div>
  );
};

export default Home;
