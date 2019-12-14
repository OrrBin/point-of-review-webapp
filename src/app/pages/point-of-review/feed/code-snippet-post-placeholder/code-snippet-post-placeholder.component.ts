import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'ngx-code-snippet-post-placeholder',
  templateUrl: 'code-snippet-post-placeholder.component.html',
  styleUrls: ['code-snippet-post-placeholder.component.scss'],
})
export class NewsPostPlaceholderComponent {

  @HostBinding('attr.aria-label')
  label = 'Loading';
}
