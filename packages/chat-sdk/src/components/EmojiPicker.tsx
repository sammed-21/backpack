import { useState } from "react";
import { useCustomTheme } from "@coral-xyz/themes";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import { IconButton } from "@mui/material";
import Popover from "@mui/material/Popover";
import EmojiPicker, { Theme } from "emoji-picker-react";

import { useChatContext } from "./ChatContext";

export const EmojiPickerComponent = ({
  setEmojiPicker,
  emojiPicker,
  setGifPicker,
  setMessageContent,
}) => {
  const theme = useCustomTheme();
  const [anchorEl, setAnchorEl] = useState<any | null>(null);
  const { isDarkMode } = useChatContext();

  return (
    <>
      <IconButton
        style={{ color: theme.custom.colors.icon }}
        onClick={(e) => {
          setEmojiPicker((x) => !x);
          if (!emojiPicker) {
            setGifPicker(false);
          }
          setAnchorEl(e.currentTarget);
        }}
      >
        {" "}
        <SentimentVerySatisfiedIcon
          style={{ color: theme.custom.colors.icon }}
        />{" "}
      </IconButton>
      <Popover
        id={"popover"}
        open={emojiPicker}
        anchorEl={anchorEl}
        onClose={() => setEmojiPicker(false)}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <EmojiPicker
          theme={isDarkMode ? Theme.DARK : Theme.LIGHT}
          height={400}
          width={"100%"}
          onEmojiClick={(e) => setMessageContent((x) => x + e.emoji)}
        />
      </Popover>
    </>
  );
};