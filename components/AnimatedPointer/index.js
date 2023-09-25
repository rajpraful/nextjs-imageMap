import { Typography, Grid, Box } from "@mui/material";
import styles from "./AnimatedPointer.module.scss";

function AnimatedPointer(props) {
  return (
    <Box
      onClick={props.onClick}
      style={{ left: props.left, top: props.top, width: props.width?? 'auto' }}
      className={styles.animatedPointer}
    >
      <Grid container alignItems="center">
        <Grid item  className={styles.order}>
          <Typography variant="h5">{props.order ?? '-'}</Typography>
        </Grid>
        <Grid item >
          <Box px={1}>
          <Typography
            align="center"
          >
            {props.text ?? "click me"}
          </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AnimatedPointer;
