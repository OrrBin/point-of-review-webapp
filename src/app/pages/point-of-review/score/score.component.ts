import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Score } from '../../../@core/lib/objects/score';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {

  @Input() score: Score;

  constructor(iconsLibrary: NbIconLibraries) {
    iconsLibrary.registerFontPack('fa', { packClass: 'fa', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('fas', { packClass: 'fas', iconClassPrefix: 'fa' });
    iconsLibrary.registerFontPack('ion', { iconClassPrefix: 'ion' });

  }

  ngOnInit() {
  }

}
