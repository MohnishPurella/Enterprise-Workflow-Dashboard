import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './components/app/app.config.server';
import { AppComponent } from './components/app/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
