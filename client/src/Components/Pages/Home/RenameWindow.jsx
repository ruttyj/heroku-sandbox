import React from "react";
import RenameForm from "./RenameForm";
export default function (windowManager, {
  isFocused = true,
  position = {
    left: 100,
    top: 0,
  },
  size = {
    width: 400,
    height: 150
  }
}) {
  // Dragable Lists window
  windowManager.createWindow({
    title: "Change my name",
    key: 'change_my_name',
    isFocused,
    position,
    size,
    children: (props) => {
      return (
        <RenameForm {...props}/>
      )
    },
  });
}
