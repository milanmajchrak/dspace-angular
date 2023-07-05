import { Component } from '@angular/core';
import {
  listableObjectComponent
} from '../../../../shared/object-collection/shared/listable-object/listable-object.decorator';
import {ViewMode} from '../../../../core/shared/view-mode.model';
import {ItemComponent} from '../shared/item.component';

@listableObjectComponent('Invoice', ViewMode.StandalonePage)
@Component({
  selector: 'ds-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent extends ItemComponent {

}
