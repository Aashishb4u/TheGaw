import { AfterViewInit, Component } from '@angular/core';
declare var moment: any;

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit {
gstTime: string = '';
  ngAfterViewInit(): void {
    this.updateGSTTime();
    // Update time every minute
    setInterval(() => {
      this.updateGSTTime();
    }, 60000);
  }

  updateGSTTime(): void {
    const gstTimeConst = moment()?.tz("Asia/Dubai").format("hh:mm A");
    this.gstTime = `GST: ${gstTimeConst}`;
  }
}
