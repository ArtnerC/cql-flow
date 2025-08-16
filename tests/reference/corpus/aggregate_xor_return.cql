library AggXorReturn version '1.0.0'

using Simple

context Patient

define AggOnly:
  from Patient p
  aggregate x: 1

// This one has a return, not aggregate

define ReturnOnly:
  from Patient p
  return p.id
