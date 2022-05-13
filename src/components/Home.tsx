import React, { useEffect, useState } from "react";
import { useApiCallHooks } from "../hooks/useHooks";

function Home() {
  const useApiCall = useApiCallHooks();
  console.log("useApiCall", useApiCall);

  return (
    <>
      <h1>Text</h1>
      <ul>
        {useApiCall &&
          useApiCall.length > 0 &&
          useApiCall.map((t: any, i: number) => {
            return <li key={i}>{t.name}</li>;
          })}
      </ul>
    </>
  );
}

export default Home;
