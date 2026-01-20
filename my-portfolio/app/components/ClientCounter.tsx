"use client";

import { useState } from "react";

export default function ClientCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="mt-6 text-center">
      <p>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        className="mt-2 px-4 py-2 border rounded"
      >
        Increment
      </button>
    </div>
  );
}
