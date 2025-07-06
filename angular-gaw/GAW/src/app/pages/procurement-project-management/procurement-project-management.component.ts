import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-procurement-project-management',
  templateUrl: './procurement-project-management.component.html',
  standalone: false,
  styleUrls: ['./procurement-project-management.component.scss']
})
export class ProcurementProjectManagementComponent implements OnInit, AfterViewInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Initialize modal functionality using the service
    this.modalService.initializeModals();
  }
}
