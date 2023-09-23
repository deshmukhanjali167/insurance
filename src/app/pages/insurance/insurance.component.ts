import { jsDocComment } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  complaintObj: any = {
    id: 0,
    complaintAgainst: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    contactNo: '',
    emailID: '',
    Complaint: '',
  };

  complaintArrya: any[] = [];
  currentId: number = 0;
  constructor(private activaterouter: ActivatedRoute, private router: Router) {
    this.activaterouter.params.subscribe((res: any) => {
      debugger;
      if (res.id) {
        this.currentId = res.id;
      }
    })
  }

  ngOnInit(): void {
    const localData = localStorage.getItem('complaintList');
    if (localData !== null) {
      this.complaintArrya = JSON.parse(localData);
      if (this.currentId !== 0) {
        const currentRecord = this.complaintArrya.find(m => m.id == this.currentId);
        if (currentRecord != undefined) {
          this.complaintObj = currentRecord;
        }
      }
    }
  }

  register() {
    debugger;
    const localData = localStorage.getItem('complaintList');
    if (localData == null) {
      this.complaintArrya.push(this.complaintObj);
      localStorage.setItem('complaintList', JSON.stringify(this.complaintArrya));
    } else {
      const parseData = JSON.parse(localData);
      this.complaintObj.id = parseData.length + 1;
      this.complaintArrya.push(this.complaintObj);
      localStorage.setItem('complaintList', JSON.stringify(this.complaintArrya));
      this.router.navigate(['/addinsurance'])
    }
  }
  onupdate() {
    debugger;
    const currentRecord = this.complaintArrya.find(m => m.id == this.currentId);
    if (currentRecord != undefined) {
      const index = this.complaintArrya.findIndex(m => m.id == this.currentId);
      this.complaintArrya.splice(index, 1);
      this.complaintArrya.push(this.complaintObj);
      localStorage.setItem('complaintList', JSON.stringify(this.complaintArrya));
      this.router.navigate(['/addinsurance'])
    }
  }

}
