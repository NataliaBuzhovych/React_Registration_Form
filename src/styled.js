import styled from "styled-components";
export const SButton = styled.button`
  width: 300px;
  height: 32px;
  border-radius: 4px;
  border: none;
  background-color: ${(props) => {
    return props.disabled ? "rgb(95, 84, 84)" : "#2a76a5";
  }};
  cursor: pointer;
  margin-bottom: 20px;
`;
export const Ldiv = styled.div`
  background-color: rgb(255, 91, 118);
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
export const Adiv = styled.div`
  width: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  background-color: black;
`;

export const Sh3 = styled.h3`
  margin: 0;
  margin-bottom: 10px;
  color: white;
`;
export const Sspan = styled.span`
  font: small-caption;
  color: #d3cbcb;
`;

export const Chekdiv = styled.div`
  width: 250px;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
export const Linkdiv = styled.div`
  width: 59%;
  margin-bottom: 20px;
  display: flex;
`;
export const Ediv = styled.div`
  color: white;
`;
export const emptydiv = styled.div`
  width: 0px;
  height: 0px;
`;
