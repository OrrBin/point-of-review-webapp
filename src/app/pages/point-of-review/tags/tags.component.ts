import { Component, OnInit, Input } from '@angular/core';
import { Tag } from '../../../@core/lib/objects/tag';
import {Router} from '@angular/router';
import {StateService} from '../../../@core/utils';

@Component({
  selector: 'ngx-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {

  @Input() tags: Tag[];

  constructor(private router: Router, private state: StateService) { }

  ngOnInit() {
  }

  searchTag(tag: Tag) {
    this.state.selectedTag = tag.name;
    this.router.navigate(['/pages/point-of-review/feed']);
}

}
