import React, { useState } from "react";
import "../components/ApprovalsSection.css";
import mefmiLogo from "../assets/Mefmi-logo-full.jpg";

function ApprovalsSection() {
  const [approvedRows, setApprovedRows] = useState([]);

  // Add row to approved list
  const handleAddRow = (row) => {
    // To prevent duplicates, check if row already exists
    if (!approvedRows.includes(row)) {
      setApprovedRows((prev) => [...prev, row]);
    }
  };

  // Remove row from approved list
  const handleRemoveRow = (row) => {
    setApprovedRows((prev) => prev.filter((r) => r !== row));
  };

  // Function to extract row data from the DOM (if needed)
  // But in this case, since data is in the table, we pass it directly
  // Sample data: this should ideally come from your actual data source
  const [uploadedRows, setUploadedRows] = useState([
    {
      description: "Mefmi Report",
      country: "Zimbabwe",
      bank: "StanBic",
      reportType: "Finance Report",
      uploadDate: "01/10/2026",
    },
    {
      description: "Another Report",
      country: "Kenya",
      bank: "KCB",
      reportType: "Audit Report",
      uploadDate: "02/12/2026",
    },
    {
      description: "Mefmi Report",
      country: "Zimbabwe",
      bank: "StanBic",
      reportType: "Finance Report",
      uploadDate: "01/10/2026",
    },
    {
      description: "Another Report",
      country: "Kenya",
      bank: "KCB",
      reportType: "Audit Report",
      uploadDate: "02/12/2026",
    },
    {
      description: "Mefmi Report",
      country: "Zimbabwe",
      bank: "StanBic",
      reportType: "Finance Report",
      uploadDate: "01/10/2026",
    },
    {
      description: "Another Report",
      country: "Kenya",
      bank: "KCB",
      reportType: "Audit Report",
      uploadDate: "02/12/2026",
    },
    {
      description: "Mefmi Report",
      country: "Zimbabwe",
      bank: "StanBic",
      reportType: "Finance Report",
      uploadDate: "01/10/2026",
    },
  ]);

  return (
    <div className="approvals-page">
      <div className="approvals-page-banner">
        <img src={mefmiLogo} alt="" />
        <div className="approvals-page-notice">
          <h5>APPROVALS PAGE</h5>
          <p>
            <span>NOTE* </span>Access to the contents below is restricted to
            authorized personnel only. Please ensure you follow all instructions
            and complete all required fields prior to approving any reports.
          </p>
        </div>
      </div>
      <div className="approvals-container">
        <div className="approvals-left">
          <div className="download-heading">Uploaded Reports</div>
          <div className="dowload-report">
            <div className="download-sub-heading">
              <div className="sub-title">NEW REPORTS:</div>
              <div className="filter-instructions">
                Select filters to view specific reports.
              </div>
            </div>

            <div className="approvals-dropdowns-container">
              <p>
                FILTERS <i className="ri-filter-line"></i>
              </p>
              <div className="approvals-inputs">
                <label htmlFor="select-country">*Country:</label>
                <select name="" id="select-country">
                  <option value="">-- select -- country --</option>
                  <option value="Angola">Angola</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brurundi">Burundi</option>
                  <option value="Eswatini">Eswatini</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Namibia">Namibia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="South6Sudan">South Sudan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Uganda">Uganda</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              <div className="approvals-inputs">
                <label htmlFor="select-bank">*Bank:</label>
                <select name="" id="select-bank">
                  <option value="">-- Bank --</option>
                </select>
              </div>
              <div className="approvals-inputs">
                <label htmlFor="select-type">*Type:</label>
                <select name="" id="select-type">
                  <option value="">-- Report Type --</option>
                </select>
              </div>
              <div className="approvals-inputs">
                <label htmlFor="date">*Date</label>
                <input type="date" id="date" />
              </div>
            </div>

            <div className="reports-table">
              <table id="reports-table">
                <thead>
                  <th>Description</th>
                  <th>Country</th>
                  <th>Bank</th>
                  <th>Report Type</th>
                  <th>Upload Date</th>
                  <th>Action</th>
                </thead>
                {/* Uploaded Reports Table */}
                <tbody id="uploaded-rows">
                  {uploadedRows.map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, idx) => (
                        <td key={idx}>{value}</td>
                      ))}
                      <td>
                        <button className="view-btn">View Report</button> &nbsp;
                        <button className="add-btn" onClick={() => handleAddRow(row)}>Add</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="approvals-right">
          <div className="approvals-dash-container">
            <div className="approvals-title">Approval Form</div>
            <div className="approvals-dash">
              <div className="approvals-heading">
                <div className="sub-title">INSPECTOR DETAILS:</div>
                <div className="filter-instructions">
                  Enter required credentials below.
                </div>
              </div>
              <div className="approvals-dropdowns-container">
                <div className="approvals-inputs">
                  <label htmlFor="member-name">*Enter Member Name:</label>
                  <input type="text" />
                </div>
                <div className="approvals-inputs">
                  <label htmlFor="position">*Enter Position:</label>
                  <input type="text" name="" id="" />
                </div>
              </div>
            </div>
            <div className="sub-title">SELECTED REPORTS:</div>
            <div className="approved-reports">
              <table id="approved-reports-table">
                <thead>
                  <tr>
                    <th>Description</th>
                    <th>Country</th>
                    <th>Bank</th>
                    <th>Report Type</th>
                    <th>Upload Date</th>
                    <th>Action</th>
                  </tr>
                </thead>
                {/* Selected row display, dynamically generated from selectedRowData */}
                <tbody id="approved-rows">
                  {approvedRows.map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((value, idx) => (
                        <td key={idx}>{value}</td>
                      ))}
                      <td>
                        <button className="remove-btn" onClick={() => handleRemoveRow(row)}>
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="additional-comments">
              <label htmlFor="">Comments (optional):</label>
              <textarea name="" id="comments"></textarea>
            </div>

            <div className="upload-form-btns">
              <button className="btn-clear">DISSAPROVE</button>
              <button className="btn-submit">APPROVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalsSection;
