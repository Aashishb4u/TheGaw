import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from '../../services/utility.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  slideConfig = {"slidesToShow": 3,
    "slidesToScroll": 1,
    "autoplay": true,
    "gap": "20px",
    "autoplaySpeed": 2000,
    "pauseOnHover": false,
  };

  reviews: any = [
    {
      review: "They saved us and our shutdown timeline with a quick turnaround on producing and moving " +
              "essential equipment across borders. The products are resilient, and the warranty " +
              "extensions are excellent.",
      name: "Turn Around Manager",
      company: "Air Products, USA"
    },
    {
      review: "TheGAW's application engineering team is precise in attention to detail and committed to " +
              "operational excellence. We enjoyed working with the wonderful teams in Abu Dhabi and " +
              "Singapore for our revamping and plant transformation.",
      name: "Plant Manager",
      company: "Major OMC and Oil Terminal in Africa."
    },
    {
      review: "TheGAW's Terminal and Fluid Transfer Solutions team has played a pivotal role in elevating the " +
              "operational efficiency and capacity of our storage facilities. Their innovative solutions and " +
              "unwavering support have been instrumental in achieving seamless integration.",
      name: "Project Manager",
      company: "Total Energies, Europe."
    },
    {
      review: "TheGAW's product quality and their commitment to customer service have been " +
              "stupendous. It's simply incomparable.",
      name: "Operations Manager",
      company: "Saudi Aramco, KSA."
    }
  ];

  constructor(private utilityService: UtilityService) {}

  ngOnInit(): void {
    // Set up scroll actions for the navbar
    this.utilityService.setupScrollActions();
  }

  ngOnDestroy(): void {
    // Clean up scroll event listeners
    this.utilityService.removeScrollListeners();
  }
}
