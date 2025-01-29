import { FC } from "react";
import { useTheme } from "./useTheme";
import { COLOR_MODES } from "@ds3/config";
import { MoonStar, Sun } from "lucide-react-native"
import { IconButton } from "../components/IconButton";

interface ModeToggleProps {
  className?: string;
}

export const ModeToggle: FC<ModeToggleProps> = (props) => {
  const { mode, setMode } = useTheme();

  return (mode === COLOR_MODES.Dark ?
      <IconButton
        icon={MoonStar}
        variant="ghost"
        onPress={() => setMode(COLOR_MODES.Light)}
        {...props}
      />:
      <IconButton
        icon={Sun}
        variant="ghost"
        onPress={() => setMode(COLOR_MODES.Dark)}
        {...props}
      />
  )
}

export default ModeToggle;
