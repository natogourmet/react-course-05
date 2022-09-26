import { memo } from "react";

export const Small = memo(({ count }: { count: number }) => {
  console.log('Re-rendering Small component');

  return <small>{count}</small>;
});
