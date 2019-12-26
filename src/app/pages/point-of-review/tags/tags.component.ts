import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../../../@core/lib/objects/tag';

@Component({
  selector: 'ngx-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() tags: Tag[];

  constructor() { }

  ngOnInit() {
  }

}
