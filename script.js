let price, mortgage, deposit, stampduty, additionalCosts, invested, rent, management, repairs, serviceCharge, insurance, annualProfit, grossYield, netYield, ROI, annualManagement, annualRepairs, annualRent, annualBills; 

price = 100000;
deposit = price*0.25;
stampduty = price*0.03;
additionalCosts = 3000
invested = deposit+stampduty+additionalCosts; 
rent = 700
mortgage = 0.04;
management = 0.10;
repairs = 0.10;
serviceCharge = 0;
insurance=200;

annualRent = rent*12
annualIntrest = (price-deposit)*mortgage

//Annual repairs & management is a percentage of annual rent
annualManagement = annualRent *management;
annualRepairs = annualRent*repairs;
annualBills = annualIntrest+annualManagement+annualRepairs+insurance+serviceCharge;

annualProfit = annualRent-annualBills;
grossYield = (annualRent/price) *100;
netYield = (annualProfit/price)*100;
ROI=(annualProfit/invested)*100;

document.getElementById("price").value = price
document.getElementById("deposit").value = deposit; 
document.getElementById("stampDuty").value = stampduty; 
document.getElementById("additionalCosts").value = additionalCosts; 
document.getElementById("invested").value = invested; 
document.getElementById("rent").value = rent;
document.getElementById("Mortgage").value = mortgage*100;
document.getElementById("Management").value = management*100;
document.getElementById("Repairs").value = repairs*100;
document.getElementById("Service").value = serviceCharge;
document.getElementById("Insurance").value = insurance;
document.getElementById("annualProfit").value = annualProfit;
document.getElementById("Gross").value = Math.round((grossYield + Number.EPSILON) *100)/100;
document.getElementById("Net").value = Math.round((netYield + Number.EPSILON) *100)/100;
document.getElementById("ROI").value = Math.round((ROI + Number.EPSILON) *100)/100;

document.getElementById("price").addEventListener("change", updatePrice);

function updatePrice () {
        price = document.getElementById("price").value;
        document.getElementById("deposit").value = price*0.25;
        stampduty = price*0.03;
        console.log(price)
};

function calculateStampDuty (newPrice){
        if (newPrice >= 40000){
                return 0 
        } else if(newPrice >= 125000) {

        } else if(newPrice >= 250000) {

        } else if(newPrice >= 925000) {

        } else if(newPrice >= 1500000) {

        } else {
                
        } 
}