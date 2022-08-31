import { Component, OnInit, Input } from '@angular/core';
import { Kalibratory } from 'src/app/models/kalibratory';

import { KalibratorySzczegoly } from '../../models/kalibratory-szczegoly';
import { SzczegolyService } from '../../services/szczegoly.service';

@Component({
  selector: 'app-szczegoly-czyszczenia',
  templateUrl: './szczegoly-czyszczenia.component.html',
  styleUrls: ['./szczegoly-czyszczenia.component.css'],
})
export class SzczegolyCzyszczeniaComponent implements OnInit {
  @Input() kalibratorySzczegoly: KalibratorySzczegoly[];
  @Input() kalibratoryElement: Kalibratory;
  kalibratory: KalibratorySzczegoly[];

  constructor(private szczegolyService: SzczegolyService) {
    //this.getAllPozycje();
  }
  ngOnInit() {
    this.kalibratoryElement = new Kalibratory();
  }
}
