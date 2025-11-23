import React, { useState, useEffect } from "react";
import "../components/CompareSection.css";
import logo from "../assets/Mefmi-logo-full.jpg";
import AFDBlogo from "../assets/AFDB Logo.png";
import sourceDataExplore from "../data/sourceDataExplore.json";
import { useLocation, Link, NavLink, useNavigate } from "react-router-dom";

import angolaFlag from "../assets/angola.png";
import burundiFlag from "../assets/burundi.png";
import BotswanaFlag from "../assets/botswana.png";
import EswatiniFlag from "../assets/eswatini.png";
import KenyaFlag from "../assets/kenya.png";
import LesothoFlag from "../assets/lesotho.png";
import MalawiFlag from "../assets/malawi.png";
import MozambiqueFlag from "../assets/mozambique.png";
import NamibiaFlag from "../assets/namibia.png";
import RwandaFlag from "../assets/rwanda.png";
import SouthSudanFlag from "../assets/south sudan.png";
import TanzaniaFlag from "../assets/tanzania.png";
import UgandaFlag from "../assets/uganda.png";
import ZambiaFlag from "../assets/zambia.png";
import ZimbabweFlag from "../assets/zimbabwe.png";

function CompareSection() {
  const location = useLocation();
  const initialCountry = location.state?.country || "";
  const [selectedCountry, setSelectedCountry] = useState(initialCountry);


  const [selectedMetric, setSelectedMetric] = useState('');
  const [selectedYear, setSelectedYear] = useState("2025");
  const [currentData, setCurrentData] = useState(null);

  const [selectedCountrySecond, setSelectedCountrySecond] = useState("");
  const [selectedYearSecond, setSelectedYearSecond] = useState("2025");
  const [currentDataSecond, setCurrentDataSecond] = useState(null);

  const [selectedCountryThird, setSelectedCountryThird] = useState("");
  const [selectedYearThird, setSelectedYearThird] = useState("2025");
  const [currentDataThird, setCurrentDataThird] = useState(null);

  const countryFlags = {
    Angola: angolaFlag,
    Burundi: burundiFlag,
    Botswana: BotswanaFlag,
    Eswatini: EswatiniFlag,
    Kenya: KenyaFlag,
    Lesotho: LesothoFlag,
    Malawi: MalawiFlag,
    Mozambique: MozambiqueFlag,
    Namibia: NamibiaFlag,
    Rwanda: RwandaFlag,
    SouthSudan: SouthSudanFlag,
    Tanzania: TanzaniaFlag,
    Uganda: UgandaFlag,
    Zambia: ZambiaFlag,
    Zimbabwe: ZimbabweFlag,
  };

  // Update currentData whenever country or year changes
  useEffect(() => {
    if (selectedCountry && selectedYear) {
      const countryData = sourceDataExplore.countries.find(
        (item) => item.name === selectedCountry
      );
      if (countryData && countryData.data && countryData.data[selectedYear]) {
        setCurrentData(countryData.data[selectedYear]);
      } else {
        setCurrentData(null);
      }
    } else {
      setCurrentData(null);
    }
  }, [selectedCountry, selectedYear]);

  useEffect(() => {
    if (selectedCountrySecond && selectedYearSecond) {
      const countryData = sourceDataExplore.countries.find(
        (item) => item.name === selectedCountrySecond
      );
      if (
        countryData &&
        countryData.data &&
        countryData.data[selectedYearSecond]
      ) {
        setCurrentDataSecond(countryData.data[selectedYearSecond]);
      } else {
        setCurrentDataSecond(null);
      }
    } else {
      setCurrentDataSecond(null);
    }
  }, [selectedCountrySecond, selectedYearSecond]);

  useEffect(() => {
    if (selectedCountryThird && selectedYearThird) {
      const countryData = sourceDataExplore.countries.find(
        (item) => item.name === selectedCountryThird
      );
      if (
        countryData &&
        countryData.data &&
        countryData.data[selectedYearThird]
      ) {
        setCurrentDataThird(countryData.data[selectedYearThird]);
      } else {
        setCurrentDataThird(null);
      }
    } else {
      setCurrentDataThird(null);
    }
  }, [selectedCountryThird, selectedYearThird]);


  const dataValues = [
    currentData?.total_debt,
    currentData?.public_debt,
    currentData?.external_debt,
    currentData?.domestic_debt,
    currentData?.yearly_financing,
  ].filter((val) => val !== undefined && val !== null);

  const dataValuesSecond = [
  currentDataSecond?.total_debt,
  currentDataSecond?.public_debt,
  currentDataSecond?.external_debt,
  currentDataSecond?.domestic_debt,
  currentDataSecond?.yearly_financing,
].filter(val => val !== undefined && val !== null);

const dataValuesThird = [
  currentDataThird?.total_debt,
  currentDataThird?.public_debt,
  currentDataThird?.external_debt,
  currentDataThird?.domestic_debt,
  currentDataThird?.yearly_financing,
].filter(val => val !== undefined && val !== null);

  // Handlers for select change
  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };
  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleCountrySecondChange = (e) => {
    setSelectedCountrySecond(e.target.value);
  };
  const handleYearSecondChange = (e) => {
    setSelectedYearSecond(e.target.value);
  };

  const handleCountryThirdChange = (e) => {
    setSelectedCountryThird(e.target.value);
  };
  const handleYearThirdChange = (e) => {
    setSelectedYearThird(e.target.value);
  };

  const handleMetricToggle = (metric) => {
  if (selectedMetric === metric) {
    setSelectedMetric(''); // toggle off if already selected
  } else {
    setSelectedMetric(metric);
  }
};

  // Handler function to clear filters
