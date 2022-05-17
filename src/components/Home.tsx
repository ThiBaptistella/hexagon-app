import React, { useEffect, useState } from "react";
import { useApiCallHooks } from "../hooks/useHooks";
import FilesViewer from "./FilesViewer";

function Home() {
  const useApiCall = useApiCallHooks();
  const [currentPath, setCurrentPath] = useState();

  const onOpen = (name: string) => {
    useApiCall &&
      useApiCall.length > 0 &&
      useApiCall.map(
        (getPath: {
          name: { join: (arg0: any) => (prevState: undefined) => undefined };
        }) => {
          console.log("getPath", getPath.name);
          setCurrentPath(getPath.name.join(getPath.name));
        }
      );
  };

  return (
    <div id="home" title="Home">
      <h1>Lists</h1>
      <h2>{currentPath}</h2>
      <button onClick={() => console.log("back")}>go back</button>

      {!useApiCall.length ? (
        <span>Empty list</span>
      ) : (
        <FilesViewer
          files={useApiCall}
          name={""}
          directory={""}
          size={0}
          onOpen={onOpen}
        />
      )}
    </div>
  );
}

export default Home;
