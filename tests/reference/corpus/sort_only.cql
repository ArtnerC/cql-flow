library SortOnly version '1.0.0'

using Simple

context Patient

define Sorted:
  from Patient p
  return p.id
  sort by p.name desc, p.id asc
