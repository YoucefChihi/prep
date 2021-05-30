const domains = { // Example to show data shape only.
  "one.com": { policy: "block" },
  "two.com": { policy: "none" },
  "three.com": { policy: "none" },
  "four.com": { policy: "block" },
}

const getBlockPolicyState = (domains) => {
  numDomains = Object.keys(domains).length; // O(n)
  for (let i = 0; i < numDomains; i++) { // O(n)
    policyArr.push(Object.entries(domains)[i][1].policy);
  }
  oneDomain = policyArr.some((item) => item === "block"); // O(n)
  allDomains = policyArr.every((item) => item === "block"); // O(n)
  return { oneDomain, allDomains };
};

const getBlockPolicyStateOptimized = (domains) => {
  let oneDomain = false
  let allDomains = true
  Object.entries(domains).forEach(entry => {
    const {policy} = entry[1]
    const isBlockPolicy = policy === 'block'
    oneDomain = oneDomain || isBlockPolicy
    allDomains = allDomains && isBlockPolicy
  })
  return { oneDomain, allDomains };
};


console.log(getBlockPolicyStateOptimized(domains))