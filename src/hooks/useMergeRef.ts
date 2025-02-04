import { useCallback } from "react";
import type { MutableRefObject, RefCallback } from "react";

type AnyRef<T> =
  | MutableRefObject<T | null>
  | ((instance: T | null) => void)
  | null;

const useMergeRefs = <T>(refs: AnyRef<T>[]): RefCallback<T> =>
  useCallback(
    (value: T | null) => {
      refs.forEach((ref) => {
        if (!ref) return;

        if (typeof ref === "function") {
          ref(value);
          return;
        }

        (ref as MutableRefObject<T | null>).current = value;
      });
    },
    [refs]
  );

export default useMergeRefs;
