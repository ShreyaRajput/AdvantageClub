import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards= [
    {
      title: 'Barbeque-Nation',
      description: 'Barbeque Nation is an Indian restaurant chain headquartered in Bengaluru, Karnataka. It features a grill for every table with an option to choose different items to grill on the spot before consumption',
      buttonText: 'Button',
      img: "https://media-cdn.tripadvisor.com/media/photo-s/01/9b/00/c7/barbeque-nation.jpg",
      currentRate: 8
    },

    {
      title: 'Faasos',
      description: 'Faasos is an Indian "food on demand" service that was incorporated in 2011. It is one of the brands owned by the online restaurant company, Rebel Foods traditionally determined by a vote of sports writers',
      buttonText: 'Button',
      
      img: "https://entrackr.com/wp-content/uploads/2017/12/faasos-image-1-1200x600.jpg"
    },

    {
      title: 'Firangi bake',
      description: 'Faasos operates in Dubai and 34[2] of the largest cities in India and takes customer orders via its mobile app and website. It is the only vertically integrated food business in India and operates all three stages of a "food on',
      buttonText: 'Button',
      img: "https://b.zmtcdn.com/data/pictures/chains/6/18577736/ae1a31498268e87c746618b255e22671.jpg"
    },
    {
      title: 'Good bowl',
      description: 'Bowl games originally featured the very best teams in college football, with strict bowl eligibility requirements for teams to receive an invitation to a bowl game in a particular year; as of 1971',
      buttonText: 'Button',
      img: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ouvvk8n9edtdtozlinkr"
    },
    {
      title: 'Barbeque-Nation',
      description: 'Barbeque Nation is an Indian restaurant chain headquartered in Bengaluru, Karnataka. It features a grill for every table with an option to choose different items to grill on the spot before consumption',
      buttonText: 'Button',
      img: "https://media-cdn.tripadvisor.com/media/photo-s/01/9b/00/c7/barbeque-nation.jpg",
      currentRate: 8
    },

    {
      title: 'Faasos',
      description: 'Faasos is an Indian "food on demand" service that was incorporated in 2011. It is one of the brands owned by the online restaurant company, Rebel Foods traditionally determined by a vote of sports writers',
      buttonText: 'Button',
      
      img: "https://entrackr.com/wp-content/uploads/2017/12/faasos-image-1-1200x600.jpg"
    },

    {
      title: 'Firangi bake',
      description: 'Faasos operates in Dubai and 34[2] of the largest cities in India and takes customer orders via its mobile app and website. It is the only vertically integrated food business in India and operates all three stages of a "food on',
      buttonText: 'Button',
      img: "https://b.zmtcdn.com/data/pictures/chains/6/18577736/ae1a31498268e87c746618b255e22671.jpg"
    },
    {
      title: 'Good bowl',
      description: 'Bowl games originally featured the very best teams in college football, with strict bowl eligibility requirements for teams to receive an invitation to a bowl game in a particular year; as of 1971',
      buttonText: 'Button',
      img: "https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/ouvvk8n9edtdtozlinkr"
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}


