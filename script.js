document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginBox = document.querySelector('.login-box');
    const dashboard = document.querySelector('.dashboard');
    const errorMessage = document.getElementById('error-message');
    const detailsForm = document.getElementById('detailsForm');
    const resultBox = document.getElementById('result');

    // Login Logic
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === 'mransari' && password === '262') {
            loginBox.classList.add('hidden');
            dashboard.classList.remove('hidden');
        } else {
            errorMessage.textContent = 'Invalid username or password.';
            errorMessage.classList.add('show');
        }
    });

    // Sensitivity Data with 0-200 range
    const sensitivityData = {
        "rusher": {
            "8gb": { general: 195, reddot: 180, scope2x: 170, scope4x: 160, awm: 120 },
            "6gb": { general: 185, reddot: 170, scope2x: 160, scope4x: 150, awm: 110 },
            "4gb": { general: 175, reddot: 160, scope2x: 150, scope4x: 140, awm: 100 },
            "default": { general: 190, reddot: 175, scope2x: 165, scope4x: 155, awm: 115 }
        },
        "allrounder": {
            "8gb": { general: 180, reddot: 176, scope2x: 166, scope4x: 160, awm: 130 },
            "6gb": { general: 176, reddot: 170, scope2x: 160, scope4x: 154, awm: 124 },
            "4gb": { general: 170, reddot: 164, scope2x: 156, scope4x: 150, awm: 120 },
            "default": { general: 178, reddot: 172, scope2x: 162, scope4x: 156, awm: 126 }
        },
        "onetapper": {
            "8gb": { general: 198, reddot: 190, scope2x: 180, scope4x: 176, awm: 140 },
            "6gb": { general: 190, reddot: 184, scope2x: 176, scope4x: 170, awm: 136 },
            "4gb": { general: 184, reddot: 178, scope2x: 170, scope4x: 164, awm: 130 },
            "default": { general: 194, reddot: 186, scope2x: 178, scope4x: 172, awm: 138 }
        }
    };

    // Get Sensitivity Logic
    detailsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const role = document.getElementById('role').value;
        const ram = document.getElementById('ram').value;

        let settings = { general: 'N/A', reddot: 'N/A', scope2x: 'N/A', scope4x: 'N/A', awm: 'N/A' };

        if (sensitivityData[role]) {
            if (sensitivityData[role][`${ram}gb`]) {
                settings = sensitivityData[role][`${ram}gb`];
            } else {
                // Agar specific RAM ka data nahi hai, to default settings denge
                settings = sensitivityData[role]["default"];
            }
        }
        
        document.getElementById('general-sens').textContent = settings.general;
        document.getElementById('reddot-sens').textContent = settings.reddot;
        document.getElementById('scope2x-sens').textContent = settings.scope2x;
        document.getElementById('scope4x-sens').textContent = settings.scope4x;
        document.getElementById('awm-sens').textContent = settings.awm;

        resultBox.classList.remove('hidden');
    });
});