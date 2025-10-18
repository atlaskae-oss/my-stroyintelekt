// Статистические данные для виджетов (в реальном проекте эти данные будут приходить с сервера)
const dashboardData = {
    projects: {
        total: 24,
        inProgress: 18,
        delayed: 3,
        completed: 3
    },
    budget: {
        planned: 145000000,
        spent: 112000000,
        forecast: 138000000
    },
    risks: {
        high: 5,
        medium: 12,
        low: 7
    },
    timeline: {
        onTrack: 75,
        delayed: 25
    }
};

// Обновление виджетов при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    updateDashboard();
});

// Функция обновления данных дашборда
function updateDashboard() {
    // Обновление виджета проектов
    document.getElementById('total-projects').textContent = dashboardData.projects.total;
    document.getElementById('in-progress').textContent = dashboardData.projects.inProgress;
    document.getElementById('delayed-projects').textContent = dashboardData.projects.delayed;
    document.getElementById('completed-projects').textContent = dashboardData.projects.completed;
    
    // Обновление виджета бюджета
    document.getElementById('planned-budget').textContent = formatCurrency(dashboardData.budget.planned);
    document.getElementById('spent-budget').textContent = formatCurrency(dashboardData.budget.spent);
    document.getElementById('forecast-budget').textContent = formatCurrency(dashboardData.budget.forecast);
    
    // Обновление виджета рисков
    document.getElementById('high-risk').textContent = dashboardData.risks.high;
    document.getElementById('medium-risk').textContent = dashboardData.risks.medium;
    document.getElementById('low-risk').textContent = dashboardData.risks.low;
    
    // Обновление виджета сроков
    document.getElementById('on-track').textContent = `${dashboardData.timeline.onTrack}%`;
    document.getElementById('delayed').textContent = `${dashboardData.timeline.delayed}%`;
}

// Форматирование чисел как валюты
function formatCurrency(amount) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB'
    }).format(amount);
}

// Добавьте здесь функциональность для фильтрации, поиска и других взаимодействий