import React, { useState } from "react";
import Utils from "./Utils";
import wallpapers from "../../../Data/Wallpapers";
import FillContainer from "../../Containers/FillContainer/FillContainer";
import FillContent from "../../Containers/FillContainer/FillContent";
import FillFooter from "../../Containers/FillContainer/FillFooter";
import FillHeader from "../../Containers/FillContainer/FillHeader";
import RegisterForm from "./RegisterForm";
import JoinRoomForm from "./JoinRoomForm";
import ChatForm from "./ChatForm";
import { useConnectionContext } from "../../../state/connectionContext";
import { useBufferedStateContext  } from '../../../state/bufferedContext';
const { classes } = Utils;


function DebugComponent({ size, position, containerSize }) {
  const { set, get, remove } = useBufferedStateContext();
  return (
    <pre {...classes("column", "align-left", "full-width")}>
      <xmp>
        state:
        {JSON.stringify(get([]), null, 2)}
      </xmp>
    </pre>
  )
}

function createDebugger(windowManager, isFocused = true) {
  // Debuger window
  windowManager.createWindow({
    key: "debugger",
    title: "Debuger",
    isFocused,
    position: {
      left: 1000,
      top: 50
    },
    size: {
      width: 400,
      height: 600
    },
    children: (props) => {
      return (
        <DebugComponent {...props}/>
      )
    }
  });
}

export default createDebugger;
