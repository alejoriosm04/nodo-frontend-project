import { Component, OnInit } from '@angular/core';
import { NodoBannerComponent } from '../nodo-banner/nodo-banner.component';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  labSpaceId: any;
  userId: string | null = null;
  formValues = {
    full_name: '',
    identification_number: null,
    email: '',
    phone_number: null,
    eafit_affiliation: '',
    reservation_date: '',
    reservation_time: '',
    estimated_duration: '',
    number_of_people: null,
    additional_services: '',
    accepted_terms: false
  };

  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.labSpaceId = id ? id : null;

    // Fetch the user details if they are authenticated
    if (this.userService.checkIfAuthenticated()) {
      this.userService.getUserDetails().subscribe(
        (response: any) => {
          if (response.data && response.data[0]) {
            this.userId = response.data[0].id;
          }
        },
        (error: any) => {
          console.error('Failed to fetch user details:', error);
        }
      );
    }
  }

  onSubmit() {
    console.log(this.formValues);

    const reservationData = {
      labSpaceId: this.labSpaceId,
      userId: this.userId,
      ...this.formValues
    };

    this.userService.reserveLabSpace(reservationData).subscribe(
      (response: any) => {
        // Handle the successful reservation. Perhaps redirect the user or display a success message.
        this.router.navigate(['/labspaces']);
      },
      (error: any) => {
        // Handle the error. Show an error message or handle it as per your application's need.
        console.error('Reservation failed:', error);
      }
    );
  }
}
