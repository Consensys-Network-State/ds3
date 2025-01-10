import { Button } from "../components/Button";
import { Sun } from "../icons/Sun";
import { FC } from "react";
import { useTheme } from "./useTheme";
import { COLOR_MODES } from "@ds3/config";
import { MoonStar } from "../icons/MoonStar";

interface ModeToggleProps {
  className?: string;
}

export const ModeToggle: FC<ModeToggleProps> = (props) => {
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
