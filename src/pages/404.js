import React, { useState, useEffect } from 'react';
import randomEmoji from 'random-emoji';

const EmojiTile = () => {
  const getEmoji = () => {
    return randomEmoji.random({ count: 1 })[0].character
  };

  const [emoji, setEmoji] = useState(getEmoji());
  const [now, setNow] = useState(new Date());
  const [seed, setSeed] = useState(Math.floor(10 * Math.random()));

  useEffect(() => {
    const timeout = setTimeout(() => {
      const now = new Date()
      if (now % seed == 0) {
        setEmoji(getEmoji());
        setSeed(Math.ceil(10 * Math.random()));
      }
      setNow(now);
    }, 200);

    return () => {
      clearTimeout(timeout);
    }
  }, [now]);

  return (
    <div
      style={{
        fontSize: 75,
        display: 'inline',
        height: 100,
        width: 100,
        textAlign: 'center'
      }}
    >
      <div>{`${emoji}`}</div>
    </div>
  )
};

const Row = () => {
  const [nCol, setNCol] = useState(1);

  useEffect(() =>{
    if (typeof window !== undefined) {
      setNCol(Math.floor(window.innerWidth / 100))
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around'
      }}
    >
      {[...Array(nCol)].map((i) => (<EmojiTile key={`col${i}`}/>))}
    </div>
  );
};

const BackGround = () => {
  const [nRow, setNRow] = useState(0);

  useEffect(() =>{
    if (typeof window !== undefined) {
      setNRow(Math.floor(window.innerHeight / 100) + 1)
    }
  });

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
      }}
    >
      {[...Array(nRow)].map((i) => (<Row key={`row${i}`}/>))}
    </div>
  );
};

const NotFound = () => (
  <div
    style={{
      width: '100%',
      overflow: 'hidden'
    }}
  >
    <BackGround />
    <div style={{
      display: 'flex', 
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',
      fontFamily: 'Roboto Mono',
      fontWeight: 800,
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,

    }}>
      <div
        style={{
          height: '35vw',
          width: '35vw',
          borderRadius: '50%',
          textAlign: 'center',
          color: 'white',
          background: '#00000088',
          padding: '5vw',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)'
        }}
      > 
        <div style={{ fontSize: '18vw'}}>
          404
        </div>
        <div style={{ fontSize: '4vw'}}>
          Not Found
        </div>
      </div>
    </div>
  </div>
);

export default NotFound; 

