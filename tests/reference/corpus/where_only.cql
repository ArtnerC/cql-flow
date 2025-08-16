library WhereOnly version '1.0.0'

using Simple

context Patient

define Filter:
  from Patient p
  where p.active
  return p.id
