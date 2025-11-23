import React, { useState, useEffect } from "react";
import "../components/UploadSection.css";
import mefmiLogo from "../assets/Mefmi-logo-full.jpg"

function ReportsSection() {
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
          <h5>REPORTS PAGE</h5>
          <p><span>NOTE* </span>Access to the contents below is restricted to authorized personnel only. Please ensure you follow all instructions and complete all required fields prior to submitting any reports.</p>
        </div>
      </div>
      <div className="upload-container">


      <div className="upload-right">  
        <div className="download-heading">
          Download Reports
        </div>
        <div className="dowload-report">
          <div className="download-sub-heading">
            <div className="sub-title">PAST REPORTS:</div>
              <div className="filter-instructions">
                Select filters to update specific data for a specific country.
              </div>
          </div>

          <div className="upload-dropdowns-container">
            <p>
                FILTERS <i className="ri-filter-line"></i>
              </p>
              <div className="upload-inputs">
                <label htmlFor="select-metric">
                  By Description:
                </label>
                <input type="text" placeholder="Enter description"/>
              </div>
              <div className="upload-inputs">
                <label htmlFor="select-country">By Country:</label>
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
                <label htmlFor="select-bank">By Bank:</label>
                <select name="" id="select-bank">
                  <option value="">-- Bank --</option>
                </select>
              </div>
              <div className="upload-inputs">
                <label htmlFor="select-type">By Type:</label>
                <select name="" id="select-type">
                  <option value="">-- Report Type --</option>
                </select>
              </div>
              <div className="upload-inputs">
                <label htmlFor="date">By Date</label>
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
              <tbody>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
                <tr>
                  <td>Mefmi Report</td>
                  <td>Zimbabwe</td>
                  <td>StanBic</td>
                  <td>Finance Report</td>
                  <td>01/10/2026</td>
                  <td className="action-btn">
                    <button id="view-btn">View</button>
                    <button id="download-btn">Downlaod</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default ReportsSection;
