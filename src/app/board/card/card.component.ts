import { Component, OnInit, Input } from '@angular/core';
import { OrderDetailVM } from './card.component.viewmodel';
import { CardService } from './card.component.service';
import '../../../shared/prototypes/array.prototype';

@Component({
  selector: 'attorney-first-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  vm: OrderDetailVM = {};
  // tslint:disable-next-line:no-any
  @Input() item: any = {};
  public FlipCardId: number[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.vm = this.cardService.getData(this.item);
  }
  onFlipClick(fastFileId: number): void {
    if (this.FlipCardId.find((x: number) => x === +fastFileId)) {
      this.FlipCardId.removeIf((x: number) => x === +fastFileId);
    } else {
      this.FlipCardId.push(fastFileId);
    }
  }
}
