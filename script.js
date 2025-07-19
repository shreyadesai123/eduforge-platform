const sections = ['dev', 'design', 'data', 'AI', 'cyber'];
const activeColor = '#ffffff';
const bgColor = '#7807a4db';

highLightButton('dev_btn');
showSection('dev');

function showSection(sectionId) {
    sections.forEach(id => {
        const section = document.getElementById(id);
        section.classList.add('d-none');
    })
    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.classList.remove('d-none');
        activeSection.classList.add('d-flex');
    }
}

function highLightButton(activeBtnId) {
    sections.forEach(id => {
        const btn = document.getElementById(`${id}_btn`);
        if (btn.id === activeBtnId) {
            btn.style.backgroundColor = bgColor;
            btn.style.color = activeColor;
        } else {
            btn.style.backgroundColor = '';
            btn.style.color = '';
        }
    })

}

function changeTab(sectionName) {
    showSection(sectionName);
    highLightButton(`${sectionName}_btn`);
}