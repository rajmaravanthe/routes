import { RouterModule, Route} from '@angular/router';
import { ViewComponent } from './view/view.component';

const routes: Route[] = [
    {path: 'view', component: ViewComponent}
]

export const RoutesProvider = RouterModule.forRoot(routes);