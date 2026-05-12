// Рост обращений (две линии)
new Chart(document.getElementById('growthChart'), {
  type: 'line',
  data: {
    labels: ['2022','2023','2024','2025','2026'],
    datasets: [
      { label: 'Письменные обращения (тыс.)', data: [4.2,5.5,6.8,8.0,9.5], borderColor: '#2c9ab3', fill: false, tension: 0.3 },
      { label: 'Голосовые обращения (тыс.)', data: [1.8,2.3,2.7,3.2,4.0], borderColor: '#e9b35f', fill: false, tension: 0.3 }
    ]
  }
});

// Загрузка сервис-центра (5 категорий)
new Chart(document.getElementById('loadPieChart'), {
  type: 'pie',
  data: {
    labels: ['Сортировка/классификация','Ручной ввод','Согласование','Поиск запчастей','Коммуникация'],
    datasets: [{ data: [40,20,15,10,5], backgroundColor: ['#2c9ab3','#56ab91','#e9b35f','#b56576','#aaddff'] }]
  },
  options: { plugins: { legend: { position: 'bottom', labels: { font: { size: 10 } } } } }
});

// Столбчатая NLP
new Chart(document.getElementById('nlpBarChart'), {
  type: 'bar',
  data: {
    labels: ['F1-мера (x10)','NER (сущности)','Скорость (отн.)','Низкая стоимость'],
    datasets: [
      { label: 'RuBERT', data: [9.3,9,8,10], backgroundColor: '#2c9ab3' },
      { label: 'LaBSE', data: [8.7,2,7,10], backgroundColor: '#b56576' },
      { label: 'GPT', data: [9.1,6,4,3], backgroundColor: '#e9b35f' },
      { label: 'Naive Bayes', data: [7.6,1,10,10], backgroundColor: '#56ab91' }
    ]
  },
  options: { scales: { y: { max: 10 } } }
});

// Сравнение языков
new Chart(document.getElementById('langCompareChart'), {
  type: 'bar',
  data: {
    labels: ['ML экосистема','Поддержка BERT','Скорость разработки','Производительность','Сообщество'],
    datasets: [
      { label: 'Python', data: [10,10,9,7,10], backgroundColor: '#2c9ab3' },
      { label: 'Java', data: [5,2,6,9,7], backgroundColor: '#b56576' },
      { label: 'Go', data: [2,1,7,9,4], backgroundColor: '#e9b35f' },
      { label: 'Node.js', data: [3,2,8,6,6], backgroundColor: '#56ab91' }
    ]
  },
  options: { scales: { y: { max: 10 } } }
});

// Радар для СУБД
new Chart(document.getElementById('dbRadarChart'), {
  type: 'radar',
  data: {
    labels: ['ACID','Масштабируемость','Поддержка JSON','Скорость JOIN','Сообщество'],
    datasets: [
      { label: 'PostgreSQL', data: [10,9,9,10,10], backgroundColor: 'rgba(44,154,179,0.2)', borderColor: '#2c9ab3' },
      { label: 'MongoDB', data: [5,8,10,4,8], backgroundColor: 'rgba(233,179,95,0.2)', borderColor: '#e9b35f' },
      { label: 'SQLite', data: [8,3,2,6,6], backgroundColor: 'rgba(181,101,118,0.2)', borderColor: '#b56576' },
      { label: 'MsSQL', data: [9,7,5,8,7], backgroundColor: 'rgba(86,171,145,0.2)', borderColor: '#56ab91' }
    ]
  },
  options: { scales: { r: { max: 10, ticks: { stepSize: 2 } } }, plugins: { legend: { position: 'bottom', labels: { boxWidth: 8, font: { size: 9 } } } } }
});

// Денежный поток
new Chart(document.getElementById('cashFlowChart'), {
  type: 'line',
  data: {
    labels: ['0','1','2','3','4','5','6'],
    datasets: [{ label: 'Накопленный поток (тыс. руб.)', data: [-800,325,1450,2575,3700,4825,5950], borderColor: '#2c9ab3', fill: false }]
  }
});