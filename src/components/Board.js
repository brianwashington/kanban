import React, { Component } from "react";
import Column from "./Column";

class Board extends Component {
  state = {
    columns: [
      ["Fix Bugs", "Write Documentation"],
      ["Meeting", "Configure Server"],
      ["Add New Feature", "Take a nap"],
      ["Play Ping Pong", "Drink Coffee"]
    ]
  };

  addNewCard = (text, columnIndex) => {
    if (!text) return;

    const columns = this.state.columns;
    const arr = columns[columnIndex];

    arr.push(text);
    columns[columnIndex] = arr;
    this.setState({ columns });
  };

  moveCard = (columnIndex, cardIndex, direction) => {
    const cardText = this.state.columns[columnIndex][cardIndex];
    const columns = this.state.columns;

    const arr = [
      ...this.state.columns[columnIndex].slice(0, cardIndex),
      ...this.state.columns[columnIndex].slice(cardIndex + 1)
    ];

    columns[columnIndex + direction].push(cardText);
    columns[columnIndex] = arr;

    this.setState({ columns });
  };

  render() {
    return (
      <div className="app-container">
        <Column
          title="Winnie"
          columnIndex={0}
          cards={this.state.columns[0]}
          addNewCard={this.addNewCard}
          moveCard={this.moveCard}
        />
        <Column
          title="Bob"
          columnIndex={1}
          cards={this.state.columns[1]}
          addNewCard={this.addNewCard}
          moveCard={this.moveCard}
        />
        <Column
          title="Thomas"
          columnIndex={2}
          cards={this.state.columns[2]}
          addNewCard={this.addNewCard}
          moveCard={this.moveCard}
        />
        <Column
          title="George"
          columnIndex={3}
          cards={this.state.columns[3]}
          addNewCard={this.addNewCard}
          moveCard={this.moveCard}
        />
      </div>
    );
  }
}

export default Board;
