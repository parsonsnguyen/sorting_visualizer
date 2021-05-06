import React, { Component } from "react";
import { generateNewArrayRandomly, getGUID } from "../utils";
import {sortingAlgorithms_Information} from "../constants"
import { getSortingAlgorithmFunc } from "../sortingAlgorithms.js";
import "./sortingVisualizer.css";
import {
  Button,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Slider,
  Grid,
} from "@material-ui/core";

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSortingType: props.selectedSortingType || "Bubble_Sort",
      arraySize: 20
    };
    this.arrays = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
    ];
    window.delaySpeed = 500;
  }

  onSelectedSortingTypeChange = (event) => {
    this.setState({ selectedSortingType: event.target.value });
  };

  handleArraySizeChanges = (size) => {
    this.arrays = generateNewArrayRandomly(size);
    this.setState({ arraySize: size });
  };

  onTxtArraySizeChange = (event) => {
    this.handleArraySizeChanges(event.target.value);
  };
  onSliderSizeChange = (_, val) => {
    this.handleArraySizeChanges(val);
  };

  onSliderDelaySpeedChange = (_, val) => {
    window.delaySpeed = val;
  };

  renderArraysContent = () => {
    const baseHeight = 650,
      marginValue = 20,
      size = this.arrays.length,
      rateToFillContainer = (baseHeight - marginValue) / size;
      
      const arrayContent = this.arrays.map((value, index) => {
        return <div
                className="array-bar"
                id={`item-${value}`}
                key={getGUID()}
                style={{
                  height: `${value * rateToFillContainer}px`,
                }}>
                {size <= 50 ? value : ""}
              </div>
      });
    return arrayContent;
  }

  async onSortingButtonClick(arrays) {
    await getSortingAlgorithmFunc(this.state.selectedSortingType)(arrays);
  }
  render() {
    const { selectedSortingType, arraySize } = this.state;
    return (
      <>
        <div className="makeStyles-root-1" id="filter-area">
          <Grid container spacing={3}>
            <Grid container item xs={2}></Grid>
            <Grid container item xs={8}>
              <Grid item xs={3}>
                <TextField
                  onChange={this.onTxtArraySizeChange}
                  id="txt-array-size"
                  type="number"
                  label="Input array size"
                  value={arraySize}
                  inputProps={{ min: 10, style: { textAlign: "center" } }}
                />
                <div className="sliders">
                  <Slider
                    /*key={`slider-${arraySize}`}*/ min={10}
                    max={300}
                    step={10}
                    value={arraySize}
                    onChange={this.onSliderSizeChange}
                    //disabled={buttonDisabled}
                    marks={true}
                    valueLabelDisplay="auto"
                  />
                </div>
              </Grid>
              <Grid item xs={3}>
               <InputLabel id="delaySpeed">
                  Delay speed
                </InputLabel>
                <div className="sliders">
                  <Slider
                    /*key={`slider-${delaySpeed}`}*/ min={0}
                    max={2000}
                    step={100}
                    defaultValue={window.delaySpeed}
                    onChange={this.onSliderDelaySpeedChange}
                    //disabled={buttonDisabled}
                    marks={true}
                    valueLabelDisplay="auto"
                  />
                </div>
              </Grid>
              <Grid item xs={3}>
                <InputLabel id="sortingType">
                  Please select sorting type
                </InputLabel>
                <Select
                  labelId="sortingType"
                  id="sortingTypeSelect"
                  value={selectedSortingType}
                  onChange={this.onSelectedSortingTypeChange}
                >
                  {sortingAlgorithms_Information.map((item, index) => (
                    <MenuItem key={index} value={item.type}>
                      {item.name}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>

              <Grid item xs={3}>
                <Button
                  variant="outlined"
                  onClick={() => this.handleArraySizeChanges(arraySize)}
                >
                  Generate new Array
                </Button>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => this.onSortingButtonClick(this.arrays)}
                >
                  Sort
                </Button>
              </Grid>
            </Grid>
            <Grid container item xs={2}></Grid>
          </Grid>
        </div>
        <hr></hr>
        <div id="array-container">{this.renderArraysContent()}</div>
      </>
    );
  }
}

SortingVisualizer.propTypes = {};
