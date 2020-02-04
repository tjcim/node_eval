var safeEval = require('safe-eval');

exports.user_eval_post = function(req, res) {
  var ref = {
    results: [],
    resultsMap: []
  };
  console.log(req.body);
  if (req.body.eval) {
    console.log(`Running eval(value = ref.${req.body.eval};);`);
    results = eval('value = ref.' + req.body.eval + ';');
  } else if (req.body.safe) {
    console.log(`Running safeEval(${req.body.safe});`);
    var context = {ref:ref}
    var code = req.body.safe
    results = safeEval(code, context);
    console.log(results);
  } else {
    console.log("Not run")
    results = "Nothing run."
  }
  res.status(200);
  res.send(`${results}\n`);
}
