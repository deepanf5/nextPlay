import { Component, OnInit } from '@angular/core';

// prime-ng
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { FilterService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MoviesService } from './services/movie/movies.service';
import { DropdownModule } from 'primeng/dropdown';
import { Movie } from './movies';
import { ButtonModule } from 'primeng/button';



@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    FormsModule,
    RouterModule,
    DropdownModule,
    ButtonModule
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss'
})
export class MoviesComponent implements OnInit{

  searchMovies:any
  filteredMovies:any;
  year:any;
  genre:any;
  filter:boolean = false;

  selectedYear:any;



  constructor(private moviesService:MoviesService) {}
  ngOnInit(): void {
    this.filteredMovies = this.movies
    this.year = [
      { year: 2000, code: 'NY' },
      { year: 2001, code: 'RM' },
      { year: 2003, code: 'LDN' },
      { year: 2004, code: 'IST' },
      { year: 2005, code: 'PRS' },
      { year: 2006, code: 'PRS' },
      { year: 2007, code: 'PRS' },
      { year: 2008, code: 'PRS' },
      { year: 2009, code: 'PRS' },
      { year: 2010, code: 'PRS' },
      { year: 2011, code: 'PRS' },
      { year: 2012, code: 'PRS' },
      { year: 2013, code: 'PRS' },
      { year: 2014, code: 'PRS' },
      { year: 2015, code: 'PRS' },
      { year: 2016, code: 'PRS' },
      { year: 2017, code: 'PRS' },
      { year: 2018, code: 'PRS' },
      { year: 2019, code: 'PRS' },
      { year: 2020, code: 'PRS' },
      { year: 2021, code: 'PRS' },
      { year: 2022, code: 'PRS' },
      { year: 2023, code: 'PRS' },
      { year: 2024, code: 'PRS' },
  ];  

  
  }

  
  movies = [
    {

      title:'Elysium',
      genre:'Action sci-fi',
      releaseDate:2013,
      poster:"https://i.pinimg.com/originals/40/d2/94/40d29423c00552439d1e597a9eabbaba.jpg",
      language:'Engilsh',
      banner:'https://wallpapercave.com/wp/wp13897935.jpg',
      rating:'6.6',
      description:'In 2154, the rich live in Elysium, an advanced space station, while the others thrive in poverty on Earth. Max begins a journey to Elysium to change the fate of humans on Earth and restore equality.'

    },
    {

      title:'Rebel moon: A child of fire',
      genre:'Action sci-fi',
      releaseDate:2023,
      poster:"https://i.pinimg.com/originals/97/da/52/97da52f84437a633ec3c7f73dfba0181.jpg",
      language:'Engilsh',
      banner:'https://www.reeds.com/media/wysiwyg/Rebel-Moon-L1/RM-Banner-Update.png'

    },
    {

      title:'Rebel moon - part two: The Scargiver',
      genre:'Action sci-fi',
      releaseDate:2024,
      poster:"https://i.pinimg.com/736x/82/b4/00/82b400d554945ab8e0539ba9fd012907.jpg",
      language:'Engilsh',
      banner:'https://images5.alphacoders.com/131/thumb-1920-1319310.jpeg'

    },
    {

      title:'Tenet',
      genre:'Action sci-fi',
      releaseDate:2020,
      poster:"https://i.pinimg.com/originals/35/62/1c/35621c61d9b8bc652beba9245695805e.jpg",
      language:'Engilsh',
      banner:'https://images3.alphacoders.com/109/thumb-1920-1092126.jpg'

    },
    {

      title:'Transformer : rise of the beast',
      genre:'Action sci-fi',
      releaseDate:2013,
      poster:"https://i.pinimg.com/originals/f2/9e/81/f29e81c4527a8d05f00e6a2f13d2b510.jpg",
      language:'Engilsh',
      banner:'https://images5.alphacoders.com/131/thumb-1920-1314912.jpeg'

    },
    {

      title:'the beekeeper',
      genre:'Action thirller',
      releaseDate:2024,
      poster:"https://i.pinimg.com/originals/d9/a7/4c/d9a74c02647f9728b162df7bd843a3ec.jpg",
      language:'Engilsh',
      banner:'https://4kwallpapers.com/images/walls/thumbs_3t/14022.jpg'

    },
    {

      title:'John wick 2',
      genre:'Action thriller',
      releaseDate:2017,
      poster:"https://i.pinimg.com/originals/63/17/13/63171370473454a0f2981d989213f8f3.jpg",
      language:'Engilsh',
      banner:'https://images3.alphacoders.com/746/thumb-1920-746551.jpg'

    },
    {

      title:'Road house',
      genre:'Action thriller',
      releaseDate:2024,
      poster:"https://i.pinimg.com/originals/a7/9a/81/a79a814517383786d60005b298e90bd8.jpg",
      language:'Engilsh'

    },
    {

      title:'The batman',
      genre:'Action sci-fi',
      releaseDate:2022,
      poster:"https://i.pinimg.com/originals/bf/fc/a2/bffca257b49b4aa900d36ad9015c79d7.jpg",
      language:'Engilsh'

    },
    {

      title:'Sherlock Holmes: A Game of Shadows',
      genre:'Action sci-fi',
      releaseDate:2011,
      poster:"https://i.pinimg.com/originals/8a/68/78/8a6878e5ac69fbf57a35c8dcb8dbd5ef.jpg",
      language:'Engilsh'

    },
    {

      title:'Iron Man',
      genre:'Action/Adventure',
      releaseDate:2008,
      poster:"https://i.pinimg.com/originals/14/85/b5/1485b5a78274180bcce4a0fce0ef3c4a.jpg",
      language:'Engilsh'

    },
    {

      title:'thor ragnarok',
      genre:'Action/Adventure',
      releaseDate:2017,
      poster:"https://i.pinimg.com/564x/92/7f/57/927f573aee7755f33578ba1ddd984235.jpg",
      language:'Engilsh'

    },
    {

      title:'capitan america',
      genre:'Action/Adventure',
      releaseDate:2011,
      poster:"https://i.pinimg.com/564x/ea/ab/9f/eaab9f496fbc60e586f0d073d3fcc693.jpg",
      language:'Engilsh'

    },
    {

      title:'Avenger Infinity war',
      genre:'Action/Adventure',
      releaseDate:2018,
      poster:"https://i.pinimg.com/564x/db/b9/7a/dbb97a265c3754f6965d2bfcff52ab6f.jpg",
      language:'Engilsh'

    },
    {

      title:'Avenger',
      genre:'Action/Adventure',
      releaseDate:2012,
      poster:"https://i.pinimg.com/564x/cf/41/f8/cf41f89b434e68864d0e3360d87d1cbf.jpg",
      language:'Engilsh'

    },
    {

      title:'soul',
      genre:'Family fantasy',
      releaseDate:2020,
      poster:"https://i.pinimg.com/originals/56/65/86/566586f4e0a60470d16c574df89baa98.jpg",
      language:'Engilsh'

    },
    {

      title:'Coco',
      genre:'Family fantasy',
      releaseDate:2017,
      poster:"https://i.pinimg.com/originals/52/40/93/52409341203bb9276ec911ebbda4f91d.jpg",
      language:'Engilsh'

    },
    {

      title:'Wall E',
      genre:'Family sci-fi',
      releaseDate:2011,
      poster:"https://i.pinimg.com/originals/5b/ba/89/5bba89ee39594f364ca7cdcd06f95adc.jpg",
      language:'Engilsh'

    },
    {

      title:'Cars',
      genre:'Family comdey',
      releaseDate:2006,
      poster:"https://i.pinimg.com/originals/c7/72/8e/c7728e62ebebe611ee9f954c9bf2c700.jpg",
      language:'Engilsh'

    },
    {

      title:'Ratatouille',
      genre:'Family comdey',
      releaseDate:2007,
      poster:"https://i.pinimg.com/564x/87/91/bd/8791bd9195dc87f5b3972d321112d865.jpg",
      language:'Engilsh'

    },
]

filterMovies(searchmovie: string) {
  this.filter = true
  this.filteredMovies = this.movies.filter(movie =>
    movie.title.toLowerCase().includes(searchmovie.toLowerCase())
  );
}

filterbyYear() {
  this.filter = true
  this.filteredMovies = this.movies.filter((movie:any) => {
    if(movie.releaseDate === this.selectedYear.year) return movie
  })
}


sendMovie(movie:Movie){
  this.moviesService.movieDetail.set(movie)
}

clear() {
  this.filter = false
  this.filteredMovies = this.movies
}



}
