const plans = [
    {
        id: 'basic',
        name: 'Basic Plan',
        frequency: 'Once a week',
        price: 249.90,
        description: 'Ideal for maintaining contact with the language without burdening your routine.'
    },
    {
        id: 'cost-benefit',
        name: 'Cost-Benefit Plan',
        frequency: 'Twice a week',
        price: 399.90,
        description: 'The perfect balance for those who want steady progress.'
    },
    {
        id: 'intensive',
        name: 'Intensive Plan',
        frequency: 'Three times a week',
        price: 499.90,
        description: 'Total focus on fast results and immersion.'
    }
];

function init() {
    const savedPlan = localStorage.getItem('lastViewedPlan');
    const resultContainer = document.getElementById('recommendation-result');
    
    if (savedPlan && resultContainer) {
        resultContainer.innerHTML = `<p style="color: green;">Welcome back! Last time, you were interested in the <strong>${savedPlan}</strong>.</p>`;
    }

    const recommendBtn = document.getElementById('recommend-btn');
    
    if (recommendBtn) {
        recommendBtn.addEventListener('click', recommendPlan);
    }
}

function recommendPlan() {
    const goalSelect = document.getElementById('student-goal');
    const selectedGoal = goalSelect.value;
    const resultContainer = document.getElementById('recommendation-result');

    if (selectedGoal === "") {
        resultContainer.innerHTML = `<p style="color: red;">Please select a goal.</p>`;
        return;
    }

    let recommendedPlanId;

    if (selectedGoal === 'travel') {
        recommendedPlanId = 'intensive';
    } else if (selectedGoal === 'business') {
        recommendedPlanId = 'cost-benefit';
    } else {
        recommendedPlanId = 'basic';
    }

    const bestPlan = plans.find(plan => plan.id === recommendedPlanId);

    localStorage.setItem('lastViewedPlan', bestPlan.name);

    const resultHTML = `
        <div style="background-color: #f0f8ff; padding: 15px; margin-top: 15px; border-radius: 5px;">
            <h4>Recommendation: ${bestPlan.name}</h4>
            <p><strong>Frequency:</strong> ${bestPlan.frequency}</p>
            <p><strong>Investment:</strong> R$ ${bestPlan.price.toFixed(2).replace('.', ',')}</p>
            <p><em>${bestPlan.description}</em></p>
            <p>Based on your goal, this plan offers the ideal speed.</p>
        </div>
    `;

    resultContainer.innerHTML = resultHTML;
}

window.onload = init;