import { useState, useEffect } from "react";
import React from "react";
import { useRouter } from "next/router";
import { Zoom } from "@mui/material";
import MainLayout from "../components/MainLayout";
import RoomImage from "../components/RoomImage";

function Home() {
  const router = useRouter();
  const [roomId, setRoomId] = useState(null);

  useEffect(() => {
    setRoomId(null)
  }, [router]);

  const handleRoomId = (id) => {
    setRoomId(id);
  };

  const getRoomOrigin = () => {
    switch (roomId) {
      case 1:
        return "63% 60%";
        break;
      case 2:
        return "74% 58%";
        break;
      case 3:
        return "47% 38%";
        break;
      case 4:
        return "38% 28%";
        break;
      case 5:
        return "28% 17%";
        break;

      default:
        return "top left";
        break;
    }
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return (
      <Zoom
        style={{ transformOrigin: getRoomOrigin() }}
        direction="up"
        ref={ref}
        {...props}
      />
    );
  });

  return (
    <div>
      <MainLayout handleRoomId={handleRoomId} />
      {roomId != null ? (
        <RoomImage
          roomId={roomId}
          handleRoomId={handleRoomId}
          Transition={Transition}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default Home;
