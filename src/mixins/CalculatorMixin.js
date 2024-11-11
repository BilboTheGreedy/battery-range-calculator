export default {
  methods: {
    calculateRange(formData) {
      const {
        batteryCapacity,
        degradationRate,
        consumptionRate,
        modelYear,
        currentYear,
        kwhPrice,
        fuelConsumption,
        fuelPrice,
        tankSize,
        evTax,
        iceTax,
        evInsurance,
        iceInsurance
      } = formData;

      // Calculate years since the model year
      const years = currentYear - modelYear;
      const degradationFactor = 1 - parseFloat(degradationRate) / 100;
      
      // Calculate the remaining battery capacity after degradation
      const remainingCapacity = batteryCapacity * Math.pow(degradationFactor, years);

      // Calculate consumption per km
      const consumptionPerKm = consumptionRate / 100;

      // Degraded range calculation
      const range = remainingCapacity / consumptionPerKm;

      // Original range calculation (without degradation)
      const originalRange = batteryCapacity / consumptionPerKm;

      // Cost calculations for EV
      const fullChargeCost = remainingCapacity * parseFloat(kwhPrice);
      const costPer100KmEV = consumptionRate * parseFloat(kwhPrice);
      const costPerMilEV = (consumptionRate / 10) * parseFloat(kwhPrice);

      // Cost calculations for ICE (Internal Combustion Engine) vehicle
      const fullTankCost = tankSize * parseFloat(fuelPrice);
      const costPer100KmICE = parseFloat(fuelConsumption) * parseFloat(fuelPrice);
      const costPerMilICE = (parseFloat(fuelConsumption) / 10) * parseFloat(fuelPrice);

      // Annual costs
      const annualKmDriven = 15000;
      const annualTaxEV = parseFloat(evTax);
      const annualTaxICE = parseFloat(iceTax);
      const annualInsuranceEV = parseFloat(evInsurance);
      const annualInsuranceICE = parseFloat(iceInsurance);

      // Total cost per km for EV and ICE
      const totalCostPerKmEV = costPer100KmEV / 100 + (annualTaxEV + annualInsuranceEV) / annualKmDriven;
      const totalCostPerKmICE = costPer100KmICE / 100 + (annualTaxICE + annualInsuranceICE) / annualKmDriven;

      // Cost difference per km and savings over 1000 km
      const costDifferencePerKm = Math.abs(totalCostPerKmEV - totalCostPerKmICE);
      const savingsOver1000Km = costDifferencePerKm * 1000;

      // Annual cost calculation
      const annualCostEV = totalCostPerKmEV * annualKmDriven;
      const annualCostICE = totalCostPerKmICE * annualKmDriven;
      const annualSavings = Math.abs(annualCostEV - annualCostICE);

      return {
        range,                    // Degraded range
        originalRange,            // Original range
        cost: fullChargeCost,     // Cost to fully charge the degraded battery
        costPer100Km: costPer100KmEV,
        costPerMil: costPerMilEV,
        fullTankCost,             // Cost for a full tank for ICE vehicle
        costPer100KmICE,          // Cost per 100 km for ICE vehicle
        costPerMilICE,            // Cost per 10 km (mil) for ICE vehicle
        totalCostPerKmEV,
        totalCostPerKmICE,
        costDifferencePerKm,      // Cost difference per km between EV and ICE
        savingsOver1000Km,        // Savings over 1000 km by choosing the cheaper option
        annualCostEV,             // Annual cost for EV (15,000 km)
        annualCostICE,            // Annual cost for ICE (15,000 km)
        annualSavings             // Annual savings by choosing the cheaper option
      };
    }
  }
};
