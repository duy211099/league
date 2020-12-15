import React from "react";
// Redux
import { useSelector } from "react-redux";

const Tips = () => {
  // Get Data
  const { currentChampion } = useSelector((state) => state.champion);
  const { allytips, enemytips } = currentChampion;
  return (
    <div>
      <h2>Mẹo</h2>
      <table>
        <tr>
          <th>Sử dụng</th>
          <th>Đối đầu</th>
        </tr>
        <tr>
          <td>
            <ul>
              {allytips.map((tip) => (
                <li>{tip}</li>
              ))}
            </ul>
          </td>
          <td>
            <ul>
              {enemytips.map((tip) => (
                <li>{tip}</li>
              ))}
            </ul>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default Tips;
