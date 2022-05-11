import React, { useEffect, useState } from 'react';

function Home() {
  const [test, setTest] = useState([] as any[]);

  const funcTest = () => {
    window.api.apiCall((data: any) => {
      setTest(data);
      console.log("funcTest", data)
    })
  }

  useEffect(() => {
    funcTest()
  });

  console.log("outside funcTest", test)

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