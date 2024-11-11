// src/i18n.js
import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    title: 'Battery Range Calculator and Fossil Car Comparison',
    labels: {
      ev: 'Electric Car',
      ice: 'Fossil Car',
      batteryCapacity: 'Initial Battery Capacity (kWh):',
      modelYear: 'Model Year:',
      currentYear: 'Current Year:',
      degradationRate: 'Annual Degradation Rate (%):',
      consumptionRate: 'Electric Car Consumption (kWh per 100 km):',
      kwhPrice: 'Price per kWh (SEK):',
      fuelConsumption: 'Fossil Car Consumption (L per 100 km):',
      fuelPrice: 'Price per Liter of Fuel (SEK):',
      evTax: 'Electric Car Annual Tax (SEK):',
      iceTax: 'Fossil Car Annual Tax (SEK):',
      evInsurance: 'Electric Car Insurance Cost (SEK):',
      iceInsurance: 'Fossil Car Insurance Cost (SEK):',
      tankSize: 'Fuel Tank Size (L):'
    },
    buttonText: 'Calculate Range and Cost',
    summary: {
      range: 'With the degraded battery capacity, the estimated range of your ID.3 (58 kWh) is',
      chargeCost: 'The cost to fully charge the battery is',
      evCostPer100Km: 'To drive 100 km with the ID.3 costs',
      evCostPerMil: 'and per Swedish mile (10 km)',
      iceCostPer100Km: 'For the fossil car, it costs per 100 km',
      iceCostPerMil: 'and per Swedish mile (10 km)',
      fullTankCost: 'The cost of a full tank',
      annualExample: 'Example Annual Cost for 15,000 km',
      annualEV: 'Annual cost for electric car (15,000 km):',
      annualICE: 'Annual cost for petrol car (15,000 km):',
      annualSavings: 'You would save',
      perYear: 'per year',
      conclusion: {
        overall: 'Summary:',
        evCheaper: 'The ID.3 is cheaper per kilometer than the fossil car including tax and insurance, saving',
        iceCheaper: 'The fossil car is cheaper per kilometer than the ID.3 including tax and insurance, saving',
        perKm: 'per kilometer',
        over1000Km: 'Over a distance of 1000 km, this amounts to a saving of'
      }
    }
  },
  sv: {
    title: 'Batteriräknare för Körsträcka och Jämförelse med Fossilbil',
    labels: {
      ev: 'Elbil',
      ice: 'Fossilbil',
      batteryCapacity: 'Ursprunglig Batterikapacitet (kWh):',
      modelYear: 'Modellår:',
      currentYear: 'Nuvarande År:',
      degradationRate: 'Årlig Nedbrytningsgrad (%):',
      consumptionRate: 'Förbrukning Elbil (kWh per 100 km):',
      kwhPrice: 'Pris per kWh (kr):',
      fuelConsumption: 'Förbrukning Fossilbil (L per 100 km):',
      fuelPrice: 'Pris per Liter Bensin/Diesel (kr):',
      evTax: 'Årlig Skatt Elbil (kr):',
      iceTax: 'Årlig Skatt Fossilbil (kr):',
      evInsurance: 'Försäkringskostnad Elbil (kr):',
      iceInsurance: 'Försäkringskostnad Fossilbil (kr):',
      tankSize: 'Tankstorlek (L):'
    },
    buttonText: 'Beräkna Körsträcka och Kostnad',
    summary: {
      range: 'Med den nedbrutna batterikapaciteten på din ID.3 (58 kWh) har du en beräknad körsträcka på',
      chargeCost: 'Kostnaden för att ladda batteriet fullt blir',
      evCostPer100Km: 'För att köra 100 km med ID.3 kostar',
      evCostPerMil: 'och per svensk mil (10 km)',
      iceCostPer100Km: 'För fossilbilen kostar det per 100 km',
      iceCostPerMil: 'och per svensk mil (10 km)',
      fullTankCost: 'Kostnaden för en full tank',
      annualExample: 'Exempel på årlig kostnad för 15 000 km',
      annualEV: 'Årlig kostnad för elbil (15 000 km):',
      annualICE: 'Årlig kostnad för fossilbil (15 000 km):',
      annualSavings: 'Du skulle spara',
      perYear: 'per år',
      conclusion: {
        overall: 'Sammanfattning:',
        evCheaper: 'ID.3 är billigare per kilometer än fossilbilen inklusive skatt och försäkring, med en besparing på',
        iceCheaper: 'Fossilbilen är billigare per kilometer än ID.3 inklusive skatt och försäkring, med en besparing på',
        perKm: 'per kilometer',
        over1000Km: 'Över en sträcka på 1000 km innebär detta en besparing på'
      }
    }
  }
};

const i18n = createI18n({
  locale: 'sv', // Default language
  messages
});

export default i18n;
