const raisinAlarm = function(cookie) {
  for (const item of cookie) {
    if (item === "🍇") return 'Raisin alert!';
  }
  return 'All good!';
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

const raisinAlarmArray = function(cookieArray) {
  const results = [];

  for (const array of cookieArray) {
    let hasRaisin = false;
    for (const item of array) {
      if (item === "🍇") {
        hasRaisin = true;
        results.push('Raisin alert!');
        break;
      }
    }
    if (!hasRaisin) results.push('All good!');

  }

  return results;
};

console.log(raisinAlarmArray(
  [
    ["🍫", "🍫", "🍇", "🍫"],
    ["🍫", "🍇", "🍫", "🍫", "🍇"],
    ["🍫", "🍫", "🍫"]
  ]
));