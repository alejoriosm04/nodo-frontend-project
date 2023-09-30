import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { LabSpace, Reservation } from 'src/interfaces';

@Component({
  selector: 'app-lab-spaces',
  templateUrl: './lab-spaces.component.html',
  styleUrls: ['./lab-spaces.component.css']
})

export class LabSpacesComponent implements OnInit {

  labSpaces: any[] = [];
  reservations: any[] = [];
  hoveredIndex: number | null = null;
  userId: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchLabSpaces();
    if (this.userService.checkIfAuthenticated()) {
      this.userService.getUserDetails().subscribe(
        (response: any) => {
          if (response.data && response.data[0]) {
            this.userId = response.data[0].id;
            console.log(this.userId);

            this.fetchUserReservations(this.userId);
          }
        },
        (error: any) => {
          console.error('Failed to fetch user details:', error);
        }
      );
    }
  }

  fetchLabSpaces() {
    this.userService.getLabSpaces().subscribe(
      (response: any) => {
        this.labSpaces = response.data[0];
      },
      error => {
        console.error('Error fetching lab spaces:', error);
      }
    );
  }

  fetchUserReservations(userId: any) {
    this.userService.getReservationsByUser(userId).subscribe(
      (reservationsResponse: any) => {
        this.reservations = reservationsResponse.data[0];
        this.matchReservationsWithLabSpaces();
      },
      error => {
        console.error('Error fetching reservations:', error);
      }
    );
  }

  matchReservationsWithLabSpaces() {
    this.reservations = this.reservations.map((reservation: any) => {
      const associatedLabSpace = this.labSpaces.find(space => space.id === reservation.labSpaceId);
      if (associatedLabSpace) {
        console.log({
          ...reservation,
          imgSrc: associatedLabSpace.imgSrc,
          altText: associatedLabSpace.altText,
          title: associatedLabSpace.title
        })
        return {
          ...reservation,
          imgSrc: associatedLabSpace.imgSrc,
          altText: associatedLabSpace.altText,
          title: associatedLabSpace.title
        };
      }
      return reservation; // Return the original reservation if no match is found
    });
  }

  onMouseOver(index: number) {
    this.hoveredIndex = index;
  }

  onMouseOut() {
    this.hoveredIndex = null;
  }
}
