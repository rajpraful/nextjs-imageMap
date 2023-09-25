import { useState, useEffect } from "react";
import React from "react";
import { Dialog, Zoom } from "@mui/material";
import AnimatedPointer from "../AnimatedPointer";
import DetailsDialog from "../DetailsDialog";
import ChevronControls from "../../components/ChevronControls";
import styles from "./RoomImage.module.scss";

function RoomImage(props) {
  const [itemId, setItemId] = useState(0);
  const [open, setOpen] = useState(false);
  const [roomChange, setRoomChange] = useState(
    props.roomId == null ? false : true
  );
  const { roomId, handleRoomId } = props;

  useEffect(() => {
    if (props.roomId != null) {
      setRoomChange(true);
    } else {
      setRoomChange(false);
    }
  }, [props.roomId]);

  const handleImageRoute = (id) => {
    open && setOpen(false);
    setRoomChange(false);
    setTimeout(() => {
      setRoomChange(true);
      handleRoomId(id);
    }, 1000);
  };

  const handleDialog = (id) => {
    setItemId(id);
    setOpen((prev) => !prev);
  };

  const closeDialog = () => {
    setItemId(0);
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullWidth
        fullScreen
        maxWidth="xl"
        open={roomChange}
        onClose={() => handleRoomId(null)}
        TransitionComponent={props.Transition}
      >
        <div>
          <ChevronControls
            onPrevClick={() => handleImageRoute(parseInt(roomId) - 1)}
            onNextClick={() => handleImageRoute(parseInt(roomId) + 1)}
            disableNext={roomId == 5}
            disablePrev={roomId == 1}
          />
          <>
            <img
              src={`./images/room${roomId}.jpg`}
              alt="home"
              useMap="#room1map"
              className={styles.roomImage}
            />
            <map name="room1map">
              <area
                shape="rect"
                coords="34,44,270,350"
                alt="Computer"
                onClick={() => handleDialog(1)}
              />
              <area
                shape="rect"
                coords="290,172,333,250"
                alt="Phone"
                onClick={() => handleDialog(2)}
              />
              <area
                shape="circle"
                coords="1433,650,44"
                alt="Coffee"
                onClick={() => handleDialog(3)}
              />
            </map>
            <AnimatedPointer
              left="140px"
              top="500px"
              text="Cut section"
              order={1}
              onClick={() => handleDialog(1)}
            />
            <AnimatedPointer
              left="1500px"
              top="500px"
              text="Controller"
              order={2}
              onClick={() => handleDialog(2)}
            />
            <AnimatedPointer
              left="3000px"
              top="620px"
              text="Battery"
              order={3}
              onClick={() => handleDialog(3)}
            />
          </>
          <DetailsDialog
            open={open}
            closeDialog={closeDialog}
            itemId={itemId}
            roomId={roomId}
          />
        </div>
      </Dialog>
    </div>
  );
}

export default RoomImage;
