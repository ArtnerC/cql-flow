library LetRetSort version '1.0.0'

using Simple

context Patient

define LRS:
  from Patient p
  let x: 1
  return x
  sort by p.id asc
