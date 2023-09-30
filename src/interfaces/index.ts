export interface LabSpace {
  title: string;
  description: string;
  imgSrc: string;
  altText: string;
}

export interface Reservation extends LabSpace {
  date: string;
  duration: string;
}