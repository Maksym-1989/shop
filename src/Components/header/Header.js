import React, { Component } from "react";
import HeaderList from "./headerList/HeaderList";

import sprite from "../../icons/header/symbol-defs.svg";
import { HeaderContainer } from "./HeaderStyled";
import Modal from "../modal/Modal";

class Header extends Component {
  state = { width: window.innerWidth, breakPoint: 768, isModalOpen: false };

  componentDidMount() {
    window.addEventListener("resize", this.handleResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResizeWindow);
  }

  setModalState = () => {
    this.setState((prevState) => ({ isModalOpen: !prevState.isModalOpen }));
  };

  handleResizeWindow = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width, breakPoint, isModalOpen } = this.state;
    return (
      <HeaderContainer>
        {isModalOpen && (
          <Modal hideModal={this.setModalState}>
            <div className="wrapper">
              <HeaderList data={this.props.data} />
            </div>
          </Modal>
        )}
        <svg className="headerIcon">
          <use href={sprite + "#icon-home"} />
        </svg>

        {width < breakPoint ? (
          <svg className="headerIcon" onClick={this.setModalState}>
            <use href={sprite + "#icon-menu"} />
          </svg>
        ) : (
          <HeaderList data={this.props.data} />
        )}
      </HeaderContainer>
    );
  }
}

export default Header;
