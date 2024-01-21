/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
  Label,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

const ChartComponent = () => {
  const [selectedRiskScore, setSelectedRiskScore] = useState(0);
  const [investmentdata, setInvestmentData] = useState([]);
  const [error, setError] = useState(false);
  const [activeDiv, setActiveDiv] = useState(1);

  const handleChangeRiskScore = (e) => {
    setSelectedRiskScore(parseInt(e.target.value, 10));
  };

  const toggleDiv = (divNumber) => {
    setActiveDiv(divNumber);
  };

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `https://roboadvisor-ft9ja-bknd.onrender.com/api/investment/${selectedRiskScore}`;
      try {
        const response = await axios.get(apiUrl);
        setInvestmentData(response?.data);
        setError(false)
      } catch (err) {
        setError(true);
        console.log(error);
      }
    };

    fetchData();
  }, [error, selectedRiskScore]);

  const chartData = [
    { name: "Nigerian Stocks", value: investmentdata.nigerianStocks },
    { name: "Foreign Stocks", value: investmentdata.foreignStocks },
    { name: "Tech Stocks", value: investmentdata.techStocks },
    { name: "Emerging Stocks", value: investmentdata.emergingStocks },
    { name: "Nigerian Bonds", value: investmentdata.nigerianBonds },
    { name: "Foriegn Bonds", value: investmentdata.foreignBonds },
    { name: "Commodities", value: investmentdata.commodities },
    { name: "Real Estate", value: investmentdata.realEstate },
    { name: "T-Bills", value: investmentdata.tBills },
    { name: "Alternative", value: investmentdata.alternative },
  ];

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const CustomBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { x, y, width, height, fill } = props;

    return (
      <path
        d={`M${x},${y + height} L${x + width},${y + height} L${
          x + width
        },${y} L${x},${y} Z`}
        fill={fill}
      />
    );
  };

  // console.log(investmentdata?.riskScore);
  // console.log(investmentdata);
  return (
    <div>
      <div className=" w-full md:py-[50px] md:px-[97px] px-5 h-max">
        <div className="w-full max-w-xs">
          <label
            htmlFor="progress"
            className="block text-blue-700 text-sm font-bold"
          >
            Risk score sample
          </label>
          <input
            type="range"
            id="progress"
            name="progress"
            min="0"
            max="10"
            value={selectedRiskScore}
            onChange={handleChangeRiskScore}
            className="slider-thumb w-full "
          />
          <div className="text-center inline ml-4 mt-0">
            <span className="text-lg font-normal rounded">{selectedRiskScore}</span>
          </div>
        </div>
      </div>

      {
        investmentdata ? (      <>
          <div className={`box ${activeDiv === 1 ? "block" : "hidden"}`}>
            <h2>Bar Chart</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} className="w-full">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value, name) => [`${value}%`, `${name}`]} />
                <Legend />
                <Bar
                  dataKey="value"
                  fill="#8884d8"
                  shape={<CustomBar />}
                  label={{ position: "top" }}
                >
                  {chartData.map((entry, index) => (
                    <Label
                      key={`label-${index}`}
                      content={({ x, y, width, height, value }) => (
                        <text
                          x={x + width / 2}
                          y={y + height / 2}
                          fill="#fff"
                          dy={-10}
                          textAnchor="middle"
                        >
                          {`${value}%`}
                        </text>
                      )}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
    
            <div className="flex justify-center gap-5 flex-wrap w-full">
              {chartData.map(
                (item, index) =>
                  item.value === 0 && (
                    <div key={index} className="flex gap-5">
                      <div className="flex justify-center gap-5 flex-wrap w-full border px-2 md:px-5 md:py-1">
                        <small className="font-semibold" >{item.name}: </small>
                        <small>{item.value}%</small>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
    
          <div className={`box ${activeDiv === 2 ? "block" : "hidden"}`}>
            {/* <h2>Triangle Bar Chart</h2> */}
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar
                  dataKey="value"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: "top" }}
                >
                  {chartData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={colors[index % colors.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-5 flex-wrap w-full">
              {chartData.map(
                (item, index) =>
                  item.value === 0 && (
                    <div key={index} className="flex gap-5">
                      <div className="flex justify-center gap-5 flex-wrap w-full border px-2 md:px-5 md:py-1">
                        <small className="font-semibold" >{item.name}: </small>
                        <small>{item.value}%</small>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          <div className={`box ${activeDiv === 3 ? "block" : "hidden"}`}>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart
                data={chartData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-5 flex-wrap w-full">
              {chartData.map(
                (item, index) =>
                  item.value === 0 && (
                    <div key={index} className="flex gap-5">
                      <div className="flex justify-center gap-5 flex-wrap w-full border px-2 md:px-5 md:py-1">
                        <small className="font-semibold" >{item.name}: </small>
                        <small>{item.value}%</small>
                      </div>
                    </div>
                  )
              )}
            </div>
          </div>
          </>) : <p>Loading...</p>
      }

      {error && <p style={{ color: 'red' }}>Something when wrong</p>}

      <div className="flex mx-auto">
      <div className="flex mt-4 mx-auto">
        <button
          // className="mr-2 px-4 py-2 bg-blue-500 text-white"
          className={`mr-2 px-4 py-2 ${activeDiv === 1 ? " bg-blue-500 text-white" : " bg-gray-300 text-black"}`}
          onClick={() => toggleDiv(1)}
        >
          barChart
        </button>

        <button
          className={`mr-2 px-4 py-2 ${activeDiv === 2 ? " bg-green-500 text-white" : " bg-gray-300 text-black"}`}

          onClick={() => toggleDiv(2)}
        >
          shape barChart
        </button>

        <button
          className={`px-4 py-2 ${activeDiv === 3 ? " bg-red-500 text-white" : " bg-gray-300 text-black"}`}
          onClick={() => toggleDiv(3)}
        >
          Line chart
        </button>
      </div>
      </div>

    </div>
  );
};

export default ChartComponent;
