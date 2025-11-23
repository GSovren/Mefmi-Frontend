import { useState, useEffect } from "react";
import "../components/ExploreSection.css";
import { useLocation, Link, NavLink, useNavigate } from "react-router-dom";
import sourceData from "../data/sourceData.json";
import sourceDataExplore from "../data/sourceDataExplore.json";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";


import angolaSVG from "../assets/ao.svg";
import burundiSVG from "../assets/bi.svg";
import BotswanaSVG from "../assets/bw.svg";
import EswatiniSVG from "../assets/sz.svg";
import KenyaSVG from "../assets/ke.svg";
import LesothoSVG from "../assets/ls.svg";
import MalawiSVG from "../assets/mw.svg";
import MozambiqueSVG from "../assets/mz.svg";
import NamibiaSVG from "../assets/na.svg";
import RwandaSVG from "../assets/rw.svg";
import SouthSudanSVG from "../assets/ss.svg";
import TanzaniaSVG from "../assets/tz.svg";
import UgandaSVG from "../assets/ug.svg";
import ZambiaSVG from "../assets/zm.svg";
import ZimbabweSVG from "../assets/zw.svg";

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

function ExploreSection() {

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

  const [mapSrc, setMapSrc] = useState(''); // default to Angola or null
   // Convert the countryMaps object into an array with index
  const countryMapsArray = Object.entries({
    Angola: angolaSVG,
    Burundi: burundiSVG,
    Botswana: BotswanaSVG,
    Eswatini: EswatiniSVG,
    Kenya: KenyaSVG,
    Lesotho: LesothoSVG,
    Malawi: MalawiSVG,
    Mozambique: MozambiqueSVG,
    Namibia: NamibiaSVG,
    Rwanda: RwandaSVG,
    SouthSudan: SouthSudanSVG,
    Tanzania: TanzaniaSVG,
    Uganda: UgandaSVG,
    Zambia: ZambiaSVG,
    Zimbabwe: ZimbabweSVG,
  }).map(([name, svg], index) => ({ index, name, svg }));
  const controller = new AbortController();



  const location = useLocation();
  
  const initialCountry = location.state?.country || "";
    // On initial load, get saved state from localStorage
  const [selectedCountry, setSelectedCountry] = useState(() => {
  // Use location.state if available, otherwise fallback to localStorage
  if (location.state?.country) {
    return location.state.country;
  } else {
    return localStorage.getItem('selectedCountry') || "";
  }
});
useEffect(() => {
  if (location.state?.country) {
    setSelectedCountry(location.state.country);
  }
}, [location.state]);
  const [selectedYear, setSelectedYear] = useState(() => {
    return localStorage.getItem('selectedYear') || "2025";
  });

  // Whenever selectedCountry changes, save to localStorage
  useEffect(() => {
    localStorage.setItem('selectedCountry', selectedCountry);
  }, [selectedCountry]);

  // Whenever selectedYear changes, save to localStorage
  useEffect(() => {
    localStorage.setItem('selectedYear', selectedYear);
  }, [selectedYear]);
  // State for index
  const [countryArrayMapIndex, setCountryArrayMapIndex] = useState(() => {
  if (initialCountry) {
    const index = countryMapsArray.findIndex(
      (country) => country.name === initialCountry
    );
    return index !== -1 ? index : "";
  }
  return "";
}); 

  // useEffect hook to update the map Index based on the selected country
  useEffect(() => {
    if (selectedCountry) {
      const index = countryMapsArray.findIndex(
        (country) => country.name === selectedCountry
      );
      if (index !== -1) {
        setCountryArrayMapIndex(index); 
      }
    }
  }, [selectedCountry]);

  //useEffect hook that listens to countryArrayMapIndex and updates mapSrc with the SVG from countryMapsArray.
  useEffect(() => {
    const selectedMap = countryMapsArray[countryArrayMapIndex];
    if (selectedMap) {
      setMapSrc(selectedMap.svg);
      setSelectedCountry(selectedMap.name);
    }
  }, [countryArrayMapIndex]);

  // Handler function to clear filters
const handleClearFilters = () => {
  setSelectedCountry("");
  setSelectedYear("2025")
  setCountryArrayMapIndex("");
};


// Handle eplore more button in country-menu
  const navigate = useNavigate();
  const handleCompareClick = () => {
    if (selectedCountry) {
      navigate("/compare", { state: { country: selectedCountry } });
    } else {
      // optionally handle case where no country is selected
      navigate("/compare");
    }
  };



  // ------------------------------------------------FUNCTION TO INTERPOLATE COLORS-------------------------------------------------------------
  // Define your color stops for the gradient
  // const colorStops = [
  //   { stop: 0, color: "#ff0000" }, // red for lowest
  //   { stop: 1, color: "#00ff00" }, // green for highest
  // ];
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
  //-------------------------------------------------------------FUNCTION TO GET CHART DATA------------------------------------------------------------------------
  const initialSelectedMetric = "public_debt";  
  const [selectedMetric, setSelectedMetric] = useState(initialSelectedMetric);
  const getChartData = () => {
  let dataPoint = null;
  let countryName = '';

  if (selectedCountry) {
    const countryObj = sourceDataExplore.countries.find(
      (c) => c.name === selectedCountry
    );
    if (countryObj && countryObj.data) {
      if (selectedYear && countryObj.data[selectedYear]) {
        dataPoint = countryObj.data[selectedYear];
        countryName = selectedCountry;
      } else {
        const years = Object.keys(countryObj.data);
        const latestYear = years.sort().slice(-1)[0];
        dataPoint = countryObj.data[latestYear];
        countryName = selectedCountry;
      }
    }
  }

  if (!dataPoint) {
    // No data available
    return {
      labels: [],
      datasets: [],
    };
  }

  // Define the metrics you want to display
  const metrics = [
    { key: "total_debt", label: "Total Debt" },
    { key: "external_debt", label: "External Debt" },
    { key: "domestic_debt", label: "Domestic Debt" },
    { key: "yearly_financing", label: "Yearly Financing" },
    { key: "public_debt", label: "Public Debt" },
  ];

  // Prepare labels (X-axis labels)
  const labels = metrics.map((metric) => metric.label);

  // Prepare data values for each metric
  const dataValues = metrics.map((metric) => dataPoint[metric.key]);

  // Get min and max for color scaling
  const minVal = Math.min(...dataValues);
  const maxVal = Math.max(...dataValues);
  const invertColors = false; // or set based on specific metric if needed

  // Assign colors based on value
  const backgroundColors = dataValues.map((value) =>
    getColorForValue(value, minVal, maxVal, invertColors)
  );

  // Prepare the dataset for the chart
  const dataset = {
    label: `${countryName} (${selectedYear})`,
    data: dataValues,
    backgroundColor: backgroundColors,
    borderColor: "darkGreen",
    borderWidth: 1,
    borderRadius: 2,
  };

  return {
    labels,
    datasets: [dataset],
    responsive: true,
    maintainAspectRatio: false,
  };
};

  const chartData = getChartData();



  return (
    <div className="explore-page-container">
      <div className="dash-hero">
        <div className="explore-msg">
          <div className="msg">
            Explore and Discover Metrics Across{" "}
            <span>15 African Countries. </span>
            {/* <img src={memberCountriesMap} alt="" /> */}
          </div>
        </div>
      </div>
      <div className="explore-page-inner-container">
        <div className="explore-page-top-container">
          <div className="explore-page-country-map-container">
            <div className="explore-map-heading">
              Geographical Map 
              <h2 className="country-map-info">
                  {selectedCountry || ""}{ 
                    <div className="border-bar"></div>
                  }
                  {countryFlags[selectedCountry] && (
                    <img
                      src={countryFlags[selectedCountry]}
                      alt={`${selectedCountry} flag`}
                    />
                  )}
                </h2> 
              </div>
            <div className="explore-country-map"> 
              <div className="map-data">    
              <div className="country-map-image">
                {/* Dynamically update the SVG map image source */}
              {selectedCountry ? (
                <img src={mapSrc} alt={`Map of ${selectedCountry}`} />
              ) : (
                <p>No Country Selected</p>
              )}
              </div>
              </div>    
            </div>
          </div>
          <div className="explore-page-filter-info-container">
            <div className="filters-container-heading">
              <div className="filters-container">
                <i className="ri-filter-line"></i>&nbsp;FILTERS
              </div>
              
              <div className="currency-filter">
                  <div className="dash-currency-input-container">
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
            <div className="filter-info">
              <div className="filter-instruction">
                <div className="instruction-container">
                  <p>
                  FILTERS <i className="ri-filter-line"></i>
                </p>{" "}
                *Please select filter criteria below
                </div>
                
                <div className="currency-filter-primary">
                  <div className="explore-currency-input-container">
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
              <div className="explore-page-inputs">
                <div className="explore-page-input-container">
                <label>Select Country:</label>
                <div className="dash-select">
                  <select
                  name=""
                  id="select-country"
                  value={selectedCountry}
                  onChange={(e) => {
                    setSelectedCountry(e.target.value);
                  }}
                >
                  <option value="">-- No -- country -- selected --</option>
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
                <div className="drop-icon">
                    <i className="ri-arrow-drop-down-fill"></i>
                  </div>
                </div>
                

              </div>
              <div className="explore-page-input-container">
                <label>Select Year:</label>

                <div className="dash-select">
                  <select name="" id="select-year" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
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
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                    <option value="1996">1996</option>
                    <option value="1995">1999</option>
                  </select>
                  <div className="drop-icon">
                    <i className="ri-arrow-drop-down-fill"></i>
                  </div>
                </div>         
              </div>
              </div>
              
              <div className="compare-btn-container">
                <button className="reset-btn" onClick={handleClearFilters}>Clear Filters</button>
                <button className="compare-btn"onClick={handleCompareClick}>Compare Countries</button>
              </div>
            </div>

            <div className="country-bio-container">
              <div className="bio-heading">
                Country Biography: &nbsp;
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem
              </p>
            </div>

            <div className="explore-page-cards-container">
              <div className="explore-page-cards">
                <div className="explore-card">
                  Total Debt
                  <p>$10.346.900</p>
                </div>
                <div className="explore-card">
                  Public Debt
                  <p>$10.346.900</p>
                </div>
                <div className="explore-card">
                  External Debt
                  <p>$10.346.900</p>
                </div>
                <div className="explore-card">
                  Domestic Debt
                  <p>$10.346.900</p>
                </div>
                <div className="explore-card">
                  Yearly Financing
                  <p>$10.346.900</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="explore-page-bottom-container">
          <div className="explore-page-reports">
            <div className="chart-heading">Associated reports</div>
            <div className="reports-table">
              <table id="reports-table">
                <thead>
                  <th>Description</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  <tr>
                    <td>Total Debt Report</td>
                    <td className="action-btn">
                      <button id="view-btn">View</button>
                      <button id="download-btn">Downlaod</button>
                    </td>
                  </tr>
                  <tr>
                    <td>External Debt Report</td>
                    <td className="action-btn">
                      <button id="view-btn">View</button>
                      <button id="download-btn">Downlaod</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Domestic Report</td>
                    <td className="action-btn">
                      <button id="view-btn">View</button>
                      <button id="download-btn">Downlaod</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Yearly Financing Report</td>
                    <td className="action-btn">
                      <button id="view-btn">View</button>
                      <button id="download-btn">Downlaod</button>
                    </td>
                  </tr>
                  <tr>
                    <td>Public Report</td>
                    <td className="action-btn">
                      <button id="view-btn">View</button>
                      <button id="download-btn">Downlaod</button>
                    </td>
                  </tr>
                  <tr>
                    <td>External Debt Report</td>
                    <td className="action-btn">
                      <button id="view-btn">View</button>
                      <button id="download-btn">Downlaod</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="explore-page-charts-container">
            <div className="explore-page-chart-container">
              <div className="chart-heading">
              Chart visualisation
              <span>({selectedYear || "2025"} year)</span>
              </div>
                  <Bar
                    data={chartData}
                    options={{
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false,
                        },
                      },
                    }}
                  />
            </div>
            <div className="explore-page-chart-container">
              <div className="chart-heading">
              Chart visualisation
              <span>({selectedYear || "2025"} year)</span>
              </div>
              <Line
                data={chartData}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreSection;
