import React, { useEffect, useState } from 'react';

// interface Resp {
//   test: [],
// }

function Home() {
  const [test, setTest] = useState([] as any[]);

  const funcTest = () => {
    window.api.listen((data: any) => {
      setTest(data);
    })
  }

  useEffect(() => {
    funcTest()
  });

  console.log("test", test)

  return (
    <>
      <h1>Text</h1>
      {
       test && test.length > 0 && test.map((t: any, i: number) => {
          return (
            <li key={i}>{t.title}</li>
          )
        })
      }
    </>
  );
}

export default Home;