export const useApiCallHooks = (): any => {
  let arr: any = [{}];
  window.api.apiCall((data: any) => {
    return arr.push(data);
  })
  console.log("arr", arr)
  return arr
};

