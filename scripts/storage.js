// Storage Handler

function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Load dashboard
function loadDashboard() {
  dashboard.innerHTML = "";

  let hasData = false;

  modules.forEach(mod => {
    const data = getModuleData(mod);

    if (data.attempts > 0) {
      hasData = true;
    }

    const card = createCard(mod, data);
    dashboard.appendChild(card);
  });

  if (!hasData) {
    emptyMsg.style.display = "block";
  }
}

// OPTIONAL: helper for other modules to save data
function saveProgress(module, score, total) {
  let data = getModuleData(module);

  data.attempts += 1;
  data.score += score;
  data.total += total;

  localStorage.setItem(module, JSON.stringify(data));
}