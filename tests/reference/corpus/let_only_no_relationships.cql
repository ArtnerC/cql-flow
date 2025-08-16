library LetOnly version '1.0.0'

using Simple

context Patient

define WithLets:
  from Patient p
  let x: 1, y: 2
  return x + y
