import Vue from "vue";
import Component from 'vue-class-component'

@Component({
  props: {
    message: String
  }
})
export default class Child extends Vue {
  render(h: any) {
    return (
        <div>
          Child component: {this.message}
        </div>
    );
  }
}
