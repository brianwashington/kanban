import React, { Component } from "react";
import Card from "./Card";

class Column extends Component {
  handleClick = e => {
    const cardText = window.prompt("Enter card text:");
    this.props.addNewCard(cardText, this.props.columnIndex);
  };

  render() {
    return (
      <div className="column">
        <h3>{this.props.title}</h3>
        <div className="card-container">
          <ul>
            {this.props.cards.map((card, index) => (
              <Card
                text={card}
                columnIndex={this.props.columnIndex}
                moveCard={this.props.moveCard}
                cardIndex={index}
                key={index}
              />
            ))}
          </ul>
        </div>
        <input
          className="add-card"
          onClick={this.handleClick}
          type="button"
          value="Add Card +"
        />
      </div>
    );
  }
}

export default Column;
