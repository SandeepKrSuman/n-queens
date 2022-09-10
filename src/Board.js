import { useEffect } from "react";
import "./Board.css";

function constructBoard(board, N, ld, rd, cl, col) {
  if (col >= N) return true;

  for (let i = 0; i < N; i++) {
    if (ld[i - col + N - 1] !== 1 && rd[i + col] !== 1 && cl[i] !== 1) {
      board[i][col] = 1;
      ld[i - col + N - 1] = 1;
      rd[i + col] = 1;
      cl[i] = 1;

      if (constructBoard(board, N, ld, rd, cl, col + 1)) return true;

      board[i][col] = 0;
      ld[i - col + N - 1] = 0;
      rd[i + col] = 0;
      cl[i] = 0;
    }
  }

  return false;
}

export default function ChessBoard() {
  const n = 4;

  useEffect(() => {
    let N = n;

    let board = Array(n)
      .fill(Array(n).fill(0))
      .map((a) => a.slice());

    let ld = new Array(2 * N * N);
    let rd = new Array(2 * N * N);
    let cl = new Array(2 * N * N);

    if (constructBoard(board, N, ld, rd, cl, 0) === false) {
      console.log("No soloution!!");
      return;
    }

    console.log(board);
  }, [n]);

  return (
    <table className="chess-board">
      <tbody>
        {Array(n)
          .fill(null)
          .map((value, index) => (
            <tr key={index}>
              {Array(n)
                .fill(null)
                .map((val, ind) => (
                  <td
                    className={
                      n % 2 === 0
                        ? index % 2 === 0
                          ? ind % 2 === 0
                            ? "light"
                            : "dark"
                          : ind % 2 === 0
                          ? "dark"
                          : "light"
                        : index % 2 === 0
                        ? ind % 2 === 0
                          ? "dark"
                          : "light"
                        : ind % 2 === 0
                        ? "light"
                        : "dark"
                    }
                    key={ind}
                  />
                ))}
            </tr>
          ))}
      </tbody>
    </table>
  );
}
