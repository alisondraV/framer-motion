import React, {useState} from 'react';
// import './App.css';
import {motion} from 'framer-motion';

const MotionFruit = ({word, url}) => {
  const [isImageVisible, setIsImageVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  return (
    <motion.div
      onHoverStart={() => {
        setIsImageVisible(true);
        setImageUrl('/coconut.jpg')
      }}
      onHoverEnd={() => setIsImageVisible(false)}
      style={{display: 'flex', alignItems: 'center', height: '33vh', justifyContent: 'center'}}
    >
      {
        isImageVisible &&
        <motion.img drag animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"]
        }}
        style={{width: '200px', height: '200px', position: "absolute"}} src={url} />
      }

      <p>{word}</p>
    </motion.div>
  )
}

function App() {
  return (
    <div className="App" style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      height: '100vh',
      gridTemplateRows: '1fr 1fr 1fr'
    }}>
      <MotionFruit word="Coconut" url="/coconut.jpg"/>

      <MotionFruit word="Dragon Fruit" url="/dragon-fruit.jpg"/>

      <MotionFruit word="Mango" url="/mango.jpeg"/>

      <MotionFruit word="Pineapple" url="/pineapple.jpg"/>

      <MotionFruit word="Passion Fruit" url="/passion-fruit.jpg"/>

      <motion.div dragConstraints={{
        top: -450,
        left: -450,
        right: 450,
        bottom: 450 }}  drag>
        <h1>Heeloo</h1>
      </motion.div>
    </div>
  );
}

export default App;
