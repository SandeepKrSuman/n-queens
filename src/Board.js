import "./Board.css";

export default function ChessBoard() {
  const n = 8;
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
