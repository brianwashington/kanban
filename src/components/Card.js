import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <span
            onClick={this.props.moveCard.bind(
              null,
              this.props.columnIndex,
              this.props.cardIndex,
              -1
            )}
            className={this.props.columnIndex !== 0 ? "left-arrow" : "hide"}
          >
            <a href="" onClick={e => e.preventDefault()}>
              &lt;
            </a>
          </span>

          {this.props.text}

          <span
            onClick={this.props.moveCard.bind(
              null,
              this.props.columnIndex,
              this.props.cardIndex,
              1
            )}
            className={this.props.columnIndex !== 3 ? "right-arrow" : "hide"}
          >
            <a href="" onClick={e => e.preventDefault()}>
              &gt;
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default Card;
