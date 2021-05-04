import React, { Component } from "react";
import { sortingAlgorithms, generateNewArrayRandomly } from "../utils";
import "./sortingVisualizer.css";
import {
    Button,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Slider,
    Grid
  } from '@material-ui/core';

export default class SortingVisualizer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        selectedSortingType: props.selectedSortingType || 'Quick_Sort',
        arraySize: 20,
        delaySpeed: 500
      };
      this.arrays = [10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160,170,180,190,200];
    }

    onSelectedSortingTypeChange = (event) => {
      this.setState({ selectedSortingType: event.target.value });
    }
    
    handleArraySizeChanges = (size) => {
        this.arrays = generateNewArrayRandomly(size);
        this.setState({ arraySize: size });
    }

    onTxtArraySizeChange = (event) => {
        this.handleArraySizeChanges(event.target.value);
    }
    onSliderSizeChange = (_, val) => {
        this.handleArraySizeChanges(val);
    };

    onTxtDelaySpeedChange = (event) => {
        this.setState({ delaySpeed: event.target.value });
    }
    onSliderDelaySpeedChange = (_, val) => {
        this.setState({ delaySpeed: val });
    };

    render() {
      const { selectedSortingType, arraySize, delaySpeed } = this.state;
      return (
        <>
            <div className="makeStyles-root-1">
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
                                inputProps={{min: 10, style: { textAlign: 'center' }}}/> 
                            <div className="sliders">
                                <Slider /*key={`slider-${arraySize}`}*/  min={10} max={300} step={10} value={arraySize}
                                        onChange={this.onSliderSizeChange}
                                        //disabled={buttonDisabled}
                                        marks={true}
                                        valueLabelDisplay="auto"
                                />
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <TextField 
                                onChange={this.onTxtDelaySpeedChange}
                                id="txt-delay-speed" 
                                type="number" 
                                label="Input delay speed" 
                                value={delaySpeed} 
                                inputProps={{min: 100, style: { textAlign: 'center' }}}/>
                            <div className="sliders">
                                <Slider /*key={`slider-${delaySpeed}`}*/ min={100} max={2000} step={100} value={delaySpeed}
                                        onChange={this.onSliderDelaySpeedChange}
                                        //disabled={buttonDisabled}
                                        marks={true}
                                        valueLabelDisplay="auto"
                                />
                            </div> 
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel id="sortingType">Please select sorting type</InputLabel>
                            <Select
                                labelId="sortingType"
                                id="sortingTypeSelect"
                                value={selectedSortingType}
                                onChange={this.onSelectedSortingTypeChange}
                            >
                                {sortingAlgorithms.map((item,index) => <MenuItem key={index} value={item.type}>{item.name}</MenuItem>)}
                            </Select>
                        </Grid>
                       
                        <Grid item xs={3}>
                            <Button variant="outlined" onClick={() => this.handleArraySizeChanges(arraySize)}>Generate new Array</Button>
                            <Button variant="outlined" color="primary">Sort</Button>
                        </Grid>
                    </Grid>
                    <Grid container item xs={2}></Grid>
                </Grid>
            </div>
            <hr></hr>
            <div id="array-container">
                {this.arrays.map((value, index) => (
                <div
                    className="array-bar"
                    key={index}
                    style={
                        { height: `${value / 13}vh`,
                         width: `${(1 / this.arrays.length) * 1000}px`
                        }}
                ></div>
                ))}
            </div>
        </>
       );
    }
  }
  
  SortingVisualizer.propTypes = {
  };
  