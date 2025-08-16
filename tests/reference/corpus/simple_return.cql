library SimpleReturn version '1.0.0'

using Simple

context Patient

define One:
  from Patient p
  return p.id
  sort by p.id asc
