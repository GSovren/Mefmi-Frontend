import "../components/DashboardSection.css";
import "../components/DashboardSectionMap.css";
import { useState, useEffect } from "react";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";
import mapSVG from "../assets/africa.svg";
import {
  TransformWrapper,
  TransformComponent,
  useControls,
} from "react-zoom-pan-pinch";
import DashboardSectionMap from "./DashboardSectionMap";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.font.size = 16;
defaults.plugins.title.color = "black";

const url = "https://dummyjson.com/carts";

function DashboardSection() {
  const [results, setResults] = useState([]);
  const controller = new AbortController();

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setResults(data.carts);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getData();

    console.log(results, "results");

    return () => {
      controller.abort();
    };
  }, []);


  return (
    <div className="dashboard-container">
      <div className="dash-container-left">
        <div className="dash-filters-container">
          <div className="explore-msg">
            <p>
              Explore and Discover Metrics Across{" "}
              <span>15 African Countries.</span>
            </p>
          </div>
          <div className="dash-filters">
            <p>
              FILTERS <i class="ri-filter-line"></i>
            </p>
            <div className="dash-inputs">
              <label htmlFor="select-country">Country:</label>
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
                <option value="South Sudan">South Sudan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Uganda">Uganda</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
            </div>
            <div className="dash-inputs">
              <label htmlFor="select-metric">Metric:</label>
              <select name="" id="select-metric">
                <option value="">-- select -- metric -- here --</option>
                <option value="">External Debt</option>
                <option value="">Total Debt</option>
                <option value="">Public Debt</option>
                <option value="">Domestic Debt</option>
                <option value="">Yearly Financing</option>
              </select>
            </div>
          </div>
        </div>
        <div className="dash-card">
          <div className="card-label">Overall Total Debt</div>
          <div className="card-count">$1,1003,00</div>
        </div>
        <div className="dash-card">
          <div className="card-label">Overall External Debt</div>
          <div className="card-count">$1,1003,00</div>
        </div>
        <div className="dash-card">
          <div className="card-label">Overall Public Debt</div>
          <div className="card-count">$1,1003,00</div>
        </div>
        <div className="dash-card">
          <div className="card-label">Overall Domestic Debt</div>
          <div className="card-count">$1,1003,00</div>
        </div>
      </div>
      <div className="dash-container-mid">
        <div className="map-container">
          <TransformWrapper
            initialScale={1}
            
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
                <TransformComponent>
                  <div className="map-inner-container">
                    <DashboardSectionMap />
                  </div>
                </TransformComponent>
                <div className="map-title">
                  <i class="ri-map-pin-line"></i> Interactive Map
                </div>
                <div className="controls">
                  <div className="zoom-controls">
                    <button className="zoom-btn" onClick={() => zoomIn()}>
                      <i class="ri-zoom-in-fill"></i>
                    </button>
                    <button className="zoom-btn" onClick={() => zoomOut()}>
                      <i class="ri-zoom-out-fill"></i>
                    </button>
                  </div>
                  <button
                    className="reset-btn"
                    onClick={() => resetTransform()}
                  >
                    <i class="ri-refresh-line"></i>
                  </button>
                </div>
                <div className="map-key">
                  <p>
                    Map Key: <i class="ri-key-2-fill"></i>
                  </p>
                  <div className="key-mefmi">
                    Associated with MEFMI: <i class="ri-checkbox-blank-circle-fill"></i>
                  </div>
                  <div className="key-world">
                    Rest of the World: <i class="ri-checkbox-blank-circle-fill"></i>
                  </div>
                </div>
              </>
            )}
          </TransformWrapper>
        </div>
        <div className="bar-chart-container">
          <Bar
            data={{
              labels: sourceData.map((data) => data.name),
              datasets: [
                {
                  label: "Public Debt",
                  data: sourceData.map((data) => data.public_debt),
                  backgroundColor: ["#00CD14"],
                  borderRadius: 4,
                },
                {
                  label: "GDP",
                  data: sourceData.map((data) => data.gdp),
                  backgroundColor: ["#1fe9f7ff"],
                  borderRadius: 4,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Public Debt & overall GDP Growth",
                },
              },
            }}
          />

          {/* <Bar
                data={{
                    labels: results.map(cart => `Cart ${cart.id}`),
                    datasets: [
                        {
                            label: "Total Amount",
                            data: results.map(cart => cart.total),
                            backgroundColor: "#00CD14",
                            borderRadius: 5,
                        },
                        {
                            label: "Discounted Price",
                            data: results.map(cart => cart.discountedTotal),
                            backgroundColor: "#00cacdff",
                            borderRadius: 5,
                        },
                    ],
                }}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: "Total Amount in Carts",
                        },
                    },
                }}
            /> */}
        </div>
      </div>
      <div className="dash-container-right">
        <div className="pie-chart-container">
          <Doughnut
            data={{
              labels: sourceData.map((data) => data.name),
              datasets: [
                {
                  label: "Public Debt",
                  data: sourceData.map((data) => data.public_debt),
                  backgroundColor: ["#00CD14", "#82c3fcff", "#03A252"],
                  borderRadius: 0,
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Overall Public debt & GDP",
                },
                legend: {
                  display: false,
                },
              },
            }}
          />
        </div>
        <div className="line-chart-container">
          <Line
            data={{
              labels: sourceData.map((data) => data.name),
              datasets: [
                {
                  label: "Public Debt",
                  data: sourceData.map((data) => data.public_debt),
                  backgroundColor: "#00CD14",
                },
                {
                  label: "GDP",
                  data: sourceData.map((data) => data.gdp),
                  backgroundColor: "#0bc8cfff",
                },
              ],
            }}
            options={{
              plugins: {
                title: {
                  text: "Public and Domestic debt",
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DashboardSection;
