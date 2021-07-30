import { Controller } from "stimulus"

export default class extends Controller {
  static values = { url: String, required: Boolean }

  requiredValueChanged() {
    if (this.requiredValue) {
      setTimeout(() => {
        Turbo.visit(this.urlValue, { action: 'replace' })
      }, 1000);
    }
  }
}
