import { Injectable } from '@angular/core';
import { OrderDetailVM } from './card.component.viewmodel';

@Injectable()
export class CardService {
    constructor() {

    }
    /* tslint:disable no-any */
    public getData(list: any): OrderDetailVM {
        return <OrderDetailVM>{
            fastFileId: list.FastFileId,
            orderNum: list.OrderNum,
            aFFileName: list.AFFileName,
            sellerName: list.SellerName,
            location: list.Location,
            transaction: list.Transaction,
            address: list.Address,
            closingDateTime: list.ClosingDateTime
        };
    }
}
