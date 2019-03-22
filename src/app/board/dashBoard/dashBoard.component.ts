import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'attoney-first-dashboard',
    templateUrl: './dashBoard.component.html'
})
export class DashBoardComponent implements OnInit {
    // tslint:disable-next-line:no-any
    result: any = {};
    constructor() {

    }
    ngOnInit(): void {
        this.result = {
            PageSize: 1,
            PageCount: 4,
            TotalCount: 20,
            Details: [
                {
                    FastFileId: 1,
                    OrderNum: 456,
                    AFFileName: 'Muruga 123',
                    SellerName: 'Viji',
                    Location: 'Bangalore',
                    Transaction: 'Sales With Mortgage',
                    Address: '#6,17th cross, 2nd main, Roopena Agrahara, Bommanahalli, Bangalore - 560068',
                    ClosingDateTime: new Date()
                },
                {
                    FastFileId: 2,
                    OrderNum: 456,
                    AFFileName: 'Muruga 123',
                    SellerName: 'Viji',
                    Location: 'Bangalore',
                    Transaction: 'Sales With Mortgage',
                    Address: '#6,17th cross, 2nd main, Roopena Agrahara, Bommanahalli, Bangalore - 560068',
                    ClosingDateTime: new Date()
                },
                {
                    FastFileId: 3,
                    OrderNum: 456,
                    AFFileName: 'Muruga 123',
                    SellerName: 'Viji',
                    Location: 'Bangalore',
                    Transaction: 'Sales With Mortgage',
                    Address: '#6,17th cross, 2nd main, Roopena Agrahara, Bommanahalli, Bangalore - 560068',
                    ClosingDateTime: new Date()
                },
                {
                    FastFileId: 4,
                    OrderNum: 456,
                    AFFileName: 'Muruga 123',
                    SellerName: 'Viji',
                    Location: 'Bangalore',
                    Transaction: 'Sales With Mortgage',
                    Address: '#6,17th cross, 2nd main, Roopena Agrahara, Bommanahalli, Bangalore - 560068',
                    ClosingDateTime: new Date()
                }
            ]
        };
    }

    onNextClick(): void {
        let newResponse = {
            Details: [
                {
                    FastFileId: 5,
                    OrderNum: 456,
                    AFFileName: 'Muruga 123',
                    SellerName: 'Viji1',
                    Location: 'Bangalore',
                    Transaction: 'Sales With Mortgage',
                    Address: '#6,17th cross, 2nd main, Roopena Agrahara, Bommanahalli, Bangalore - 560068',
                    ClosingDateTime: new Date()
                },
                {
                    FastFileId: 6,
                    OrderNum: 456,
                    AFFileName: 'Muruga 123',
                    SellerName: 'Viji1',
                    Location: 'Bangalore',
                    Transaction: 'Sales With Mortgage',
                    Address: '#6,17th cross, 2nd main, Roopena Agrahara, Bommanahalli, Bangalore - 560068',
                    ClosingDateTime: new Date()
                },
                {
                    FastFileId: 7,
                    OrderNum: 456,
                    AFFileName: 'Muruga 123',
                    SellerName: 'Viji1',
                    Location: 'Bangalore',
                    Transaction: 'Sales With Mortgage',
                    Address: '#6,17th cross, 2nd main, Roopena Agrahara, Bommanahalli, Bangalore - 560068',
                    ClosingDateTime: new Date()
                },
                {
                    FastFileId: 8,
                    OrderNum: 456,
                    AFFileName: 'Muruga 123',
                    SellerName: 'Viji1',
                    Location: 'Bangalore',
                    Transaction: 'Sales With Mortgage',
                    Address: '#6,17th cross, 2nd main, Roopena Agrahara, Bommanahalli, Bangalore - 560068',
                    ClosingDateTime: new Date()
                }
            ]
        };
        for(let i: number = 0; i< newResponse.Details.length; i++) {
            this.result.Details.push(newResponse.Details[i]);
        }
       
    }
}
