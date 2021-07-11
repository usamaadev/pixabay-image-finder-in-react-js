import React, { Component } from "react";
import { TextField } from "@material-ui/core";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";
import ImageResults from '../image-results/ImageResults'


class Search extends Component {
  state = {
    searchText: "",
    amount: 5,
    apiUrl: "https://pixabay.com/api",
    apiKey: "22433485-b450081b6502c61ccd642e38a",
    images: [],
  };

  onTextChange = (e) => {
      const val = e.target.value;

    this.setState({ searchText: val }, () => {
      if (val === ''){
        this.setState({images: []});
      }else{
          axios
            .get(
              `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}`
            )
            .then((response) => {
              this.setState({ images: response.data.hits });
            })
            .catch((err) => {
              console.log(err);
            });
      }
        
    });
  };
  onAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };
  render() {
    return (
      <div>
        <TextField
          id="searchText"
          label="Search for images"
          onChange={this.onTextChange}
          value={this.state.searchText}
        ></TextField>
        <br />
        <br />
        <br />

        <FormControl>
          <Select value={this.state.amount} onChange={this.onAmountChange}>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={30}>30</MenuItem>
            <MenuItem value={50}>50</MenuItem>
          </Select>
        </FormControl>
    <br/>
     {this.state.images.length > 0 ? (<ImageResults images={this.state.images}/>) : null}
     
      </div>
    );
  }
}

export default Search;
