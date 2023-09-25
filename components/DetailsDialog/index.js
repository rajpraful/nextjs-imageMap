import { useState, useEffect } from "react";
import React from "react";
import {
  Typography,
  Box,
  Grid,
  Button,
  Dialog,
  Slide,
  IconButton,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";
import ChevronControls from "../../components/ChevronControls";
import data from "./data";
import styles from "./DetailsDialog.module.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function DetailsDialog(props) {
  const { roomId, itemId } = props;
  const roomData = data[roomId] ?? [];
  const [index, setIndex] = useState(itemId > 0 ? itemId - 1 : 0);
  const [direction, setDirection] = useState("up");
  const [slideFlag, setSlideFlag] = useState(true);
  const [itemData, setItemData] = useState(
    roomData[itemId > 0 ? itemId - 1 : 0]
  );

  useEffect(() => {
    if (props.itemId > 0) {
      const newIndex = props.itemId - 1;
      setItemData(roomData[newIndex]);
      setIndex(newIndex);
    }
  }, [props.itemId]);

  const handleDialog = () => {
    props.closeDialog();
  };

  const handleNext = () => {
    setDirection("right");
    setSlideFlag(false);
    setTimeout(() => {
      setDirection("left");
      setItemData(roomData[index + 1]);
      setIndex((prev) => prev + 1);
      setSlideFlag(true);
    }, 1000);
  };

  const handlePrev = () => {
    setDirection("left");
    setSlideFlag(false);
    setTimeout(() => {
      setDirection("right");
      setItemData(roomData[index - 1]);
      setIndex((prev) => prev - 1);
      setSlideFlag(true);
    }, 1000);
  };

  return (
    <div>
      <Dialog
        fullWidth
        fullScreen
        maxWidth="xl"
        open={props.open}
        onClose={handleDialog}
        TransitionComponent={Transition}
      >
        <>
          <ChevronControls
            onPrevClick={handlePrev}
            onNextClick={handleNext}
            disableNext={index == roomData.length - 1}
            disablePrev={index == 0}
          />
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            className={styles.dialogContainer}
          >
            <Grid item xs={6} className={styles.dialogImageContainer}>
              <Box pb={2} display="flex" pl={7}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={styles.dialogBackButton}
                  onClick={handleDialog}
                >
                  <KeyboardBackspaceIcon />
                </Button>
                <Typography variant="h4" color="#fff">
                  Motors
                </Typography>
              </Box>
              <Slide
                direction={direction}
                in={slideFlag}
                timeout={700}
                mountOnEnter
                unmountOnExit
              >
                <img
                  src={itemData.image}
                  alt="home"
                  className={styles.dialogImage}
                />
              </Slide>
            </Grid>
            <Grid item xs={5}>
              <Box px={4}>
                <IconButton
                  className={styles.dialogClose}
                  onClick={handleDialog}
                >
                  <CloseIcon />
                </IconButton>
                <Slide
                  direction={direction}
                  in={slideFlag}
                  timeout={700}
                  mountOnEnter
                  unmountOnExit
                >
                  <div>
                    <Typography variant="h6">{itemData.name}</Typography>
                    <Box py={2}>
                      <Typography variant="caption">
                        {itemData.description}
                      </Typography>
                    </Box>
                    <Typography variant="body1">specification</Typography>
                    {itemData.specification}
                  </div>
                </Slide>
              </Box>
            </Grid>
          </Grid>
        </>
      </Dialog>
    </div>
  );
}

export default DetailsDialog;
