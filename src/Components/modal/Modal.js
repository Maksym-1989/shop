import React, { Component } from "react";
import { ModalContainer } from "./Modal.styled";
class Modal extends Component {
  state = {};
  componentDidMount() {
    window.addEventListener("keydown", this.handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
  }
  componentWillUnmount() {
    window.addEventListener("keydown", this.handleEscape);
    const body = document.querySelector("body");
    body.style.overflow = "auto";
  }

  handleEscape = (event) => {
    if (event.code === "Escape") {
      this.props.hideModal();
    }
  };

  onHandleClick = () => this.props.hideModal();

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      this.props.hideModal();
    }
  };

  render() {
    return (
      <ModalContainer onClick={this.handleBackdropClick}>
        <div className="modal">{this.props.children}</div>
      </ModalContainer>
    );
  }
}

export default Modal;
