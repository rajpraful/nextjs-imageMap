import AnimatedPointer from "../AnimatedPointer";
import styles from "./MainLayout.module.scss";

function MainLayout(props) {
  const { handleRoomId } = props;

  return (
    <div>
      <img
        src="./images/home.jpeg"
        alt="home"
        useMap="#homemap"
        className={styles.homeImage}
      />
      <map name="homemap">
        <area
          shape="poly"
          coords="3090,1560,2670,1700,1960,1200,2400,1100"
          alt="room1"
          onClick={() => handleRoomId(1)}
        />
        <area
          shape="poly"
          coords="3090,1560,3270,1460,2430,1030,2400,1100"
          alt="room2"
          onClick={() => handleRoomId(2)}
        />
        <area
          shape="poly"
          coords="1700,1100,2250,970,1870,680,1350,850"
          alt="room3"
          onClick={() => handleRoomId(3)}
        />
        <area
          shape="poly"
          coords="1870,680,1350,850,1050,550,1450,400"
          alt="room4"
          onClick={() => handleRoomId(4)}
        />
        <area
          shape="poly"
          coords="1050,550,1450,400,1200,220,700,300"
          alt="room5"
          onClick={() => handleRoomId(5)}
        />
      </map>
      {/* <AnimatedPointer
        left="2400px"
        top="1300px"
        text="Motors"
        order={1}
        onClick={() => handleRoomId(1)}
      />
      <AnimatedPointer
        left="2900px"
        top="1220px"
        width="38rem"
        text="Science Models"
        order={2}
        onClick={() => handleRoomId(2)}
      />
      <AnimatedPointer
        left="1800px"
        top="700px"
        text="EV Parts"
        order={3}
        onClick={() => handleRoomId(3)}
      />
      <AnimatedPointer
        left="1300px"
        top="450px"
        width="35rem"
        text="Fault Analysis"
        order={4}
        onClick={() => handleRoomId(4)}
      />
      <AnimatedPointer
        left="1000px"
        top="200px"
        width="41rem"
        text="Cut Model Display"
        order={5}
        onClick={() => handleRoomId(5)}
      /> */}
    </div>
  );
}

export default MainLayout;
