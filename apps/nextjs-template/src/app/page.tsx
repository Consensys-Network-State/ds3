'use client';

import { useState } from 'react'
import { ModeToggle, Button, ThemeSwitcher } from '@consensys/ds3';
import './page.css';

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>Next.js + DS3</h1>

      <div className="card">
        <div className="flex gap-4">
          <ModeToggle />
          <ThemeSwitcher />
          <Button
            color="primary"
            onClick={() => setCount((count) => count + 1)}
            className="mb-4"
          >
            <Button.Text>count is {count}</Button.Text>
          </Button>
        </div>

        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};
