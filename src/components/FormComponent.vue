<template>
  <form @submit.prevent="handleSubmit">
    <div class="row">
      <!-- Electric Car Form Section -->
      <div class="col-md-6">
        <h3 class="text-center">{{ $t('labels.ev') }}</h3>
        <div class="mb-3" v-for="field in electricFields" :key="field.model">
          <!-- Make sure the label's for attribute matches the input's id -->
          <label :for="field.model" class="form-label">{{ $t(`labels.${field.model}`) }}</label>
          <input
            :id="field.model"
            :type="field.type"
            v-model="formData[field.model]"
            :placeholder="$t(`labels.${field.model}`)"
            class="form-control"
          />
        </div>
      </div>

      <!-- Fossil Car Form Section -->
      <div class="col-md-6">
        <h3 class="text-center">{{ $t('labels.ice') }}</h3>
        <div class="mb-3">
          <label for="tankSize" class="form-label">Tankstorlek (L):</label>
          <input
            id="tankSize"
            type="number"
            v-model="formData.tankSize"
            placeholder="t.ex., 50"
            class="form-control"
          />
        </div>
        <div class="mb-3" v-for="field in petrolFields" :key="field.model">
          <label :for="field.model" class="form-label">{{ $t(`labels.${field.model}`) }}</label>
          <input
            :id="field.model"
            :type="field.type"
            v-model="formData[field.model]"
            :placeholder="$t(`labels.${field.model}`)"
            class="form-control"
          />
        </div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary w-100 mt-3">{{ $t('buttonText') }}</button>
  </form>
</template>

<script>
export default {
  name: 'FormComponent',
  data() {
    return {
      formData: {
        batteryCapacity: 58,
        modelYear: 2022,
        currentYear: new Date().getFullYear(),
        degradationRate: '1.8',
        consumptionRate: '20',
        kwhPrice: '2',
        fuelConsumption: '5',
        fuelPrice: '17',
        evTax: '360',
        iceTax: '960',
        evInsurance: '352',
        iceInsurance: '397',
        tankSize: 50 // Default tank size in liters
      },
      electricFields: [
        { label: 'batteryCapacity', model: 'batteryCapacity', placeholder: 't.ex., 58', type: 'number' },
        { label: 'modelYear', model: 'modelYear', placeholder: 't.ex., 2022', type: 'number' },
        { label: 'currentYear', model: 'currentYear', placeholder: 't.ex., 2024', type: 'number' },
        { label: 'degradationRate', model: 'degradationRate', placeholder: 't.ex., 1.8', type: 'text' },
        { label: 'consumptionRate', model: 'consumptionRate', placeholder: 't.ex., 15', type: 'text' },
        { label: 'kwhPrice', model: 'kwhPrice', placeholder: 't.ex., 1.5', type: 'text' },
        { label: 'evTax', model: 'evTax', placeholder: 't.ex., 360', type: 'text' },
        { label: 'evInsurance', model: 'evInsurance', placeholder: 't.ex., 490', type: 'text' }
      ],
      petrolFields: [
        { label: 'fuelConsumption', model: 'fuelConsumption', placeholder: 't.ex., 6.5', type: 'text' },
        { label: 'fuelPrice', model: 'fuelPrice', placeholder: 't.ex., 18', type: 'text' },
        { label: 'iceTax', model: 'iceTax', placeholder: 't.ex., 960', type: 'text' },
        { label: 'iceInsurance', model: 'iceInsurance', placeholder: 't.ex., 390', type: 'text' }
      ]
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('calculate', this.formData);
    }
  }
};
</script>
