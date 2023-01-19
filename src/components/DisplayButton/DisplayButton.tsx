import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Props {
  mode: string;
  setMode: React.Dispatch<React.SetStateAction<string>>;
}

const ModeDisplay = styled.div`
  position: absolute;
  right: 5%;
  top: 5%;
  @media only screen and (max-width: 24rem) {
    right: 10%;
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 5px;
`;

const DisplayButton2: React.FC<Props> = ({ mode, setMode }) => {
  const initialState = mode === "light" ? "rgba(0,0,0,.06)" : "#b3b3b3";
  const [hoverState, setHoverState] = useState(false);
  const [hoverColor, setHoverColor] = useState(initialState);

  const handleModeChange = (): void => {
    setMode(mode === "light" ? "dark" : "light");
  };

  const handleHoverEnter = (): void => {
    setHoverState(true);
  };

  const handleHoverExit = (): void => {
    setHoverState(false);
  };

  useEffect(() => {
    setHoverColor(mode === "light" ? "rgba(0,0,0,.06)" : "#b3b3b3");
  }, [mode]);

  return (
    <ModeDisplay>
      {mode === "light" ? (
        <Button
          style={{ backgroundColor: hoverState === true ? hoverColor : "" }}
          onClick={handleModeChange}
          onMouseEnter={() => {
            handleHoverEnter();
          }}
          onMouseLeave={() => {
            handleHoverExit();
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentColor"
              d="M19.524 14.721h.008c.644 0 1.275-.059 1.886-.172l-.063.01c-1.146 4.122-4.866 7.098-9.281 7.098h-.058h.003c-5.343-.006-9.673-4.336-9.678-9.679v-.001A9.76 9.76 0 0 1 9.37 2.665l.069-.017a10.013 10.013 0 0 0-.162 1.819v.007c.005 5.658 4.59 10.243 10.247 10.248h.001zM12.006.47a1.162 1.162 0 0 0-1.043-.465h.005C4.813.596.034 5.724 0 11.976v.003C.008 18.614 5.385 23.991 12.019 24h.061c6.243 0 11.367-4.786 11.905-10.889l.003-.045a1.168 1.168 0 0 0-.423-1.009l-.002-.002a1.164 1.164 0 0 0-1.084-.213l.008-.002l-.524.156a7.735 7.735 0 0 1-2.435.385h-.007a7.912 7.912 0 0 1-7.903-7.903V4.46c0-1.03.198-2.014.558-2.915l-.019.053a1.169 1.169 0 0 0-.155-1.134l.002.003z"
            ></path>
          </svg>
        </Button>
      ) : (
        <Button
          style={{ backgroundColor: hoverState === true ? hoverColor : "" }}
          onClick={handleModeChange}
          onMouseEnter={() => {
            handleHoverEnter();
          }}
          onMouseLeave={() => {
            handleHoverExit();
          }}
        >
          <svg
            width="24"
            height="24"
            style={{ color: "#fff" }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
            >
              <path d="M12 3V2m0 20v-1m9-9h1M2 12h1m15.5-6.5L20 4M4 20l1.5-1.5M4 4l1.5 1.5m13 13L20 20" />
              <circle cx="12" cy="12" r="4" />
            </g>
          </svg>
        </Button>
      )}
    </ModeDisplay>
  );
};

export default DisplayButton2;
