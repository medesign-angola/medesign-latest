import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

interface PresentationalInterface{
  label: string,
  description: string,
  active: boolean
}

@Component({
  selector: 'md-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit, AfterViewInit {

  VISION_INDEX: number = 0;
  MISSION_INDEX: number = 1;
  VALUES_INDEX: number = 2;
  @ViewChild('shipsScroller') shipsScroller!: ElementRef<HTMLElement>;
  @ViewChild('visionShip') visionShip!: ElementRef<HTMLElement>;
  @ViewChild('missionShip') missionShip!: ElementRef<HTMLElement>;
  @ViewChild('valuesShip') valuesShip!: ElementRef<HTMLElement>;

  presentations: PresentationalInterface[] = [
    {
      label: 'Nossa Visão',
      description: 'Ser referência de mercado, reconhecida pela ética, inovação e qualidade de prestão de serviços.',
      active: true
    },
    {
      label: 'Nossa Missão',
      description: 'Oferecer soluções práticas e satisfatórias de Web Design, Web Marketing, Design Gráfico e Brand Management.',
      active: false
    },
    {
      label: 'Nossos Valores',
      description: 'Eficiência, Proactividade, Postura Colaborativa, Transparência, Preocupaão com a satisfação do cliente Valorização humana Comprometimento.',
      active: false
    },
  ];

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
   this.visionShip.nativeElement.addEventListener('click', () => {
    this.shipsScroller.nativeElement.scrollTo(0, 0);
   });
   this.valuesShip.nativeElement.addEventListener('click', () => {
    this.shipsScroller.nativeElement.scrollTo(this.valuesShip.nativeElement.offsetLeft, 0);
   });
  }

  changeActiveData(pretendedIndex: number){
    this.presentations[this.activePresentationalIndex()].active = false;
    this.presentations[pretendedIndex].active = true;

  }

  activePresentationalIndex(): number{
    return this.presentations.findIndex(element => element.active == true);
  }

}
