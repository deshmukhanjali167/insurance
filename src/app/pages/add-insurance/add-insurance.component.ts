import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-insurance',
  templateUrl: './add-insurance.component.html',
  styleUrls: ['./add-insurance.component.css']
})
export class AddInsuranceComponent implements OnInit {
  complaintArrya: any[] = [];
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const localData = localStorage.getItem("complaintList");
    if (localData != null) {
      this.complaintArrya = JSON.parse(localData);
    }
  }

  onedit(id: number) {
    this.router.navigate(['/insurance', id])
  }

  ondelete(id: number) {
    const index = this.complaintArrya.findIndex(m => m.id == id);
    this.complaintArrya.splice(index, 1);
    localStorage.setItem('complaintList', JSON.stringify(this.complaintArrya));
  }

}

