// THIS COMPONENT IS INCLUDED IN THE 'SHOPPING' COMPONENT.
import { Component } from '@angular/core';

import { ServiceManager } from '../shared/managers/service.manager';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  constructor(public serviceManager: ServiceManager) { }

}
