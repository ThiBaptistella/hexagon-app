import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useApiCallHooks } from "../hooks/useHooks";
import { FilesViewer } from "./FilesViewer";

function Home() {
  const useApiCall = useApiCallHooks();
  const [currentPath, setCurrentPath] = useState();
  const navigate = useNavigate();

  console.log("useApiCall", useApiCall);

  const onOpen = (name: string) => {
    useApiCall &&
    useApiCall.length > 0 &&
    useApiCall.map((getPath: { name: { join: (arg0: any) => (prevState: undefined) => undefined; }; }) => {
      console.log("getPath", getPath.name);
      // setCurrentPath(getPath.path.join(getPath.path, name))
    })
  }
  
  return (
    <>
      <h1>{currentPath}</h1>
      <button onClick={() => navigate(-1)}>go back</button>

      <FilesViewer files={useApiCall} name={""} directory={""} size={0} onOpen={onOpen}/>
    </>
  );
}

export default Home;
