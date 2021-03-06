import React from "react";
import styled from "styled-components";

interface styledButtonProps {
  width?: string;
  height?: string;
  bgColor?: string;
  borderColor?: string;
  color?: string;
  fontSize?: string;
  radius?: string;
  padding?: string;
  margin?: string;
}

export interface buttonProps extends styledButtonProps {
  label: string;
  onClick?: () => void;
}

export const Button = (args: buttonProps) => {
  return (
    <StyledButton {...args} onClick={args.onClick}>
      {args.label}
    </StyledButton>
  );
};

const StyledButton = styled.button<styledButtonProps>`
  border: 1px solid ${(p) => p.borderColor || "rgb(215, 215, 215)"};
  width: ${(p) => p.width || "80px"};
  height: ${(p) => p.height || "36px"};
  border-radius: ${(p) => p.radius || "5px"};
  background-color: ${(p) => p.bgColor || "#fff"};
  color: ${(p) => p.color || "#000"};
  padding: ${(p) => p.padding || "5px"};
  margin: ${(p) => p.margin || "10px"};
  font-size: ${(p) => p.fontSize || "14px"};
`;
