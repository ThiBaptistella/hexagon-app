import React, { useEffect, useState } from 'react';


function Home() {
  const [test, setTest] = useState();

  const funcTest = () => {
    window.api.listen((msg: any) => {
      setTest(msg);
    })
  }

  useEffect(() => {
    funcTest()
  });

  return (
    <h1>{test}</h1>
  );
}

export default Home;