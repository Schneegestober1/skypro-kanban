import { DayPicker } from "react-day-picker";
import styled from "styled-components";

export const DP = styled(DayPicker)`
--rdp-cell-size: 22px;
--rdp-caption-font-size: 14px;
font-size: 12px;
margin: 0;
--rdp-accent-color: #c4c4c4;
`

export const RadioInput = styled.input`
display: none;
`

export const WrapperRadio = styled.div`
opacity: ${({$isActive}) => $isActive ? '1' : '0.4'};
`