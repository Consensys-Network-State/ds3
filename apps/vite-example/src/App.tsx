import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Text, ModeToggle, ThemeSwitcher } from "@consensys/ui";

function App() {
  const [count, setCount] = useState(0)
  const [webClicks, setWebClicks] = useState(0)
  const [nativePresses, setNativePresses] = useState(0)

  const handleWebClick = (e: any) => {
    console.log('onClick event:', {
      type: e.type,
      target: e.target,
      currentTarget: e.currentTarget,
      nativeEvent: e.nativeEvent,
      preventDefault: e.preventDefault,
      stopPropagation: e.stopPropagation,
    });
    setWebClicks((prev) => prev + 1);
  };

  const handleNativePress = (e: any) => {
    console.log('onPress event:', {
      type: e.type,
      target: e.target,
      currentTarget: e.currentTarget,
      nativeEvent: e.nativeEvent,
      preventDefault: e.preventDefault,
      stopPropagation: e.stopPropagation,
    });
    setNativePresses((prev) => prev + 1);
  };

  return (
    <>
      <div className="flex justify-center items-center gap">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo"/>
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"/>
        </a>
      </div>

      <h1>Vite + DS3</h1>

      <div className="card">
        <div className="flex gap-4">
          {/* <ModeToggle /> */}
          {/* <ThemeSwitcher /> */}
          <Button
            color="primary"
            onClick={() => setCount((count) => count + 1)}
            className="mb-4"
          >
            <Text>count is {count}</Text>
          </Button>
        </div>

        <div className="flex gap-4 mt-4">
          <Button
            color="secondary"
            onClick={handleWebClick}
          >
            <Text>Web Clicks: {webClicks}</Text>
          </Button>

          <Button
            color="tertiary"
            onPress={handleNativePress}
          >
            <Text>Native Presses: {nativePresses}</Text>
          </Button>
        </div>

        <p className="mt-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
