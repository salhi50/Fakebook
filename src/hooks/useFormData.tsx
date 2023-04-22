import {useState, useCallback} from "react";

type Data = {
  [key: string]: string;
}

type Errors = {
  [key: string]: string | null;
}

const useFormData = function(initialFormData: Data) {
  const [data, setData] = useState<Data>(initialFormData);
  const [errors, setErrors] = useState(() => {
    let errorsObj: Errors = {};
    for(let k in data) {
      errorsObj[k] = null;
    }
    return errorsObj;
  });

  const updateData = useCallback((key: keyof Data, value: string) => {
    setData(data => {
      return {...data, [key]: value};
    })
  }, []);

  const setError = (key: keyof Errors, errorMsg: string | null) => {
    setErrors(errors => {
      return {...errors, [key]: errorMsg};
    })
  }

  return {
    data,
    updateData,
    errors,
    setError
  }
}

export default useFormData;