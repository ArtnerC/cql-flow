library WithWhere version '1.0.0'

using Simple

context Patient

define Filtered:
  from Patient p
  with Encounter e such that e.patientId = p.id
  where p.active
  return p.name
  sort by p.name desc, p.id asc
