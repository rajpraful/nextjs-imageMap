import { IconButton, Grid } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import styles from "./ChevronControls.module.scss";

function ChevronControls(props) {
  return (
    <div className={styles.container}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item className={styles.leftChevron} style={{opacity : props.disablePrev ? '0.1' : '0.5'}}>
          <IconButton onClick={props.onPrevClick} disabled={props.disablePrev}>
            <ChevronLeftIcon className={styles.icon} />
          </IconButton>
        </Grid>
        <Grid item className={styles.rightChevron} style={{opacity : props.disableNext ? '0.1' : '0.5'}}>
          <IconButton onClick={props.onNextClick} disabled={props.disableNext}>
            <ChevronRightIcon className={styles.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
}

export default ChevronControls;
