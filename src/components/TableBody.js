import React from "react";
import "font-awesome/css/font-awesome.min.css";

export const TableBody = (props) => {
  return <div>
      <tbody>
      {listname.map((item, i) => (
          <tr>
              <td key={item.name}>
                  <span>Имя</span> {item.name}
              </td>
              <td key={item.familiya}>
                  <span>Фамилия</span>
                  {item.familiya}
              </td>
              <td>
                  <i onClick={() => removeUser(i)} className="fas fa-trash-alt" />
                  <i
                      onClick={() => {
                          getIndex(i);
                          changeActive();
                      }}
                      className="fas fa-edit"
                  />
              </td>
          </tr>
      ))}
      </tbody>
  </div>;
};

