let itemName="earrings"
let unitcost=30.00
let currentStock=200
let reorderLevel=75
let targetStock=350
let weeklyDemand=50
let supplierLeadTimeWeeks=2

#Calculate Inventory Metrics
let weeksOfCover = weeklyDemand > 0 ? currentStock / weeklyDemand : Infinity
let stockDeficit = Math.max(0, targetStock - currentStock);
let reorderQuantity = (currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks) ? Math.ceil(stockDeficit) : 0;
let estimatedReorderCost = reorderQuantity * unitcost;
let reorderNow = currentStock <= reorderLevel || weeksOfCover < supplierLeadTimeWeeks;

#Console Prints
console.log(itemName)
console.log("Weeks of Cover: " + weeksOfCover.toFixed(2)) 
console.log("Reorder Now: " + (reorderNow ? "Yes" : "No"))
console.log("Recommended Reorder Quantity: " + reorderQuantity)
console.log("Estimated Reorder Cost: $" + estimatedReorderCost.toFixed(2))

