import React, { useEffect, useState } from "react";

export const useApiCallHooks = (): any => {

  const [list, setList] = useState()
  
  useEffect(() => {
    window.api.apiCall((data: any) => {
      setList(data)
    })
  },[])
  return list
};
