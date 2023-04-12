import { 
  Component, 
  Prop, 
  Watch, 
  State,
  h, 
  Listen
} from '@stencil/core';

@Component({
  tag: 'wc-component',
  styleUrl: 'wc-component.css',
  shadow: true,
})
export class WcComponent {
  @Prop({ reflect: true, mutable: true }) surname: string;
  @Prop({ attribute: 'secondSurname', reflect: true }) secondSurname: string;
  @Prop({ reflect: true }) age: number;

  @State() 
  name: string;

  @Watch('age')
  validateAge(newValue: number) {
    if( newValue > 25 ) {
      throw new Error('El valor no puede ser mayor a 25');
    }
  }

  @Listen('click', {capture: true})
  handleClick() {
    this.name = 'Otro apellido';
  }

  render() {
    return (
      <div>
        <div>
          <span>{this.name}</span>
        </div>
        <div>
          <span>{this.surname}</span>
        </div>
        <div>
          <span>{this.secondSurname}</span>
        </div>
        <div>
          <span>{this.age}</span>
        </div>
      </div>
    );
  }
}
