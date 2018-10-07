import {Component} from 'vue-property-decorator'
import Vue, {Component as VueComponent, CreateElement, VNode} from "vue";

@Component({
  components: {
    Child: function (resolve) {
      import("./child").then(function (r) {
        resolve(r as VueComponent)
      });
    }
  }
})
export default class App extends Vue {
  clicks = 1;

  push() {
    this.clicks++;
  }

  render(h: CreateElement): VNode {
    return <div>
      <button onClick={this.push}>Click!</button>
      <child message={"clicked:" + this.clicks} bad-prop="compile-error?"/>
    </div>
  }
}
let appElement = document.getElementById("app");
if (!appElement) throw new Error("Error, could not find app element");
// @ts-ignore
window["app"] = new App({el: appElement});
