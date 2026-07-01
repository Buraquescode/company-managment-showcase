document.addEventListener('DOMContentLoaded',() => {
  function renderChart(canvasId,dataId,chartType='pie'){
    const ctx = document.getElementById(canvasId).getContext('2d');
    const data = JSON.parse(document.getElementById(dataId).textContent);
    new Chart(ctx,{type:chartType,data:{labels:Object.keys(data),datasets:[{data:Object.values(data)}]}});
  }
  renderChart('incomeChart','income-data');
  renderChart('expenseChart','expense-data');
});