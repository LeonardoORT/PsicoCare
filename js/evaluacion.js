document.getElementById('evaluateButton').addEventListener('click', evaluate);

        function evaluate() {
            const stressLevel = parseInt(document.getElementById('stressLevel').value);
            const anxietyLevel = parseInt(document.getElementById('anxietyLevel').value);
            const sleepQuality = parseInt(document.getElementById('sleepQuality').value);
            const physicalActivity = parseInt(document.getElementById('physicalActivity').value);
            const recommendationsDiv = document.getElementById('recommendations');
            recommendationsDiv.innerHTML = '';

            if (isValidInput(stressLevel) && isValidInput(anxietyLevel) && isValidInput(sleepQuality) && isValidInput(physicalActivity)) {
                let recommendations = '';

                if (stressLevel > 7 || anxietyLevel > 7) {
                    recommendations += '<p>Te recomendamos buscar ayuda profesional para manejar tu estrés y ansiedad.</p>';
                } else if (stressLevel > 4 || anxietyLevel > 4) {
                    recommendations += '<p>Considera practicar técnicas de relajación como la meditación o el yoga.</p>';
                } else {
                    recommendations += '<p>¡Sigue así! Mantén tus hábitos saludables para controlar el estrés y la ansiedad.</p>';
                }

                if (sleepQuality < 5) {
                    recommendations += '<p>Intenta mejorar tu calidad de sueño estableciendo una rutina regular y evitando el uso de dispositivos electrónicos antes de dormir.</p>';
                }

                if (physicalActivity < 5) {
                    recommendations += '<p>Incrementa tu nivel de actividad física con ejercicios moderados como caminar, nadar o andar en bicicleta.</p>';
                }

                recommendationsDiv.innerHTML = recommendations;

                // Crear gráfico
                const ctx = document.getElementById('evaluationChart').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Estrés', 'Ansiedad', 'Sueño', 'Actividad Física'],
                        datasets: [{
                            label: 'Niveles de Evaluación',
                            data: [stressLevel, anxietyLevel, sleepQuality, physicalActivity],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                                max: 10
                            }
                        }
                    }
                });
            } else {
                recommendationsDiv.innerHTML = '<p>Por favor, ingresa valores entre 1 y 10 para todos los campos.</p>';
            }
        }

        function isValidInput(value) {
            return value >= 1 && value <= 10;
        }