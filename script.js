const malla = document.getElementById('malla');

const semestres = [
  ["Producción y comprensión de textos", "Segunda lengua I", "Cátedra Francisco José de Caldas"],
  ["Segunda lengua II", "Cátedra democracia y ciudadanía", "Sociedad y cultura colombiana"],
  ["Fundamentos de administración y gestión", "Historia social y política de Colombia", "Economía colombiana"],
  ["Legislación y normatividad archivística", "Instituciones y documentos", "Gestión documental"],
  ["Archivos de imagen y sonido", "Producción documental", "Fundamentos de archivística"],
  ["Clasificación y ordenación documental", "Derecho a la información", "Electiva IV"],
  ["Valoración documental", "Descripción documental", "Sistema de gestión documental"],
  ["Gestión pública", "Formulación y evaluación de proyectos", "Mercadeo de servicios"],
  ["Trabajo de grado I", "Trabajo de grado II", "Electiva VI"]
];

semestres.forEach((cursos, index) => {
  const semestre = document.createElement('div');
  semestre.className = 'semestre';
  semestre.innerHTML = `<h3>Semestre ${index + 1}</h3>`;
  cursos.forEach(curso => {
    const div = document.createElement('div');
    div.className = 'curso';
    div.textContent = curso;
    semestre.appendChild(div);
  });
  malla.appendChild(semestre);
});
