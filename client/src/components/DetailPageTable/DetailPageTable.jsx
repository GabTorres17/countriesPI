import React from "react";

const Table = ({ data }) => {
  return (
    <div className="table">
      {data.map((item, index) => (
        <div key={index} className="table-row">
          <div className="table-cell">Continente: {item.continente}</div>
          <div className="table-cell">Capital: {item.capital}</div>
          {item.subregion && (
            <div className="table-cell">Subregión: {item.subregion}</div>
          )}
          {item.area && (
            <div className="table-cell">Área: {item.area} km²</div>
          )}
          <div className="table-cell">Población: {item.poblacion}</div>
        </div>
      ))}
    </div>
  );
};

export default Table;