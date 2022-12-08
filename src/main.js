import * as echarts from 'echarts';

(async () => {
  async function getSales() {
    const res = await fetch('/api/sales');
    return await res.json();
  }

  const sales = await getSales();

  const chartEl = document.querySelector('.chart');
  const chart = echarts.init(chartEl);
  chart.setOption({
    tooltip: {
      extraCssText: `
      padding: 8px;
      border-radius: 4px;
      background-color: #333655;
      color: #FFF;`,
      formatter: (params) => {
        const { name, value } = params;
        return `
          <div>Month: ${name}월</div>
          <div>Sales: ${value.toLocaleString()}원</div>
        `;
      },
    },

    xAxis: {
      data: Object.keys(sales),
      axisLabel: {
        formatter: (value) => `${value}월`,
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        type: 'bar',
        data: Object.values(sales),
        itemStyle: {
          color: 'pink',
        },
      },
      {
        type: 'line',
        data: Object.values(sales),
      },
    ],
  });
})();
