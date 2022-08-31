import { Component, OnInit } from '@angular/core';
import { CzyszczenieService } from '../services/czyszczenie.service';
import { Kalibratory } from '../models/kalibratory';
import { SzczegolyService } from '../services/szczegoly.service';
import { KalibratorySzczegoly } from '../models/kalibratory-szczegoly';

@Component({
  selector: 'app-czyszczenie-kalibratorow',
  templateUrl: './czyszczenie-kalibratorow.component.html',
  styleUrls: ['./czyszczenie-kalibratorow.component.css'],
  providers: [CzyszczenieService],
})
export class CzyszczenieKalibratorowComponent implements OnInit {
  isHidden = true;
  isActive = true;
  kalibratory: Kalibratory[];
  filteredKalibratory: Kalibratory[];
  kalibratorySzczegoly: KalibratorySzczegoly[];
  kalibratoryElement: Kalibratory;

  constructor(
    private czyszczenieService: CzyszczenieService,
    private szczegolyService: SzczegolyService
  ) {
    this.getAllNaglowek();
  }
  ngOnInit() {}

  getAllNaglowek() {
    this.czyszczenieService.getData().subscribe((res) => {
      this.kalibratory = res;
      this.filteredKalibratory = this.kalibratory;
      console.log(res);
    });
  }

  onSelectFilter(parametr: any) {
    this.filteredKalibratory = this.kalibratory.filter((x) => {
      if (parametr == 1) return x.zmian >= 0 && x.zmian <= 3;
      else if (parametr == 2) return x.zmian >= 4 && x.zmian <= 10;
      else if (parametr == 3) return x.zmian > 10;
      else return x.zmian;
    });
  }

  onSelectRow(kalibrator: any) {
    this.kalibratoryElement = kalibrator;
    this.szczegolyService.getData(kalibrator.matnr).subscribe((res) => {
      this.kalibratorySzczegoly = res;
      console.log(res);
      //console.log(kalibrator);
      return this.kalibratorySzczegoly.sort((a: any, b: any) => {
        return <any>new Date(b.datao) - <any>new Date(a.datao);
      });
    });
  }
  showSuma() {
    this.isHidden = !this.isHidden;
  }

  isDisable() {
    this.isActive = !this.isActive;
  }
}
