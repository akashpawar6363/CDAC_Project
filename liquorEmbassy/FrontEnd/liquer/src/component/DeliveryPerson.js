import React, { useState } from 'react';
import '../css/DeliveryPerson.css';
import DeliveryService from '../service/DeliveryService';
import { Link } from 'react-router-dom';

function DeliveryPerson({ jsonData, user }) {
  const headers = Object.keys(jsonData[0]).filter(header => header !== "delivery_person_allocated");

  const [selectedRow, setSelectedRow] = useState(null);
  const [isRowFixed, setIsRowFixed] = useState(false);
  const [idOfRow, setIdOfRow] = useState(0);
  const [orderId, setOrderId] = useState(0);

  const handleRowClick = (rowIndex, id) => {
    if (!isRowFixed) {
      setIdOfRow(id);
      setSelectedRow(rowIndex);
    }
  };

  const handleCancel = () => {
    setSelectedRow(null);
    setIsRowFixed(false);
  };

  const handleComplete = () => {
    setSelectedRow(null);
    setIsRowFixed(false);
    DeliveryService.removeRow(idOfRow)
      .then((response) => {
        alert('Order complete marked');
        window.location.reload();
      })
      .catch((error) => alert('Please try again'));
    setIdOfRow(0);
  };

  const handleFix = (id) => {
    setIsRowFixed(true);
   
  };

  const filteredData = jsonData.filter((row) => {
    return (
      user === row.delivery_person_allocated ||
      row.delivery_person_allocated === '' ||
      row.delivery_person_allocated === null
    );
  });

  return (
    <div className="dashboard-container">
      <div className="top-right">
        <Link to="/" className="logout-button">
          Logout
        </Link>
      </div>
      <div className="dashboard-content">
        <div className="json-table-container">
          <table className="json-table">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filteredData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={
                    selectedRow === rowIndex
                      ? 'selected selected-row'
                      : isRowFixed
                      ? 'fixed-row'
                      : ''
                  }
                  onClick={() => handleRowClick(rowIndex, row.id)}
                >
                  {headers.map((header, columnIndex) => (
                    <td key={columnIndex}>{row[header]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {selectedRow !== null && !isRowFixed && (
            <div className="action-buttons">
              <button onClick={handleCancel}>Cancel</button>
              <button onClick={() => handleFix(idOfRow)}>Confirm The Order</button>
            </div>
          )}
          {selectedRow !== null && isRowFixed && (
            <div className="action-buttons">
              <button onClick={handleComplete}>Order complete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeliveryPerson;
