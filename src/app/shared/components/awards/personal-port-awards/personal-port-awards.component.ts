import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { UtilsService } from '../../../services/utils.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-personal-port-awards',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './personal-port-awards.component.html',
  styleUrl: './personal-port-awards.component.scss'
})
export class PersonalPortAwardsComponent {

  @Input() spacing:string = "pt-120 pb-10";
  @Input() is_center:boolean = false;
  constructor(public utilsService:UtilsService) { };

  // data
  public award_data = [
    {
      id: "one",
      topic: "IT Elective 1",
      title: "Master in IT Elective 1",
      // data_src: '/assets/img/award/9/award-1.jpg',
      subtitle: "Academic Award",
    },
    {
      id: "two",
      topic: "Application Development and Emerging Technologies",
      title: "Master in Application Development and Emerging Technologies",
      // data_src: '/assets/img/award/9/award-2.jpg',
      subtitle: "Academic Award",
    },
    {
      id: "three",
      topic: "Web Software Tools",
      title: "Master in Web Software Tools",
      data_src: '',
      subtitle: "Academic Award",
    },
    // {
    //   id: "four",
    //   topic: "CSS Design 2018",
    //   title: "Awwwards site of the day",
    //   data_src: '/assets/img/award/9/award-4.jpg',
    //   subtitle: "Runner Up - “ Decor of the week “",
    // },
  ]
}
