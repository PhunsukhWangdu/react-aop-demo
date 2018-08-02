'use strict';
import aop from './aspect';

export default (wrappedComponent, usages) => {
  return class extends wrappedComponent {
    constructor() {
      super();
      usages.forEach(
        ({jointPoint, advice}) => aop.call(this, jointPoint, advice)
      )
    }
    render() {
      return super.render();
    }
  }
}