const handleClearFilters = () => {
  setSelectedMetric("");
  setSelectedCountry("");
  setSelectedYear("2025")
};
const handleClearFiltersSecond = () => {
  setSelectedCountrySecond("");
  setSelectedYearSecond("2025");
};
const handleClearFiltersThird = () => {
  setSelectedCountryThird("");
  setSelectedYearThird("2025");
};


  // ------------------------------------------------FUNCTION TO INTERPOLATE COLORS-------------------------------------------------------------
  const colorStops = [
    { stop: 0, color: "#00ed00" }, // vibrant, darkened green
    { stop: 1, color: "#cc0000" }, // vibrant, darkened red
  ];

  // Function to interpolate between two colors
  function interpolateColor(color1, color2, factor) {
    const c1 = parseInt(color1.slice(1), 16);
    const c2 = parseInt(color2.slice(1), 16);
    const r1 = (c1 >> 16) & 0xff;
    const g1 = (c1 >> 8) & 0xff;
    const b1 = c1 & 0xff;
    const r2 = (c2 >> 16) & 0xff;
    const g2 = (c2 >> 8) & 0xff;
    const b2 = c2 & 0xff;

    const r = Math.round(r1 + (r2 - r1) * factor);
    const g = Math.round(g1 + (g2 - g1) * factor);
    const b = Math.round(b1 + (b2 - b1) * factor);

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  }

  // Function to get color based on value
  function getColorForValue(value, min, max, invert = false) {
    const ratio = (value - min) / (max - min);
    // If invert is true, invert the ratio
    const adjustedRatio = invert ? 1 - ratio : ratio;
    return interpolateColor(
      colorStops[0].color,
      colorStops[1].color,
      adjustedRatio
    );
  }

  const countryColors = {
    Angola: "#ff0000",
    Botswana: "#00ff00",
    Burundi: "#0000ff",
    Eswatini: "#ffff00",
    Kenya: "#ff00ff",
    Lesotho: "#00ffff",
    Malawi: "#ffa500",
    Mozambique: "#800080",
    Namibia: "#008000",
    Rwanda: "#000080",
    Tanzania: "#800000",
    Uganda: "#808000",
    Zambia: "#008080",
    SouthSudan: "#c0c0c0",
    Zimbabwe: "#a52a2a",
  };

  // Get min and max for color scaling
  const minVal = Math.min(...dataValues, ...dataValuesSecond);
  const maxVal = Math.max(...dataValues, ...dataValuesSecond);
  const invertColors = false; // or set based on specific metric if needed

  // Assign colors based on value
  const backgroundColors = dataValues.map((value) =>
    getColorForValue(value, minVal, maxVal)
  );

  return (
    <div className="compare-page-container">
      <div className="dash-hero">
        <div className="explore-msg">
          <div className="msg">
            Compare Metrics Across{" "}
            <span>15 African Countries. </span>
            {/* <img src={memberCountriesMap} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="compare-page-inner-container">
        <div className="compare-page-top-container">
          <div className="compare-page-explore-cta">
            <div className="website-cta">
              <button className="website-btn">
                Learn more<i className="ri-global-fill"></i>
              </button>
            </div>
            <div className="color-codes-container">
              <div className="color-key-header">Color Key:</div>
              <div className="color-bar"></div>
              <div className="color-key-labels">
                <div>Lowest</div>
                <div>Highest</div>
              </div>
            </div>
          </div>
          <div className="compare-page-heading">
            <div className="navbar-logo">
              <img src={logo} alt="" />{" "}
            </div>
            <div className="compare-heading">
              Select countries and compare statistical data over time
            </div>
            <div className="compare-currency-input-container">
                    <label>Currency:&nbsp;</label>
                      <div className="dash-inputs">
                      <select name="" id="select-currency">
                          <option value="USD">USD</option>
                          <option value="PULA">PULA</option>
                          <option value="RAND">RAND</option>
                          <option value="KWACHA">KWACHA</option>
                          <option value="ZIG">ZIG</option>
                      </select>
                      <div className="drop-icon">
                    <i className="ri-arrow-drop-down-fill"></i>
                  </div>
                    </div>
                    </div>
          </div>
        </div>
        <div className="compare-page-bottom-container">
          <div className="compare-page-filters-container">
            <div className="compare-filters-heading">
              <div className="compare-filters-metric-input-container">
                <label htmlFor="select-country">
                  *Filters
                </label>
                <div className="compare-filters-metric-input">
                  <div className="filter-metrics-select">
                  <select name="" id="select-metric" onChange={(e) => setSelectedMetric(e.target.value)}>
                    <option value="">select metric</option>
                    <option value="total_debt">Total Debt</option>
                    <option value="public_debt">Public Debt</option>                 
                    <option value="external_debt">External Debt</option>
                    <option value="domestic_debt">Domestic Debt</option>
                    <option value="yearly_financing">Yearly Financing</option>
                  </select>
                  <div className="compare-drop-icon">
                    <i className="ri-arrow-drop-down-fill"></i>
                  </div>
                </div>
                </div>                
              </div>
            </div>
            <thead className="compare-table-head">
              <th className={`head-metric-options ${selectedMetric === 'total_debt' ? 'active' : ''}`} onClick={() => handleMetricToggle('total_debt')}> Total Debt <i className="ri-arrow-right-fill"></i></th>
              <th className={`head-metric-options ${selectedMetric === 'public_debt' ? 'active' : ''}`} onClick={() => handleMetricToggle('public_debt')}> Public Debt <i className="ri-arrow-right-fill"></i></th>
              <th className={`head-metric-options ${selectedMetric === 'external_debt' ? 'active' : ''}`} onClick={() => handleMetricToggle('external_debt')}> External Debt <i className="ri-arrow-right-fill"></i></th>
              <th className={`head-metric-options ${selectedMetric === 'domestic_debt' ? 'active' : ''}`} onClick={() => handleMetricToggle('domestic_debt')}> Domestic Debt <i className="ri-arrow-right-fill"></i></th>
              <th className={`head-metric-options ${selectedMetric === 'yearly_financing' ? 'active' : ''}`} onClick={() => handleMetricToggle('yearly_financing')}> Yearly Financing <i className="ri-arrow-right-fill"></i></th>
            </thead>
          </div>





          <div className="compare-countries-container">
            <div className="compare-section-container">
              <div className="compare-section-heading">
                <div className="compare-filters-input-container">
                  <label htmlFor="select-country">
                    *Select a country
                  </label>
                  <div className="compare-select">
                    <select
                      name=""
                      id="select-country"
                      value={selectedCountry}
                      onChange={handleCountryChange}
                    >
                      <option value="">select country</option>
                      <option value="Angola">Angola</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="SouthSudan">South Sudan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                    <div className="compare-drop-icon">
                      <i className="ri-arrow-drop-down-fill"></i>
                    </div>
                  </div>
                </div>
                <div className="compare-page-input-container">
                  <div className="compare-page-input">
                    <div className="flag-zip-section">
                      {selectedCountry && countryFlags[selectedCountry] ? (
                        <>
                          <span>{selectedCountry}</span>
                          <img
                            src={countryFlags[selectedCountry]}
                            alt={`${selectedCountry} flag`}
                          />
                        </>
                      ) : (
                        "''"
                      )}
                    </div>
                  <button className="reset-btn" onClick={handleClearFilters}>Clear &nbsp; <i className="ri-restart-fill"></i></button>
                  </div>
                  
                  <div className="compare-select">
                    <select
                      name=""
                      id="select-year"
                      value={selectedYear}
                      onChange={handleYearChange}
                    >
                      <option value="2025">2025 (current)</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                    </select>
                    <div className="compare-drop-icon">
                      <i className="ri-arrow-drop-down-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
              <tbody className="compare-table" id="compare-table">
                <tr className="compare-row">
                  <td
                    className="compare-data-total hover-label-cell"
                    style={{
                      display: !selectedMetric || selectedMetric === 'total_debt' ? 'flex' : 'none',
                      backgroundColor: currentData
                        ? getColorForValue(
                            currentData.total_debt,
                            minVal,
                            maxVal
                          )
                        : "transparent",
                    }}
                    data-country={selectedCountry} // the country name
  data-value={currentData ? currentData.total_debt : ""} // the data value
                  >
                    {" "}
                    {currentData ? currentData.total_debt : ""}{" "}
                  </td>
                </tr>
                <tr className="compare-row">
                  <td
                    className="compare-data-public hover-label-cell"
                    style={{
                      display: !selectedMetric || selectedMetric === 'public_debt' ? 'flex' : 'none',
                      backgroundColor: currentData
                        ? getColorForValue(
                            currentData.public_debt,
                            minVal,
                            maxVal
                          )
                        : "transparent",
                    }}
                    data-country={selectedCountry} // the country name
  data-value={currentData ? currentData.public_debt : ""} // the data value
                  >
                    {" "}
                    {currentData ? currentData.public_debt : ""}
                  </td>
                </tr>
                <tr className="compare-row">
                  <td
                    className="compare-data-external hover-label-cell"
                    style={{
                      display: !selectedMetric || selectedMetric === 'external_debt' ? 'flex' : 'none',
                      backgroundColor: currentData
                        ? getColorForValue(
                            currentData.external_debt,
                            minVal,
                            maxVal
                          )
                        : "transparent",
                    }}
                    data-country={selectedCountry} // the country name
  data-value={currentData ? currentData.external_debt : ""} // the data value
                  >
                    {" "}
                    {currentData ? currentData.external_debt : ""}
                  </td>
                </tr>
                <tr className="compare-row">
                  <td
                    className="compare-data-domestic hover-label-cell"
                    style={{
                      display: !selectedMetric || selectedMetric === 'domestic_debt' ? 'flex' : 'none',
                      backgroundColor: currentData
                        ? getColorForValue(
                            currentData.domestic_debt,
                            minVal,
                            maxVal
                          )
                        : "transparent",
                    }}
                    data-country={selectedCountry} // the country name
  data-value={currentData ? currentData.domestic_debt : ""} // the data value
                  >
                    {" "}
                    {currentData ? currentData.domestic_debt : ""}
                  </td>
                </tr>
                <tr className="compare-row">
                  <td
                    className="compare-data-yearly hover-label-cell"
                    style={{
                      display: !selectedMetric || selectedMetric === 'yearly_financing' ? 'flex' : 'none',
                      backgroundColor: currentData
                        ? getColorForValue(
                            currentData.yearly_financing,
                            minVal,
                            maxVal
                          )
                        : "transparent",
                    }}
                    data-country={selectedCountry} // the country name
  data-value={currentData ? currentData.yearly_financing : ""} // the data value
                  >
                    {" "}
                    {currentData ? currentData.yearly_financing : ""}
                  </td>
                </tr>
              </tbody>
            </div>






            <div className="compare-section-container">
              <div className="compare-section-heading">
                <div className="compare-filters-input-container">
                  <label htmlFor="select-country">
                    *Select a country
                  </label>
                  <div className="compare-select">
                    <select
                      name=""
                      id="select-country-second"
                      value={selectedCountrySecond}
                      onChange={handleCountrySecondChange}
                    >
                      <option value="">select country</option>
                      <option value="Angola">Angola</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="SouthSudan">South Sudan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                    <div className="compare-drop-icon">
                      <i className="ri-arrow-drop-down-fill"></i>
                    </div>
                  </div>
                </div>
                <div className="compare-page-input-container">
                  <div className="compare-page-input">
                    <div className="flag-zip-section">
                      {selectedCountrySecond && countryFlags[selectedCountrySecond] ? (
                        <>
                          <span>{selectedCountrySecond}</span>
                          <img
                            src={countryFlags[selectedCountrySecond]}
                            alt={`${selectedCountrySecond} flag`}
                          />
                        </>
                      ) : (
                        "''"
                      )}
                    </div>
                  <button className="reset-btn" onClick={handleClearFiltersSecond}>Clear &nbsp; <i className="ri-restart-fill"></i></button>
                  </div>
                  
                  <div className="compare-select">
                    <select
                      name=""
                      id="select-year-second"
                      value={selectedYearSecond}
                      onChange={handleYearSecondChange}
                    >
                      <option value="2025">2025 (current)</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                    </select>
                    <div className="compare-drop-icon">
                      <i className="ri-arrow-drop-down-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
              <tbody className="compare-table" id="compare-table">
                <tr className='compare-row'>
                  <td
                    className='compare-data-total hover-label-cell'
                    style={{
                      display: !selectedMetric || selectedMetric === 'total_debt' ? 'flex' : 'none',
                      backgroundColor: currentDataSecond
                        ? getColorForValue(currentDataSecond.total_debt, minVal, maxVal)
                        : 'transparent',
                    }}
                    data-country={selectedCountrySecond} // the country name
  data-value={currentDataSecond ? currentDataSecond.total_debt : ""} // the data value
                  >
                    {currentDataSecond ? currentDataSecond.total_debt : ''}
                  </td>
                </tr>
                <tr className='compare-row'>
                  <td
                    className='compare-data-public hover-label-cell'
                    style={{
                      display: !selectedMetric || selectedMetric === 'public_debt' ? 'flex' : 'none',
                      backgroundColor: currentDataSecond
                        ? getColorForValue(currentDataSecond.public_debt, minVal, maxVal)
                        : 'transparent',
                    }}
                    data-country={selectedCountrySecond} // the country name
  data-value={currentDataSecond ? currentDataSecond.public_debt : ""} // the data value
                  >
                    {currentDataSecond ? currentDataSecond.public_debt : ''}
                  </td>
                </tr>
                <tr className='compare-row'>
                  <td
                    className='compare-data-external hover-label-cell'
                    style={{
                      display: !selectedMetric || selectedMetric === 'external_debt' ? 'flex' : 'none',
                      backgroundColor: currentDataSecond
                        ? getColorForValue(currentDataSecond.external_debt, minVal, maxVal)
                        : 'transparent',
                    }}
                    data-country={selectedCountrySecond} // the country name
  data-value={currentDataSecond ? currentDataSecond.external_debt : ""} // the data value
                  >
                    {currentDataSecond ? currentDataSecond.external_debt : ''}
                  </td>
                </tr>
                <tr className='compare-row'>
                  <td
                    className='compare-data-domestic hover-label-cell'
                    style={{
                      display: !selectedMetric || selectedMetric === 'domestic_debt' ? 'flex' : 'none',
                      backgroundColor: currentDataSecond
                        ? getColorForValue(currentDataSecond.domestic_debt, minVal, maxVal)
                        : 'transparent',
                    }}
                    data-country={selectedCountrySecond} // the country name
  data-value={currentDataSecond ? currentDataSecond.domestic_debt : ""} // the data value
                  >
                    {currentDataSecond ? currentDataSecond.domestic_debt : ''}
                  </td>
                </tr>
                <tr className='compare-row'>
                  <td
                    className='compare-data-yearly hover-label-cell'
                    style={{
                      display: !selectedMetric || selectedMetric === 'yearly_financing' ? 'flex' : 'none',
                      backgroundColor: currentDataSecond
                        ? getColorForValue(currentDataSecond.yearly_financing, minVal, maxVal)
                        : 'transparent',
                    }}
                    data-country={selectedCountrySecond} // the country name
  data-value={currentDataSecond ? currentDataSecond.yearly_financing : ""} // the data value
                  >
                    {currentDataSecond ? currentDataSecond.yearly_financing : ''}
                  </td>
                </tr>
              </tbody>
            
            </div>








            <div className="compare-section-container-third">
              <div className="compare-section-heading">
                <div className="compare-filters-input-container">
                  <label htmlFor="select-country">
                    *Select a country
                  </label>
                  <div className="compare-select">
                    <select
                      name=""
                      id="select-country-third"
                      value={selectedCountryThird}
                      onChange={handleCountryThirdChange}
                    >
                      <option value="">select country</option>
                      <option value="Angola">Angola</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Eswatini">Eswatini</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Namibia">Namibia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="SouthSudan">South Sudan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Uganda">Uganda</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                    <div className="compare-drop-icon">
                      <i className="ri-arrow-drop-down-fill"></i>
                    </div>
                  </div>
                </div>
                <div className="compare-page-input-container">
                  <div className="compare-page-input">
                    <div className="flag-zip-section">
                      {selectedCountryThird && countryFlags[selectedCountryThird] ? (
                        <>
                          <span>{selectedCountryThird}</span>
                          <img
                            src={countryFlags[selectedCountryThird]}
                            alt={`${selectedCountryThird} flag`}
                          />
                        </>
                      ) : (
                        "''"
                      )}
                    </div>
                  <button className="reset-btn" onClick={handleClearFiltersThird}>Clear &nbsp; <i className="ri-restart-fill"></i></button>
                  </div>
                  <div className="compare-select">
                    <select
                      name=""
                      id="select-year-third"
                      value={selectedYearThird}
                      onChange={handleYearThirdChange}
                    >
                      <option value="2025">2025 (current)</option>
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      <option value="2016">2016</option>
                      <option value="2015">2015</option>
                      <option value="2014">2014</option>
                      <option value="2013">2013</option>
                      <option value="2012">2012</option>
                      <option value="2011">2011</option>
                      <option value="2010">2010</option>
                    </select>
                    <div className="compare-drop-icon">
                      <i className="ri-arrow-drop-down-fill"></i>
                    </div>
                  </div>
                </div>
              </div>
              <tbody className="compare-table" id="compare-table">
                <tr className='compare-row'>
                  <td
                    className='compare-data-total hover-label-cell'
                    style={{
                      display: !selectedMetric || selectedMetric === 'total_debt' ? 'flex' : 'none',
                      backgroundColor: currentDataThird
                        ? getColorForValue(currentDataThird.total_debt, minVal, maxVal)
                        : 'transparent',
                    }}
                    data-country={selectedCountryThird} // the country name
  data-value={currentDataThird ? currentDataThird.total_debt : ""} // the data value
                  >
                    {currentDataThird ? currentDataThird.total_debt : ''}
                  </td>
                </tr>
                <tr className='compare-row'>
                  <td
                    className='compare-data-public hover-label-cell'
                    style={{
                      display: !selectedMetric || selectedMetric === 'public_debt' ? 'flex' : 'none',
                      backgroundColor: currentDataThird
                        ? getColorForValue(currentDataThird.public_debt, minVal, maxVal)
                        : 'transparent',
                    }}
                    data-country={selectedCountryThird} // the country name
  data-value={currentDataThird ? currentDataThird.public_debt : ""} // the data value
                  >
                    {currentDataThird ? currentDataThird.public_debt : ''}
                  </td>
                </tr>
                <tr className='compare-row'>
                  <td
                    className='compare-data-external hover-label-cell'
                    style={{
                      display: !selectedMetric || selectedMetric === 'external_debt' ? 'flex' : 'none',
                      backgroundColor: currentDataThird
                        ? getColorForValue(currentDataThird.external_debt, minVal, maxVal)
                        : 'transparent',
                    }}
                    data-country={selectedCountryThird} // the country name
  data-value={currentDataThird ? currentDataThird.external_debt : ""} // the data value
                  >
                    {currentDataThird ? currentDataThird.external_debt : ''}
                  </td>
                </tr>
                <tr className='compare-row'>
                  <td
                    className='compare-data-domestic hover-label-cell'
                    style={{
                      display: !selectedMetric || selectedMetric === 'domestic_debt' ? 'flex' : 'none',
                      backgroundColor: currentDataThird
                        ? getColorForValue(currentDataThird.domestic_debt, minVal, maxVal)
                        : 'transparent',
                    }}
                    data-country={selectedCountryThird} // the country name
  data-value={currentDataThird ? currentDataThird.domestic_debt : ""} // the data value
                  >
                    {currentDataThird ? currentDataThird.domestic_debt : ''}
                  </td>
                </tr>
                <tr className='compare-row'>
                  <td
                    className='compare-data-yearly hover-label-cell'
                    style={{
                      display: !selectedMetric || selectedMetric === 'yearly_financing' ? 'flex' : 'none',
                      backgroundColor: currentDataThird
                        ? getColorForValue(currentDataThird.yearly_financing, minVal, maxVal)
                        : 'transparent',
                    }}
                    data-country={selectedCountryThird} // the country name
  data-value={currentDataThird ? currentDataThird.yearly_financing : ""} // the data value
                  >
                    {currentDataThird ? currentDataThird.yearly_financing : ''}
                  </td>
                </tr>
              </tbody>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareSection;
