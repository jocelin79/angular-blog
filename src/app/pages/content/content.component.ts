import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  
  photoCover:string = "https://observatoriodocinema.uol.com.br/wp-content/uploads/2020/02/Tony-Stark.jpg";
  contentTitle:string = "MINHA NOTICIA";
  contentDescription:string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque totam dolores reiciendis aliquam, impedit porro voluptatibus quia quis assumenda amet necessitatibus minus velit reprehenderit dignissimos. Quidem ut libero numquam explicabo?";

  constructor(
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.route.paramMap.subscribe( value =>
        console.log(value.get("id"))
      )
  }
}
