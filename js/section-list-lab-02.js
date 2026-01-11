import { createComponent as createInputListComponent } from './input-list-component';
export function createComponent(container) {
    const templateElem = container.querySelector('.app-number-section');
    if (!templateElem)
        throw new Error('Template .app-number-section not found');
    const sectionListContainer = templateElem.parentElement;
    if (!sectionListContainer)
        throw new Error('Template does not have a parent');
    const createSectionContainer = () => {
        const sectionContainer = templateElem.cloneNode(true);
        sectionContainer.addEventListener('click', (ev) => {
            const target = ev.target;
            if (target?.matches('.app-cmd-remove-section'))
                sectionContainer.remove();
        });
        // สร้าง input list component และ append
        createInputListComponent(sectionContainer);
        sectionListContainer.appendChild(sectionContainer);
    };
    container.addEventListener('click', (ev) => {
        const target = ev.target;
        if (target?.matches('.app-cmd-add-section'))
            createSectionContainer();
    });
    createInputListComponent(sectionListContainer);
}
//# sourceMappingURL=section-list-lab-02.js.map