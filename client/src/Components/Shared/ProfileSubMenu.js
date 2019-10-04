import React, { useEffect, useState } from "react";

function ProfileSubMenu() {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");

  debugger;

  useEffect(
    function loadUserProfile() {
      this.props.auth.getProfile(
        (profile, error) => setProfile(profile),
        setError(error)
      );
    },
    [error]
  );

  return <p>{profile.nickname}</p>;
}

export default ProfileSubMenu;
