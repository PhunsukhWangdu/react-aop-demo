function joint({before, after}) {
  return function() {
    before.call(this);
    return after.call(this);
  };
}

function replace(advice) {
  return function() {
    return advice.call(this);
  };
}

export default function (jointPoint, advice) {
  const originMethod = this[advice.name];
  const point = jointPoint.toUpperCase();
  const methods = [originMethod, advice];
  this[advice.name] = point === 'ACT' ? replace.call(this, advice) : joint.call(this, {
    before: point === 'BEFORE' ? methods.pop() : methods.shift(),
    after: methods.pop(),
  });
}