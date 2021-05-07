import React, { PureComponent } from "react";
import { getGUID } from "../utils";

export default class ArrayContentList extends PureComponent {
    constructor(props) {
      super(props);
    }

    renderArraysContent = (arrays) => {
        const baseHeight = 650,
          marginValue = 20,
          size = arrays.length,
          rateToFillContainer = (baseHeight - marginValue) / size;
          
        return arrays.map(value => <ArrayItem value={value} 
                                            height={value * rateToFillContainer} 
                                            text={size <= 50 ? value : ""}/>);
      }
    
    render() {
        return (
            <div id="array-container">{this.renderArraysContent(this.props.arrays)}</div>
        )
    }
}

const ArrayItem = (props) => {
    const {value, height, text} = props;
    return <div
            className="array-bar"
            id={`item-${value}`}
            key={getGUID()}
            style={{ height: `${height}px`}}>
            {text}
        </div>;
}