<template>
    <div>
      <h3 class="text-center">Battery Degradation Impact Over Time</h3>
      <p>Testing if component is loading...</p> <!-- New line to confirm rendering -->
      <Line v-if="chartData" :data="chartData" :options="chartOptions" />
    </div>
  </template>
  
  
  <script>
import { Line } from 'vue-chartjs';
import { defineComponent, ref, watch } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default defineComponent({
  components: {
    Line
  },
  props: {
    initialBatteryCapacity: {
      type: Number,
      required: true,
      default: 58 // default battery capacity
    },
    degradationRate: {
      type: Number,
      required: true,
      default: 1.8 // default degradation rate
    }
  },
  setup(props) {
    const years = ref(10); // Number of years to simulate
    const chartData = ref({
  labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
  datasets: [
    {
      label: 'Battery Capacity (kWh)',
      data: [58, 55, 52, 50, 48],
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      fill: true,
      tension: 0.4
    }
  ]
});


    // Define options for chart display
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: true },
        tooltip: { enabled: true }
      },
      scales: {
        x: { title: { display: true, text: 'Years' } },
        y: { title: { display: true, text: 'Battery Capacity (kWh)' } }
      }
    };

    // Watch for changes in years and update chart data
    watch([years, () => props.initialBatteryCapacity, () => props.degradationRate], () => {
  updateChartData();
}, { immediate: true });

function updateChartData() {
  const labels = [];
  const data = [];
  let currentCapacity = props.initialBatteryCapacity;

  for (let year = 0; year <= years.value; year++) {
    labels.push(`Year ${year}`);
    data.push(Number(currentCapacity.toFixed(2)));
    currentCapacity *= 1 - (props.degradationRate / 100);
  }

  chartData.value = {
    labels,
    datasets: [
      {
        label: 'Battery Capacity (kWh)',
        data,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  console.log("Chart Data Structure:", chartData.value); // Log chartData to confirm structure
}


    return { years, chartData, chartOptions };
  }
});
</script>

  
  <style scoped>
  .text-center {
    text-align: center;
  }
  </style>
  