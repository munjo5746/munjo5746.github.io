function factorial(n) {
  if(n === 0) return 1;
  var result = 1;

  for(var i = n; i >= 0; i--) {
    if(i > 0) {
      result *= i;
    } else {
      result *= 1;
    }
  }
  return result;
}

function binomialCoefficient(n, k) {
  var nFact = factorial(n);
  var kFact = factorial(k);
  var n_kFact = factorial(n - k);
  return (nFact/(kFact * n_kFact));
}

function binomialProb(n, k, p) {
  return binomialCoefficient(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}
