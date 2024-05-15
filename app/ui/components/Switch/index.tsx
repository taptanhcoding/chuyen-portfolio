'use client'
import { useState } from "react";
import Switch from "react-switch";
import { useTheme } from "next-themes";


export default function SwitchTheme() {
    const { theme, setTheme } = useTheme();
    const [check,setCheck] = useState<boolean>(theme != "light"? false : true)
    return <Switch onChange={(value) =>{
        setCheck(value)
        let colorTheme = value ? "light":"dark"
        setTheme(colorTheme)
    }} 
    checked={check} 
    handleDiameter={28}
    offColor="#d3db79"
    onColor="#d6d2d2"
    offHandleColor="#d6d2d2"
    onHandleColor="#d3db79"
    uncheckedIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          color: "orange",
          paddingRight: 2
        }}
      >
        🌞
      </div>
    }
    checkedIcon={
        <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 15,
          color: "orange",
          paddingRight: 2
        }}
      >
        <>🌒</>
      </div>
    }
    uncheckedHandleIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          fontSize: 30
        }}
      >
        🌒
      </div>
    }
    checkedHandleIcon={
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "red",
          fontSize: 30
        }}
      >
        🌞
      </div>
    }
    className="react-switch"
    id="small-radius-switch"

    />
}