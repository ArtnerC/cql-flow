library WithWithoutOnly version '1.0.0'

using Simple

context Patient

define Rels:
  from Patient p
  with Encounter e such that e.patientId = p.id
  without Observation o such that o.subject = p.id
  return p.id
