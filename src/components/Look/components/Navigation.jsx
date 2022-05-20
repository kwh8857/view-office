import React from "react";
import styled from "styled-components";

function Navigation({ top }) {
  return (
    <NavWrapper top={top}>
      <div className="wrapper">
        {navArr.map(({ title, link }, idx) => {
          return (
            <div
              key={idx}
              style={
                link === "/portfolio"
                  ? {
                      fontWeight: "bold",
                    }
                  : undefined
              }
            >
              {title}
            </div>
          );
        })}
      </div>
    </NavWrapper>
  );
}

export default Navigation;

const NavWrapper = styled.div`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: 5px;
  width: 100%;
  z-index: 500;
  & > .wrapper {
    row-gap: 18px;
    display: grid;
    & > div {
      width: fit-content;
      cursor: pointer;
      font-family: mont;
      font-size: 15px;
      font-weight: 500;
      color: black;
    }
  }
  @media screen and (max-width: 1365px) {
    display: none;
  }
`;
const navArr = [
  {
    title: "MAIN",
    link: "/",
  },
  {
    title: "ABOUT",
    link: "/about",
  },
  {
    title: "PORTFOLIO",
    link: "/portfolio",
  },
  {
    title: "SHOWROOM",
    link: "/showroom",
  },
  {
    title: "CONTACT",
    link: "/contact",
  },
];
