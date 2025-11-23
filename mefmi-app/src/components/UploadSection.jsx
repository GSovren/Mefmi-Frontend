import React, { useState, useEffect } from "react";
import "../components/UploadSection.css";
import mefmiLogo from "../assets/Mefmi-logo-full.jpg"

function UploadSection() {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const supportedTypes = [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".pdf",
    ".doc",
    ".docx",
    ".xls",
    ".xlsx",
    ".txt",
    ".csv",
  ];

  const handleFiles = (files) => {
    const newFiles = Array.from(files).filter((file) => {
      const extension = "." + file.name.split(".").pop().toLowerCase();
      return supportedTypes.includes(extension);
    });

    if (newFiles.length !== files.length) {
      alert("Some files were unsupported and not added.");
    }

    setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileInputChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDelete = (index) => {
    setUploadedFiles((prevFiles) => prevFiles.filter((_, i) => i !== index));
  };

  return (
    <div className="upload-page">
      <div className="upload-page-banner">
        <img src={mefmiLogo} alt="" />
        <div className="upload-page-notice">
          <h5>UPLOAD PAGE</h5>
          <p><span>NOTE* </span>Access to the contents below is restricted to authorized personnel only. Please ensure you follow all instructions and complete all required fields prior to submitting any reports.</p>
        </div>
      </div>
      <div className="upload-container">
      <div className="upload-left">
        <div className="upload-dash-container">
          <div className="upload-title">Dashboard</div>
          <div className="upload-dash">
            <div className="upload-heading">
              <div className="sub-title">UPDATE DASHBOARD:</div>
              <div className="filter-instructions">
                Select filters to update specific data for a specific country.
              </div>
            </div>
            <div className="upload-dropdowns-container">
              <p>
                FILTERS <i className="ri-filter-line"></i>
              </p>
              <div className="upload-inputs">
                <label htmlFor="select-metric">*Metric:</label>
                <select name="" id="select-metric">
                  <option value="">-- select -- metric -- here --</option>
                  <option value="gdp">Total Debt</option>
                  <option value="gdp_growth">External Debt</option>
                  <option value="inflation_rate">Domestic Debt</option>
                  <option value="unemployment_rate">Yearly Financing</option>
                  <option value="public_debt">Public Debt</option>
                </select>
              </div>
              <div className="upload-inputs">
                <label htmlFor="select-country">*Country:</label>
                <select name="" id="select-country">
                  <option value="">-- select -- country -- here --</option>
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
            </div>
            <div className="upload-inputs-container">
              <div className="upload-inputs">
                <label htmlFor="current-value">Current Values/Rating:</label>
                <input type="text" id="current-value" />
              </div>
              <div className="upload-inputs">
                <label htmlFor="current-value">Enter New Values/Rating:</label>
                <input type="text" id="current-value" />
              </div>
            </div>

            <div className="update-dash-btn">
              <button>Update Dashboard</button>
            </div>
          </div>
        </div>
        <div className="upload-form-container">
          <div className="upload-title">Upload Reports</div>
          <div className="upload-form">
            <div className="upload-heading">
              <div className="sub-title">UPLOAD FORM:</div>
              <div className="filter-instructions">
                Enter all required criteria in the fileds below.
              </div>
            </div>
            <div className="upload-dropdowns-container">
              <div className="upload-inputs">
                <label htmlFor="select-metric">By Description:</label>
                <input type="text" placeholder="Enter description"/>
              </div>
              <div className="upload-inputs">
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
              <div className="upload-inputs">
                <label htmlFor="select-bank">*Bank:</label>
                <select name="" id="select-bank">
                  <option value="">-- Bank --</option>
                </select>
              </div>
              <div className="upload-inputs">
                <label htmlFor="select-type">*Type:</label>
                <select name="" id="select-type">
                  <option value="">-- Report Type --</option>
                </select>
              </div>
              <div className="upload-inputs">
                <label htmlFor="date">*Date</label>
                <input type="date" id="date" />
              </div>
            </div>

            <div className="upload-drop-zone" onDrop={handleDrop} onDragOver={handleDragOver} >
              <p>Drag & Drop files here or</p>
              <button className="upload-btn" onClick={() => document.getElementById("fileInput").click()}>
                UPLOAD <i className="ri-upload-2-fill"></i>
              </button>
              <input
                id="fileInput"
                type="file"
                multiple
                style={{ display: "none" }}
                accept={supportedTypes.join(",")}
                onChange={handleFileInputChange}
              />

              {/* List of uploaded files */}
              {uploadedFiles.length > 0 && (
                <div className="files-to-upload" >
                  <h4>Files to Upload:</h4>
                  <ul>
                    {uploadedFiles.map((file, index) => (
                      <li
                        key={index}
                      >
                        <span style={{ flex: 1 }}>{file.name}</span>
                        <button className="delete-file-btn" onClick={() => handleDelete(index)}>
                          Delete
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="additional-comments">
              <label htmlFor="">Comments (optional):</label>
              <textarea name="" id="comments"></textarea>
            </div>
            
          </div>
          <div className="upload-form-btns">
            <button className="btn-clear">CLEAR</button>
            <button className="btn-submit">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default UploadSection;
