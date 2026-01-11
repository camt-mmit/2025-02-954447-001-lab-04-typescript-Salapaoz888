// import named export จากไฟล์อื่น พร้อมตั้งชื่อใหม่
import { createComponent as createSectionListComponent } from './section-list-lab-02';

// สมมติว่า createInputListComponent เป็น default export หรือ named export
// ถ้าเป็น default export:
import createInputListComponent from './input-list-component';
// ถ้าเป็น named export:
// import { createInputListComponent } from './input-list-component';

// เลือก element container
const bodyElement = document.querySelector('body');

if (bodyElement) {
  // สร้าง input list component
  createInputListComponent(bodyElement);

  // สร้าง section list component (ถ้ามี container)
  createSectionListComponent(bodyElement);
} else {
  throw new Error('Body element not found');
}
