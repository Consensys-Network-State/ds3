import { Button } from "../components/Button";
import { Sun } from "../icons/Sun";
import React from "react";
import { useTheme } from "./useTheme";
import { COLOR_MODES } from "@ds3/config";
import { MoonStar } from "../icons/MoonStar";

export const ModeToggle: React.FC = (props) => {
  const { mode, setMode } = useTheme();

  return (mode === COLOR_MODES.Dark ?
      <Button variant="ghost" onPress={() => setMode(COLOR_MODES.Light)} {...props}>
        <MoonStar />
      </Button> :
      <Button variant="ghost" onPress={() => setMode(COLOR_MODES.Dark)} {...props}>
        <Sun />
      </Button>
  )
}

export default ModeToggle;
