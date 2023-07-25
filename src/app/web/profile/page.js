"use client";
import ProfileHeader from "featuers/pages/Profile/ProfileHeader";
import About from "featuers/pages/Profile/About";
import Resume from "featuers/pages/Profile/Resume";
import Posts from "featuers/pages/Profile/Posts";
import Reviwes from "featuers/pages/Profile/Reviwes";
import Callender from "featuers/pages/Profile/Callender";
import SendUpdatedDataPopupNormal from "featuers/pages/Profile/SendUpdatedDataPopupNormal";
import React, { useState } from "react";

const Profile = () => {
  const [profileSection, setProfileSection] = useState("posts");
  const [pops, setPops] = useState(false);

  const handleProfileSection = (section) => {
    setProfileSection(section);
  };

  const handlePops = (pops) => {
    setPops(pops);
  };

  return (
    <div className="w-[80%] flex-col mt-2 px-4 py-2">
      <ProfileHeader handleProfileSection={handleProfileSection} />
      <div className="flex">
        {profileSection === "resume" && <Resume />}
        {profileSection === "posts" && <Posts />}
        {profileSection === "reviwes" && <Reviwes />}
        {profileSection === "callender" && <Callender />}

        {profileSection != "callender" && <About handlePops={setPops} />}
      </div>

      {pops && <SendUpdatedDataPopupNormal handlePops={setPops} />}
    </div>
  );
};
export default Profile;