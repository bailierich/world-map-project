import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { config } from './app/app.config.server'; // Your server-specific configuration

const bootstrap = () => {
  return bootstrapApplication(AppComponent, {
    ...config,
    providers: [
      importProvidersFrom(HttpClientModule),
      // Other server-specific providers
    ],
  });
};

export default bootstrap;
