import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
  public isRoot;
  constructor(private router: Router) {
    router.events.subscribe(_ => {
      this.isRoot = router.url === '/settings';
    });
  }

  ngOnInit() {}
}
