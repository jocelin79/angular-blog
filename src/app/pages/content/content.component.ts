import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  
  photoCover:string = "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/02/Tony-Stark.jpg";
  contentTitle:string = "MINHA NOTICIA";
  contentDescription:string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque totam dolores reiciendis aliquam, impedit porro voluptatibus quia quis assumenda amet necessitatibus minus velit reprehenderit dignissimos. Quidem ut libero numquam explicabo?";

  constructor() {}

  ngOnInit(): void {
      
  }
}
