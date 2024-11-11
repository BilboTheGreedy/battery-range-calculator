<template>
  <div id="app" class="container mt-5">
    <h1 class="text-center mb-4">Batteriräknare för Körsträcka och Jämförelse med Fossilbil</h1>
    <button @click="toggleLanguage" class="btn btn-secondary mb-3">
      {{ currentLanguage === 'sv' ? 'Switch to English' : 'Byt till Svenska' }}
    </button>
    <div class="calculator card p-4 shadow">
      <!-- Form Component at the top -->
      <FormComponent @calculate="calculateResults" />
      
      <!-- Results Component appears after calculation -->
      <ResultComponent v-if="results" :results="results" />
      
      <!-- Battery Degradation Chart Component -->
      <BatteryDegradationChart
        v-if="results && results.batteryCapacity && results.degradationRate"
        :initialBatteryCapacity="results.batteryCapacity"
        :degradationRate="results.degradationRate"
      />
    </div>
  </div>
</template>

<script>
import { useI18n } from 'vue-i18n';
import FormComponent from './components/FormComponent.vue';
import ResultComponent from './components/ResultComponent.vue';
import BatteryDegradationChart from './components/BatteryDegradationChart.vue';
import CalculatorMixin from './mixins/CalculatorMixin.js';

export default {
  name: 'App',
  components: { FormComponent, ResultComponent, BatteryDegradationChart },
  mixins: [CalculatorMixin],
  setup() {
    const { locale } = useI18n();
    const currentLanguage = locale.value;

    function toggleLanguage() {
      locale.value = currentLanguage === 'sv' ? 'en' : 'sv';
    }

    return { toggleLanguage, currentLanguage };
  },
  data() {
    return { results: null };
  },
  methods: {
    calculateResults(formData) {
      this.results = this.calculateRange(formData);
      console.log("Results:", this.results);  // Log results to verify data structure
    }
  }
};
</script>
