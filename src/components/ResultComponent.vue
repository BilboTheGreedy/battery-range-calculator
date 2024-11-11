<template>
    <div v-if="results" class="mt-4">
      <p class="mt-3">
        {{ $t('summary.range') }} <strong>{{ results.range ? results.range.toFixed(2) : 'N/A' }} km</strong>.
      </p>
      <p>
        {{ $t('summary.chargeCost') }} <strong>{{ results.cost ? results.cost.toFixed(2) : 'N/A' }} kr</strong>.
      </p>
      <p>
        {{ $t('summary.evCostPer100Km') }} <strong>{{ results.costPer100Km ? results.costPer100Km.toFixed(2) : 'N/A' }} kr</strong> 
        {{ $t('summary.evCostPerMil') }} <strong>{{ results.costPerMil ? results.costPerMil.toFixed(2) : 'N/A' }} kr</strong>.
      </p>
      <p>
        {{ $t('summary.iceCostPer100Km') }} <strong>{{ results.costPer100KmICE ? results.costPer100KmICE.toFixed(2) : 'N/A' }} kr</strong> 
        {{ $t('summary.iceCostPerMil') }} <strong>{{ results.costPerMilICE ? results.costPerMilICE.toFixed(2) : 'N/A' }} kr</strong>.
      </p>
      <p>
        {{ $t('summary.fullTankCost') }} ({{ results.tankSize || 'N/A' }} L) <strong>{{ results.fullTankCost ? results.fullTankCost.toFixed(2) : 'N/A' }} kr</strong>.
      </p>
  
      <div class="mt-4">
        <p><strong>{{ $t('summary.conclusion.overall') }}</strong></p>
        <p v-if="results.totalCostPerKmEV < results.totalCostPerKmICE">
          {{ $t('summary.conclusion.evCheaper') }} <strong>{{ results.costDifferencePerKm ? results.costDifferencePerKm.toFixed(2) : 'N/A' }} kr</strong> 
          {{ $t('summary.conclusion.perKm') }} 
          {{ $t('summary.conclusion.over1000Km') }} <strong>{{ results.savingsOver1000Km ? results.savingsOver1000Km.toFixed(2) : 'N/A' }} kr</strong>.
        </p>
        <p v-else>
          {{ $t('summary.conclusion.iceCheaper') }} <strong>{{ results.costDifferencePerKm ? results.costDifferencePerKm.toFixed(2) : 'N/A' }} kr</strong> 
          {{ $t('summary.conclusion.perKm') }} 
          {{ $t('summary.conclusion.over1000Km') }} <strong>{{ results.savingsOver1000Km ? results.savingsOver1000Km.toFixed(2) : 'N/A' }} kr</strong>.
        </p>
        
        <div class="mt-4">
          <p><strong>{{ $t('summary.annualExample') }}</strong></p>
          <p>{{ $t('summary.annualEV') }} <strong>{{ results.annualCostEV ? results.annualCostEV.toFixed(2) : 'N/A' }} kr</strong>.</p>
          <p>{{ $t('summary.annualICE') }} <strong>{{ results.annualCostICE ? results.annualCostICE.toFixed(2) : 'N/A' }} kr</strong>.</p>
          <p>{{ $t('summary.annualSavings') }} <strong>{{ results.annualSavings ? results.annualSavings.toFixed(2) : 'N/A' }} kr</strong> {{ $t('summary.perYear') }}.</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ResultComponent',
    props: {
      results: {
        type: Object,
        required: true,
        default: () => ({})
      }
    }
  };
  </script>
  