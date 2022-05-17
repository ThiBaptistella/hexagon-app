import { useEffect, useState } from "react";

export const useApiCallHooks = (): any => {
  const [list, setList] = useState([]);
  useEffect(() => {
    // window.api.apiCall((data: any) => {
    //   setList(data);
    // });
    const useApiCallHooks = [
      {
        directory: false,
        name: "babel.config.js",
        path: "/Users/thibaptistella/Documents/Projects/hexagon-app",
        size: "352 B",
      },
      {
        directory: false,
        name: ".eslintrc.json",
        path: "/Users/thibaptistella/Documents/Projects/hexagon-app",
        size: "352 B",
      },
      {
        directory: true,
        name: "src",
        path: "/Users/thibaptistella/Documents/Projects/hexagon-app/src",
        size: "352 B",
      },
    ];
    setList(useApiCallHooks);
  }, []);
  return list;
};
