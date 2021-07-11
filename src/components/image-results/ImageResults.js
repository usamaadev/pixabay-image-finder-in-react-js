import React, { Component } from "react";
import PropTypes from "prop-types";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";

class ImageResults extends Component {
  state = {
    open: false,
    currImage: "",
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleOpen = (imgURL) => {
    this.setState({ open: true });
    this.setState({ currImage: imgURL });
  };

  render() {
    let imageListContent;
    const { images } = this.props;

    if (images) {
      imageListContent = (
        <ImageList cols={3}>
          {images.map((img) => {
            return (
              <ImageListItem key={img.id}>
                <img src={img.largeImageURL} alt=""></img>

                <ImageListItemBar
                  title={img.title}
                  subtitle={<span>by: {img.user}</span>}
                  actionIcon={
                    <IconButton
                      onClick={() => {
                        this.handleOpen(img.largeImageURL);
                      }}
                    >
                      <ZoomInIcon style={{ color: "white" }} />
                    </IconButton>
                  }
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      );
    } else {
      imageListContent = null;
    }

    return (
      <div>
        {imageListContent}

        <Dialog open={this.state.open} onClose={this.handleClose}>
          <img
            src={this.state.currImage}
            alt=""
            style={{ width: "100%" }}
          ></img>

          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

ImageResults.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageResults;
