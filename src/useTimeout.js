import { useRef, useEffect, useCallback } from "react";

const useTimeout = (callback, delay) => {
  const timeoutRef = useRef();
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const setTheTimeout = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);

  const clearTheTimeout = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  useEffect(() => {
    setTheTimeout();
    return clearTheTimeout;
  }, [delay, setTheTimeout, clearTheTimeout]);

  const resetTheTimeout = useCallback(() => {
    clearTheTimeout();
    setTheTimeout();
  }, [clearTheTimeout, setTheTimeout]);

  return [resetTheTimeout, clearTheTimeout];
};

export default useTimeout;
