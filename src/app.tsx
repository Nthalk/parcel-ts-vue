import Vue, {VNode} from "vue";
import Component from 'vue-class-component'
import Child from "./child"

declare global {
  namespace JSX {
    interface Element extends VNode {
    }

    interface ElementClass extends Vue {
    }

    interface ElementAttributesProperty {
      $props: {}
    }

    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
}

@Component({
  components:{
    Child
  }
})
export default class App extends Vue {
  clicks = 1;
  push(){
    this.clicks++;
  }
  render(h: any) {
    return <div>
      <button onClick={this.push}>Push!</button>
      <child message={"clicked:" + this.clicks}></child>
    </div>
  }
}
let appElement = document.getElementById("app");
if (!appElement) throw new Error("Error, could not find app element");
// @ts-ignore
window["app"] = new App({el: appElement});
