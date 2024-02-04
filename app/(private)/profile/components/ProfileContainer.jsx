"use client";

import { useAuthContext } from "@/context/AuthContext";
import React from "react";
import { profileImages } from "@/helpers/profileImages";
import ProfileCard from "./ProfileCard";

const ProfileContainer = () => {
  const { currentUser } = useAuthContext();
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
      {profileImages.map(({ image, id }) => (
        <ProfileCard
          key={id}
          image={image}
          name={
            id === 1 && currentUser
              ? currentUser?.displayName
              : `Guess-${id}`
          }
        />
      ))}
    </div>
  );
};

export default ProfileContainer;
