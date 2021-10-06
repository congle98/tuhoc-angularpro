import {Directive, ElementRef, HostListener, OnInit, Renderer2} from "@angular/core";

@Directive(
  {
    selector:'[appBetterHighLight]'
  }
)
export class BetterHighlinghtDirective implements OnInit{
  constructor(private elRef:ElementRef,private renderer:Renderer2) {
  }
  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','red');
  }

  // @ts-ignore
  @HostListener('mouseenter') mouseover(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','black');
  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
    this.renderer.setStyle(this.elRef.nativeElement,'background-color','green');
  }
}
