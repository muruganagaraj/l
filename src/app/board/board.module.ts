import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardRoutingModule } from './board.routing';
import { DashBoardComponent } from './dashBoard/dashBoard.component';
import { LayoutComponent } from '../board/layout/layout.component';
import { CardComponent } from '../board/card/card.component';
import { CardService } from '../board/card/card.component.service';

@NgModule({
    imports: [
        CommonModule, BoardRoutingModule
    ],
    declarations: [DashBoardComponent, LayoutComponent, CardComponent],
    providers: [CardService]
})

export class BoardModule { }
