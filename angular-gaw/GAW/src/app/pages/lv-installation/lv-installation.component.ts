import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-lv-installation',
  standalone: false,
  templateUrl: './lv-installation.component.html',
  styleUrls: ['./lv-installation.component.scss']
})
export class LvInstallationComponent implements OnInit, AfterViewInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Initialize modal functionality using the service
    this.modalService.initializeModals();
  }
}
