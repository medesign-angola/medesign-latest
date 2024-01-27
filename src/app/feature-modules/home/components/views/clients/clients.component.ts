import { Component, Input } from '@angular/core';
import { IClient } from '@core/interfaces/client.interface';

@Component({
  selector: 'md-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.css'
})
export class ClientsComponent {

  @Input() clients: IClient[] = [];

}
