import Vue, {CreateElement, VNode} from "vue";
import {Component, Prop} from "vue-property-decorator";

@Component
export default class Child extends Vue {
  @Prop(String) message?: string;
  doDebug(){
    debugger
  }

  render(h: CreateElement): VNode {
    return <div>
      <a onClick={this.doDebug}>
        Child component: {this.message}
      </a>
    </div>;
  }
}
