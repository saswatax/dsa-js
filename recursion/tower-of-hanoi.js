function towerOfHanoi(height, source, target, helper) {
  if (height === 0) {
    return;
  }

  towerOfHanoi(height - 1, source, helper, target);
  console.log("Move disk %d from %s to %s", height, source, target);
  towerOfHanoi(height - 1, helper, target, source);
}

towerOfHanoi(3, "A", "C", "B");
