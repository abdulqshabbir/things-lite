import React, { MouseEvent, useState } from "react";
import styled from "styled-components";

const TagSelectorButton = styled.div`
    position: absolute;
    min-height: 25px;
    min-width: 25px;
    right: 5px;
    bottom: 5px;
    border: 0.1px solid #333;
`
const TagSelectorDropDown = styled.ul`
    background-color: #333;
    color: white;
    position: absolute;
    padding: 0px;
    right: 0px;
    bottom: 0px; 
`
const Li = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 5px;
`
type TagValue = "Today" | "Upcoming" | "Someday"

const TagSelector = () => {
    const [ isTagSelectorOpen, setIsTagSelectorOpen ] = useState(false)
    let RenderTagSelectorOrNull = null

    function toggleTagSelection(e: MouseEvent<HTMLDivElement>) {
       e.stopPropagation() 
       setIsTagSelectorOpen(!isTagSelectorOpen)
    }


    if (isTagSelectorOpen) {
        RenderTagSelectorOrNull = 
            <TagSelectorDropDown>
                <Li>Today</Li>
                <Li>Upcoming</Li>
                <Li>Someday</Li>
                <Li>Null</Li>
            </TagSelectorDropDown>
    } else {
        RenderTagSelectorOrNull = null
    } 

    return (
        <React.Fragment>
            <TagSelectorButton
                onClick={(e) => toggleTagSelection(e)}
            >
            </TagSelectorButton>
            {RenderTagSelectorOrNull}
        </React.Fragment>
    );
}



export default TagSelector;