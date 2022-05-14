const data = require("../data/edalat_data.json");

export const fetchEdalat500 = () => {
  const res = data.edalat5;
  return res;
};
export const fetchEdalat1 = () => {
  const res = data.edalat1;
  return res;
};

export const fetchOstaniData = () => {
  const ostani_data = data.ostani_data;

  var arr = [];
  for (let i = 0; i < Object.keys(ostani_data["nemad"]).length; i++) {
    arr.push({
      id: i + 1,
      nemad: ostani_data["nemad"][i],
      nameFA: ostani_data["nameFA"][i],
      nav: ostani_data["nav"][i].toLocaleString("fa"),
      pnav: ostani_data["pnav"][i].toFixed(2),
      longTermInvestment:
        ostani_data["longTermInvestment"][i].toLocaleString("fa"),
      mc: ostani_data["mc"][i].toLocaleString("fa"),
      NI: ostani_data["NI"][i].toLocaleString("fa"),
    });
  }

  return arr;
};

export const fetchPieChart = () => {
  const pieChart = data.pie_chart1;
  let arr = [];
  for (let i = 0; i < Object.keys(pieChart.name).length; i++) {
    arr.push({
      InstrumentID : pieChart.InstrumentID[i],
      name: pieChart["name"][i],
      value: pieChart["value"][i],
      percent : pieChart["percent"][i],
    });
  }

  return arr;
};
