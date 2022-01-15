exports.handler = function (context, event, callback) {
  let possibleMoves = {
    up: true,
    down: true,
    left: true,
    right: true,
  };

  // Step 0: Don't let your Battlesnake move back on its own neck
  const myHead = event.you.head;
  const myNeck = event.you.body[1];
  if (myNeck.x < myHead.x) {
    possibleMoves.left = false;
  } else if (myNeck.x > myHead.x) {
    possibleMoves.right = false;
  } else if (myNeck.y < myHead.y) {
    possibleMoves.down = false;
  } else if (myNeck.y > myHead.y) {
    possibleMoves.up = false;
  }

  // TODO: Step 1 - Don't hit walls.
  // Use information in event to prevent your Battlesnake from moving beyond the boundaries of the board.
  // const boardWidth = event.board.width
  // const boardHeight = event.board.height

  // TODO: Step 2 - Don't hit yourself.
  // Use information in event to prevent your Battlesnake from colliding with itself.
  // const mybody = event.you.body

  // TODO: Step 3 - Don't collide with others.
  // Use information in event to prevent your Battlesnake from colliding with others.

  // TODO: Step 4 - Find food.
  // Use information in event to seek out and find food.

  // Finally, choose a move from the available safe moves.
  // TODO: Step 5 - Select a move to make based on strategy, rather than random.
  const safeMoves = Object.keys(possibleMoves).filter(
    (key) => possibleMoves[key]
  );
  const response = {
    move: safeMoves[Math.floor(Math.random() * safeMoves.length)],
  };

  console.log(`${event.game.id} MOVE ${event.turn}: ${response.move}`);

  callback(null, response);
};
