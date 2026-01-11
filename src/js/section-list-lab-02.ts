import { createComponent as createInputListComponent } from './input-list-component';

export function createComponent(container: HTMLElement): void {
  const templateElem = container.querySelector<HTMLElement>(
    '.app-number-section',
  );
  if (!templateElem) throw new Error('Template .app-number-section not found');

  const sectionListContainer = templateElem.parentElement;
  if (!sectionListContainer) throw new Error('Template does not have a parent');

  const createSectionContainer = (): void => {
    const sectionContainer = templateElem.cloneNode(true) as HTMLElement;

    sectionContainer.addEventListener('click', (ev: MouseEvent) => {
      const target = ev.target as HTMLElement | null;
      if (target?.matches('.app-cmd-remove-section')) sectionContainer.remove();
    });

    // สร้าง input list component และ append
    createInputListComponent(sectionContainer);
    sectionListContainer.appendChild(sectionContainer);
  };

  container.addEventListener('click', (ev: MouseEvent) => {
    const target = ev.target as HTMLElement | null;
    if (target?.matches('.app-cmd-add-section')) createSectionContainer();
  });

  createInputListComponent(sectionListContainer);
}
