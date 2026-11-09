import { useLayoutEffect, useState } from "react";

function useLoaderComplete() {
  const [complete, setComplete] = useState(false);

  useLayoutEffect(() => {
    const handleComplete = () => {
      setComplete(true);
    };

    window.addEventListener("sindh-loader-complete", handleComplete);

    return () => {
      window.removeEventListener("sindh-loader-complete", handleComplete);
    };
  }, []);

  return complete;
}

export default useLoaderComplete;