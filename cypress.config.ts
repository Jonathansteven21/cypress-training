import { defineConfig } from 'cypress';

export default defineConfig({
  // setupNodeEvents can be defined in either
  // the e2e or component configuration
  e2e: {
    // solo necesitas agregar estas dos propiedades, no incluir este comentario
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // Codigo existente no modificar
    }
  }
});
