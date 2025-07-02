import { AfterViewInit, Component } from '@angular/core';
declare var moment: any;

@Component({
  selector: 'app-header-white',
  standalone: false,
  templateUrl: './header-white.component.html',
  styleUrl: './header-white.component.scss'
})
export class HeaderWhiteComponent implements AfterViewInit{
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
